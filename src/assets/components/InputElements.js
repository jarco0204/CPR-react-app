import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/App.scss";

const InputElements = () => {
    return (
        <>
            <div className="centerText" id="divTitleInput">
                <h1 className="centerText" id="mainTitleInput">
                    Welcome back!
                </h1>
                <h2 className="centerText" id="secondaryTitleInput">
                    Please Sign-In to your account
                </h2>
                <a className="centerText" id="noAccountLinkInput" href="/">
                    I do not have an account yet
                </a>
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button
                    id="formButtonInput"
                    variant="primary"
                    size="lg"
                    block
                    type="submit"
                >
                    Log In
                </Button>
            </Form>
        </>
    );
};

export default InputElements;
