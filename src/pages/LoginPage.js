import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import AuthContext from "../context/AuthContext";
import React, { useContext } from "react";
const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={loginUser}>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginUsernameEx" className="grey-text">
                Your Username
              </label>
              <input
                type="text"
                id="defaultFormLoginUsernameEx"
                className="form-control"
                name="username"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
                name="password"
              />
              <div className="text-center mt-4">
                <input type="submit" className="btn btn-dark" />
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginPage;
