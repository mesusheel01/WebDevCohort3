import tailwindConfig from "../../packages/config/tailwind.config.js";

export default {
    ...tailwindConfig,
    content: [
        "../../packages/ui/components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ]
}
