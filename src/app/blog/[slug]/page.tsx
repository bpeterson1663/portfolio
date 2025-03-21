import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import dayjs from 'dayjs';

import "./styles.scss"

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const files = fs.readdirSync(postsDirectory);
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const postFilePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const postHtml = processedContent.toString();

  return (
      <article className="post-container">
        <h2>{data.title}</h2>
        <span>{dayjs(data.date).format("MMM DD, YYYY")}</span>
        <div className="post-content" dangerouslySetInnerHTML={{ __html: postHtml }} />
      </article>
  );
}
