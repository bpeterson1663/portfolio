import Link from "next/link";
import PostContainer from '../components/post-container'

import { getDate } from "@/app/utils/date";

export default function Post() {
    return (
        <PostContainer>
            <h2>Road To 100 Commits</h2>
            <h3>{getDate("2023-12-31")}</h3>
            <p>One of my goals for 2024 is to code every day for 100 days. To track this, I will commit code and push up to my github account. Every day I will post what I worked on and what I committed to hold myself accountable. Someday&apos;s there may just be a small change or two but the main objective is to get in the habbit of coding every day. </p> 
            <Link href="https://github.com/bpeterson1663">My Github</Link>
        </PostContainer>
    )
}