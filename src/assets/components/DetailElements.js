import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Chef from "../img/chef.svg";

const DetailElements = () => {
    return (
        <div id="detailsLogInDiv">
            <Card id="mainCardComponent">
                <Card.Body>
                    <Card.Title id="mainTitleDetails" className="centerText">
                        Reduce food costs today!
                    </Card.Title>
                    <Card.Subtitle
                        id="secondaryTitleDetails"
                        className="mb-2 text-muted centerText"
                    >
                        Our smart scale and analytics will help your kitchen
                        become more sustainable and profitable.
                    </Card.Subtitle>

                    <Button
                        href="/"
                        id="buttonDetails"
                        variant="primary"
                        size="m"
                        block
                    >
                        Learn More
                    </Button>
                </Card.Body>
            </Card>

            <img id="imageDetails" alt="decoration" src={Chef} />
        </div>
    );
};

export default DetailElements;
