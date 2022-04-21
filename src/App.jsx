import { memo } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useUserContext } from './Contexts/UserContext'
import { Mainlayout } from './Pages/Layouts/MainLayout'
import { Login } from './Pages/Login'
import { Task } from './Pages/Task'

function App() {
  const { username } = useUserContext()

  if (!username) {
    return <Login />
  }

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Task />} />
        </Route>
      </Routes>
    </div>
  )
}

export default memo(App)
