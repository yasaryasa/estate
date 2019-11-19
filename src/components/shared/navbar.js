
import React from 'react'
import { LocalizedContext } from '../../context/globalContext';
import '../../styles/css/navbar.css';
import { Icon, Label } from 'semantic-ui-react'
import { Card, CardBody, CardFooter } from 'reactstrap';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';
import estateLogo from '../../assest/images/images-estate.jpg';
import { Link } from 'react-router-dom';
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

                            <b> <embed src={estateLogo} alt="Preview selected" style={{ width: "35px", color: "white" }} />Emlak </b> Asistanım
                    </span>
                    </a>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 3 }} >
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 1 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>
                                    <Link style={{ backgroundColor: "#632A86", color: "white" }} to="/home">Özellikler</Link>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 1 }}>
                                    <Link style={{ backgroundColor: "#632A86", color: "white" }} to="/home">SSS Sorular</Link>
                                </div>
                            </div>

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 4 }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexGrow: 2 }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 2 }}>
                                    <Link style={{ backgroundColor: "#632A86", color: "white" }} to="/home">İletişim</Link>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", flexGrow: 0 }}>
                                    <Link style={{ backgroundColor: "#632A86", color: "white" }} to="/home">Uygulamayı Yükle</Link>
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
                        </div>
                    }

                </div>

            </>
        );
    }
}

NavBar.contextType = LocalizedContext

export default NavBar;