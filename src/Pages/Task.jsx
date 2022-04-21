import { useRef, useState } from 'react'
import { useOutletContext, useParams, Link } from 'react-router-dom'

export const Task = () => {
  const [test, setCount] = useOutletContext()
  const { id } = useParams()
  const [answer, setAnswer] = useState()
  const [answers, setAnswers] = useState([])

  const b1 = useRef()
  const b2 = useRef()
  const b3 = useRef()
  const b4 = useRef()

  const classname = 'px-3 py-6 bg-neutral text-white text-left'

  const checked = (event) => {
    b1.current.className = classname
    b2.current.className = classname
    b3.current.className = classname
    b4.current.className = classname
    event.target.className = 'px-3 py-6 bg-accent text-white text-left'
    setAnswer({ question: test.question, answer: event.target.id })
  }

  const nextQuestion = () => {
    setAnswers([...answers, answer])
    setCount((prev) => prev + 1)
    b1.current.className = classname
    b2.current.className = classname
    b3.current.className = classname
    b4.current.className = classname
    console.log(answers)
  }

  if (!test) {
    
    return <div></div>
  }

  return (
    <div className="flex flex-col gap-10 mt-[15vh]">
      <h1 className="text-xl">{test.question}</h1>
      <div className="grid md:grid-cols-2 gap-5">
        <button onClick={checked} ref={b1} id={test.variants[0].id} className={classname}>
          A. {test.variants[0].content}
        </button>
        <button onClick={checked} ref={b2} id={test.variants[1].id} className={classname}>
          B. {test.variants[1].content}
        </button>
        <button onClick={checked} ref={b3} id={test.variants[2].id} className={classname}>
          C. {test.variants[2].content}
        </button>
        <button onClick={checked} ref={b4} id={test.variants[3].id} className={classname}>
          D. {test.variants[3].content}
        </button>
      </div>
      <button onClick={nextQuestion}>Next</button>
    </div>
  )
}
