import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { defineStyleConfig } from "@chakra-ui/react"

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#234E52", "#B2F5EA")(props),
      color: mode("white", "black")(props),
    },
  }),
}
const Button = defineStyleConfig({
  baseStyle: (props) => ({
    bgColor: mode("black", "white")(props),
    colorScheme: mode("teal.800", "teal.200")(props),
  }),
})
const components = {
  Button,
}
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, components })

export default theme
