export type MuscleGroup = "Peito" | "Costas" | "Pernas" | "Ombros" | "Braços";

export type Exercise = {
  id: string;
  name: string;
  muscle: MuscleGroup;
  equipment: string;
  sets: number;
  reps: string;
  level: "Base" | "Intermediário" | "Avançado";
  cue: string;
};

export type Workout = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  exerciseCount: number;
  accent: string;
  exercises: string[];
};

export const exercises: Exercise[] = [
  { id: "bench", name: "Supino reto", muscle: "Peito", equipment: "Barra", sets: 4, reps: "8–10", level: "Base", cue: "Mantenha os ombros apoiados e desça a barra com controle." },
  { id: "incline", name: "Supino inclinado", muscle: "Peito", equipment: "Halteres", sets: 3, reps: "10–12", level: "Base", cue: "Empurre os halteres em linha com o peito alto." },
  { id: "row", name: "Remada curvada", muscle: "Costas", equipment: "Barra", sets: 4, reps: "8–10", level: "Intermediário", cue: "Trave o abdômen e puxe os cotovelos para trás." },
  { id: "lat-pulldown", name: "Puxada na frente", muscle: "Costas", equipment: "Cabo", sets: 3, reps: "10–12", level: "Base", cue: "Inicie o movimento aproximando as escápulas." },
  { id: "squat", name: "Agachamento livre", muscle: "Pernas", equipment: "Barra", sets: 4, reps: "6–8", level: "Intermediário", cue: "Desça mantendo o joelho acompanhando a ponta do pé." },
  { id: "legpress", name: "Leg press 45°", muscle: "Pernas", equipment: "Máquina", sets: 3, reps: "10–12", level: "Base", cue: "Não trave os joelhos no topo da repetição." },
  { id: "lateral", name: "Elevação lateral", muscle: "Ombros", equipment: "Halteres", sets: 3, reps: "12–15", level: "Base", cue: "Suba até a linha dos ombros sem embalar o corpo." },
  { id: "curl", name: "Rosca direta", muscle: "Braços", equipment: "Barra", sets: 3, reps: "10–12", level: "Base", cue: "Mantenha os cotovelos próximos ao tronco." },
];

export const todayWorkout: Workout = {
  id: "push-a",
  title: "Peito e Tríceps",
  subtitle: "Força · Bloco A",
  duration: "55 min",
  exerciseCount: 6,
  accent: "#A8F238",
  exercises: ["bench", "incline", "lateral", "curl"],
};

export const weeklyPlan = [
  { day: "SEG", date: "26", title: "Peito e Tríceps", done: true },
  { day: "TER", date: "27", title: "Descanso ativo", done: false },
  { day: "QUA", date: "28", title: "Costas e Bíceps", done: false },
  { day: "QUI", date: "29", title: "Pernas", done: false },
  { day: "SEX", date: "30", title: "Ombros e Core", done: false },
];

export const history = [
  { id: "h1", title: "Peito e Tríceps", date: "Hoje · 55 min", volume: "4.280 kg", exercises: "6 exercícios" },
  { id: "h2", title: "Costas e Bíceps", date: "24 mai · 48 min", volume: "3.760 kg", exercises: "7 exercícios" },
  { id: "h3", title: "Pernas", date: "22 mai · 61 min", volume: "6.120 kg", exercises: "6 exercícios" },
];

export function getExercise(id: string) {
  return exercises.find((item) => item.id === id) ?? exercises[0];
}
