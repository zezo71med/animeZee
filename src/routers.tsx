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
import Shipping from "./pages/shipping";
import NotFound from "./pages/Error";
import Services from "./pages/Service";
import RegisterForm from "./pages/RegisterForm";
import MainPage from "./components/react-query/MainPage";
import DataPage from "./components/react-query/DataPage";
import RQDataPage from "./components/react-query/RQDataPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Login from "./pages/Login";

export default AppRouters;
const ProtectedRoutes = ({ children, user }) => {
  if (!user) {
    // user not logged in
    return <Navigate to="/" />;
  }
  return children;
};

const cusRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
      <Route index element={<App />} />
      <Route path="about" element={<h1>about</h1>} />
      <Route path="services" element={<Services />} />
      <Route path="cart" element={<Shipping />} />
      <Route path="register" element={<RegisterForm />} />
      <Route path="login" element={<Login />} />
      <Route path="rq" element={<ReactQueryRoutes />}>
        <Route path="rqMainpage" element={<MainPage />} />
        <Route path="rqdata/:id" element={<DataPage />} />
        <Route path="rqpage" element={<RQDataPage />} />
      </Route>
      <Route
        path="profile"
        element={
          <ProtectedRoutes user={false}>
            <h1>profile</h1>
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function RootLeyout() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
}
const queryClient = new QueryClient();
export function ReactQueryRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

function AppRouters() {
  return <RouterProvider router={cusRouters} />;
}
