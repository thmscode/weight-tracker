import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
