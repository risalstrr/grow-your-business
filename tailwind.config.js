/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        productSans: 'ProductSans',
        productSansBold: 'ProductSansBold',
        productSansBoldItalic: 'ProductSansBoldItalic',
        productSansItalic: 'ProductSansItalic',
      },
      colors: {
        crimson: 'ED7390',
        blue: {
          light: '#F1F8FF',
          normal: '#26E0F5',
          dark: '#5CAAE2',
          darkest: '#2B8BDA',
        },
        broken: '#F6F6F6',
        grey: { normal: '#767676', dark: "#36474f" },
        purple: {
          light: "#794682",
          lightest: "#e5dce7",
          terong: "#c224a1"
        }
      },
      fontSize: {
        'display-large': '57px',
        'display-medium': '45px',
        'display-small': '36px',
        'headline-large': '32px',
        'headline-medium': '28px',
        'headline-small': '24px',
        'title-large': '22px',
        'title-medium': '16px',
        'title-small': '14px',
        'label-large': '14px',
        'label-medium': '12px',
        'label-small': '11px',
        'body-large': '16px',
        'body-medium': '14px',
        'body-small': '12px',
        'p-md': '16px',
        'p-sm': '12px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}