import gql from 'graphql-tag'

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
