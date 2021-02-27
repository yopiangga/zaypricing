import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = props => {

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

const [packet, setPacket] = useState("");
const [packetFree, setPacketFree] = useState([0]);
const [packetAdvanced, setPacketAdvanced] = useState([0, 79, 138, 197, 256, 315, 374, 433, 492, 551, 610, 669, 728, 787, 846, 905, 964, 1023, 1028, 1141, 1200]);
const [packetUltra, setPacketUltra] = useState([99, 129, 218, 307, 396, 485, 574, 663, 752, 841, 930, 1019, 1108, 1197, 1286, 1375, 1464, 1553, 1642, 1731, 1820]);

const [userFree, setUserFree] = useState([0]);
const [userAdvanced, setUserAdvanced] = useState([0, 15.8, 13.8, 13.13, 12.80, 12.60, 12.47, 12.37, 12.30, 12.24, 12.2, 12.16, 12.13, 12.11, 12.09, 12.07, 12.05, 12.04, 12.02, 12.01, 12.00]);
const [userUltra, setUserUltra] = useState([19.80, 25.80, 21.80, 20.47, 19.80, 19.40, 19.13, 18.94, 18.80, 18.69, 18.60, 18.53, 18.47, 18.42, 18.37, 18.33, 18.30, 18.27, 18.24, 18.22, 18.20]);

const [addOn1, setAddOn1] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
const [addOn2, setAddOn2] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])
const [addOn3, setAddOn3] = useState([0, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87, 93, 99, 105, 111, 117, 123])

  return (
    <DataContext.Provider value={[pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3, packet, setPacket]}>
      {props.children}
    </DataContext.Provider>
  );
};