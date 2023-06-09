import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from '../redux/actions/authAction';
import logo1 from "../components/header/logoConnect.png";
const Register = () => {
    const {auth, alert} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

     const initialState = { fullname: "", username: "", email: "", password: "", cf_password: "", gender: "male" };
     const [userData, setUserData] = useState(initialState);
     const { fullname, username, email, password, cf_password } = userData;

     const [typePass, setTypePass] = useState(false);
     const [typeCfPass, setTypeCfPass] = useState(false);

    useEffect(() => {
      if (auth.token) history.push("/");
    }, [auth.token, history]);

   

    

    const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(register(userData));
    };

    return (
      <div className="auth_page">
        <form onSubmit={handleSubmit} className="inner-shadow">
          <h3 className="text-uppercase text-center mb-4 auth-heading">
          <img style={{width:"20%",height:"30%"}} src={logo1}/ > Connect
          </h3>
          <div className="mb-3">
            <label htmlFor="fullname" className="form-label" style={{color:'white'}}>
              Full name
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="text"
                className="form-control"
                id="fullname"
                onChange={handleChangeInput}
                value={fullname}
                name="fullname"
                style={{ background: `${alert.fullname ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.fullname ? alert.fullname : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{color:'white'}}>
              User name
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="text"
                className="form-control"
                id="username"
                onChange={handleChangeInput}
                value={username.toLowerCase().replace(/ /g, "")}
                name="username"
                style={{ background: `${alert.username ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.username ? alert.username : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{color:'white'}}>
              Email address
            </label>
            <div className="outer-shadow hover-in-shadow form-input-wrap">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                onChange={handleChangeInput}
                value={email}
                name="email"
                style={{ background: `${alert.email ? "#fd2d6a14" : ""} ` }}
              />
            </div>
            <small className="form-text text-danger">
              {alert.email ? alert.email : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{color:'white'}}>
              Password
            </label>
            <div className="pass">
              <div className="outer-shadow hover-in-shadow form-input-wrap">
                <input
                  type={typePass ? "text" : "password"}
                  className="form-control"
                  id="password"
                  onChange={handleChangeInput}
                  value={password}
                  name="password"
                  style={{
                    background: `${alert.password ? "#fd2d6a14" : ""} `,
                  }}
                />
                <small onClick={() => setTypePass(!typePass)}>
                  {typePass ? "Hide" : "Show"}
                </small>
              </div>
            </div>
            <small className="form-text text-danger">
              {alert.password ? alert.password : ""}
            </small>
          </div>

          <div className="mb-3">
            <label htmlFor="cf_password" className="form-label" style={{color:'white'}}>
              Confirm Password
            </label>
            <div className="pass">
              <div className="outer-shadow hover-in-shadow form-input-wrap">
                <input
                  type={typeCfPass ? "text" : "password"}
                  className="form-control"
                  id="cf_password"
                  onChange={handleChangeInput}
                  value={cf_password}
                  name="cf_password"
                  style={{
                    background: `${alert.cf_password ? "#fd2d6a14" : ""} `,
                  }}
                />
                <small onClick={() => setTypeCfPass(!typeCfPass)}>
                  {typeCfPass ? "Hide" : "Show"}
                </small>
              </div>
            </div>
            <small className="form-text text-danger">
              {alert.cf_password ? alert.cf_password : ""}
            </small>
          </div>

          <div className="d-flex justify-content-evenly  mx-0 mb-1">
            <label htmlFor="male" style={{color:'white'}}>
              Male:
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                defaultChecked
                onChange={handleChangeInput} style={{marginLeft:'7px',marginTop:'4px',marginBottom:'4px'}}
              />
            </label>

            <label htmlFor="female" style={{color:'white'}}>
              Female:
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChangeInput} style={{marginLeft:'7px',marginTop:'4px',marginBottom:'4px'}}
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn-1 w-100 d-flex outer-shadow hover-in-shadow justify-content-center"
          >
            Register
          </button>
          <p className="my-2" style={{color:'white'}}>
            Already have an account?{" "}
            <Link to="/" style={{ color: "crimson" }}>
              Login Now.
            </Link>
          </p>
        </form>
      </div>
    );
}

export default Register;
