import React from "react"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardText, CardTitle} from 'material-ui/Card';

import Steps1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';

class RSAAlgorithm extends React.Component {
    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Card>
                <CardTitle title="RSA" subtitle="Asymmetric Algorithm"/>
                <CardText>
                    <ul>
                        <li>Asymmetric algorithm has two different keys public and private</li>
                        <li>Receiver share the public to sender</li>
                        <li>Sender encrypt data using receiver's public and send it</li>
                        <li>Encrypted message can be decrypted only by private key</li>
                        <li>Receiver use the private key to decrypt message => Plain Text</li>
                    </ul>
                </CardText>
                <Steps1/>
                <Step2/>
                <Step3/>
            </Card>
        </MuiThemeProvider>)
    }
}

export default RSAAlgorithm;