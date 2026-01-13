'use client'
import { motion } from 'framer-motion'

interface ProgressRingProps {
    progress: number // 0 to 1
}

export function ProgressRing({ progress }: ProgressRingProps) {
    const radius = 60
    const stroke = 6
    const normalizedRadius = radius - stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const strokeDashoffset = circumference - progress * circumference

    return (
        <div className="relative flex items-center justify-center">
            <svg
                height={radius * 2}
                width={radius * 2}
                className="rotate-[-90deg] transition-all duration-500"
            >
                <circle
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth={stroke}
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <motion.circle
                    stroke="#0aff0a"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    strokeLinecap="round"
                    fill="transparent"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-neon-green">
                    {Math.round(progress * 100)}%
                </span>
            </div>
        </div>
    )
}
