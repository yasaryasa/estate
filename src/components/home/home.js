import React, { Component } from 'react';
import estateImage from '../../assest/images/estate-image.jpg';
import computerIcon from '../../assest/images/computerIcon.png';
import webComputerIcon from '../../assest/images/kul_web.png';
import phoneIcon from '../../assest/images/phoneIcon.png';
// import './styles/css/App.css';
import '../../styles/css/home.css';
import { Button } from 'semantic-ui-react';
import { Card, CardBody, CardFooter } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
class home extends Component {

    constructor(props) {
        super(props);
        let lang = localStorage.getItem('lang');
        this.state = {
            language: "tr"
        }

    }

    componentDidMount() {
    }
    render() {
        return (
            <>
                <div style={{ width: "100%", position: "relative" }}>

                    <img src={estateImage} alt="Preview selected" style={{ width: "100%", color: "white", height: "500px", position: "relative" }} />
                    {/* <div style={{ textAlign: "center", marginTop: "150px", left:"70px" }}>  */}
                    <Button color='orange' style={{ width: "10%", position: "absolute", marginTop: "150px", left: "70px" }}>Ücretsiz Dene</Button>
                    <p style={{ width: "100%", position: "absolute", marginTop: "-30px", left: "10px", color: "black" }} >10 gün ücretsiz deneyin, Memnun kalırsanız abone olun.</p>
                    {/* </div>  */}
                </div>
                <div className="flex-container" >
                    <div >
                        <Card className="card" style={{ border: "1px solid red" }} >
                            <CardBody className="card-body">
                                <p>
                                    <span style={{ fontSize: 17 }}></span> <br />
                                    <small>Windows</small>
                                    <img style={{ width: "63%", color: "white", height: "90px", position: "relative" }} src={computerIcon} className="img-circle" alt=""></img>
                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button>Videoyu İzle</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div >
                        <Card className="card" style={{ border: "1px solid orange" }} >
                            <CardBody className="card-body">
                                <p>
                                    <span style={{ fontSize: 17 }}></span> <br />
                                    <small>WEB</small>
                                    <img style={{ width: "80%", color: "white", height: "80px", position: "relative" }} src={webComputerIcon} className="img-circle" alt=""></img>
                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button>Videoyu İzle</Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div >
                        <Card className="card" style={{ border: "1px solid blue" }} >
                            <CardBody className="card-body">
                                <p>
                                    <span style={{ fontSize: 17 }}></span> <br />
                                    <small>Mobil</small>
                                    <img style={{ width: "80%", color: "white", height: "90px", position: "relative" }} src={phoneIcon} className="img-circle" alt=""></img>

                                </p>
                            </CardBody>
                            <CardFooter>
                                <Button>Videoyu İzle</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}

export default (home);