import dynamic from 'next/dynamic'
import {Container} from '@chakra-ui/react'

const componentList = {
  paragraph: dynamic(() => import('./Paragraph')),
  heading: dynamic(() => import('./Heading'))
}

const MainPage = ({ data }) => {
  const components = data.content.json.content.map((d) => {
    const { nodeType } = d
    return componentList[nodeType.replaceAll(/-\d+/g, '')]
  })
  return (<Container maxW='xl'>
    {components.map((Component, i) => <Component
      key={i}
      content={data.content.json.content[i]}
    />)}
  </Container>)
}

export default MainPage
