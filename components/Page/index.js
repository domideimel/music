import { Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const componentList = {
  paragraph: dynamic(() => import('./Paragraph')),
  heading: dynamic(() => import('./Heading')),
  image: dynamic(() => import('./Image')),
  'embedded-asset-block': dynamic(() => import('./AssetBlock'))
}

const MainPage = ({ data }) => {
  const components = data.content.json.content.map((d) => {
    const { nodeType } = d
    return componentList[nodeType.replaceAll(/-\d+/g, '')]
  })
  console.log(data)
  return (<>
    {data.heroImage && <componentList.image url={data.heroImage.url} alt={data.heroImage.title} />}
    <Container maxW='xl' mt={data.heroImage && 12}>
      <componentList.heading
        content={{
          nodeType: 'heading-1',
          content: [{
            value: data.title
          }]
        }}
      />

      {components.map((Component, i) => <Component
        key={i}
        content={data.content.json.content[i]}
        assetData={data.content.json.content[i].data.target}
      />)}
    </Container>
  </>)
}
export default MainPage
