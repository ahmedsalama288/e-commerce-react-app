import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogout, selectIsUserLogin } from "../redux/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsUserLogin);

  useEffect(() => {
    if (isUserLogin) {
      dispatch(userLogout());
    }
    localStorage.removeItem("token");
    navigate("/");
  }, [dispatch, isUserLogin, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>Logging out...</div>
  );
};

export default Logout;
