import { describe, expect, it } from "vitest";
import { exercises, getExercise, todayWorkout, weeklyPlan } from "../lib/trennix/data";

describe("TRENNIX training data", () => {
  it("returns an exercise by id and preserves its training prescription", () => {
    const exercise = getExercise("bench");
    expect(exercise.name).toBe("Supino reto");
    expect(exercise.sets).toBe(4);
    expect(exercise.reps).toBe("8–10");
  });

  it("starts with an empty weekly plan and no default workout", () => {
    expect(weeklyPlan).toHaveLength(0);
    expect(todayWorkout.title).toBe("Nenhum treino criado");
    expect(todayWorkout.exercises).toHaveLength(0);
  });

  it("has a searchable exercise catalog with muscle groups", () => {
    expect(exercises.length).toBeGreaterThan(5);
    expect(new Set(exercises.map((item) => item.muscle)).size).toBeGreaterThan(3);
  });
});
