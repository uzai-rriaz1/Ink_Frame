import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const authStatus = useSelector((state) => state.authSlice.status);
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);
  return loader ? <h1>...loading</h1> : <>{children}</>;
}

export default Protected;
