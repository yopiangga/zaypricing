
import React from 'react';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

function BundlePricing() {

    // for final
    const [pricePacket, setPricePacket] = useState(0)
    const [priceUsers, setPriceUsers] = useState(0)
    const [priceAddOn1, setPriceAddOn1] = useState(0)
    const [priceAddOn2, setPriceAddOn2] = useState(0)
    const [priceAddOn3, setPriceAddOn3] = useState(0)

    let totalPrice = pricePacket + priceUsers + priceAddOn1 + priceAddOn2 + priceAddOn3

    // for element

    const [priceAll, setPriceAll] = useState({});

    const [users, setUsers] = useState(0);
    const [range, setRange] = useState(0);

    const [maxUsers, setMaxUsers] = useState([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105]);

    const [packetFree, setPacketFree] = useState([0]);
    const [packetAdvanced, setPacketAdvanced] = useState([0, 79, 138, 197, 256, 315, 374, 433, 492, 551, 610, 669, 728, 787, 846, 905, 964, 1023, 1028, 1141, 1200]);
    const [packetUltra, setPacketUltra] = useState([99, 129, 218, 307, 396, 485, 574, 663, 752, 841, 930, 1019, 1108, 1197, 1286, 1375, 1464, 1553, 1642, 1731, 1820]);

    const [userFree, setUserFree] = useState([0]);
    const [userAdvanced, setUserAdvanced] = useState([0, 15.8, 13.8, 13.13, 12.80, 12.60, 12.47, 12.37, 12.30, 12.24, 12.2, 12.16, 12.13, 12.11, 12.09, 12.07, 12.05, 12.04, 12.02, 12.01, 12.00]);
    const [userUltra, setUserUltra] = useState([19.80, 25.80, 21.80, 20.47, 19.80, 19.40, 19.13, 18.94, 18.80, 18.69, 18.60, 18.53, 18.47, 18.42, 18.37, 18.33, 18.30, 18.27, 18.24, 18.22, 18.20]);

    const [addOn1, setAddOn1] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
    const [addOn2, setAddOn2] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
    const [addOn3, setAddOn3] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])

    useEffect(() => {
        setPriceAll({
            free: 0,
            advanced: packetAdvanced[range],
            ultra: packetUltra[range],
            addOn1: addOn1[range],
            addOn2: addOn2[range],
            addOn3: addOn3[range],
        })

    }, []);

    const handlePacket = (event) => {
        let packetId = event.target.id;
        if (packetId == 'packetFree') {
            setPricePacket(packetFree[0]);
            setPriceUsers(userFree[0])
            document.querySelector("#packetFree").classList.add("active");
            document.querySelector("#packetAdvanced").classList.remove("active");
            document.querySelector("#packetUltra").classList.remove("active");
        } else if (packetId == 'packetAdvanced') {
            setPricePacket(packetAdvanced[range]);
            setPriceUsers(userAdvanced[range])
            document.querySelector("#packetFree").classList.remove("active");
            document.querySelector("#packetAdvanced").classList.add("active");
            document.querySelector("#packetUltra").classList.remove("active");
        } else if (packetId == 'packetUltra') {
            setPricePacket(packetUltra[range]);
            setPriceUsers(userUltra[range])
            document.querySelector("#packetFree").classList.remove("active");
            document.querySelector("#packetAdvanced").classList.remove("active");
            document.querySelector("#packetUltra").classList.add("active");
        }

    }

    const handleInputUser = () => {
        let usersLocal = document.querySelector(".inputUser").value;
        setUsers(usersLocal);
        let j = 0;

        for (let i = 0; i < maxUsers.length; i++) {
            if (usersLocal > maxUsers[i]) {
                j = j + 1;
            }
        }
        setRange(j);

        setPriceAll({
            free: 0,
            advanced: packetAdvanced[j],
            ultra: packetUltra[j],
            addOn1: addOn1[j],
            addOn2: addOn2[j],
            addOn3: addOn3[j],
        })

        setPricePacket(0);
        setPriceUsers(userAdvanced[range])
        document.querySelector("#packetFree").classList.remove("active");
        document.querySelector("#packetAdvanced").classList.remove("active");
        document.querySelector("#packetUltra").classList.remove("active");

        document.querySelector("#checkbox-1").checked = false
        document.querySelector("#checkbox-2").checked = false
        document.querySelector("#checkbox-3").checked = false
    }


    const handleRange = () => {

    }

    const handleCheckBox = (event) => {
        let checkId = event.target.id;
        let checkbox1 = document.querySelector("#checkbox-1").checked
        let checkbox2 = document.querySelector("#checkbox-2").checked
        let checkbox3 = document.querySelector("#checkbox-3").checked

        if (checkId == "add-on-1") {
            if (checkbox1) {
                document.querySelector("#card-add-on-1").classList.remove("active");
                document.querySelector("#checkbox-1").checked = false
                setPriceAddOn1(0)
            } else {
                document.querySelector("#card-add-on-1").classList.add("active");
                document.querySelector("#checkbox-1").checked = true
                setPriceAddOn1(priceAll.addOn1)
            }
        } else if (checkId == "add-on-2") {
            if (checkbox2) {
                document.querySelector("#card-add-on-2").classList.remove("active");
                document.querySelector("#checkbox-2").checked = false
                setPriceAddOn2(0)
            } else {
                document.querySelector("#card-add-on-2").classList.add("active");
                document.querySelector("#checkbox-2").checked = true
                setPriceAddOn2(priceAll.addOn2)
            }
        } else if (checkId == "add-on-3") {
            if (checkbox3) {
                document.querySelector("#card-add-on-3").classList.remove("active");
                document.querySelector("#checkbox-3").checked = false
                setPriceAddOn3(0)
            } else {
                document.querySelector("#card-add-on-3").classList.add("active");
                document.querySelector("#checkbox-3").checked = true
                setPriceAddOn3(priceAll.addOn3)
            }
        }

    }

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
                                    <button className="card" id="packetFree" value={priceAll.free} onClick={handlePacket}>
                                        Free <br />
                                        €{priceAll.free}/year
                                    </button>
                                    <button className="card" id="packetAdvanced" value={priceAll.advanced} onClick={handlePacket}>
                                        Advanced <br />
                                        €{priceAll.advanced}/year
                                    </button>
                                    <button className="card" id="packetUltra" value={priceAll.ultra} onClick={handlePacket}>
                                        Ultra <br />
                                        €{priceAll.ultra}/year
                                    </button>
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
                                    <select value={users} name="inputUser" onChange={handleInputUser} className="inputUser">
                                        <option value="5">0 - 5</option>
                                        <option value="10">6 - 10</option>
                                        <option value="15">11 - 15</option>
                                        <option value="20">16 - 20</option>
                                        <option value="25">21 - 25</option>
                                        <option value="30">26 - 30</option>
                                        <option value="35">31 - 35</option>
                                        <option value="40">36 - 40</option>
                                        <option value="45">41 - 45</option>
                                        <option value="50">46 - 50</option>
                                        <option value="55">51 - 55</option>
                                        <option value="60">56 - 60</option>
                                        <option value="65">61 - 65</option>
                                        <option value="70">66 - 70</option>
                                        <option value="75">71 - 75</option>
                                        <option value="80">76 - 80</option>
                                        <option value="85">81 - 85</option>
                                        <option value="90">86 - 90</option>
                                        <option value="95">91 - 95</option>
                                        <option value="100">96 - 100</option>
                                        <option value="105">Etc</option>
                                    </select>
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

                                    <div className="card" id="add-on-1" onClick={handleCheckBox}>
                                        <input type="checkbox" id="checkbox-1" />
                                        <div className="card-text" id="add-on-1">
                                            <h4 id="add-on-1">Ads Limit Increase 1</h4>
                                            <h5 id="add-on-1">€{priceAll.addOn1}/year</h5>
                                            <p id="add-on-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card" id="add-on-2" onClick={handleCheckBox}>
                                        <input type="checkbox" id="checkbox-2" />
                                        <div className="card-text" id="add-on-2">
                                            <h4 id="add-on-2">Ads Limit Increase 2</h4>
                                            <h5 id="add-on-2">€{priceAll.addOn2}/year</h5>
                                            <p id="add-on-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card" id="add-on-3" onClick={handleCheckBox}>
                                        <input type="checkbox" id="checkbox-3" />
                                        <div className="card-text" id="add-on-3">
                                            <h4 id="add-on-3">Ads Limit Increase 3</h4>
                                            <h5 id="add-on-3">€{priceAll.addOn3}/year</h5>
                                            <p id="add-on-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
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
                                        <div className="card active">
                                            <div className="card-text">
                                                <h4>Packet Order</h4>
                                                <h5><span>€{pricePacket}</span> per year</h5>
                                            </div>
                                            <div className="card-icon" style={{display: "none"}}>
                                                <FaTimes />
                                            </div>
                                        </div>
                                        <div className="card active">
                                            <div className="card-text">
                                                <h4>Users P/U</h4>
                                                <h5><span>€{priceUsers}</span> per year</h5>
                                            </div>
                                            <div className="card-icon" style={{display: "none"}}>
                                                <FaTimes />
                                            </div>
                                        </div>
                                        <div className="card" id="card-add-on-1">
                                            <div className="card-text">
                                                <h4>Add On 1</h4>
                                                <h5><span>€{priceAddOn1}</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <FaTimes  id="add-on-1"></FaTimes>
                                                <div className="icon-FaTimes" id="add-on-1" onClick={handleCheckBox}></div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-add-on-2">
                                            <div className="card-text">
                                                <h4>Add On 2</h4>
                                                <h5><span>€{priceAddOn2}</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <FaTimes  id="add-on-2"></FaTimes>
                                                <div className="icon-FaTimes" id="add-on-2" onClick={handleCheckBox}></div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-add-on-3">
                                            <div className="card-text">
                                                <h4>Add On 3</h4>
                                                <h5><span>€{priceAddOn3}</span> per year</h5>
                                            </div>
                                            <div className="card-icon">
                                                <div className="icon-FaTimes" id="add-on-3" onClick={handleCheckBox}></div>
                                                <FaTimes  id="add-on-3"></FaTimes>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="text-price">
                                    <h2>Yearly cost : </h2>
                                    <h2>€{totalPrice}</h2>
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