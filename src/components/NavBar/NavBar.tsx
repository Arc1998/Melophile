import React, { FC , useState } from "react";
import { CustomHeader } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../reducers/userReducer";
import { Button } from "../../atom/Button";
import { Input } from '../../atom/InputBox';
import { setSearch } from "../../reducers/songReducer";

interface NavHeaderProps {
  children?: React.ReactNode;
  loggedUser?: string;
}

const NavHeader: FC<NavHeaderProps> = ({ children }) => {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchData,setSearchData]=useState("")
 

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleFormSubmit = (e: any) => {
     if(searchData==="")
     alert("Enter Valid Data")
     else{
      if(user.isLoggedIn===true)
      dispatch(setSearch({search:searchData}))
      else
      navigate("/login")
     }
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
     <div style={{display:"flex"}}>
          <Input
            id="searchData"
            name="searchData"
            placeholder="Search For Song"
            value={searchData}
            onChange={(e: any) => {
              setSearchData(e.target.value)
            }}
            />
            <Button
              variant="primary"
              size={"large"}
              text={"Search"}
              type={"submit"}
              style={{marginLeft:"4px",marginTop:"8px"}}
              onClick={handleFormSubmit}
           />
      </div>  
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
