# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 159, lane `ship`
- `stress`: `retry pressure`, score 143, lane `ship`
- `edge`: `route drift`, score 245, lane `ship`
- `recovery`: `socket risk`, score 152, lane `ship`
- `stale`: `packet span`, score 276, lane `ship`

## Note

The useful failure mode here is a wrong decision on a named case, not a vague style disagreement.
