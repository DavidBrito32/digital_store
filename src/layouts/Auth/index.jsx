import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer'
import HeaderAuth from "../../components/HeaderAuth";


const AuthLayout = () => {

    return (
        <>
            <HeaderAuth />
                <Outlet />
            <Footer />
        </>
    )
}

export default AuthLayout;