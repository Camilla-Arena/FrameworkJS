/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `FrameworkJs`,
    description: `Sito realizzato per fconoscere i framework di Javascript`,
    author: `Camilla Arena - manovale di codice`,
    contact: `camilla.arena@hotmail.it`
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        name:`cardsFramework`,
        path: `${__dirname}/src/cardFramework`,
      }
    },
    
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/js_icon_16.png`, // This path is relative to the root of the site.
      },
    },
  ],
 
}
