import { Shell } from '@/components/layout/Shell'
import { Header } from '@/components/header/Header'
import { TaskList } from '@/components/tasks/TaskList'
import { AddTask } from '@/components/controls/AddTask'
import { ActionMenu } from '@/components/controls/ActionMenu'
import { ResetOverlay } from '@/components/common/ResetOverlay'

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Shell>
        <ResetOverlay />
        <Header />
        <TaskList />
        <AddTask />
        <ActionMenu />
      </Shell>
    </div>
  )
}
