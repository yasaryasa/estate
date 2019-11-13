import React from 'react';
import '../../styles/css/footer.css';

const Footer = () => {
    return (
                <>
                    <footer className="main-footer">
                        <div className="footer-left">
                            <label className="copy">Copyright © 2019.</label>
                            <a href="" rel="noopener noreferrer" target="_blank"> Emlak Asistanı </a>
                            <label>All Rights Reserved</label>
                        </div>
                        <div className="footer-right">                 
                        </div>
                    </footer>
                    <div className="footer-mask"/>
                </>
    );
}

export default (Footer);
