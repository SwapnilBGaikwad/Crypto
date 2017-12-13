import React from "react"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardText, CardTitle} from 'material-ui/Card';

import StepsComponent from './StepsComponent';

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
                <StepsComponent/>
            </Card>
        </MuiThemeProvider>)
    }
}

export default RSAAlgorithm;