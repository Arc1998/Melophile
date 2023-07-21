import React, { FC, useState } from "react";
import { CustomHeader } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/userReducer";
import { Button } from "../../atom/Button";
import { Input } from "../../atom/InputBox";
import { setSearch } from "../../reducers/songReducer";
import { showToast } from "../../atom/Notification";

interface NavHeaderProps {
  children?: React.ReactNode;
  loggedUser?: string;
}

const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchData === "") {
      showToast({
        message: "Enter Valid Data",
        description: "",
      });
    } else {
      try {
        setIsLoading(true);
        if (user.isLoggedIn === true) {
          dispatch(setSearch({ search: searchData }));
        } else {
          navigate("/login");
          showToast({
            message: "You need to Login first",
            description: "",
          });
        }
      } catch (error) {
        console.error("Error while handling form submit:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <CustomHeader>
      <div>
        {!user.isLoggedIn && <span className="welcome-text">Welcome Melophile !</span>}
        {user.isLoggedIn && <span className="welcome-text">Welcome, {user.userAuth.name}!</span>}
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div style={{ display: "flex" }}>
            <Input
              id="searchData"
              name="searchData"
              placeholder="Search For Song"
              value={searchData}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchData(e.target.value)}
            />
            <Button
              variant="primary"
              size={"large"}
              text={"Search"}
              type={"submit"}
              style={{ marginLeft: "4px", marginTop: "8px" }}
              isDisable={isLoading}
            />
          </div>
        </form>
      </div>
      <div>
        {!user.isLoggedIn && (
          <Button
            variant="primary"
            size={"large"}
            text={"Login"}
            type={"submit"}
            onClick={handleNavigate}
            isDisable={isLoading}
          />
        )}
        {user.isLoggedIn && (
          <Button
            variant="primary"
            size={"large"}
            text={"Log Out"}
            type={"submit"}
            onClick={handleLogout}
            isDisable={isLoading}
          />
        )}
      </div>
    </CustomHeader>
  );
};

export default NavHeader;
