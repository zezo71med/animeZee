import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import App from "./App";

const cusRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
      <Route index element={<App />} />
      <Route path="about" element={<h1>about</h1>} />
      <Route path="services" element={<h1>services</h1>} />
    </Route>
  )
);
function RootLeyout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
function AppRouters() {
  return <RouterProvider router={cusRouters} />;
}
export default AppRouters;
