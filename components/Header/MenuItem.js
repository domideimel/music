import { Text } from '@chakra-ui/react'
import Link from 'next/link'

const MenuItem = ({ item, isLast, ...rest }) => {
  const to = item.slug
  const children = item.title
  return (<Text
    mb={{
      base: isLast ? 0 : 8,
      sm: 0
    }}
    mr={{
      base: 0,
      sm: isLast ? 0 : 8
    }}
    display="block"
    {...rest}
  >
    {to === '/' ? <Link href={'/'}><a>{children}</a></Link> :
      <Link href={`/${encodeURIComponent(to)}`}><a>{children}</a></Link>}
  </Text>)
}
export default MenuItem
