'use client'
import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { Plus } from 'lucide-react'

export function AddTask() {
    const [text, setText] = useState('')
    const { addTask } = useStore()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) return
        addTask(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="w-full px-6 mb-4">
            <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Plus className="text-white/30 group-focus-within:text-neon-blue transition-colors" />
                </div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a daily task..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all text-lg"
                />
            </div>
        </form>
    )
}
