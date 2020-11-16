import { useQuery } from '@apollo/client'
import { GET_ENTRY } from '../../queries/Entry'

const EntryBlock = ({content}) => {
  const { loading, error, data } = useQuery(GET_ENTRY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: content.data.target.sys.id
    }
  })
  if (loading) return null
  if (error) return `Error! ${error}`
  console.log(data)
  return (<>Entry Block</>)
}

export default EntryBlock
