
import React from 'react'
import { LocalizedContext } from '../../context/globalContext';
import '../../styles/css/navbar.css';
import { Icon, Label } from 'semantic-ui-react'
import { Card, CardBody, CardFooter } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import estateLogo from '../../assest/images/icon-emlak.png';

// import DropDown from './DropDown';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {
    }
    render() {
        return (
            <>
                <div className="navbar">
                    <a className="estate-home" href="" rel="noopener noreferrer" target="_blank">
                        <span className="left">

                            <b> <img src={estateLogo} alt="Preview selected" style={{ width: "35px", color: "white" }} />Emlak </b> Asistanım
                    </span>
                    </a>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 3 }} >
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 1 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>

                                    <Label style={{ backgroundColor: "#632A86", color: "white" }}>Özellikler</Label>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>

                                    <Label style={{ backgroundColor: "#632A86", color: "white" }}>SSS Sorular</Label>
                                </div>
                            </div>

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 4 }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 2 }}>

                                    <Label style={{ backgroundColor: "#632A86", color: "white" }}>İletişim</Label>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 0 }}>

                                    <Label style={{ backgroundColor: "#632A86", color: "white" }}>Uygulamayı Yükle</Label>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 0 }}>

                                    <Button primary>Ücretsiz Dene</Button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {!this.props.isDisabled &&
                        <div className="emergency">
                            <Button primary>Giriş</Button>
                            {/* <button style={{ cursor: "pointer", border: "none", borderRadius: "2px" }} id="emergencyButton" className="emergencyButton" onClick={() => this.emergencyCallButton()} value={'EMERGENCY'} >Giriş</button> */}
                        </div>
                    }

                </div>
              
            </>
        );
    }
}

NavBar.contextType = LocalizedContext

export default NavBar;