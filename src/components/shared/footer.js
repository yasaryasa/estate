import React from 'react';
import '../../styles/css/footer.css';
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
    return (
        <>
            <footer className="footer c-bg-darkBlue u-pv3 u-clearfix">
                <div class="row">
                   <div class="col-xs-6 col-sm">
                        <section class="menu u-pullLeft u-mr1 u-mb3 u-xs-hide">
                            <h3 class="u-mb1 u-">Menü</h3>
                            <ul>
                                <li><a href="">Ana Sayfa</a></li>
                                <li><a href="">Özellikler</a></li>
                                <li><a href="">S.S. Sorular</a></li>
                            </ul>
                        </section>
                    </div>
                    <div class="col-xs-6 col-sm">
                        <section class="menu u-pullLeft u-mr1 u-mb3 u-xs-hide">
                            <h3 class="u-mb1 u-">Yasal Bilgiler</h3>
                            <ul>
                                <li><a href="">Gizlilik Sözleşmesi</a></li>
                                <li><a href="">Kullanım Sözleşmesi</a></li>
                        
                            </ul>
                        </section>
                   </div>
                    <div class="col-xs-6 col-sm">
                        <section class="menu u-pullLeft u-mr1 u-mb3 u-xs-hide">
                            <h3 class="u-mb1 u-">Dosyalar</h3>
                            <ul>
                                <li><a href="">Uzaktan Yardım (Alpemix)</a></li>
                                <li><a href="">Yararlı Dosyalar</a></li>

                            </ul>
                        </section>
                    </div>
                    <div class="col-xs-6 col-sm">
                        <section class="menu u-pullLeft u-mr1 u-mb3 u-xs-hide">
                            <h3 class="u-mb1 u-">Asistanım</h3>
                            <ul>
                                <li><a href="Hakkinda.aspx">Hakkımızda</a></li>
                                <li><a href="" target="_blank" rel="nofollow">Facebook</a></li>
                                <li><a href="" rel="nofollow">İletişim</a></li></ul>
                        </section>
                   </div>
                </div>
                <footer className="main-footer">
                <div className="footer-left">
                    <label className="copy">Copyright © 2019.</label>
                    <a href="" rel="noopener noreferrer" target="_blank"> Emlak Asistanı </a>
                    <label>All Rights Reserved</label>
                </div>
                <div className="footer-right">
                </div>
            </footer>
            <div className="footer-mask" />
                </footer>
    
        </>
    );
}

export default Footer;
