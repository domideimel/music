import { ApolloProvider } from '@apollo/react-hooks'
import withApolloClient from '../apollo/client'

function App ({ Component, pageProps, apollo }) {
  return (<ApolloProvider client={apollo}>
    <Component {...pageProps} />)
  </ApolloProvider>)
}

export default withApolloClient(App)
