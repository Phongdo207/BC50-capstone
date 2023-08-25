import { Route } from "react-router-dom"
import { lazy } from "react"

const routes = [
    {
        path: "",
        element: lazy(() => import("./../templates/HomeTemplate/HomeTemplate")),
        nested: [
            { path: "", element: lazy(() => import("./../pages/Home/Home")) },
            { path: "login", element: lazy(() => import("./../pages/Login/Login")) },
            { path: "dang-ky", element: lazy(() => import("./../pages/Register/Register")) },
            { path: "info-movie/:id", element: lazy(() => import("./../pages/Infofilm/index")) },
            { path: "check-out", element: lazy(() => import("./../pages/Checkout/Checkout"))},
        ],
    },

    {
        path: "admin",
        element: lazy(() => import("./../templates/AdminTemplate/AdminTemplate")),
        nested: [
            { path: "add-user", element: lazy(() => import("./../Adminpages/AddUser/index"))},
            { path: "film", element: lazy(() => import("./../Adminpages/Film/index"))},
            { path: "home", element: lazy(() => import("./../Adminpages/Home/index"))},
        ]
    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {route.nested.map((item) => <Route key={item.path} path={item.path} element={<item.element />} />
                )}
            </Route>
        } else {
            // Khi route không có dữ liệu
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes;