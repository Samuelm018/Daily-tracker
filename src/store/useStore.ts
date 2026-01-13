import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface Task {
    id: string
    text: string
    completed: boolean
    createdAt: number
}

interface StoreState {
    tasks: Task[]
    lastResetDate: string
    showResetAnimation: boolean
    addTask: (text: string) => void
    toggleTask: (id: string) => void
    deleteTask: (id: string) => void
    resetDay: () => void
    checkMidnightReset: () => void
    dismissResetAnimation: () => void
}

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            tasks: [],
            lastResetDate: new Date().toDateString(),
            showResetAnimation: false,
            addTask: (text) => set((state) => ({
                tasks: [
                    ...state.tasks,
                    {
                        id: Math.random().toString(36).substring(2) + Date.now().toString(36),
                        text,
                        completed: false,
                        createdAt: Date.now()
                    }
                ]
            })),
            toggleTask: (id) => set((state) => ({
                tasks: state.tasks.map((t) =>
                    t.id === id ? { ...t, completed: !t.completed } : t
                )
            })),
            deleteTask: (id) => set((state) => ({
                tasks: state.tasks.filter((t) => t.id !== id)
            })),
            resetDay: () => set((state) => ({
                tasks: state.tasks.map((t) => ({ ...t, completed: false })),
                lastResetDate: new Date().toDateString(),
                showResetAnimation: true
            })),
            checkMidnightReset: () => {
                const today = new Date().toDateString()
                const { lastResetDate, resetDay } = get()
                if (lastResetDate !== today) {
                    resetDay()
                }
            },
            dismissResetAnimation: () => set({ showResetAnimation: false })
        }),
        {
            name: 'daily-execution-store',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                tasks: state.tasks,
                lastResetDate: state.lastResetDate
                // Don't persist showResetAnimation
            }),
        }
    )
)
