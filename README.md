# ember-net-flow-hub

`ember-net-flow-hub` is a TypeScript project for Networking. It turns design a TypeScript verification harness for flow systems, covering storage recovery, log and snapshot fixtures, and failure-oriented tests into a small local model with readable fixtures and a direct verification command.

## Reading Ember Net Flow Hub

Start with the README, then open `metadata/project.json` to check the constants behind the examples. After that, `fixtures/cases.csv` shows the compact path and `examples/extended_cases.csv` gives a wider look at the same rule.

## What It Does

- Includes extended examples for retry behavior, including `surge` and `degraded`.
- Documents policy decisions tradeoffs in `docs/operations.md`.
- Runs locally with a single verification command and no external credentials.
- Stores project constants and verification metadata in `metadata/project.json`.
- Adds a repository audit script that checks structure before running the language verifier.

## Purpose

This project keeps the domain idea close to the tests. That makes it useful as a reference implementation, a small experiment, or a starting point for a more specialized tool.

## Files Worth Reading

- `src`: primary implementation
- `tests`: verification harness
- `fixtures`: compact golden scenarios
- `examples`: expanded scenario set
- `metadata`: project constants and verification metadata
- `docs`: operations and extension notes
- `scripts`: local verification and audit commands
- `package.json`: Node package scripts

## Design Sketch

The core is a scoring model over demand, capacity, latency, risk, and weight. That keeps packet shape, socket state, and retry behavior in one explicit decision path. The threshold is 172, with risk penalty 6, latency penalty 3, and weight bonus 6. The TypeScript project keeps types close to the model and compiles before running its checks.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

This runs the language-level build or test path against the compact fixture set.

## Fixture Notes

The examples are meant to be readable before they are exhaustive. They cover enough variation to show how latency and risk can pull a decision below the threshold.

## Verification

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/audit.ps1
```

The audit command checks repository structure and README constraints before it delegates to the verifier.

## Limits

The repository favors determinism over breadth. It does not pull live data, keep secrets, or depend on network access for verification.

## Next Directions

- Add a loader for `examples/extended_cases.csv` and promote selected cases into the language test suite.
- Add a short report command that prints the score breakdown for a single scenario.
- Add malformed input fixtures so the failure path is as visible as the happy path.
- Add one more networking fixture that focuses on a malformed or borderline input.

## Setup

Clone the repository, enter the directory, and run the verifier. No database server, cloud account, or token is required.
