import { DefaultTheme, DarkTheme } from '@react-navigation/native'

export const customColors = {
  primary: '#00CC77',
  black: '#1C1E21',
  gray: '#9DA6AF',
  lightGray: '#EFEFEF',
  red: '#DB5353',
}

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...customColors,
    background: 'white',
  },
}

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...customColors,
  },
}
