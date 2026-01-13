'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '@/store/useStore'
import { useEffect } from 'react'

export function ResetOverlay() {
    const { showResetAnimation, dismissResetAnimation } = useStore()

    useEffect(() => {
        if (showResetAnimation) {
            const timer = setTimeout(() => {
                dismissResetAnimation()
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [showResetAnimation, dismissResetAnimation])

    return (
        <AnimatePresence>
            {showResetAnimation && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl font-bold text-white mb-2 uppercase tracking-widest">
                            New Day.
                        </h2>
                        <p className="text-xl text-neon-blue font-medium uppercase tracking-[0.5em]">
                            Execute.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
