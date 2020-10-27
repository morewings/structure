module.exports = {
  siteMetadata: {
    title: `Structure`,
    description: `**Structure** is a tool to view and edit tree-like graph data object`,
    author: `@morewings`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({stage: 0})],
      },
    },
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans:300,400,700'],
        },
        custom: {
          families: ['structure_icons'],
          urls: ['/structure_icons.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.icon\.svg$/, // include Something.icon.svg files
          options: {
            props: {
              className: 'icon',
            },
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
