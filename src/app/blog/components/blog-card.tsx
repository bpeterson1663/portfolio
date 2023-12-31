import Card from "@/app/components/card/card";
import Link from "next/link";
import { getDate } from "@/app/utils/date";

interface Props {
    slug: string
    title: string
    date: Date
    summary: string
}   

export default function BlogCard({title, date, summary, slug }: Props) {
    return (
        <Link href={`/blog/${slug}`}>
            <Card>
                <h2>{title}</h2>
                <span>{getDate(date)}</span>
                <p>{summary}</p>
            </Card>
        </Link>
    )
}