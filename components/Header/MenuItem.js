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
    <Link href={`/${encodeURIComponent(to)}`}>{children}</Link>
  </Text>)
}
export default MenuItem
