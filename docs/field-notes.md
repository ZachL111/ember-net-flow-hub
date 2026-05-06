# Field Notes

The useful part of this repository is the small rule set around packet span and route drift.

The domain cases cover `packet span`, `retry pressure`, `route drift`, and `socket risk`. They sit beside the smaller starter fixture so the project has both a compact scoring check and a domain-flavored review check.

The widest spread is between `packet span` and `retry pressure`, so those are the first two cases I would preserve during a refactor.

The point is not to make the repository bigger. The point is to make the important judgment testable.
