import { Route } from "react-router-dom"
import { lazy } from "react"

const routes = [
    {
        path: "",
        element: lazy(() => import("./../templates/HomeTemplate/HomeTemplate")),
        nested: [
            { path: "", element: lazy(() => import("./../pages/Home/Home")) },
        ],
    },
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