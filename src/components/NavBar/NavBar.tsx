import React, { FC } from "react";
import { CustomHeader } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../reducers/userReducer";
import { Button } from "../../atom/Button";

interface NavHeaderProps {
  children?: React.ReactNode;
  loggedUser?: string;
}

const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handlenavigate =()=>{
    navigate("/login")
  }

  return (
    <CustomHeader>
      <div>
      {!user.isLoggedIn && <span className="welcome-text">Welcome Melophile !</span>}
      {user.isLoggedIn && <span className="welcome-text">Welcome, {user.userAuth.name}!</span>}
    </div>

      <div>
        {!user.isLoggedIn && (

<Button
variant="primary"
size={"large"}
text={"Login"}
type={"submit"}
onClick={handlenavigate}
/>
           
        )}
        {user.isLoggedIn && (
          <Button
          variant="primary"
          size={"large"}
          text={"Log Out"}
          type={"submit"}
          onClick={handleLogout}
          />
        )}
      </div>
    </CustomHeader>
  );
};

export default NavHeader;
