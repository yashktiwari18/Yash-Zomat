
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
				// FoodieHub Brand Colors
				foodie: {
					orange: 'hsl(var(--foodie-orange))',
					'orange-light': 'hsl(var(--foodie-orange-light))',
					'orange-dark': 'hsl(var(--foodie-orange-dark))',
					green: 'hsl(var(--foodie-green))',
					'green-light': 'hsl(var(--foodie-green-light))',
					cream: 'hsl(var(--foodie-cream))',
					'cream-dark': 'hsl(var(--foodie-cream-dark))',
					gray: 'hsl(var(--foodie-gray))',
					'gray-light': 'hsl(var(--foodie-gray-light))'
				}
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, hsl(var(--foodie-orange)) 0%, hsl(var(--foodie-orange-dark)) 100%)',
				'card-gradient': 'linear-gradient(145deg, hsl(var(--foodie-cream)) 0%, hsl(var(--foodie-cream-dark)) 100%)',
				'glass-gradient': 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem'
			},
			boxShadow: {
				'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card': '0 2px 16px rgba(0, 0, 0, 0.1)',
				'button': '0 4px 14px rgba(255, 107, 71, 0.3)'
			},
			backdropBlur: {
				'glass': '12px'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.5s ease-out',
				'scale-in': 'scaleIn 0.3s ease-out',
				'bounce-soft': 'bounceSoft 0.4s ease-out',
				'pulse-soft': 'pulseSoft 2s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				bounceSoft: {
					'0%, 20%, 53%, 80%, 100%': { transform: 'translateY(0)' },
					'40%, 43%': { transform: 'translateY(-8px)' },
					'70%': { transform: 'translateY(-4px)' },
					'90%': { transform: 'translateY(-2px)' }
				},
				pulseSoft: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
