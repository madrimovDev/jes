import {  useState } from "react";

export const Task = () => {
  const [variants, setVariants] = useState({});

  const handleChanges = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setVariants((variants) => ({ ...variants, [name]: value }));
    console.log(variants);
  };

  return (
    <div className="flex flex-col gap-10 mt-[15vh]">
      <h1 className="text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
        cumque nesciunt dolores. Id tempore eum, explicabo voluptatibus
        laboriosam architecto ullam quae qui exercitationem rem at illo, neque,
        eos recusandae accusamus!
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <label className="btn btn-lg btn-primary">
          Variant
          <input name="a" onChange={handleChanges} type="checkbox" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input name="b" onChange={handleChanges} type="checkbox" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input name="d" onChange={handleChanges} type="checkbox" className="" />
        </label>
        <label className="btn btn-lg btn-primary">
          Variant
          <input name="c" onChange={handleChanges} type="checkbox" className="" />
        </label>
      </div>
    </div>
  );
};
