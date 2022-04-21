import { useState } from 'react'

export const Task = () => {
  const [variants, setVariants] = useState()

  const handleChanges = (event) => {
    const name = event.target.id
    const value = event.target.value
    setVariants(() => ({ [name]: value }))
    console.log(variants)
  }

  const test = {
    question:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis cumque nesciunt dolores.Id tempore eum, explicabo voluptatibus laboriosam architecto ullam quae qui exercitationemrem at illo, neque, eos recusandae accusamus!',
    variants: [
      {
        content: 'Variant A',
        isRight: true,
      },
      {
        content: 'Variant B',
        isRight: false,
      },
      {
        content: 'Variant C',
        isRight: false,
      },
      {
        content: 'Variant D',
        isRight: false,
      },
    ],
  }

  return (
    <div className="flex flex-col gap-10 mt-[15vh]">
      <h1 className="text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis cumque nesciunt dolores.
        Id tempore eum, explicabo voluptatibus laboriosam architecto ullam quae qui exercitationem
        rem at illo, neque, eos recusandae accusamus!
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <label className="btn btn-lg btn-primary">
          Variant
          <input id="a" name="variant" onChange={handleChanges} type="radio" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input id="b" name="variant" onChange={handleChanges} type="radio" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input id="c" name="variant" onChange={handleChanges} type="radio" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input id="d" name="variant" onChange={handleChanges} type="radio" className="" />
        </label>
      </div>
    </div>
  )
}
