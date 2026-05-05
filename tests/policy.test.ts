import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
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
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
