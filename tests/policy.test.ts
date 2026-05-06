function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
  {
    "name": "case_1",
    "demand": 58,
    "capacity": 98,
    "latency": 19,
    "risk": 11,
    "weight": 13,
    "score": 169,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 67,
    "capacity": 80,
    "latency": 19,
    "risk": 12,
    "weight": 8,
    "score": 133,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 75,
    "capacity": 78,
    "latency": 20,
    "risk": 23,
    "weight": 11,
    "score": 96,
    "decision": "review"
  }
];

for (const item of cases) {
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
