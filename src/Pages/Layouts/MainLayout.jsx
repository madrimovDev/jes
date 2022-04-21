import { memo, useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar'
import { useTest } from '../../Contexts/TestContext'
import { useUserContext } from '../../Contexts/UserContext'
import { Task } from '../Task'

export const Mainlayout = memo(() => {
  const { tests, fetchTest } = useTest()
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  useLayoutEffect(() => {
    fetchTest()
  }, [])

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        {tests.isLoading ? <div>Loading...</div> : <Outlet context={[tests.tests[count], setCount]} />}
      </div>
    </>
  )
})
