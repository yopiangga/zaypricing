import { useContext } from "react";
import { DataContext } from "../Pages/DataContext";

export function Packet() {

    const [pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3, packet, setPacket] = useContext(DataContext);

    const handleClassPacket = () => {
        document.querySelector("#packetFree").classList.remove("active");
        document.querySelector("#packetAdvanced").classList.remove("active");
        document.querySelector("#packetUltra").classList.remove("active");
        setPacket("");
    }

    const handlePacketFree = (event) => {
        handleClassPacket();
        event.target.className = `${event.target.className} active`;
        setPricePacket(packetFree[0]);
        setPriceUsers(userFree[0]);
        setPacket("free");
    }

    const handlePacketAdvanced = (event) => {
        handleClassPacket();
        event.target.className = `${event.target.className} active`;
        setPricePacket(packetAdvanced[range]);
        setPriceUsers(userAdvanced[range])
    }

    const handlePacketUltra = (event) => {
        handleClassPacket();
        event.target.className = `${event.target.className} active`;
        setPricePacket(packetUltra[range]);
        setPriceUsers(userUltra[range])
    }

    return (
        <div>
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
                        <button className="card" id="packetFree" value={priceAll.free} onClick={handlePacketFree}>
                            Free <br />
                                        €{priceAll.free}/year
                                    </button>
                        <button className="card" id="packetAdvanced" value={priceAll.advanced} onClick={handlePacketAdvanced}>
                            Advanced <br />
                                        €{priceAll.advanced}/year
                                    </button>
                        <button className="card" id="packetUltra" value={priceAll.ultra} onClick={handlePacketUltra}>
                            Ultra <br />
                                        €{priceAll.ultra}/year
                                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}