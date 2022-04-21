import { useRef } from 'react'
import { useUserContext } from '../Contexts/UserContext'

export const Login = () => {
  const username = useRef()
  const { setName } = useUserContext()

  const submitHandler = (event) => {
    event.preventDefault()
    let name = username.current.value

    if (!name.trim()) return
    setName(name)
    username.current.value = ''
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col p-5 max-w-2xl min-w-[300px] mt-[10vh] bg-base-200 rounded-md shadow-md"
      >
        <label className="label" htmlFor="input">
          Ismingizni kiriting
        </label>
        <input
          ref={username}
          type="text"
          id="input"
          className="input input-bordered mb-4"
          placeholder="John Doe"
        />
        <button className="btn btn-primary">Start</button>
      </form>
    </div>
  )
}
