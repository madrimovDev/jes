import { Navbar } from "../../Contexts/Navbar";
import { Task } from "../Task";

export const Mainlayout = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Task/>
      </div>
    </>
  );
};
