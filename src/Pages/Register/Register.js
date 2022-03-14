import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import GoogleLogo from "../Login/google-logo.png";
// import useFirebase from "../../hooks/useFirebase";
import { Alert } from "@material-ui/lab";
import useAuth from "../../hooks/useAuth";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

const Register = () => {
  const {
    signInUsingGoogle,
    handleRegister,
    handleNameChange,
    handleEmailChange,
    handleChange,
    handleClickShowPassword,
    values,
    setError,
    verifyEmail,
    setUserName,
    error,
    isLoading,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location?.state?.from || "/user-dashboard";

  const handleRegisterRedirects = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handleRegister()
      .then((result) => {
        navigate(redirect_uri);
        const user = result.user;
        verifyEmail();
        setUserName();
        setError("");
        // console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // google login handler
  const handleGoogleLogIn = () => {
    signInUsingGoogle().then((result) => {
      navigate(redirect_uri);
    });
  };
  const classes = useStyles();
  // const [values, setValues] = useState({
  //   amount: "",
  //   password: "",
  //   weight: "",
  //   weightRange: "",
  //   showPassword: false,
  // });
  // Password change handler
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  //   console.log(event.target.value);
  //   setPass(event.target.value);
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-page-main">
      {!isLoading && (
        <div
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="800"
          className="register-form-div"
        >
          <h1 data-aos="fade-down" data-aos-once="true">
            Register
          </h1>
          <form onSubmit={handleRegisterRedirects} className="register-form">
            <div className="register-form-wraper">
              {/* <label for="email">Email</label>
          <input
            type="email"
            name="email"
            autocomplete="off"
            placeholder="email@example.com"
          /> */}
              <TextField
                className={clsx(
                  classes.margin,
                  classes.border,
                  classes.textField
                )}
                onBlur={handleNameChange}
                type="text"
                id="outlined-basic"
                label="Name"
                name="name"
                variant="outlined"
                required
              />
            </div>
            <div className="register-form-wraper">
              <TextField
                className={clsx(
                  classes.margin,
                  classes.border,
                  classes.textField
                )}
                onBlur={handleEmailChange}
                type="email"
                id=""
                label="Email"
                variant="outlined"
                required
              />
            </div>
            <div className="register-form-wraper">
              {/* <label for="password">Password</label>
          <input type="password" name="password" /> */}
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={70}
                />
              </FormControl>
            </div>
            <button className="register-submit-btn" type="submit">
              Register
            </button>
          </form>

          {/* error message */}
          <div className="mt-3">
            {error && <Alert severity="error">{error}</Alert>}
          </div>
          <h3 className="or-text">
            ----------- <span>Or</span> ----------
          </h3>
          <div>
            {/* google sign in btn */}
            <button onClick={handleGoogleLogIn} className="google-signin-btn">
              <img className="text-start" src={GoogleLogo} alt="" />
              <span>Continue with google</span>
            </button>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="loading-div">
          <CircularProgress color="success" />
        </div>
      )}
      <h6 className="bottom-text mt-3">
        Already have an account? <Link to="/user-login">Log in</Link>
      </h6>
    </div>
  );
};

export default Register;
