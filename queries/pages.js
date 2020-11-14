import { gql } from '@apollo/client';

export const GET_ALL_PAGES = gql`
    query Pages {
        pageCollection {
            items {
                slug
                title
            }
        }
    }
`
