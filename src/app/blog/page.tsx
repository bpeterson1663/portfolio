import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import {type Post} from "../lib/types"
import {Card, Group} from "@mantine/core";
import dayjs from 'dayjs'
const postsDirectory = path.join(process.cwd(), "src/content/posts");

export default function BlogPage() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8"
    );
    const { data } = matter(fileContent);
    return { slug: filename.replace(".md", ""), ...data } as Post;
  });

  return (
      <Group>
        {posts.map(({ slug, title, date, excerpt }) => (
          <Card key={slug} m={32} maw={300}>
            <Link href={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{excerpt}</p>
            </Link>
            <p>{dayjs(date).format("MMM DD, YYYY")}</p>
          </Card>
        ))}
      </Group>
  );
}
