// next.config.js
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

    webpack(config) {
        // Find the rule that handles SVG files
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg")
        );

        // If a file loader rule is found, exclude SVGs from it
        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/;
        }

        // Add a new rule for SVGR
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: "@svgr/webpack", options: { icon: true } }],
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });

        return config;
    },
};

const withMDX = createMDX({
    // Add markdown plugins here if you need them, e.g., for GitHub-flavored markdown
});

export default withMDX(nextConfig);
