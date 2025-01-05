import { createBrowserRouter } from "react-router";
import MainLayot from "../Layouts/MainLayot";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddMovies from "../Pages/AddMovies";
import PrivateRoute from "./PrivateRoute";
import AllMoviesPage from "../Pages/AllMoviesPage";
import MovieDetails from "../Pages/MovieDetails";
import FavoriteMoviePage from "../Pages/FavoriteMoviePage";
import UpdateMovie from "../Pages/UpdateMovie";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayot></MainLayot>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('https://favflix-server.vercel.app/featured-movies'),
                element: <Home></Home>
            },
            {
                path:'/addmovies',
                element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
            },
            {
                path: "/updatemovie/:id",
                loader: ({params})=> fetch(`https://favflix-server.vercel.app/movies/${params.id}`),
                element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>
            },
            {
                path: "/allmovies",
                loader: ()=>fetch('https://favflix-server.vercel.app/movies/'),
                element: <AllMoviesPage></AllMoviesPage>
            },
            {
                path: `/movies/:id`,
                loader: ({params})=> fetch(`https://favflix-server.vercel.app/movies/${params.id}`),
                element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>
            },
            {
                path: "/myfavorites",
                element: <PrivateRoute><FavoriteMoviePage></FavoriteMoviePage></PrivateRoute>
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path: '/password-reset',
                element: <ForgetPassword></ForgetPassword>
            },
        ]
    }
])


export default router