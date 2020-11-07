import { StyleSheet, Dimensions, Platform } from 'react-native';

export const mainTheme = {
  primary: '#5CACC4',
  secondary: '#1b4965',
  tertiary: '#f85e00',
  white: '#fff',
  lightBackground: '#FDFDFD',
  darkBackground: '#404040',
  accent: '#fbe134',
  lightText: '#FEFEFE',
  darkText: '#404040',
  splashBackground: '#69D2E7',
  splashBackgroundGradient: '#5FBDD0',
  success: '#4BB543',
  error: '#ff0033'
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

export default StyleSheet.create({
  container: {
    flex: 1,
    color: mainTheme.lightText,
    backgroundColor: mainTheme.primary
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: mainTheme.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    width: '100%',
    marginTop: 10
  },
  signIn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5
  },
  statusBar: {
    backgroundColor: mainTheme.primary
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
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
  errorIcon: {
    color: '#FFBFCC'
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
  },
  label: {
    fontSize: 18,
    color: mainTheme.secondary
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: mainTheme.secondary,
  }
})