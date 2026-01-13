'use client'
import { useStore } from '@/store/useStore'
import { TaskItem } from './TaskItem'
import { AnimatePresence } from 'framer-motion'

export function TaskList() {
    const { tasks } = useStore()

    // Sort tasks: Incomplete first, then completed
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed === b.completed) return b.createdAt - a.createdAt
        return a.completed ? 1 : -1
    })

    if (tasks.length === 0) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-white/20 mt-10 min-h-[200px]">
                <p className="text-xl font-bold tracking-widest uppercase">No tasks.</p>
                <p className="text-sm tracking-widest uppercase mt-2">No excuses.</p>
            </div>
        )
    }

    return (
        <div className="flex-1 w-full px-6 overflow-y-auto mt-4 pb-32 no-scrollbar">
            <AnimatePresence mode="popLayout">
                {sortedTasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </AnimatePresence>
        </div>
    )
}
