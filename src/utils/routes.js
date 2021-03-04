import Homepage from "../pages/homepage/homepage.component";
import LoginPage from "../pages/login/login.component";
import ProductsPage from "../pages/products/products.component";
import SignupPage from "../pages/signup/signup.component";
import ShoppingCartPage from "../pages/shopping-cart/shoppin-cart.component";

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