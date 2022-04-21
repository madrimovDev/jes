import { useUserContext } from "../Contexts/UserContext";

export const Navbar = () => {
  const { username } = useUserContext();
  return (
    <div className="navbar justify-between bg-base-200">
      <span className="btn btn-lg btn-ghost normal-case font-bold">
        <span className="text-accent ">Jest</span>Platform
      </span>
      <div className="flex gap-2 btn btn btn-ghost">
        <span className="text-accent font-bolder">{username}</span>
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791" />
          </div>
        </label>
      </div>
    </div>
  );
};
