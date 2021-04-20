import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices TR`,
    description: `Best pizza Mamen`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'jaop32ft',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      }
    }
  ]
};
