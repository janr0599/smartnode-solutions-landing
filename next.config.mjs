// next.config.js
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // ... any other Next.js config
};

const withMDX = createMDX({
    // Add markdown plugins here if you need them, e.g., for GitHub-flavored markdown
});

export default withMDX(nextConfig);
