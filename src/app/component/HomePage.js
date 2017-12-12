import React from "react"
import PageHeader from "./PageHeader";
import RSAAlgorithm from "./rsa/RSAAlgorithm"

class HomePage extends React.Component {
    render() {
        return (<div>
            <PageHeader/>
            <RSAAlgorithm></RSAAlgorithm>
        </div>);
    }
}

export default HomePage;