import { useSelector } from "react-redux/es/exports";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
export default PrivateRoute;
