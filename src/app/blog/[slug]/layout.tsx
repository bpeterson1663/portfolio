import Link from "next/link";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        <nav>
          <Link href="/blog">⬅ Back</Link>
        </nav>
        <main>{children}</main>
      </div>
  );
}
