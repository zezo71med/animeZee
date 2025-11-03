import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import App from "./App";
import NotFound from "./pages/Error";

export default AppRouters;
 const ProtectedRoutes = ({children,user})=>{
    if(!user){
        // user not logged in
        return <Navigate to="/"  />;
    }
  return children;
}
const cusRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
      <Route index element={<App />} />
      <Route path="about" element={<h1>about</h1>} />
      <Route path="services" element={<h1>services</h1>} />
      <Route path="profile" element={
        <ProtectedRoutes user={false} >
        <h1>profile</h1>
        </ProtectedRoutes>
        } />
      <Route path="*" element={<NotFound />} />
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