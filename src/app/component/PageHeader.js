import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';


class PageHeader extends React.Component {

    render() {
        return (<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AppBar title="Cryptography"/>
        </MuiThemeProvider>)
    }
}

export default PageHeader;