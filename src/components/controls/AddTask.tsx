'use client'
import { useState } from 'react'
import { useStore } from '@/store/useStore'
import { SendHorizontal } from 'lucide-react'

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
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a daily task..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-4 pr-12 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-blue/50 focus:bg-white/10 transition-all text-lg"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 right-2 flex items-center justify-center p-2 text-white/30 hover:text-neon-blue transition-colors disabled:opacity-50"
                    disabled={!text.trim()}
                >
                    <SendHorizontal size={24} />
                </button>
            </div>
        </form>
    )
}
