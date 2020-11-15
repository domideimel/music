import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import withApollo from '../apollo/client'
import Header from '../components/Header/Header'

const App = ({ Component, pageProps, apollo }) => {
  return (<ApolloProvider client={apollo}>
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  </ApolloProvider>)
}

export default withApollo({ ssr: true })(App)
