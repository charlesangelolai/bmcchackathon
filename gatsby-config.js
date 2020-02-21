module.exports = {
  siteMetadata: {
    title: `BMCCHacks II 2020 - April 4`,
    siteUrl: `https://bmcchacks.surge.sh`,
    description: `BMCCHacks II Spring 2020`,
    author: '@edwincarbajal'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
