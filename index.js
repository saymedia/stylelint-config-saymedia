"use strict";

module.exports = {
    extends: ["stylelint-config-standard"],
    plugins: [
      "stylelint-declaration-block-no-ignored-properties",
      "stylelint-order",
      "stylelint-scss",
    ],
    rules: {
        "at-rule-empty-line-before": null,
        "at-rule-no-unknown": null,
        "at-rule-no-vendor-prefix": true,
        "block-closing-brace-newline-after": [ "always", {
            ignoreAtRules: [ "if", "else" ]
        } ],
        "color-hex-length": "long",
        "custom-property-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
        "declaration-empty-line-before": "never",
        "font-family-name-quotes": "always-where-recommended",
        "function-url-quotes": "always",
        "indentation": 4,
        "max-line-length": [ 100, {
            ignore: ["comments"],
        } ],
        "media-feature-name-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "rule-empty-line-before": [ "always-multi-line", {
            ignore: ["after-comment"],
        } ],
        "selector-attribute-quotes": "always",
        "selector-class-pattern": "^([a-z][a-z0-9]*)(-{1,2}[a-z0-9]+)*$",
        "selector-max-id": 0,
        "selector-no-qualifying-type": [ true, {
            ignore: ["attribute"],
        } ],
        "selector-no-vendor-prefix": true,
        "string-quotes": "double",
        "time-min-milliseconds": 100,
        "value-keyword-case": "lower",
        "value-no-vendor-prefix": true,
        "order/properties-alphabetical-order": true,
        "plugin/declaration-block-no-ignored-properties": true,
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-function-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-mixin-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "always-single-line",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-empty-line-before": [ "always", {
            except: ["after-dollar-variable", "first-nested"],
            ignore: ["after-comment"],
        } ],
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/dollar-variable-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
        "scss/double-slash-comment-empty-line-before": [ "always", {
            except: ["first-nested"],
            ignore: ["between-comments", "stylelint-commands"],
        } ],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/declaration-nested-properties": "never",
        "scss/percent-placeholder-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
        "scss/selector-no-redundant-nesting-selector": true,
    }
};
