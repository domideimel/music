import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { GET_ASSET } from '../../queries/asset'
import Image from './Image'

const AssetBlock = ({ assetData }) => {
  const { loading, error, data } = useQuery(GET_ASSET, {
    variables: {
      id: assetData.sys.id
    }
  })
  if (loading) return null
  if (error) return `Error! ${error}`
  return (<Box my={6}>
    <Image url={data.asset.url} alt={data.asset.title} />
  </Box>)
}

export default AssetBlock
