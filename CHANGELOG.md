# 2.4.0 - 2018-04-25
* Change: all package.json rules to use `~` instead of `^` to avoid accidental minor version upgrades and problems.
* Changed: updated to [`stylelint@9.2.0`](https://github.com/stylelint/stylelint/releases/tag/9.2.0).
* Changed: updated to [`stylelint-config-standard@18.2.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.2.0).
* Changed: updated to [`stylelint-scss@3.0.1`](https://github.com/kristerkari/stylelint-scss/releases/tag/3.0.1).

# 2.3.0 - 2018-02-23
* Changed: updated to [`stylelint@9.1.1`](https://github.com/stylelint/stylelint/releases/tag/9.1.1).
* Changed: updated to [`stylelint-config-standard@18.1.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.1.0).
* Changed: updated to [`stylelint-declaration-block-no-ignored-properties@1.1.0`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties/releases/tag/1.1.0).
* Changed: updated to [`stylelint-order@0.8.1`](https://github.com/hudochenkov/stylelint-order/releases/tag/0.8.1).
* Changed: updated to [`stylelint-scss@2.4.0`](https://github.com/kristerkari/stylelint-scss/releases/tag/2.4.0).

# 2.2.0 - 2017-11-29
* Removed: `except: ["first-nested"]` option from `scss/double-slash-comment-empty-line-before` rule, because it's not what we actually wanted.

# 2.1.0 - 2017-11-28
* Removed: `no-descending-specificity` rule, due to false positives, pending [#2489](https://github.com/stylelint/stylelint/issues/2489)

# 2.0.0 - 2017-11-28
* Changed: updated to [`stylelint-config-standard@18.0.0`](https://github.com/stylelint/stylelint-config-standard/releases/tag/18.0.0).
* Removed: `no-unknown-animations` rule, per discussion in [this PR](https://github.com/stylelint/stylelint-config-recommended/pull/9).

# 1.1.0 - 2017-11-17
* Changed `at-mixin-argumentless-call-parentheses` to "always"

# 1.0.0 - 2017-10-20
* Initial release
