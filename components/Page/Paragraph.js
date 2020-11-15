import { Text } from '@chakra-ui/react'

const Paragraph = (content) => {
  return (<Text mb={3}>{content.content.content[0].value}</Text>)
}

export default Paragraph
