import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Blogs from "./pages/blogs/Blogs.tsx";
import About from "./pages/about/About.tsx";
import Contact from "./pages/contact/Contact.tsx";
import AddBlog from "./pages/blogs/addblog/AddBlog.tsx";
import ManageBlogs from "./pages/blogs/manageBlog/ManageBlogs.tsx";
import UpdateBlog from "./pages/blogs/manageBlog/UpdateBlog.tsx";
import BlogDetails from "./pages/blogs/BlogDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
      {
        path: "/add-blog",
        element: <AddBlog/>,
      },
      {
        path: "/manage-blog",
        element: <ManageBlogs/>,
      },
      {
        path: "/blogs/edit/:id",
        element: <UpdateBlog/>,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
