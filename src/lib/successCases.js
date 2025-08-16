import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const successCasesDirectory = path.join(process.cwd(), "src/success-cases");

export function getSortedSuccessCasesData(lang) {
    const langDirectory = path.join(successCasesDirectory, lang);
    // Asegurarse de que el directorio existe
    if (!fs.existsSync(langDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(langDirectory);
    const allCasesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(langDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        return {
            id,
            ...matterResult.data,
        };
    });
    return allCasesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getSuccessCaseData(id, lang) {
    const langDirectory = path.join(successCasesDirectory, lang);
    const fullPath = path.join(langDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Usar gray-matter para parsear la metadata
    const matterResult = matter(fileContents);

    // Usar remark para convertir el contenido markdown a HTML
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combinar los datos con el id y el contenido HTML
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
