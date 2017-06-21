import React from "react";
import {Button, Modal} from "react-bootstrap";

class ShoppingPage extends React.Component {

    constructor() {
        super();
        this.state = {show: false};
    }

    close(event) {
        event.preventDefault();
        this.setState({show: false});
    }

    render() {
        return (
            <div className="modal-container" style={{height: 200}}>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => {
                        console.log("button clicked");
                        this.setState({show: true});
                    }}
                >
                    Launch contained modal
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.close.bind(this)}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="hello">
                        Some Random Text
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ShoppingPage;
