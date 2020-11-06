import { StyleSheet } from 'react-native';

const mainTheme = {
  primary: '#5fa8d3',
  secondary: '#1b4965',
  tertiary: '#f85e00',
  lightBackground: '#FDFDFD',
  darkBackground: '#404040',
  accent: '#fbe134',
};

const trialTheme = {
  primary: '#5fa8d3',
  secondary: '#1b4965',
  tertiary: '#f85e00',
  lightBackground: '#FDFDFD',
  darkBackground: '#404040',
  accent: '#62b6cb'
};

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 30
  },
  button: {
    width: '90%',
    marginHorizontal: 15
  },
  primaryButton: {
    backgroundColor: mainTheme.primary
  },
  iconText: {
    color: '#fff'
  },
  iconBackground: {
    backgroundColor: mainTheme.primary
  },
  bottomBar: {
    backgroundColor: mainTheme.primary
  },
  darkBackground: {
    backgroundColor: mainTheme.darkBackground,
    color: mainTheme.accent
  }
})