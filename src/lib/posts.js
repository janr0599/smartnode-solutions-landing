import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getSortedPostsData(lang) {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(`.${lang}.md`))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            const id = fileName
                .replace(/\.en\.md$/, "")
                .replace(/\.es\.md$/, "");

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
    const fullPath = path.join(postsDirectory, `${id}.${lang}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
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
    const fileNames = fs.readdirSync(postsDirectory);
    const postIds = fileNames.map((fileName) => {
        const id = fileName.replace(/\.en\.md$/, "").replace(/\.es\.md$/, "");
        return id;
    });

    const uniquePostIds = [...new Set(postIds)];

    return uniquePostIds.flatMap((id) => {
        return [
            { id, lang: "en" },
            { id, lang: "es" },
        ];
    });
}
