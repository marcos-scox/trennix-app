import * as FileSystem from "expo-file-system/legacy";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
const FILE_URI = `${FileSystem.documentDirectory ?? ""}trennix-data.json`;
const WEB_KEY = "trennix.data.file.v1";
export type LocalData = { profile?: unknown; preferences?: unknown; schedule?: unknown; sessions?: unknown[] };
export async function readLocalData(): Promise<LocalData> { try { if (Platform.OS === "web" || !FileSystem.documentDirectory) return JSON.parse((await AsyncStorage.getItem(WEB_KEY)) ?? "{}"); const info=await FileSystem.getInfoAsync(FILE_URI); if (!info.exists) return {}; return JSON.parse(await FileSystem.readAsStringAsync(FILE_URI)); } catch { return {}; } }
let writeQueue=Promise.resolve();
export function writeLocalData(data: LocalData): Promise<void> { writeQueue=writeQueue.then(async()=>{if(Platform.OS==="web"||!FileSystem.documentDirectory){await AsyncStorage.setItem(WEB_KEY,JSON.stringify(data));return}await FileSystem.writeAsStringAsync(FILE_URI,JSON.stringify(data),{encoding:FileSystem.EncodingType.UTF8});});return writeQueue; }
export async function clearLocalData(){writeQueue=writeQueue.then(async()=>{if(Platform.OS==="web"||!FileSystem.documentDirectory){await AsyncStorage.removeItem(WEB_KEY);return}const info=await FileSystem.getInfoAsync(FILE_URI);if(info.exists)await FileSystem.deleteAsync(FILE_URI,{idempotent:true});});return writeQueue;}
