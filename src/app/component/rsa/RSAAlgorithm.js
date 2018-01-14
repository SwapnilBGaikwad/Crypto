import React from "react"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardText, CardTitle} from 'material-ui/Card';

import Steps1 from './step1/Step1';
import Step2 from './step2/Step2';
import Step3 from './step3/Step3';
import Step4 from './step4/Encryption';
import Step5 from './step5/Decryption';

class RSAAlgorithm extends React.Component {
    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Card>
                <CardTitle title="RSA" subtitle="Asymmetric Encryption Algorithm"/>
                <CardText>
                    <ul>
                        <li>Asymmetric algorithm has two different keys public and private</li>
                        <li>Receiver share the <b>public key</b> to sender</li>
                        <li>Sender encrypt data using receiver's public key and send it</li>
                        <li>Encrypted message can be decrypted only by <b>private key</b> known only by Receiver</li>
                        <li>Receiver use the private key to decrypt message to get <b>Plain Text</b></li>
                    </ul>
                </CardText>
                <Steps1/>
                <Step2/>
                <Step3/>
                <Step4/>
                <Step5/>
            </Card>
        </MuiThemeProvider>)
    }
}

export default RSAAlgorithm;