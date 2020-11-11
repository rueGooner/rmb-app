import { StyleSheet, Dimensions, Platform } from 'react-native';

export const mainTheme = {
  primary: '#FFAA00',
  primaryVariant: '#FFC44D',
  secondary: '#00aaff',
  secondaryVariant: '#4DC4FF',
  tertiary: '#8EE4AF',
  tertiaryVariant: '#B0ECC7',
  white: '#fff',
  accent: '#fbe134',
  lightText: '#FEFEFE',
  darkText: '#1A1A1D',
  splashBackground: '#69D2E7',
  splashBackgroundGradient: '#5FBDD0',
  success: '#4BB543',
  error: '#ff0033',
  warning: '#F0A830',
  background: '#202020',
};

export const gradients = {
  primaryButton: [mainTheme.primaryVariant, mainTheme.primary, mainTheme.primaryVariant],
  secondaryButton: [mainTheme.secondaryVariant, mainTheme.secondary, mainTheme.secondaryVariant]
}

export const darkTheme = {
  background: '#484848',
  primary: '#3500D3',
  secondary: '#190061',
  tertiary: '#8EE4AF',
  accent: '#0C0032',
  white: '#fff',
  success: '#5CDB95',
  error: '#ff0033',
  lightText: '#FEFEFE',
  darkText: '#404040',
  splashBackground: '#69D2E7',
  splashBackgroundGradient: '#5FBDD0',
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

export default StyleSheet.create({
  container: {
    flex: 1,
    color: mainTheme.lightText,
    backgroundColor: mainTheme.background
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 2,
    // backgroundColor: mainTheme.white,
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
    color: mainTheme.white,
    marginTop: 5,
    alignSelf: 'center'
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
  register: {
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    borderColor: mainTheme.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: mainTheme.white
  },
  textSign: {
    color: mainTheme.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 15
  },
  errorMessage: {
    color: mainTheme.error,
    fontSize: 11,
    marginVertical: 2
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
    backgroundColor: mainTheme.background,
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
  label: {
    fontSize: 18,
    color: mainTheme.white
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