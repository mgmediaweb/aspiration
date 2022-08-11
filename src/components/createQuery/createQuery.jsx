import { gql } from '@apollo/client';

const createQuery = (elements, search) => gql`
  query {
    search(
      first: ${elements}, 
      type: REPOSITORY, 
      query: "${search}"
    ) {
      nodes {
        ... on Repository { nameWithOwner, stargazerCount, url }
      }
    }
  }`;

export default createQuery;
