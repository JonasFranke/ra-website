import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        mf5: "url('/cropped-maren-franke5.jpg')",
        mf7: "url('/maren-franke7.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config;
