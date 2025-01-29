import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import About from "./components/About/About";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Error from "./components/Error";
import { Contact } from "./components/Contact";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className='app'>
      <div className='w-full min-h-screen'>
        <Header />
        <ScrollToTop />
        <Outlet />
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
