import { Heading } from '@chakra-ui/react'

const Headline = ({ content }) => {
  const level = `h${content.nodeType.match(/\d+/)[0]}`
  return <Heading
    as={level}
    isTruncated
    mb={6}
  >{content.content[0].value}</Heading>
}

export default Headline
