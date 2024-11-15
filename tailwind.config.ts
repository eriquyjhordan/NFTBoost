/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        leading: ['1.25rem', '150%'],
        'mobile-title': ['2rem', '120%'],
      },
      colors: {
        bluePrimary: 'hsl(var(--blue-primary))',
        greenPrimary: 'hsl(var(--green-primary))',
        background: 'hsl(var(--background))',
        'text-muted': 'hsl(var(--text-muted))',
        foreground: 'hsl(var(--foreground))',
        black: 'hsl(var(--black))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        gradient: {
          background: 'var(--gradient-background)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      maxWidth: {
        grid: '77.25rem',
      },
      backgroundImage: {
        'hero-pattern': 'url("../assets/bg-hero.svg")',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '78.5rem',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
      })
    },
  ],
} satisfies Config
