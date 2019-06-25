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
                        Explore, Expand, Experience local food of Sarawak
                 </h2>
                </div>
            </div>
        </section>

    
            <section className="section">
                <div className="container">
                    <h1 className="title">About</h1>
                    <h2 className="subtitle">
                    The main purpose of the system is supporting the Women's Institute (WI) in repackaging local products from Sarawak. The WI is the central stakeholder that employs women from  Kampung Pinggan Jaya and Muhibbah. They will repackage and rebrand the local product popiah simpul, that will be exported by a third party, AlphaBees, to Singapore. The system supports the WI in scheduling women and keep track of the financials from requested orders.
            </h2>
                </div>
            </section>
        
    </div>
);


export default MHeader;