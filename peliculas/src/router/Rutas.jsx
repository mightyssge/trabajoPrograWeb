import { createHashRouter } from "react-router-dom"

import SalaIndexPage from "../windows/SalaIndexPage"
import SalaItemPage from "../windows/SalaItemPage"
import PeliculasIndexPage from "../windows/PeliculasIndexPage"
import PeliculasItemPage from "../windows/PeliculasItemPage"
import PeliculasReserva from "../windows/PeliculasReservaPage"

//CESAR
//import Login from "../windows/LoginPage"
//import Register from "../windows/RegisterPage"
//import Recover from "../windows/RecoverPage"

const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            element: <PeliculasIndexPage /> //reemplazar por login despues
        },
        {
            path: "/salaIndex",
            element: <SalaIndexPage />
        },
        {
            path: "/salaIndex/:id",
            element: <SalaItemPage />
        },
        {
            path: "/peliculasIndex",
            element: <PeliculasIndexPage />
        },
        {
            path: "/peliculasItem/:id",
            element: <PeliculasItemPage />
        },
        {
            path: "/peliculasReserva/:id",
            element: <PeliculasReserva />
        }
        //{
           // path: "/register",
           // element: <Register />
        //},
        //{
           // path: "/recover",
           // element: <Recover/>
        //}
    ])
}
export default Rutas
