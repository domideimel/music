import { GET_PAGE } from '../queries/page'

const Page = ({ data }) => {
  console.log(data)
  return (<>Hallo Welt</>)
}

Page.getInitialProps = async ctx => {
  const { apolloClient, query: { slug } } = ctx

  const { data, loading, error } = await apolloClient.query({
    query: GET_PAGE,
    variables: {
      slug
    }
  })
  return {
    data,
    loading,
    error
  }
}

export default Page
