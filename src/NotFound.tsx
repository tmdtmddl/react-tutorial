import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-2.5">
      <h1 className="font-bold text-xl">NotFound</h1>
      <p>Please return home</p>
      <Link
        to={"/"}
        className="rounded bg-sky-500 text-white h-10 flex items-center px-2.5 "
      >
        {" "}
        return home
      </Link>
    </div>
  );
};

export default NotFound;
