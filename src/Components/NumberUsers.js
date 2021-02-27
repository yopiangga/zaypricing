import { useContext } from "react";
import { DataContext } from "../Pages/DataContext";

export function NumberUser() {

    const [pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3, packet, setPacket] = useContext(DataContext);

    const handleInputUser = (event) => {
        let usersLocal = event.target.value;
        setUsers(usersLocal);
        let j = 0;
        
        maxUsers.forEach(element => {
            if(usersLocal > element) {
                j = j + 1;
            }
        });

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
        setPriceUsers(userAdvanced[range]);

        document.getElementById("packetFree").classList.remove("active");
        document.getElementById("packetAdvanced").classList.remove("active");
        document.getElementById("packetUltra").classList.remove("active");

        document.getElementById("checkbox-1").checked = false
        document.getElementById("checkbox-2").checked = false
        document.getElementById("checkbox-3").checked = false

        document.getElementById("card-add-on-1").classList.remove("active");
        document.getElementById("card-add-on-2").classList.remove("active");
        document.getElementById("card-add-on-3").classList.remove("active");
    }

    return (
        <div>
            <div className="number-users">
                <div className="number-title">
                    <div className="title-heading">
                        <h3>Many Users</h3>
                    </div>
                    <div className="title-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. <a> More details.</a></p>
                        <select value={users} name="inputUser" onChange={handleInputUser} className="inputUser" id="input-user">
                            {
                            (packet=="") ? 
                                    maxUsers.map(function (el, idx) {
                                        return (
                                            <option value={maxUsers[idx]}>{maxUsers[idx]} - {maxUsers[idx] + 5}</option>
                                        )   
                                    }) 
                                : 
                                    <option value="5">0 - 5</option>    
                             }
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}