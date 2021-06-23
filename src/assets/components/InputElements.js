import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/App.scss";

const InputElements = () => {
    // UseState Hook
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    //Function that changes the value of the email input as keys are pressed
    const updateEmailInput = (event) => {
        setEmailInput(event.target.value);
    };
    //Function that changes the value of the password input as keys are pressed
    const updatePasswordInput = (event) => {
        setPasswordInput(event.target.value);
    };

    // Function that handles what happens when form is submitted
    const captureFormData = (event) => {
        event.preventDefault(); // Prevents the page from reloading
        if (emailInput.length <= 1 || passwordInput <= 1) {
            console.log("Error");
        } else {
            console.log(emailInput);
            console.log(passwordInput);
            // Perform some sort of validation with your API
            // Grant access to next page /home
        }
        clearInputs();
    };

    // Function that clears the inputs (only necessary for development)
    const clearInputs = () => {
        // JS function that executes internal function after 2 seconds
        setTimeout(() => {
            setEmailInput("");
            setPasswordInput("");
        }, 2000);
    };
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
                    <Form.Control
                        value={emailInput}
                        onChange={(evt) => updateEmailInput(evt)}
                        type="email"
                        placeholder="Username"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control
                        value={passwordInput}
                        onChange={(evt) => updatePasswordInput(evt)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>

                <Button
                    id="formButtonInput"
                    variant="primary"
                    size="lg"
                    block
                    type="submit"
                    onClick={captureFormData}
                >
                    Log In
                </Button>
            </Form>
        </>
    );
};

export default InputElements;
