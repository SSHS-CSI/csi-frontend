module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: [],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018
    },
    plugins: ["json", "react"],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["error", "all", {
            conditionalAssign: true,
            returnAssign: true,
            nestedBinaryExpressions: true,
            ignoreJSX: "multi-line"
        }],
        "no-extra-semi": "error",
        "no-regex-spaces": "error",
        "no-unsafe-negation": "error",
        curly: "error",
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "no-div-regex": "error",
        "no-else-return": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-multi-spaces": "error",
        "no-unused-labels": "error",
        "no-useless-return": "error",
        "wrap-iife": ["error", "inside"],
        yoda: ["error", "never"],
        "array-bracket-newline": ["error", "never"],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "never"],
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", {
            allowSingleLine: true
        }],
        "capitalized-comments": ["error", "never"],
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "function-call-argument-newline": ["error", "never"],
        "function-paren-newline": ["error", "never"],
        "implicit-arrow-linebreak": "error",
        indent: "error",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": ["error", {
            before: true,
            after: true,
            overrides: {
                if: { after: false },
                for: { after: false },
                while: { after: false },
                catch: { after: false },
                switch: { after: false },
                with: { after: false }
            }
        }],
        "linebreak-style": "error",
        "lines-around-comment": ["error", {
            beforeBlockComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true
        }],
        "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
        "multiline-comment-style": ["error", "bare-block"],
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-lonely-if": "error",
        "no-multiple-empty-lines": ["error", {
            max: 1,
            maxEOF: 1,
            maxBOF: 0
        }],
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": ["error", { defaultAssignment: false }],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": ["error", { minProperties: 2 }],
        "object-curly-spacing": ["error", "always"],
        "object-property-newline": "error",
        "one-var": ["error", "never"],
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": ["error", "never"],
        "prefer-object-spread": "error",
        "quote-props": ["error", "as-needed"],
        quotes: ["error", "double", {
            avoidEscape: false
        }],
        semi: "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {
            anonymous: "always",
            named: "never",
            asyncArrow: "always"
        }],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": ["error", "always", { block: { balanced: true } }],
        "switch-colon-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "arrow-body-style": "error",
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "generator-star-spacing": "error",
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-numeric-literals": "error",
        "prefer-template": "error",
        "rest-spread-spacing": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": ["error", "before"],
    }
};
