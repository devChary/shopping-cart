import Homepage from "pages/homepage";
import LoginPage from "pages/login";
import ProductsPage from "pages/products";
import SignupPage from "pages/signup";
import ShoppingCartPage from "pages/shopping-cart";

const routes = {

    withoutSidebarRoutes: [
        {
            path: "/",
            component: Homepage,
            exact: true,
        },
        {
            path: "/login",
            component: LoginPage,
            exact: true,
        },
        {
            path: "/signup",
            component: SignupPage,
            exact: true,
        },
        {
            path: "/shopping-cart",
            component: ShoppingCartPage,
            exact: true,
        },
    ],
    withSidebarRoutes: [
        {
            path: "/products",
            component: ProductsPage,
        },
    ]
}

export default routes;