import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { DataContext } from "../Pages/DataContext";


export function CardPrice() {

    const [pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3] = useContext(DataContext);

    let totalPrice = pricePacket + priceUsers + priceAddOn1 + priceAddOn2 + priceAddOn3

    const handleCheckBox1 = (event) => {
        let checkbox1 = document.getElementById("checkbox-1").checked;

        if(checkbox1){
            document.getElementById("card-add-on-1").classList.remove("active");
            document.getElementById("checkbox-1").checked = false;
            setPriceAddOn1(0)
        } else {
            document.getElementById("card-add-on-1").classList.add("active");
            document.getElementById("checkbox-1").checked = true;
            setPriceAddOn1(priceAll.addOn1)
        }
    }

    const handleCheckBox2 = (event) => {
        let checkbox2 = document.getElementById("checkbox-2").checked;

        if(checkbox2){
            document.getElementById("card-add-on-2").classList.remove("active");
            document.getElementById("checkbox-2").checked = false;
            setPriceAddOn2(0)
        } else {
            document.getElementById("card-add-on-2").classList.add("active");
            document.getElementById("checkbox-2").checked = true;
            setPriceAddOn2(priceAll.addOn2)
        }
    }

    const handleCheckBox3 = (event) => {
        let checkbox3 = document.getElementById("checkbox-3").checked;

        if(checkbox3){
            document.getElementById("card-add-on-3").classList.remove("active");
            document.getElementById("checkbox-3").checked = false;
            setPriceAddOn3(0)
        } else {
            document.getElementById("card-add-on-3").classList.add("active");
            document.getElementById("checkbox-3").checked = true;
            setPriceAddOn1(priceAll.addOn3)
        }
    }

    return (
        <div>
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
                                <div className="card-icon" style={{ display: "none" }}>
                                    <FaTimes />
                                </div>
                            </div>
                            <div className="card active">
                                <div className="card-text">
                                    <h4>Users P/U</h4>
                                    <h5><span>€{priceUsers}</span> per year</h5>
                                </div>
                                <div className="card-icon" style={{ display: "none" }}>
                                    <FaTimes />
                                </div>
                            </div>
                            <div className="card" id="card-add-on-1">
                                <div className="card-text">
                                    <h4>Add On 1</h4>
                                    <h5><span>€{priceAddOn1}</span> per year</h5>
                                </div>
                                <div className="card-icon">
                                    <FaTimes id="add-on-1"></FaTimes>
                                    <div className="icon-FaTimes" id="add-on-1" onClick={handleCheckBox1}></div>
                                </div>
                            </div>
                            <div className="card" id="card-add-on-2">
                                <div className="card-text">
                                    <h4>Add On 2</h4>
                                    <h5><span>€{priceAddOn2}</span> per year</h5>
                                </div>
                                <div className="card-icon">
                                    <FaTimes id="add-on-2"></FaTimes>
                                    <div className="icon-FaTimes" id="add-on-2" onClick={handleCheckBox2}></div>
                                </div>
                            </div>
                            <div className="card" id="card-add-on-3">
                                <div className="card-text">
                                    <h4>Add On 3</h4>
                                    <h5><span>€{priceAddOn3}</span> per year</h5>
                                </div>
                                <div className="card-icon">
                                    <div className="icon-FaTimes" id="add-on-3" onClick={handleCheckBox3}></div>
                                    <FaTimes id="add-on-3"></FaTimes>
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
    )
}