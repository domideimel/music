import { Image } from '@chakra-ui/react'

const ContentImage = ({ url, alt }) => {
  return <Image
    src={url}
    alt={alt}
    objectFit="cover"
    loading='auto'
  />
}

export default ContentImage
