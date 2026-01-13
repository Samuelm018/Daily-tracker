'use client'
import { Task, useStore } from '@/store/useStore'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TaskItem({ task }: { task: Task }) {
    const { toggleTask, deleteTask } = useStore()

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
            className={cn(
                "group flex items-center justify-between p-4 mb-3 rounded-xl border transition-all duration-300",
                task.completed
                    ? "bg-white/5 border-white/5"
                    : "bg-white/10 border-white/10 hover:border-neon-blue/50"
            )}
        >
            <div className="flex items-center flex-1 gap-4 overflow-hidden">
                <button
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                        "flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-md border-2 transition-all",
                        task.completed
                            ? "bg-neon-green border-neon-green text-black"
                            : "border-white/30 hover:border-neon-green"
                    )}
                >
                    {task.completed && <Check size={16} strokeWidth={4} />}
                </button>

                <span className={cn(
                    "text-lg font-medium truncate transition-all",
                    task.completed ? "text-white/30 line-through" : "text-white"
                )}>
                    {task.text}
                </span>
            </div>

            <button
                onClick={() => deleteTask(task.id)}
                className="p-2 text-white/30 hover:text-neon-red transition-colors active:scale-90"
                aria-label="Delete task"
            >
                <X size={20} />
            </button>
        </motion.div>
    )
}
