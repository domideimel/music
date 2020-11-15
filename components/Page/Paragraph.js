import { Button, Text } from '@chakra-ui/react'
import { Fragment } from 'react'
import EntryHyperLink from './EntryHyperLink'

const Paragraph = (content) => {
  return (<>
    {content.content.content.map((item, i) => (<Fragment key={i}>
      {item.nodeType === 'text' && <Text mb={3}>{item.value}</Text>}
      {item.nodeType === 'hyperlink' && <Button
        colorScheme="red"
        as="a"
        href={item.data.uri}
        target="_blank"
        my={4}
      >
        {item.content[0].value}
      </Button>}
      {item.nodeType === 'entry-hyperlink' && <EntryHyperLink content={item} /> }
    </Fragment>))}
  </>)
}

export default Paragraph
