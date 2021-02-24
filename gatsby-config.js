module.exports = {
  siteMetadata: {
    title: `Comic Box Rumble`,
    description: `Every week Kofi, Jack & Thom report on comic books, pop culture and ALLLLLLL the goodness in between! Whoever gives the best report puts a prize in the box which we giveaway for FREE....cause we're dope like that.

    NEW EPISODES EVERY MONDAY OR SUE US!!!!`,
    author: `Comic Box Rumble`,
    siteUrl: `https://cocky-franklin-98ceee.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feeds.soundcloud.com/users/soundcloud:users:378794924/sounds.rss`,
        name: `ComicBoxRumble`,
        parserOption: {
          customFields: {
            images: ["itunes:image"],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: `FeedComicBoxRumble`,
        imagePath: `itunes.image`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: `blog-images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "creators",
        path: `${__dirname}/content/creators`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "blog-images",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [{ userAgent: "*", disallow: ["/admin/"] }],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Comic Box Rumble`,
        short_name: `CBR`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `src/images/comic-box.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
