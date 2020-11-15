import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, Container } from '@chakra-ui/react'
import withApolloClient from '../apollo/client'
import Header from '../components/Header/Header'
import { GET_ALL_PAGES } from '../queries/pages'

const App = ({ Component, pageProps, apollo, data }) => {
  return (<ApolloProvider client={apollo}>
    <ChakraProvider>
      <Header data={data} />
      <Container maxW="xl">
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  </ApolloProvider>)
}

App.getInitialProps = async ({ ctx: { apolloClient } }) => {
  const { data, loading, error } = await apolloClient.query({
    query: GET_ALL_PAGES
  })
  return {
    data,
    loading,
    error
  }
}
export default withApolloClient(App)
