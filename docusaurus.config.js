// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'tetsuzawa.com',
    // tagline: 'Dinosaurs are cool',
    url: 'https://www.tetsuzawa.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'tetsuzawa', // Usually your GitHub org/user name.
    projectName: 'tetsuzawa.com', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ja',
        locales: ['ja'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: {
                    showReadingTime: false,
                    blogTitle: 'tetsuzawa.com',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'G-E7VNQMPTCW',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'tetsuzawa.com',
                // logo: {
                // alt: 'tetsuzawa profile',
                // src: 'img/logo.png',
                // },
                items: [
                    {
                        type: 'doc',
                        docId: '/category/isucon-メモ置き場',
                        position: 'left',
                        label: 'Notes',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/tetsuzawa',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Link',
                        items: [
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/tetsuzawa',
                            },
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/tetsu-takizawa/',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/tetsuzawa',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Tetsu Takizawa`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // The application ID provided by Algolia
                appId: 'ETVDZCC20V',
                // Public API key: it is safe to commit it
                apiKey: '9b9c261064e9629c2c4714ccea61f294',
                indexName: 'tetsuzawa',
                // Optional: see doc section below
                contextualSearch: true,
                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                // externalUrlRegex: 'external\\.com|domain\\.com',
                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                // replaceSearchResultPathname: {
                //     from: '/docs/', // or as RegExp: /\/docs\//
                //     to: '/',
                // },
                // Optional: Algolia search parameters
                searchParameters: {},
                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: 'search',
            },
        }),
    plugins: [
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects: [
                    {
                        from: '/post/08-performance-tuning/',
                        to: '/blog/performance-tuning',
                    }
                ],
                // createRedirects(existingPath) {
                //     // if (existingPath.includes('/blog')) {
                //     // redirct from '/' to '/blog'
                //     if (existingPath === '/blog') {
                //         return "/";
                //     }
                // }
            }
        ],
        [
            '@docusaurus/plugin-ideal-image',
            {
                // quality: 70,
                disableInDev: false,
            }
        ],
    ],
};

module.exports = config;
