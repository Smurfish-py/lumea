import { PublicHeader } from "@/app/components/index"

export default function PublicLayout({ children }) {
    return (
        <>
            <PublicHeader />
            <main className="lg:py-4 lg:px-16">
                {children}
            </main>
        </>
    )
}