/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  sm: '480px',
		  md: '768px',
		  lg: '1225px',
		  xl: '1440px',
		},
		extend: {
		  fontFamily: {
			sans: ["Inter", "sans-serif"],
			robotoMono: ["var(--font-roboto-mono)", "sans-serif"],
		  },
		  boxShadow: {
			'bottom-black': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
			'right-bottom-black': '5px 5px 0px 0px rgba(0,0,0,1)' // Shadow only at the bottom, solid black
		  },
		  keyframes: {
			wiggle: {
			  "0%, 100%": {
				transform: "translateX(0%)",
				transformOrigin: "50% 50%",
			  },
			  "15%": { transform: "translateX(-6px) rotate(-6deg)" },
			  "30%": { transform: "translateX(9px) rotate(6deg)" },
			  "45%": { transform: "translateX(-9px) rotate(-3.6deg)" },
			  "60%": { transform: "translateX(3px) rotate(2.4deg)" },
			  "75%": { transform: "translateX(-2px) rotate(-1.2deg)" },
			},
			cloud: {
			  "0%": {
				transform: "translateX(-55vw)",
			  },
			  "100%": { transform: "translateX(115vw)" },
			},
			move: {
			  "0%": {
				transform: "translateX(-1000px)",
			  },
			  "100%": { transform: "translateX(2000px)" },
			},
			fadeIn: {
				"0%": { opacity: "0" , },
				"100%": { opacity: "1" ,  },
			},
		  },
		  animation: {
			wiggle: "wiggle 0.8s both",
			move: "move 60s ease-in-out infinite alternate",
			cloud: "cloud 180s ease-in-out infinite",
			fadeIn: "fadeIn 1.3s ease-in-out 0s both",
			fadeIn2: "fadeIn 1.3s ease-in-out 0.1s both",
			fadeIn3: "fadeIn 1.3s ease-in-out 0.2s both",
			fadeIn4: "fadeIn 1.3s ease-in-out 0.3s both",
			fadeIn5: "fadeIn 1.3s ease-in-out 0.4s both",
		  },
		},
	
	  },
	  plugins: [],
}
