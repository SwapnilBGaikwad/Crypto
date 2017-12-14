import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import isPrime from "../../utils/Prime";

class StepsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {p: {value: 0, errorText: undefined}, q: {value: 0, errorText: undefined}};
    }

    handleClick() {
        let state = this.state;
        if (!isPrime(this.state.p.value)) {
            state.p.errorText = "p should be prime";
            this.setState(state);
            return;
        }
        if (!isPrime(this.state.q.value)) {
            state.q.errorText = "q should be prime";
            this.setState(state);
            return;
        }
        console.log('You entered correct value of product');
        console.log('State : ' + JSON.stringify(this.state));
    }

    onPChange(e) {
        let state = this.state;
        state.p.value = e.target.value;
        this.setState(state);
    }

    onQChange(e) {
        let state = this.state;
        state.q.value = e.target.value;
        this.setState(state);
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card>
                    <CardHeader title="Step 1" subtitle="Set p and q"/>
                    <CardText>
                        Choose p and q as prime numbers
                        <br/>
                        <div>
                            <TextField hintText="p value" type={'number'} onChange={this.onPChange.bind(this)}
                                       errorText={this.state.p.errorText}/>
                        </div>
                        <div>
                            <TextField hintText="q value" type={'number'} onChange={this.onQChange.bind(this)}
                                       errorText={this.state.q.errorText}/>
                        </div>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Set p and q" onClick={this.handleClick.bind(this)}/>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

export default StepsComponent;