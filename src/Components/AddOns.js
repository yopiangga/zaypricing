import { useContext } from "react";
import { DataContext } from "../Pages/DataContext";


export function AddOns() {

    const [pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3] = useContext(DataContext);

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

    return(
        <div>
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

                                    <div className="card" id="add-on-1" onClick={handleCheckBox1}>
                                        <input type="checkbox" id="checkbox-1" />
                                        <div className="card-text" id="add-on-1">
                                            <h4 id="add-on-1">Ads Limit Increase 1</h4>
                                            <h5 id="add-on-1">€{priceAll.addOn1}/year</h5>
                                            <p id="add-on-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card" id="add-on-2" onClick={handleCheckBox2}>
                                        <input type="checkbox" id="checkbox-2" />
                                        <div className="card-text" id="add-on-2">
                                            <h4 id="add-on-2">Ads Limit Increase 2</h4>
                                            <h5 id="add-on-2">€{priceAll.addOn2}/year</h5>
                                            <p id="add-on-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, sit distinctio? Cumque odit magnam nesciunt nihil asperiores, debitis sunt provident quos consectetur nobis modi unde quaerat accusamus ipsam nisi blanditiis.</p>
                                        </div>
                                    </div>

                                    <div className="card" id="add-on-3" onClick={handleCheckBox3}>
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
    )
}