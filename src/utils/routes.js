import Homepage from "../pages/homepage/homepage.component";
import LoginPage from "../pages/login/login.component";
import ProductsPage from "../pages/products/products.component";
import SignupPage from "../pages/signup/signup.component";

const routes = [
    {
        path: "/",
        component: Homepage,
        exact: true
    },
    {
        path: "/products",
        component: ProductsPage
    },
    {
        path: "/login",
        component: LoginPage,
        exact: true
    },
    {
        path: "/signup",
        component: SignupPage,
        exact: true
    },
]

export default routes;