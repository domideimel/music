import { gql } from '@apollo/client';

export const GET_ENTRY = gql`
    query Entry($id: String!) {
        page(id:$id) {
            slug
            title
            heroImage {
                url
                title
            }
        }
    }
`
