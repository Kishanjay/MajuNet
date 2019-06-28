import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    flexGrow: '1'
}
const MHeader = () => (
    <div style={style}>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        MajuNet
                </h1>
                    <h2 className="subtitle">
                        {/* Explore, Expand, Experience local food of Sarawak */}
                        Meneroka, Mengembang dan Mengalami makanan tempatan Sarawak
                 </h2>
                </div>
            </div>
        </section>

    
            <section className="section">
                <div className="container">
                    <h1 className="title">Tentang Majunet</h1> {/* What is About MajuNet*/}
                    <h2 className="subtitle">
                    {/* The main purpose of the system is supporting the Women's Institute (WI) in repackaging local products from Sarawak. The WI is the central stakeholder that employs women from  Kampung Pinggan Jaya and Muhibbah. They will repackage and rebrand the local product popiah simpul, that will be exported by a third party, AlphaBees, to Singapore. The system supports the WI in scheduling women and keep track of the financials from requested orders. */}
                    Tujuan utama sistem ini adalah untuk membantu Institut Wanita (IW) dalam proses pembungkusan produk tempatan Sarawak, dimana IW adalah pihak utama yang menggaji wanita dari Kampung Pinggan Jaya dan Kampung Muhibbah. Wanita-wanita tersebut akan melakukan kerja pembungkusan dan penjenamaan semula popiah simpul. Seterusnya produk tersebut akan dieksport oleh pihak ketiga (AlphaBees) ke Singapura. Sistem ini mampu membantu IW dalam penjadualan kerja dan keterangan kewangan.
            </h2>
                </div>
            </section>
        
    </div>
);


export default MHeader;