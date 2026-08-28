export type MuscleGroup = "Peito" | "Pernas" | "Costas" | "Braços";
export type Exercise = { id: string; name: string; muscle: MuscleGroup; equipment: string; sets: number; reps: string; level: "Base" | "Intermediário" | "Avançado"; cue: string };
export type Workout = { id: string; title: string; subtitle: string; duration: string; exerciseCount: number; accent: string; exercises: string[] };
export const exercises: Exercise[] = [
  { id: "bench", name: "Supino reto", muscle: "Peito", equipment: "Barra", sets: 4, reps: "8–10", level: "Base", cue: "Mantenha os ombros apoiados e desça a barra com controle." },
  { id: "incline", name: "Supino inclinado", muscle: "Peito", equipment: "Halteres", sets: 3, reps: "10–12", level: "Base", cue: "Empurre os halteres em linha com o peito alto." },
  { id: "squat", name: "Agachamento livre", muscle: "Pernas", equipment: "Barra", sets: 4, reps: "6–8", level: "Intermediário", cue: "Desça mantendo o joelho acompanhando a ponta do pé." },
  { id: "legpress", name: "Leg press 45°", muscle: "Pernas", equipment: "Máquina", sets: 3, reps: "10–12", level: "Base", cue: "Não trave os joelhos no topo da repetição." },
  { id: "row", name: "Remada curvada", muscle: "Costas", equipment: "Barra", sets: 4, reps: "8–10", level: "Intermediário", cue: "Trave o abdômen e puxe os cotovelos para trás." },
  { id: "lat-pulldown", name: "Puxada na frente", muscle: "Costas", equipment: "Cabo", sets: 3, reps: "10–12", level: "Base", cue: "Inicie o movimento aproximando as escápulas." },
  { id: "curl", name: "Rosca direta", muscle: "Braços", equipment: "Barra", sets: 3, reps: "10–12", level: "Base", cue: "Mantenha os cotovelos próximos ao tronco." },
  { id: "triceps", name: "Tríceps na polia", muscle: "Braços", equipment: "Cabo", sets: 3, reps: "10–12", level: "Base", cue: "Finalize a extensão sem afastar os cotovelos." },
];
export function getExercise(id: string) { return exercises.find((item) => item.id === id) ?? exercises[0]; }

export const todayWorkout: Workout = { id: "empty", title: "Nenhum treino criado", subtitle: "Monte pela Biblioteca", duration: "—", exerciseCount: 0, accent: "#A8F238", exercises: [] };
export const weeklyPlan: { day: string; date: string; title: string; done: boolean }[] = [];
