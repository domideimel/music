import { useQuery } from '@apollo/client'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { GET_ENTRY } from '../../queries/Entry'

const EntryHyperLink = ({ content }) => {
  console.log(content)
  const { loading, error, data } = useQuery(GET_ENTRY, {
    fetchPolicy: 'cache-and-network',
    variables: {
      id: content.data.target.sys.id
    }
  })
  if (loading) return null
  if (error) return `Error! ${error}`

  return (<Link href={data.page.slug}>
    <Button
      colorScheme="red"
      my={4}
    >
      {content.content[0].value}
    </Button>
  </Link>)
}

export default EntryHyperLink
