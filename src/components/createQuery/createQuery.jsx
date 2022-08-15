import { gql } from '@apollo/client';

const createQuery = (elements, search) => gql`{
  search(
    query: "topic:${search} sort:updated-desc",
    type: REPOSITORY,
    first: ${elements}
  ){
    nodes {
      ... on Repository {
        id
        nameWithOwner
        updatedAt
        name
        stargazerCount
        url
        repositoryTopics(first: ${elements}) {
          nodes {
            topic {
              relatedTopics {
                name
                stargazerCount
                id
              }
              id
              name
              stargazerCount
            }
          }
        }
      }
    }
  }
}`;

export default createQuery;
