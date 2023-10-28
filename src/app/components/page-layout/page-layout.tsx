import { PropsWithChildren } from "react"
import Navigation from "../navigation/navigation"

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <section>
            <Navigation />
            {children}
        </section>
    )
}