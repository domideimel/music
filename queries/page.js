import { gql } from '@apollo/client';

export const GET_PAGE = gql`
    query Page($tag: String!) {
        query Page($slug: String!, $id: String) {
            pageCollection(where: {slug: $slug, sys: {id: $id}}, limit: 1) {
                items {
                    linkedFrom {
                        entryCollection {
                            items {
                                sys {
                                    id
                                }
                            }   
                        }
                    }
                    title
                    heroImage {
                        url
                        title
                    }
                    content {
                        json
                    }
                }
            }
        }
    `
