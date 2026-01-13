import { ReactNode } from 'react'

export function Shell({ children }: { children: ReactNode }) {
    return (
        <main className="flex min-h-screen flex-col bg-black text-white w-full max-w-md mx-auto relative shadow-2xl border-x border-white/5 md:my-8 md:min-h-[90vh] md:rounded-3xl md:overflow-hidden ring-1 ring-white/10">
            {children}
        </main>
    )
}
