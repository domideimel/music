import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import MenuItem from './MenuItem'

const Header = ({ data }) => {
  const { pageCollection: { items } } = data
  const [show, setShow] = useState(false)
  const toggleMenu = () => setShow(!show)

  return (<Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['red.600', 'red.600', 'white', 'red.600']}
      color={['white', 'white', 'grey.500', 'grey.500']}
      css={{
        position: 'sticky',
        top: 0
      }}
    >
      <Box
        display={{
          base: 'block',
          md: 'none'
        }}
        onClick={toggleMenu}
      >
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>
      <Box
        display={{
          base: show ? 'block' : 'none',
          md: 'block'
        }}
        flexBasis={{
          base: '100%',
          md: 'auto'
        }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {items.map((item, i) => <MenuItem
            item={item}
            key={item.slug}
            isLast={() => i === items.length - 1}
          />)}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
