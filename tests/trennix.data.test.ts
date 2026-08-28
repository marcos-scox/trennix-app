import { describe, expect, it } from "vitest";
import { exercises, getExercise, todayWorkout, weeklyPlan } from "../lib/trennix/data";

describe("TRENNIX training data", () => {
  it("returns an exercise by id and preserves its training prescription", () => {
    const exercise = getExercise("bench");
    expect(exercise.name).toBe("Supino reto");
    expect(exercise.sets).toBe(4);
    expect(exercise.reps).toBe("8–10");
  });

  it("keeps the weekly plan ordered and marks today's workout", () => {
    expect(weeklyPlan).toHaveLength(5);
    expect(weeklyPlan[0].title).toBe(todayWorkout.title);
    expect(weeklyPlan[0].done).toBe(true);
  });

  it("has a searchable exercise catalog with muscle groups", () => {
    expect(exercises.length).toBeGreaterThan(5);
    expect(new Set(exercises.map((item) => item.muscle)).size).toBeGreaterThan(3);
  });
});
