require('dotenv').config({
   path: `.env.development` ,
  })

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "lcoproject",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        apiKey: process.env.GATSBY_SNIPCART_API_KEY,
        autopop: true
      },
    },
  ],
};
