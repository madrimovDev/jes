import { createContext, useContext, useState } from 'react'

const TextContext = createContext()
TextContext.displayName = 'TextContext'

export const useTest = () => useContext(TextContext)

export default function TextContextProvider({ children }) {
  const intialTests = {
    isLoading: true,
    tests: [],
  }
  const [tests, setTests] = useState(intialTests)

  const fetchTest = () => {
    fetch('http://jest-platform.herokuapp.com/api/tests', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJyb2xlIjoidXNlciIsInVzZXJuYW1lIjoiQ280VFdVVjhCSWxCUDZZUnp1YWJXIiwiaWF0IjoxNjUwNTQxNjkyfQ.uao7B9cwWB3gViFsXjOvJfT2nRANV2xDsU8RiJ8ScPY',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTests({
          isLoading: false,
          tests: res,
        })
      })
  }

  return (
    <TextContext.Provider
      value={{
        tests,
        fetchTest,
      }}
    >
      {children}
    </TextContext.Provider>
  )
}
