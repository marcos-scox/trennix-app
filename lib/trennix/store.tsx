import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import type { Exercise } from "./data";

export type Profile = { name: string; age: string; height: string; weight: string; photo: string | null };
export type Preferences = { units: "kg / cm" | "lb / in"; reminders: boolean; language: "Português" | "English" };
export type ScheduledWorkout = { day: number; title: string; exerciseIds: string[] };
const PROFILE_KEY = "trennix.profile.v1"; const PREFS_KEY = "trennix.preferences.v1"; const SCHEDULE_KEY = "trennix.schedule.v1"; const AI_KEY = "trennix.ai-key.v1";
const defaultProfile: Profile = { name: "", age: "", height: "", weight: "", photo: null };
const defaultPreferences: Preferences = { units: "kg / cm", reminders: false, language: "Português" };
const defaultSchedule: ScheduledWorkout[] = [];
async function readJson<T>(key: string, fallback: T): Promise<T> { try { const raw = await AsyncStorage.getItem(key); return raw ? JSON.parse(raw) as T : fallback; } catch { return fallback; } }
async function writeJson(key: string, value: unknown) { await AsyncStorage.setItem(key, JSON.stringify(value)); }
async function readAi() { try { if (Platform.OS === "web") return window.sessionStorage.getItem(AI_KEY); return await SecureStore.getItemAsync(AI_KEY); } catch { return null; } }
async function writeAi(value: string) { if (Platform.OS === "web") window.sessionStorage.setItem(AI_KEY, value); else await SecureStore.setItemAsync(AI_KEY, value); }
export function useTrennixStore() { const value = useContext(StoreContext); if (!value) throw new Error("TrennixStore ausente"); return value; }
const StoreContext = createContext<ReturnType<typeof createStore> | null>(null);
function createStore() { const [profile,setProfile]=useState(defaultProfile); const [preferences,setPreferences]=useState(defaultPreferences); const [schedule,setSchedule]=useState(defaultSchedule); const [aiKeySaved,setAiKeySaved]=useState(false); const [hydrated,setHydrated]=useState(false); useEffect(()=>{Promise.all([readJson(PROFILE_KEY,defaultProfile),readJson(PREFS_KEY,defaultPreferences),readJson(SCHEDULE_KEY,defaultSchedule),readAi()]).then(([p,pr,s,key])=>{setProfile(p as Profile);setPreferences(pr as Preferences);setSchedule(s as ScheduledWorkout[]);setAiKeySaved(Boolean(key));setHydrated(true);});},[]); const updateProfile=async(next:Partial<Profile>)=>{const value={...profile,...next};setProfile(value);await writeJson(PROFILE_KEY,value)}; const updatePreferences=async(next:Partial<Preferences>)=>{const value={...preferences,...next};setPreferences(value);await writeJson(PREFS_KEY,value)}; const addToSchedule=async(day:number, title:string, exerciseIds:string[])=>{const existing=schedule.find(x=>x.day===day);const value=[...schedule.filter(x=>x.day!==day),{day,title:existing?.title??title,exerciseIds:Array.from(new Set([...(existing?.exerciseIds??[]),...exerciseIds]))}].sort((a,b)=>a.day-b.day);setSchedule(value);await writeJson(SCHEDULE_KEY,value)}; const removeSchedule=async(day:number)=>{const value=schedule.filter(x=>x.day!==day);setSchedule(value);await writeJson(SCHEDULE_KEY,value)}; const saveAiKey=async(value:string)=>{if(value.trim()) {await writeAi(value.trim());setAiKeySaved(true)} else {if(Platform.OS === "web") window.sessionStorage.removeItem(AI_KEY); else await SecureStore.deleteItemAsync(AI_KEY);setAiKeySaved(false)}}; return useMemo(()=>({profile,preferences,schedule,aiKeySaved,hydrated,updateProfile,updatePreferences,addToSchedule,removeSchedule,saveAiKey}),[profile,preferences,schedule,aiKeySaved,hydrated]); }
export function TrennixProvider({ children }: PropsWithChildren) { const store=createStore(); return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>; }
export function dayLabel(day:number) { return ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][day]; }
export function exercisesForSchedule(schedule: ScheduledWorkout[], exerciseCatalog: Exercise[]) { return schedule.map(item=>({...item, exercises:item.exerciseIds.map(id=>exerciseCatalog.find(x=>x.id===id)?.name).filter(Boolean)})); }
