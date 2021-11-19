import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Container, Row } from "react-bootstrap";
import { loginUser } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import { Route } from "react-router-dom";
 


const Login = (props) => {
  const [login, setLogin] = useState({ email: "", password: "" });
const history=useNavigate()
  const loginToken = props.loginUserss;
  const token=localStorage.getItem('token')
  console.log('tokenn',token)
    console.log("object", loginToken);
// localStorage.setItem('token',)
  const handleLogin = (e) => {
    e.preventDefault();
    props.loginUser( {login} );
    setLogin({ email: "", password: "" });
    const valid= token? history('/users') : history('/login');
    console.log('VALID TOKEN',valid)

    // props.history.push('/users');
    // localStorage.setItem('loginToken','valueee')
  };

  // const privateRoute = (props) => {
  //   const token = localStorage.getItem('loginToken');
  //   if(loginToken) {
  //     return <Route exact={true} path={props.path} component={props.component}/>   
  //   }
  //   else{
  //     return<Login {...props}/>
  //   }
  // }

  return (
    <div>
      <h4 className="col-sm-6" style={{ marginTop: "2rem" }}>
        Login Page
      </h4>
      <div style={{ paddingTop: "0.8rem" }}>
        <Container>
          <form>
            <Row className="col-sm-6" style={{ margin: "0.2rem" }}>
              <input
                type="text"
                placeholder="Enter Email"
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
            </Row>
            <Row className="col-sm-6" style={{ margin: "0.2rem" }}>
              <input
                type="password"
                placeholder="Enter Password"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </Row>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <Row className="col-sm-6" style={{ margin: "0.3rem" }}>
                <Button variant="dark" onClick={handleLogin}>
                  Login
                </Button>
              </Row>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Row className="col-sm-6" style={{ margin: "0.3rem" }}>
                <Button variant="dark">cancel</Button>
              </Row>
            </Link>
      {/*             
            {loginToken == undefined ? (
              <Row
                className="mt-1 justify-content-md-left"
                xs
                mt="3"
                lg="3"
              >Enter to Login...</Row>
            ) : (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                <font color="green">Login Succesfully</font>
              </Row>
            )} */}

            {Object.keys(loginToken).length < 1 &&
              typeof loginToken === "object" && (
                <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                  <font color="red">Login unsuccessfull...</font>
                </Row>
              )}
            {Object.keys(loginToken).length > 0 && (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                <font color="green">User Login Successfully...</font>
              </Row>
            )}
          </form>
        </Container>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loginUserss: state.loginData,
});

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
