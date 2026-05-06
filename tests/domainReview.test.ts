function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 58, slack: 23, drag: 15, confidence: 65 };
equal(domainReviewScore(item), 159);
equal(domainReviewLane(item), "ship");
