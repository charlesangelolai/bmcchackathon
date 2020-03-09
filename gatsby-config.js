module.exports = {
  pathPrefix: "/bmcchackathon",
  siteMetadata: {
    title: `BMCC Hackathon Spring 2020`,
    siteUrl: `https://edwincarbajal.github.io/bmcchackathon/`,
    description: `BMCC Hackathon Spring 2020`,
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
