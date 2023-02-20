/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
let baseColor = `#1E2f56`

export default {
    BASE: {
        "text-align": `left`,
        "line-height": `1.75`,
    },
    block: {
        // 一级标题样式
        h1: {
            "font-size": `18px`,
            "text-align": `center`,
            "font-weight": `bold`,
            display: `table`,
            margin: `2em auto 1em`,
            padding: `0 1em`,
            "border-bottom": `2px solid rgba(0, 152, 116, 0.9)`,
            color: baseColor,
        },

        // 二级标题样式
        h2: {
            "font-size": `16px`,
            "text-align": `center`,
            "font-weight": `bold`,
            display: `table`,
            margin: `4em auto 2em`,
            padding: `0 0.2em`,
            background: baseColor,
            color: `#fff`,
        },

        // 三级标题样式
        h3: {
            "font-weight": `bold`,
            "font-size": `15px`,
            margin: `2em 8px 0.75em 0`,
            "line-height": `1.2`,
            "padding-left": `8px`,
            "border-left": `3px solid #1E2f56`,
            color: baseColor,
        },

        // 四级标题样式
        h4: {
            "font-weight": `bold`,
            "font-size": `14px`,
            margin: `2em 8px 0.5em`,
            color: `rgba(66, 185, 131, 0.9)`,
        },

        // 段落样式
        p: {
            margin: `1.5em 8px`,
            "font-size": `14px`,
            "line-height": `1.618`,
            "letter-spacing": `1px`,
            color: baseColor,
        },

        // 引用样式
        blockquote: {
            "font-style": `normal`,
            "border-left": `4px solid #C19220`,
            padding: `1em`,
            "border-radius": `8px`,
            color: `rgba(0,0,0,0.5)`,
            background: `#f7f7f7`,
            margin: `2em 8px`,
        },

        blockquote_p: {
            "letter-spacing": `0.1em`,
            color: baseColor,
            "font-size": `14px`,
            "line-height": `1.5`,
            "letter-spacing": `1px`,
            display: `block`,
        },
        code_pre: {
            "font-size": `14px`,
            "overflow-x": `auto`,
            "border-radius": `8px`,
            padding: `1em`,
            "line-height": `1.5`,
            margin: `10px 8px`,
        },
        code: {
            margin: 0,
            "white-space": `nowrap`,
            "font-family": `Menlo, Operator Mono, Consolas, Monaco, monospace`,
        },

        image: {
            "border-radius": `4px`,
            display: `block`,
            margin: `0.1em auto 0.5em`,
            width: `100% !important`,
        },

        ol: {
            "margin-left": `0`,
            "padding-left": `1em`,
            color: baseColor,
        },

        ul: {
            "margin-left": `0`,
            "padding-left": `1em`,
            "list-style": `circle`,
            color: baseColor,
        },

        footnotes: {
            margin: `0.5em 8px`,
            "font-size": `80%`,
            color: baseColor,
        },

        figure: {
            margin: `1.5em 8px`,
            color: baseColor,
        },
        hr: {
            "border-style": `solid`,
            "border-width": `1px 0 0`,
            "border-color": `rgba(0,0,0,0.1)`,
            "-webkit-transform-origin": `0 0`,
            "-webkit-transform": `scale(1, 0.5)`,
            "transform-origin": `0 0`,
            transform: `scale(1, 0.5)`,
        },
    },
    inline: {
        listitem: {
            "text-indent": `-1em`,
            display: `block`,
            margin: `0.2em 8px`,
            color: baseColor,
        },

        codespan: {
            "font-size": `90%`,
            color: `#888`,
            background: `rgba(27,31,35,.05)`,
            padding: `3px 5px`,
            "border-radius": `4px`,
            "word-break": `break-all`,
        },

        link: {
            color: `#569cd6`,
            "text-decoration": `none`,
            "font-size": `14px`,
            "font-style": `italic`,
        },

        wx_link: {
            color: `#569cd6`,
            "text-decoration": `none`,
            "font-size": `14px`,
            "font-style": `italic`,
        },

        // 字体加粗样式
        strong: {
            color: `#888`,
            "font-weight": `bold`,
        },

        table: {
            "border-collapse": `collapse`,
            "text-align": `center`,
            margin: `1em 8px`,
            color: baseColor,
        },

        thead: {
            background: `rgba(0, 0, 0, 0.05)`,
            "font-weight": `bold`,
            color: baseColor,
        },

        td: {
            border: `1px solid #dfdfdf`,
            padding: `0.25em 0.5em`,
            color: baseColor,
        },

        footnote: {
            "font-size": `12px`,
            color: baseColor,
        },

        figcaption: {
            "text-align": `center`,
            color: `#888`,
            "font-size": `0.8em`,
        },
    },
};