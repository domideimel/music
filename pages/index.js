import { useQuery } from '@apollo/client'
import MainPage from '../components/Page'
import { GET_PAGE } from '../queries/page'

const Home = () => {

  const { loading, error, data } = useQuery(GET_PAGE, {
    fetchPolicy: 'cache-and-network',
    variables: {
      slug: '/'
    }
  })
  if (loading) return null
  if (error) return `Error! ${error}`
  return (<MainPage
    data={data.pageCollection.items[0]}
  />)
}

export default Home

