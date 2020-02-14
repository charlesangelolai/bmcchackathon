module.exports = {
  siteMetadata: {
    title: `PantherHacks`,
    siteUrl: `https://github.com/edwincarbajal/pantherhacks`,
    description: `PantherHacks II Spring 2020`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
