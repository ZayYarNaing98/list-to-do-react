import React, { useState } from "react";
import authRequest from "../../api/authRequest";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import "../../assets/styles/Login.css";
import logo from "../../assets/img/logo.png";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const [authInfo, setAuthInfo] = useState<any>({
    token: "",
    id: "",
    name: "",
    email: "",
    gender: "",
    status: "",
    address: "",
  });

  const handleTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleAuth = (e: any) => {
    e.preventDefault();

    authRequest({ email: inputData.email, password: inputData.password })
      .then((response) => {
        console.log(response.data);

        const responseData = response.data;
        if (responseData.code === 200) {
          toast.success(responseData.message);

          const data = {
            token: responseData.data.token,
            id: responseData.data.id,
            name: responseData.data.name,
            email: responseData.data.email,
            gender: responseData.data.gender,
            status: responseData.data.status,
            address: responseData.data.address,
          };
          localStorage.setItem("authData", JSON.stringify(data));
        }
        navigate("/hello");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  console.log(authInfo);

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="form-container">
          <form action="" onSubmit={handleAuth}>
            <img src={logo} alt="Logo" className="logo" />
            <div className="title">
              <InputLabel htmlFor="">Login</InputLabel>
            </div>

            <div className="email">
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="email"
                  type="text"
                  label="Email"
                  placeholder="Enter your email"
                  value={inputData.email}
                  onChange={(e) => {
                    setInputData({ ...inputData, email: e.target.value });
                  }}
                />
              </FormControl>
            </div>

            <div className="password">
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleTogglePassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  label="Password"
                  placeholder="Enter your password"
                  value={inputData.password}
                  onChange={(e) => {
                    setInputData({ ...inputData, password: e.target.value });
                  }}
                />
              </FormControl>
            </div>

            <div className="button">
              <Button type="submit" variant="contained" size="large" fullWidth>
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
