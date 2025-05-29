
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Government colors with improved contrast ratios
        gov: {
          green: {
            DEFAULT: '#00573F',
            50: '#E6F7EC',
            100: '#C3E9D0',
            200: '#9CD9B3',
            300: '#75C895',
            400: '#4DB877',
            500: '#35A15C',
            600: '#2A8F51',
            700: '#207946',
            800: '#146339',
            900: '#0A4E2E',
          },
          yellow: {
            DEFAULT: '#FFB400',
            50: '#FFF6E5',
            100: '#FFECC6',
            200: '#FFDF94',
            300: '#FFD261',
            400: '#FFC52F',
            500: '#FFB400',
            600: '#CC9000',
            700: '#996C00',
            800: '#664800',
            900: '#332400',
          },
          neutrals: {
            white: '#FFFFFF',
            gray50: '#F9FAFB',
            gray100: '#F3F4F6',
            gray200: '#E5E7EB',
            gray300: '#D1D5DB',
            gray400: '#9CA3AF',
            gray500: '#6B7280',
            gray600: '#4B5563',
            gray700: '#374151',
            gray800: '#1F2937',
            gray900: '#111827',
            black: '#000000',
          }
        }
			},
      fontFamily: {
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' }
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-out': 'fade-out 0.4s ease-out',
        'pulse-subtle': 'pulse-subtle 2s infinite ease-in-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out'
			}
		}
	},
	plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.senior-mode': {
          fontSize: '120%',
          lineHeight: '1.6',
          letterSpacing: '0.025em',
        },
        '.senior-mode h1': {
          fontSize: '150%',
        },
        '.senior-mode h2': {
          fontSize: '140%',
        },
        '.senior-mode h3': {
          fontSize: '130%',
        },
        '.senior-mode button': {
          minHeight: '44px',
          padding: '12px 16px',
        },
        '.senior-mode a': {
          minHeight: '44px',
          padding: '8px 12px',
        },
        '.feature-card': {
          '@apply bg-white p-6 rounded-xl shadow-md border border-gov-neutrals-gray200 transition-all duration-300 hover:shadow-lg hover:border-gov-green-200': {},
        },
        '.hover-scale': {
          '@apply transition-transform duration-200 hover:scale-105': {},
        }
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
