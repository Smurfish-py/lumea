import { PublicHeader } from "@/app/components/index"

export default function PublicLayout({ children }) {
    return (
        <>
            <PublicHeader />
            <main className="">
                {children}
            </main>
        </>
    )
}