import React from "react";
import LogImage from "../assets/pngwing.com.png";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
const SignIn = () => {
  return (
    <div className="flex p-4 h-screen justify-center items-center bg-blue-100 ">
      <div className="flex  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   rounded-2xl overflow-hidden w-[60%] h-[80%]">
        <div className="flex-1 flex items-center justify-center bg-white  ">
          <img
            src={LogImage}
            alt="bg"
            className=" w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 ">
          <MDBCard className="bg-white mx-auto" style={{ maxWidth: "500px" }}>
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">
                Please enter your login and password!
              </p>

              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                className="mb-4"
                label="Remember password"
              />

              <MDBBtn size="lg">Login</MDBBtn>

              <hr className="my-4" />

              <MDBBtn
                className="mb-2 w-100"
                size="lg"
                style={{ backgroundColor: "#dd4b39" }}
              >
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with google
              </MDBBtn>

              <MDBBtn
                className="mb-4 w-100"
                size="lg"
                style={{ backgroundColor: "#3b5998" }}
              >
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with facebook
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
