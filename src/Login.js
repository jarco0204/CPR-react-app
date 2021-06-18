import "./scss/App.scss";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/img/logo.svg";

function Login() {
    return (
        <div>
            {/* Navbar */}
            <Navbar id="navbar" expand="lg">
                <Navbar.Brand href="#home">
                    <img alt="Our logo" src={logo} className="logo" />
                </Navbar.Brand>
            </Navbar>
            <div className="App">
                <div className="Component">
                    <div className="InputComponent"></div>
                    <div className="DetailsComponent"></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
