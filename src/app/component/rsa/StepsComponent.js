import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class StepsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {p: 0, q: 0};
    }

    handleClick() {
        console.log('State : ' + this.state.p);
        console.log('State : ' + this.state.q);
    }

    onPChange(e) {
        this.setState({
            p: e.target.value
        });
    }

    onQChange(e) {
        this.setState({
            q: e.target.value
        });
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card>
                    <CardHeader title="Step 1" subtitle="Set p and q"/>
                    <CardText>
                        Choose p and q as prime numbers
                        <br/>
                        <TextField hintText="p value" type={'number'} onChange={this.onPChange.bind(this)}/>
                        <TextField hintText="q value" type={'number'} onChange={this.onQChange.bind(this)}/>
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