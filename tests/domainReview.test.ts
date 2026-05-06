import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 58, slack: 23, drag: 15, confidence: 65 };
assert.equal(domainReviewScore(item), 159);
assert.equal(domainReviewLane(item), "ship");
