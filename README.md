# ember-net-flow-hub

`ember-net-flow-hub` is a TypeScript project in networking. Its focus is to design a TypeScript verification harness for flow systems, covering storage recovery, log and snapshot fixtures, and failure-oriented tests.

## Project Rationale

The point is to make a small domain rule concrete enough that a reader can change it and immediately see what broke.

## Ember Net Flow Hub Review Notes

`stale` and `stress` are the cases worth reading first. They show the optimistic and cautious ends of the fixture.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/ember-net-flow-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `packet span` and `retry pressure`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The added TypeScript path is deliberately direct, with fixtures doing most of the explaining.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The check exercises the source code and the review fixture. `stale` is the high score at 276; `stress` is the low score at 143.

## Next Improvements

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
