import { createBrowserRouter, Link, RouterProvider } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import MyBookings from "../../Pages/MyBookings/MyBookings";
import Blogs from "../../Pages/Blogs/Blogs";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import DoctorDetails from "../../Pages/DoctorDetails/DoctorDetails";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: (
      <div className="text-center bg-center bg-white p-10 my-12 shadow-lg">
        <h1 className="text-4xl text-red-600">404-Page Not Found</h1>
        <p className="my-4">oops! The page you are looking doesn't found</p>
        <Link className="bg-[#176AE5] px-8 py-2 rounded-3xl text-white " to="/">
          Go to Home
        </Link>
      </div>
    ),
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: (
          <p className="text-center my-2">
            <span className="loading loading-bars loading-sm"></span>
          </p>
        ),
      },
      {
        path: "/doctorDetails/:id",
        Component: DoctorDetails,
        loader: () => fetch("/Data.json"),
        hydrateFallbackElement: (
          <p className="text-center my-2">
            <span className="loading loading-bars loading-sm"></span>
          </p>
        ),
        errorElement: (
          <div className="text-center bg-center bg-white p-10 my-12 shadow-lg">
            <h1 className="text-4xl text-red-600">No Doctor Found</h1>
            <p className="my-4">oops! The page you are looking doesn't found</p>
            <Link className="bg-[#176AE5] px-8 py-2 rounded-3xl text-white " to="/">
              View All Doctors
            </Link>
          </div>
        )
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: () => fetch("/Blogs.json"),
        hydrateFallbackElement: (
          <p className="text-center my-2">
            <span className="loading loading-bars loading-sm"></span>
          </p>
        ),
      },
      {
        path: "/contactUs",
        Component: ContactUs,
      },
    ],
  },
]);
