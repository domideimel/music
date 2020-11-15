import { gql } from '@apollo/client';

export const GET_ASSET = gql`
    query Asset($id: String!) {
        asset(id:$id) {
            url,
            title
            width,
            height
        }
    }
`
