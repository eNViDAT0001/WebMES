import { Outlet } from "react-router-dom";


export const PathLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};
export const TitleWithPathLayout = () => {
    return (
      <div>
        <Outlet></Outlet>
      </div>
    );
  };
