import { Platform } from "react-native";

const theme = {
  colors: {
    primary: '#24292e',
    secondary: '#586069',
    white: '#FFFFFF',
    gray: '#e1e4e8',
    languageTag: '#0366d6',
    errorColor: '#d73a4a'
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System'
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;