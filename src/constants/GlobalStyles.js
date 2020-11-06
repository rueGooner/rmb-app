import { StyleSheet } from 'react-native';

const mainTheme = {
  primary: '#5CACC4',
  secondary: '#1b4965',
  tertiary: '#f85e00',
  lightBackground: '#FDFDFD',
  darkBackground: '#404040',
  accent: '#fbe134',
  lightText: '#FEFEFE',
  darkText: '#404040'
};

const trialTheme = {
  primary: '#5fa8d3',
  secondary: '#1b4965',
  tertiary: '#f85e00',
  lightBackground: '#FDFDFD',
  darkBackground: '#404040',
  accent: '#62b6cb',
  lightText: '#EFEFEF'
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainTheme.darkBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    color: mainTheme.lightText
  },
  title: {
    fontSize: 20,
    color: mainTheme.lightText
  },
  button: {
    width: '90%',
    marginVertical: 15,
    marginHorizontal: 10
  },
  primaryButton: {
    backgroundColor: mainTheme.primary,
    color: mainTheme.lightText
  },
  secondaryButton: {
    backgroundColor: mainTheme.secondary,
    color: mainTheme.lightText
  },
  lightIcon: {
    backgroundColor: mainTheme.primary,
    color: mainTheme.lightText
  },
  darkIcon: {
    backgroundColor: mainTheme.darkBackground,
    color: mainTheme.accent
  },
  lightBottomBar: {
    backgroundColor: mainTheme.primary,
    color: mainTheme.lightText
  },
  darkBottomBar: {
    backgroundColor: mainTheme.primary,
    color: mainTheme.accent
  },
  darkBackground: {
    backgroundColor: mainTheme.primary,
    color: mainTheme.lightText
  }
})