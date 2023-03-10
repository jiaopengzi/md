/* eslint-disable prettier/prettier */

import "../less/highlight.js.jpz.css"

export default {
    builtinFonts: [{
            label: `无衬线`,
            value: `-apple-system-font,BlinkMacSystemFont, Helvetica Neue, PingFang SC, Hiragino Sans GB , Microsoft YaHei UI , Microsoft YaHei ,Arial,sans-serif`,
            desc: `Abc`,
        },
        {
            label: `衬线`,
            value: `Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`,
            desc: `Abc`,
        },
    ],
    sizeOption: [{
            label: `12px`,
            value: `12px`,
            desc: `更小`,
        },
        {
            label: `13px`,
            value: `13px`,
            desc: `稍小`,
        },
        {
            label: `14px`,
            value: `14px`,
            desc: `推荐`,
        },
        {
            label: `15px`,
            value: `15px`,
            desc: `稍大`,
        },
        {
            label: `16px`,
            value: `16px`,
            desc: `更大`,
        },
    ],
    colorOption: [{
            label: `焦棚子`,
            value: `rgba(30, 47, 86, 1)`,
            desc: `焦棚子`,
        },
        {
            label: `经典蓝`,
            value: `rgba(15, 76, 129, 1)`,
            desc: `最新流行`,
        },
        {
            label: `翡翠绿`,
            value: `rgba(0, 152, 116, 1)`,
            desc: `优雅清新`,
        },
        {
            label: `活力橘`,
            value: `rgba(250, 81, 81, 1)`,
            desc: `热情活泼`,
        },
    ],
    codeThemeOption: [{
            label: `焦棚子`,
            value: `./highlight.js.jpz.css`,
            desc: `dark`,
        },
        {
            label: `github`,
            value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/github.min.css`,
            desc: `light`,
        },
        {
            label: `solarized-light`,
            value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/solarized-light.min.css`,
            desc: `light`,
        },
        {
            label: `atom-one-dark`,
            value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/atom-one-dark.min.css`,
            desc: `dark`,
        },
        {
            label: `obsidian`,
            value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/obsidian.min.css`,
            desc: `dark`,
        },
        {
            label: `vs2015`,
            value: `https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlight.js@11.5.1/styles/vs2015.min.css`,
            desc: `dark`,
        },
    ],
    form: {
        rows: 1,
        cols: 1,
    },
}