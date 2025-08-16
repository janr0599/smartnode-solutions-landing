import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// The base directory for all posts
const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPostsData(lang) {
    // Point to the language-specific subfolder (e.g., 'src/posts/en')
    const langDirectory = path.join(postsDirectory, lang);

    // Check if the directory for the language exists
    if (!fs.existsSync(langDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(langDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(`.md`)) // Filter for markdown files
        .map((fileName) => {
            const fullPath = path.join(langDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);

            // The ID is now just the filename without the .md extension
            const id = fileName.replace(/\.md$/, "");

            return {
                id,
                ...matterResult.data,
            };
        });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id, lang) {
    // Construct the full path using the language subfolder
    const fullPath = path.join(postsDirectory, lang, `${id}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // The author data parsing logic remains the same
    const authorData =
        typeof matterResult.data.author === "string"
            ? JSON.parse(
                  matterResult.data.author.replace(
                      /([{,]\s*)(\w+):/g,
                      '$1"$2":'
                  )
              )
            : matterResult.data.author;

    return {
        id,
        contentHtml,
        ...matterResult.data,
        author: authorData,
    };
}

export async function getAllPostIds() {
    const languages = ["en", "es"];
    let allIds = [];

    languages.forEach((lang) => {
        const langDirectory = path.join(postsDirectory, lang);
        if (fs.existsSync(langDirectory)) {
            const fileNames = fs.readdirSync(langDirectory);
            const postIds = fileNames.map((fileName) => {
                const id = fileName.replace(/\.md$/, "");
                return { params: { id, lang } };
            });
            allIds = allIds.concat(postIds);
        }
    });

    return allIds;
}
