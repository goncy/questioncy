import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.pink,
    secondary: theme.colors.orange,
  },
  components: {
    Button: {
      variants: {
        gradient: {
          color: "white",
          bgGradient: "linear(primary.500 0%, secondary.500 100%)",
        },
      },
    },
  },
});
