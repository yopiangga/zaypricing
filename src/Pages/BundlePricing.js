
import React from 'react';
import {useState, useEffect} from 'react';
import { FaTimes } from 'react-icons/fa';

function BundlePricing() {

    const [priceAll, setPriceAll] = useState({
        free: 0,
        advanced: 0,
        ultra: 0,
        addOn1: 0,
        addOn2: 0,
        addOn3: 0,
        total: 0
    });
    const [users, setUsers] = useState(0);
    const [range, setRange] = useState(0);

    const [maxUsers, setMaxUsers] = useState([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75 , 80, 85, 90, 95, 100, 105]);

    const [packetFree, setPacketFree] = useState([0]);
    const [packetAdvanced, setPacketAdvanced] = useState([0, 79, 138, 197, 256, 315, 374, 433, 492, 551, 610, 669, 728, 787, 846, 905, 964, 1023, 1028, 1141, 1200]);
    const [packetUltra, setPacketUltra] = useState([99, 129, 218, 307, 396, 485, 574, 663, 752, 841, 930, 1019, 1108, 1197, 1286, 1375, 1464, 1553, 1642, 1731, 1820]);

    const [userFree, setUserFree] = useState([0]);
    const [userAdvanced, setUserAdvanced] = useState([0, 15.8, 13.8, 13.13, 12.80, 12.60, 12.47, 12.37, 12.30, 12.24, 12.2, 12.16, 12.13, 12.11, 12.09, 12.07, 12.05, 12.04, 12.02, 12.01, 12.00]);
    const [userUltra, setUserUltra] = useState([19.80, 25.80, 21.80, 20.47, 19.80, 19.40, 19.13, 18.94, 18.80, 18.69, 18.60, 18.53, 18.47, 18.42, 18.37, 18.33, 18.30, 18.27, 18.24, 18.22, 18.20]);

    const [addOn1, setAddOn1] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
    const [addOn2, setAddOn2] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
    const [addOn3, setAddOn3] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])

    const handlePacket = (event) => {
        let packet = event;
        console.log(packet);
    }

    const handleInputUser = () => {
        let usersLocal = document.querySelector(".inputUser").value;
        setUsers(usersLocal);
        let j = 0;

        if(usersLocal%5 == 0){
            setRange(usersLocal)
        } else {
            for(let i=0; i<maxUsers.length; i++){
                if(usersLocal > maxUsers[i]){
                    j = j + 1;
                }
            }   
            setRange(j);
        }

        setPriceAll({
            free: 0,
            advanced: packetAdvanced[j],
            ultra: packetUltra[j],
            addOn1: addOn1[j],
            addOn2: addOn2[j],
            addOn3: addOn3[j],
        })
    }


    const handleRange = () => {

    }
    
    console.log(users);
    console.log(range);

    return (
        <div className="BundlePricing-Page">
            <div className="content">
                <div className="content-head">
                    <h1>Choose products for your bundle.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut quisquam, accusamus exercitationem.</p>
                </div>
                <div className="content-body">
                    <div className="content-choose">

                        <div className="packet">
                            <div className="packet-title">
                                <div className="title-heading">
                                    <h2>Annual Pricing</h2>
                                    <a href="">See all features</a>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="packet-body">
                                <div className="card-group">
                                    <div className="card" name="packetFree" onClick={handlePacket}>
                                        <h4>Free</h4>
                                        <h5><span>€{priceAll.free}</span>/year</h5>
                                    </div>
                                    <div className="card" name="packetAdvanced" onClick={handlePacket}>
                                        <h4>Advanced</h4>
                                        <h5><span>€{priceAll.advanced}</span>/year</h5>
                                    </div>
                                    <div className="card" name="packetUltra" onClick={handlePacket}>
                                        <h4>Ultra</h4>
                                        <h5><span>€{priceAll.ultra}</span>/year</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="number-users">
                            <div className="number-title">
                                <div className="title-heading">
                                    <h3>Many Users</h3>
                                </div>
                                <div className="title-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. <a> More details.</a></p>
                                    <input type="number" className="inputUser" value={users} name="inputUser" onChange={handleInputUser} />
                                </div>
                            </div>
                            <div className="number-body">
                                <div className="scroll-bar">
                                    <input type="range" className="inputRangeUsers" min="5" max="105" value={maxUsers[range]} onChange={handleRange} />
                                </div>
                                <div className="range-value">
                                    <h5>5</h5>
                                    <h5>105</h5>
                                </div>
                            </div>
                        </div>

                        <div className="add-on">
                            <div className="addOn-title">
                                <div className="title-heading">
                                    <h2>Add-ons</h2>
                                </div>
                                <div className="title-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                            <div className="addOn-body">
                                <div className="card-group">

                                    <div className="card">
                                        <input type="checkbox" name="add-ons-1" />
                                        <div className="card-text">
                                            <h4>Ads Limit Increase 1</h4>
                                            <h5>€{priceAll.addOn1}/year</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <input type="checkbox" name="add-ons-1" />
                                        <div className="card-text">
                                            <h4>Ads Limit Increase 2</h4>
                                            <h5>€{priceAll.addOn2}/year</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <input type="checkbox" name="add-ons-1" />
                                        <div className="card-text">
                                            <h4>Ads Limit Increase 3</h4>
                                            <h5>€{priceAll.addOn3}/year</h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="content-price">
                        <div className="card-price">
                            <div className="price-body">
                                <div className="action">
                                    <button className="btn-order">Order</button>
                                </div>
                                <hr />
                                <div className="list-bundle">
                                    <h3>Your Bundle</h3>
                                    <div className="card-group">
                                        <div className="card">
                                            <div className="card-text">
                                                <h4>Marketing Hubs Enterprise</h4>
                                                <h5><span>€890</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <FaTimes />
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-text">
                                                <h4>Marketing Hubs Enterprise</h4>
                                                <h5><span>€890</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <FaTimes />
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-text">
                                                <h4>Marketing Hubs Enterprise</h4>
                                                <h5><span>€890</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <FaTimes />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="text-price">
                                    <h2>Yearly cost : </h2>
                                    <h2>€{priceAll.total}</h2>
                                </div>
                                <div className="discount">
                                    <div className="card">
                                        <p><span>Save 25%</span> when you purchase the same tier of Marketing, Sales, and Service Hub. <a href="">See terms</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <a href="">View price breakdown</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundlePricing