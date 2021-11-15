import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { registerUsers, loginUser } from "../actions";
import { connect } from "react-redux";

const Register = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [login, setLogin] = useState({ email: "", password: "" });

  // console.log("REG..", props.regUser);
  // console.log("LOGIN...", props.loginUserss);
  // console.log("errorrrrr",props.unRegi);

  const regToken = props.regUser;
  console.log(regToken,"fffff");
  const loginToken = props.loginUserss.token;
  // const regError = props.unRegi.error;

  const handleLogin = (e) => {
    e.preventDefault();
    props.loginUser({ login });
    setLogin({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.registerUsers( data );
    setData({ email: "", password: "" });
  };

  return (
    <div>
      <div style={{ paddingTop: "2rem" }}>
        <Container>
          <form>
            <Row className="col-sm-6" style={{ margin: "0.2rem" }}>
              <input
                type="text"
                placeholder="Enter Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Row>
            <Row className="col-sm-6" style={{ margin: "0.2rem" }}>
              <input
                type="password"
                placeholder="Enter Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Row>
            <Row className="col-sm-6" style={{ margin: "0.3rem" }}>
              <Button variant="dark" onClick={handleSubmit}>
                Register
              </Button>
            </Row>
            {Object.keys(regToken).length < 1 && typeof regToken === "object"   && (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                <font color="red">registration unsuccessfull...</font> 
              </Row>
            ) }
            {Object.keys(regToken).length > 0   && (
              <Row className="mt-1 justify-content-md-left" xs mt="3" lg="3">
                <font color="green">
                  User Registered Succesfully.Please Login
                </font>
              </Row>
            ) }
          
          </form>
        </Container>
      </div>

      <div style={{ paddingTop: "3rem" }}>
        <Container>
          <form>
            <Row className="col-sm-6" style={{ margin: "0.2rem" }}>
              Already User? Then please Login...
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
            <Row className="col-sm-6" style={{ margin: "0.3rem" }}>
              <Button variant="dark" onClick={handleLogin}>
                Login
              </Button>
            </Row>

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
            )}

          </form>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  regUser: state.registration,
  loginUserss: state.loginData,
});

const mapDispatchToProps = {
  registerUsers,
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
