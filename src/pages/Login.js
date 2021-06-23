import "../assets/scss/App.scss";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";

import InputElements from "../assets/components/InputElements";
import DetailElements from "../assets/components/DetailElements";

const Login = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar id="navbar" expand="lg">
                <Navbar.Brand href="#home">
                    <img alt="Our logo" src={logo} className="logo" />
                </Navbar.Brand>
            </Navbar>

            {/* Main Components */}
            <div className="App">
                <div className="Component">
                    <div className="InputComponent">
                        <InputElements />
                    </div>
                    <div className="DetailsComponent">
                        <DetailElements />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
