import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        jakarta: ['var(--font-jakarta)'],
      },
      backgroundImage: {
        logo: 'linear-gradient(159deg, #006FEE 10.65%, #033E82 93.56%)',
        logon: "url('/image/bg-logon.png')",
      },
      boxShadow: {
        'right-top-bottom': ' 7px 2px 17px 4px rgba(0,0,0,0.06)',
      },
      transitionProperty: {
        'width-transform': 'width, transform',
        'width-left': 'width, left',
      },
    },
    screens: {
      xs: '400px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
  },
  plugins: [
    nextui({
      prefix: 'numa',
      addCommonColors: true,
      themes: {
        'numa-light': {
          extend: 'light',
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            container: '#FFFFFF',
            divider: '#11111126',
            content1: '#FFFFFF',
            content2: '#F4F4F5',
            content3: '#D4D4D8',
            content4: '#D4D4D8',
            lightPink: '#f7efef',
            default: {
              50: '#FAFAFA',
              100: '#F4F4F5',
              200: '#E4E4E7',
              300: '#D4D4D8',
              400: '#A1A1AA',
              500: '#71717A',
              600: '#52525B',
              700: '#3F3F46',
              800: '#27272A',
              900: '#18181B',
              foreground: '#FFFFFF',
              DEFAULT: '#71717A',
            },
            primary: {
              50: '#E6F1FE',
              100: '#CCE3FD',
              200: '#99C7FB',
              300: '#66AAF9',
              400: '#338EF7',
              500: '#006FEE',
              600: '#005BC4',
              700: '#004493',
              800: '#002E62',
              900: '#001731',
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            secondary: {
              50: '#F2EAFA',
              100: '#E4D4F4',
              200: '#C9A9E9',
              300: '#AE7EDE',
              400: '#9353D3',
              500: '#7828C8',
              600: '#6020A0',
              700: '#481878',
              800: '#301050',
              900: '#180828',
              foreground: '#FFFFFF',
              DEFAULT: '#7828C8',
            },
            success: {
              50: '#ECFDF3',
              100: '#DCFAE6',
              200: '#ABEFC6',
              300: '#75E0A7',
              400: '#47CD89',
              500: '#17B26A',
              600: '#079455',
              700: '#067647',
              800: '#085D3A',
              900: '#085D3A',
              foreground: '#000000',
              DEFAULT: '#17B26A',
            },
            warning: {
              50: '#FEFCE8',
              100: '#FDEDD3',
              200: '#FBDBA7',
              300: '#F9C97C',
              400: '#F7B750',
              500: '#F5A524',
              600: '#C4841D',
              700: '#936316',
              800: '#62420E',
              900: '#312107',
              foreground: '#000000',
              DEFAULT: '#F5A524',
            },
            danger: {
              50: '#FEF3F2',
              100: '#FEE4E2',
              200: '#FECDCA',
              300: '#FDA29B',
              400: '#F97066',
              500: '#F04438',
              600: '#D92D20',
              700: '#B42318',
              800: '#912018',
              900: '#7A271A',
              foreground: '#FFFFFF',
              DEFAULT: '#F04438',
            },
          },
        },
        'numa-dark': {
          extend: 'dark',
          colors: {
            background: '#161B26',
            foreground: '#ECEDEE',
            container: '#0C111D',
            divider: '#ffffff26',
            content1: '#18181B',
            content2: '#27272A',
            content3: '#27272A',
            content4: '#52525B',
            lightPink: '#57454B',
            default: {
              50: '#18181B',
              100: '#27272A',
              200: '#3F3F46',
              300: '#52525B',
              400: '#71717A',
              500: '#A1A1AA',
              600: '#D4D4D8',
              700: '#E4E4E7',
              800: '#F4F4F5',
              900: '#FAFAFA',
              foreground: '#FFFFFF',
              DEFAULT: '#3f3f46',
            },
            primary: {
              50: '#001731',
              100: '#002E62',
              200: '#004493',
              300: '#005BC4',
              400: '#006FEE',
              500: '#338EF7',
              600: '#66AAF9',
              700: '#99C7FB',
              800: '#CCE3FD',
              900: '#E6F1FE',
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            secondary: {
              50: '#180828',
              100: '#301050',
              200: '#481878',
              300: '#6020A0',
              400: '#7828C8',
              500: '#9353D3',
              600: '#AE7EDE',
              700: '#C9A9E9',
              800: '#E4D4F4',
              900: '#F2EAFA',
              foreground: '#FFFFFF',
              DEFAULT: '#9353d3',
            },
            success: {
              50: '#074D31',
              100: '#085D3A',
              200: '#067647',
              300: '#079455',
              400: '#17B26A',
              500: '#47CD89',
              600: '#75E0A7',
              700: '#ABEFC6',
              800: '#DCFAE6',
              900: '#ECFDF3',
              foreground: '#FFFFFF',
              DEFAULT: '#17c964',
            },
            warning: {
              50: '#312107',
              100: '#62420E',
              200: '#936316',
              300: '#C4841D',
              400: '#F5A524',
              500: '#F7B750',
              600: '#F9C97C',
              700: '#FBDBA7',
              800: '#FDEDD3',
              900: '#FEFCE8',
              foreground: '#FFFFFF',
              DEFAULT: '#f5a524',
            },
            danger: {
              50: '#7A271A',
              100: '#912018',
              200: '#B42318',
              300: '#D92D20',
              400: '#F04438',
              500: '#F97066',
              600: '#FDA29B',
              700: '#FECDCA',
              800: '#FEE4E2',
              900: '#FEF3F2',
              foreground: '#FFFFFF',
              DEFAULT: '#f31260',
            },
          },
        },
      },
    }),
  ],
};

export default config;
