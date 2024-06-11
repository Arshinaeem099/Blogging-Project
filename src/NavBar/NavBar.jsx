import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../SignInTab/UserSlice";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    dispatch(Logout());
    navigate("/"); // Navigate to login page after logout
  };
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#ef7520" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Tabs textColor="inherit">
              <Tab
                icon={
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAkFBMVEX/VyL/////SgD+s6L/TQz/moz71tD+Uxv64dz/pZj/RgD/yb//OQD/QQD/Vh//7ur26+f/UBT+uan+8/D9xLn7n43+c0369fL/LQD+iXX/rZz9knj/Yj/85+P/Qwv+cFH/hW3/WDD+loT+Xy39nIb+gmL+aUX/SiH/eF3/YTb9Z0r+mX/7vLD/rKL/0cf/i3EGwNwPAAAEnklEQVR4nO2cbXOiOhSAkxAJRgJEUBRlwW5rddvV///vFrTt2pU3yQlw5/JM2+mHTn0mCSfJyQkIX/C80AoWS9Qby0UQXzxy0FUKx5MdIaw/KUbIceJ+lzIocfozuuIQOsc3UhPeYyP9hYko/JJKeN86n4i38EPqaTBOmZWRWSEvXAzIKbOaY4w8V/Q+xG9h1MUofCJ9e3yHPGFk7QbVUFlk2FkoGFhDIcQjtBicFD2j5SDC5i3Oz74NihjYIB8ZGflvkS2lKatDEiK7MxIr+RzNzTpm0WK7Ep14SZoEPm6K/76WVLeSI7ansLHSBfPF1juvkt37Y0YXTnudSxCRxi2csk5MhTYn/txKKWeua9ttR62dMA6klpUIV3HKrHTslvhGyQnjCH5cyeTBSHBHuIZ+Bp3Xds/dNysBPNgVB9SVADa2s6MLIBUeQCdCbgA4ZTPOCtDJYaqj/IM9YFPRFxgnbACOKj4DkjIdsAjKjurx4Ir/CywqsD3Es3chBRtUcg3lhN/ABhWdgEm9gyVWAaUCsFm5Ssoy5zlRZBj51zz/kX0HVnFkm3UgZa0JzxH8i89fU6tQytYuFazK15PSDnppKYtWhULGCtpKv9Sy+vmm+x66z6/7gIKm0t5SUV3M4b+7l6o9OCE9SNUee/UhNa/7AHKfeND/9FVGhPzI5z5lpF+qpv+Ktq/6I7p/qBrqpGj72sHc5ydESueL7E8/l7tM8qQo39fFhIyDw0HeJF45peIyJx/T4k1ZBxNyRhi6N8T5V5zhl+zJupF6kNMQpTBYlgpS6gyVD4KUshDQzg9SCs9tmK0fqBQ+HSShkqmOLVipLC5E6f5IFPN60FIXwvetUj9qkcI4rlnj9yKllkPTJnVSaCptUn7SfrBrk8LP7ZtKn5TRftIZpUapUWqUaih1MqbVzGeFyU+NUla2YKuBstdzaRmKDimTN5nmHfKrzEqDVNx0mUZeSqw0SK0bn2mIkiNoeKnaROxfZEGiWI9UbSbvhlXx4Ry81CMV7HZxXICXehui1CC7z21eZcB+Fv4HLSGh8b8UJcUWGqSs14bBky+7C57Y3Da5uiVFmZOeCdnd0JVdzUocjU4n5IzQtcqJ8+RsVaXq/2mRp8ak/Q4ZsIIDTortm1cwP4RKgsNBFctsFdytQopRQNVP/cNMpfKFpnqkNkqZfq6n/9QS/QSizPMOhSiVA1Pn+Q++yjDP4VN4qalygZc4QTvFP5RP2SR0B/oJwMERPQBVxX5wBqnOI2+QTlB3VO329y7uncBKAXgKNDH7YIe2uVViQjjFsK8bkGKq/BD60x/Ql8b40VB7Co0th7+rwujrJqjcDZS3kTvbIE1XjRzCt8lkYjzIZJJshc6XjjAmaV0G9i4jK9ngrqqPjIyMjIyMjMCxH95aR6JoiC8wMgb18rAcHg3wpViOifBLd28WaQRLPIRNsEpxGIQZIozTQQ11vsEe8rz4OKCoIPNrG5lUOIN+dUB76C6/+ZxJeXi2G0gP8uRyGzuX8sI4tZXrxNVh9kceDF1f64nNhDUqP9KG5DT5TER/SuHQMs49WrHl4hSG3lXqD8FrVv690rZYAAAAAElFTkSuQmCC"
                    height={40}
                    alt="logo"
                  />
                }
              />
              <Tab component={Link} to="/Home" label="home" />
              <Tab component={Link} to="/about" label="about" />
              <Tab component={Link} to="/blogs" label="blogs" />
            </Tabs>
          </Box>
          <Tabs textColor="inherit">
            <Tab
              component={Link}
              to="/"
              onClick={handleSignOut}
              label="logout"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
