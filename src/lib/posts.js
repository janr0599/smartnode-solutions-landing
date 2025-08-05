// src/lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const id = fileName.replace(/\.md$/, ""); // Use file name as the ID

        // This is a cleaner way to handle the data, ensuring the file name ID is used
        const postData = {
            id,
            ...matterResult.data,
        };

        // If the frontmatter also contains an 'id', this will be overwritten.
        // Let's explicitly delete the old 'id' to be safe.
        delete postData.id;

        return {
            id, // Use the ID from the file name
            ...matterResult.data,
            author: matterResult.data.author, // Make sure the author data is correctly handled
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

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);

    // Check if the file exists before trying to read it
    if (!fs.existsSync(fullPath)) {
        return null; // Return null to trigger notFound() in the page component
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Correcting the author object format here as well
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

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            id: fileName.replace(/\.md$/, ""),
        };
    });
}
