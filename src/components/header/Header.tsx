'use client'
import { LiveClock } from './LiveClock'
import { ProgressRing } from './ProgressRing'
import { useStore } from '@/store/useStore'
import { useEffect } from 'react'

export function Header() {
    const { tasks, checkMidnightReset } = useStore()

    useEffect(() => {
        checkMidnightReset()
        const timer = setInterval(checkMidnightReset, 60000)
        return () => clearInterval(timer)
    }, [checkMidnightReset])

    const total = tasks.length
    const completed = tasks.filter(t => t.completed).length
    const percentage = total === 0 ? 0 : completed / total

    return (
        <header className="flex flex-col items-center pt-12 pb-8 space-y-8 bg-gradient-to-b from-white/5 via-white/0 to-transparent">
            <LiveClock />

            <div className="flex items-center justify-center gap-8 w-full px-8">
                <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl font-bold text-white">{completed}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Done</span>
                </div>

                <ProgressRing progress={percentage} />

                <div className="flex flex-col items-center min-w-[60px]">
                    <span className="text-3xl font-bold text-white/50">{total}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Total</span>
                </div>
            </div>
        </header>
    )
}
