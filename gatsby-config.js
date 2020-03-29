module.exports = {
  siteMetadata: {
    title: `Comic Box Rumble`,
    description: `Every week Kofi, Jack & Thom report on comic books, pop culture and ALLLLLLL the goodness in between! Whoever gives the best report puts a prize in the box which we giveaway for FREE....cause we're dope like that.

    NEW EPISODES EVERY MONDAY OR SUE US!!!!`,
    author: `Comic Box Rumble`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feeds.soundcloud.com/users/soundcloud:users:378794924/sounds.rss`,
        name: `ComicBoxRumble`,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
