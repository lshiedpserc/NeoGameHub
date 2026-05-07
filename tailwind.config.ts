import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'tertiary-fixed': '#e9ddff',
				'on-primary-container': '#006970',
				'on-secondary-container': '#fff6fc',
				'inverse-surface': '#e5e2e1',
				'on-surface-variant': '#b9cacb',
				'surface-container-high': '#2a2a2a',
				'surface-tint': '#00dbe9',
				'on-tertiary': '#3c0090',
				background: '#131313',
				'surface-container-lowest': '#0e0e0e',
				'surface-dim': '#131313',
				'on-secondary': '#520072',
				'on-surface': '#e5e2e1',
				'primary-container': '#00f0ff',
				primary: '#dbfcff',
				'on-secondary-fixed': '#320047',
				'on-tertiary-fixed': '#23005b',
				'surface-container-low': '#1c1b1b',
				secondary: '#ebb2ff',
				'on-primary': '#00363a',
				'on-primary-fixed': '#002022',
				'surface-variant': '#353534',
				'inverse-primary': '#006970',
				'secondary-container': '#b600f8',
				'on-tertiary-fixed-variant': '#5700c9',
				'primary-fixed': '#7df4ff',
				'on-error': '#690005',
				'tertiary-fixed-dim': '#d1bcff',
				'tertiary-container': '#e1d2ff',
				'on-primary-fixed-variant': '#004f54',
				'secondary-fixed-dim': '#ebb2ff',
				'on-background': '#e5e2e1',
				'on-error-container': '#ffdad6',
				tertiary: '#faf3ff',
				'secondary-fixed': '#f8d8ff',
				'surface-container-highest': '#353534',
				'surface-bright': '#3a3939',
				'on-tertiary-container': '#7213ff',
				outline: '#849495',
				'on-secondary-fixed-variant': '#74009f',
				'surface-container': '#201f1f',
				surface: '#131313',
				'inverse-on-surface': '#313030',
				'error-container': '#93000a',
				'outline-variant': '#3b494b',
				'primary-fixed-dim': '#00dbe9',
				error: '#ffb4ab'
			},
			borderRadius: {
				DEFAULT: '0.25rem',
				lg: '0.5rem',
				xl: '0.75rem',
				full: '9999px'
			},
			spacing: {
				'stack-lg': '48px',
				'stack-sm': '8px',
				'section-gap': '120px',
				'margin-mobile': '16px',
				'stack-md': '24px',
				gutter: '24px',
				'margin-desktop': '64px',
				unit: '8px',
				'container-max': '1440px'
			},
			fontFamily: {
				'body-md': ['Inter'],
				'body-lg': ['Inter'],
				'label-sm': ['Inter'],
				'label-md': ['Inter'],
				'headline-xl': ['Space Grotesk'],
				'headline-md': ['Space Grotesk'],
				'headline-lg': ['Space Grotesk'],
				'body-sm': ['Inter']
			},
			fontSize: {
				'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
				'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
				'label-sm': ['10px', { lineHeight: '1', letterSpacing: '0.08em', fontWeight: '700' }],
				'label-md': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
				'headline-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' }],
				'headline-md': ['24px', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '500' }],
				'headline-lg': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
				'body-sm': ['14px', { lineHeight: '1.5', letterSpacing: '0em', fontWeight: '400' }]
			}
		}
	},

	plugins: [forms, containerQueries]
} satisfies Config;
