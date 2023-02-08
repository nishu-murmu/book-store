import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#234E52', '#B2F5EA')(props),
      color: mode('white', 'black')(props),
    },
    button: {
      colorScheme: mode('teal.700', 'teal.200')(props),
    },
  }),
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles })

export default theme
