import { createHashRouter } from "react-router-dom"

import SalaIndexPage from "../SalaIndexPage"

import SalaItemPage from "../SalaItemPage"

import PeliculasIndexPage from "../PeliculasIndexPage"

import PeliculasItemPage from "../windows/PeliculasItemPage"

import Login from "../PeliculasReservaPage"
import MenuPage from "../MenuPage"

const Rutas = () => {
    return createHashRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/salas",
            element: <SalaIndexPage />
        },
        {
            path: "/salas/:id",
            element: <SalaItemPage />
        },
        {
            path: "/peliculas-index",
            element: <PeliculasIndexPage />
        },
        {
            path: "/peliculas-detalle/:id",
            element: <PeliculasDetallePage />
        },
        {
            path: "/autenticacion",
            // element: <AutenticacionPage />
        },
        {
            path: "/menu",
            element: <MenuPage/>
        }
    ])
}
export default Rutas
