import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from '../home/home';
import NavBar from '../shared/navbar';
export default class Routes extends React.Component {


    render() {
        return (
            <Router>
                 <NavBar  /> 
                {/* <SideBar patientList={this.props.patientList} focusPatient={this.props.focusPatient} patient={this.props.patient}/> */}
                <Switch>
                    <Route path="/home" component={home} />
                    <Route component={home} />
                </Switch>
            </Router>
        );
    }
}

