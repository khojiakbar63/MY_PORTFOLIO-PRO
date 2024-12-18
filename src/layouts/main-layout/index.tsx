import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layouts/header";

const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
