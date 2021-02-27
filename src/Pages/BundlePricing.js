
import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AddOns } from '../Components/AddOns';
import { CardPrice } from '../Components/CardPrice';
import { NumberUser } from '../Components/NumberUsers';
import { Packet } from '../Components/Packet';
import { DataContext } from './DataContext';

function BundlePricing() {

    const [pricePacket, setPricePacket, priceUsers, setPriceUsers, priceAddOn1, setPriceAddOn1, priceAddOn2, setPriceAddOn2, priceAddOn3, setPriceAddOn3,
        priceAll, setPriceAll, users, setUsers, range, setRange, maxUsers, setMaxUsers, packetFree, setPacketFree, packetAdvanced, setPacketAdvanced,
        packetUltra, setPacketUltra, userFree, setUserFree, userAdvanced, setUserAdvanced, userUltra, setUserUltra, addOn1, setAddOn1,
        addOn2, setAddOn2, addOn3, setAddOn3] = useContext(DataContext);

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


    


    const handleRange = () => {

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

                        <Packet />
                        <NumberUser />
                        <AddOns />

                    </div>
                    <div className="content-price">
                        <CardPrice />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BundlePricing