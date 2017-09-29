// @flow

// import { createBlacklistFilter } from '@actra-development-oss/redux-persist-transform-filter-immutable';
// import DeviceInfo from 'react-native-device-info';

// import type { DeviceInfoType } from '../types';

export const colors = {
  red: '#F8333C',
  green: '#4ADF86',
  darkGray: '#31393C',
  greyOutline: '#bbbbbb',
  primary: '#00C0FF',
  primaryLight: 'rgba(0, 192, 255, 0.15)',
  lightGrey: '#B4B4B4',
  white: '#ffffff',
  transparent: 'transparent',
  darkBlue: '#161C36',
};

/**
 * App themes
 */
export const themes = {
  dark: {
    ...colors,
    tabBarColor: '#192543',
    cardBackground: colors.darkBlue,
    headerTitleColor: colors.white,
    textColor: colors.white,
    thumbTintColor: colors.white,
  },
  light: {
    ...colors,
    tabBarColor: '#F3F3F3',
    cardBackground: colors.white,
    headerTitleColor: colors.darkGray,
    textColor: colors.darkGray,
    thumbTintColor: colors.darkGray,
  },
};

/**
 * Remove some keey from the app reducer
 */
// export const subsetOfAppReducer = createBlacklistFilter('app', [
//   'isSearchBarShow',
// ]);

/**
 * List of reducer we persist with redux-persist
 */
export const persistWhitelist = ['auth', 'nav'];

/**
 * Object of each key the app use in the asyncStorage
 */
// export const storageKey = {
//   theme: '@app-theme',
// };

/**
 * Properties of the app
 */
// export const properties = {
//   feedbackEmail: {
//     email: '@gmail.comn',
//     subject: 'App feedback',
//   },
// };

/**
 * Constants about the device
 */
// export const deviceInfo: DeviceInfoType = {
//   isEmulator: DeviceInfo.isEmulator(),
// };
