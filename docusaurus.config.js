// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    future: {
        experimental_faster: true,
    },
    title: 'Invero',
    url: 'https://invero.8aka.org',
    baseUrl: '/',
    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'ignore',
    favicon: 'img/invero_logo.png',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: '8aka-Team', // Usually your GitHub org/user name.
    projectName: 'Invero-Docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                blog: {
                    showReadingTime: true
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Invero',
                logo: {
                    alt: 'Invero Logo',
                    src: 'img/invero_logo.png',
                },
                items: [
                    {
                        label: '文档',
                        type: 'doc',
                        docId: 'about',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/8aka-Team/Invero',
                        position: 'right',
                        className: 'header-github-link',
                    },
//            {
//              type: 'localeDropdown', position: 'right',
//            },
                ],
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: true,
            },
            footer: {
                style: 'light',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} <b>TRIXEY</b>, All Rights Reserved.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                language: ["en", "zh"],
            }),
        ],
    ],
    plugins: [
        'docusaurus-plugin-image-zoom'
    ]
};

module.exports = config;