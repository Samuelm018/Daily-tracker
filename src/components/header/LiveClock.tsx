'use client'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'

export function LiveClock() {
    const [time, setTime] = useState<Date | null>(null)

    useEffect(() => {
        setTime(new Date())
        const timer = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(timer)
    }, [])

    if (!time) return <div className="h-16 w-32 bg-white/5 animate-pulse rounded-lg" />

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold tracking-tighter text-white font-mono tabular-nums">
                {format(time, 'HH:mm')}
            </h1>
            <span className="text-sm font-medium text-neon-blue tracking-[0.2em] uppercase mt-2">
                {format(time, 'EEEE, MMM do')}
            </span>
        </div>
    )
}
