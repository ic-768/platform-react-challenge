import { Outlet } from "react-router-dom";

import Header from "./ui/header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 pt-24">
        <Outlet />
      </main>
    </div>
  );
}
