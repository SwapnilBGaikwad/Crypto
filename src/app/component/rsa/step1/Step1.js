import React from 'react'

import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import {onPChange, onQChange,checkValidity} from './action/RSAStep1Actions';

class Steps1 extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Card>
                    <CardHeader title="Step 1" subtitle="Set p and q"/>
                    <CardText>
                        Choose p and q as prime numbers
                        <br/>
                        <div>
                            <TextField hintText="p value" type={'number'}
                                       onChange={(e) => this.props.onPChange(e.target.value)}
                                       errorText={this.props.p.errorText}/>
                        </div>
                        <div>
                            <TextField hintText="q value" type={'number'}
                                       onChange={(e) => this.props.onQChange(e.target.value)}
                                       errorText={this.props.q.errorText}/>
                        </div>
                    </CardText>
                    <CardActions>
                        <FlatButton label="Set p and q" onClick={() => this.props.handleClick()}/>
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        p: state.rsa.p,
        q: {errorText: state.rsa.q.errorText}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPChange: (no) => {
            dispatch(onPChange(no));
        },
        onQChange: (no) => {
            dispatch(onQChange(no));
        },
        handleClick: () => {
            dispatch(checkValidity());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps1);