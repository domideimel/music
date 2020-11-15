import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { withApollo } from "next-apollo";
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const SPACE = publicRuntimeConfig.CONTENTFUL_SPACE_ID
const ENVIRONMENT = publicRuntimeConfig.CONTENTFUL_ENVIRONMENT
const TOKEN = publicRuntimeConfig.CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENVIRONMENT}`

const httpLink = createHttpLink({
  fetch,
  uri: CONTENTFUL_URL,
  headers: {
    authorization: `Bearer ${TOKEN}`
  }
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default withApollo(apolloClient)
