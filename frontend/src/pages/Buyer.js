import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Buyer = () => {
    const [crops, setCrops] = useState([]);

    useEffect(() => {
        const fetchCrops = async () => {
            const res = await axios.get('http://localhost:5000/api/crops');
            setCrops(res.data);
        };
        fetchCrops();
    }, []);

    const handleBuy = (cropName) => {
        alert(`Request sent to buy ${cropName}. The seller will contact you soon!`);
    };

    return (
        <div className="page-container">
            <h1 style={{ textAlign: 'center' }}>Buyer Marketplace</h1>
            <p style={{ textAlign: 'center', color: '#666' }}>Browse fresh crops listed by our trusted sellers.</p>

            <div className="card-grid">
                {crops.length > 0 ? crops.map((crop) => (
                    <div key={crop._id} className="standard-card">
                        <div style={{ background: '#e8f5e9', padding: '15px', borderRadius: '8px', marginBottom: '15px', textAlign: 'center' }}>
                            <span style={{ fontSize: '2rem' }}>🌽</span>
                        </div>
                        <h3>{crop.cropName}</h3>
                        <p style={{ color: '#2ecc71', fontWeight: 'bold', fontSize: '1.2rem' }}>
                            ${crop.pricePerKg} <span style={{ fontSize: '0.8rem', color: '#666' }}>/ Kg</span>
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#777', margin: '10px 0' }}>
                            High quality fresh harvest delivered directly from the farm.
                        </p>
                        <button
                            className="btn-primary"
                            style={{ width: '100%' }}
                            onClick={() => handleBuy(crop.cropName)}
                        >
                            Purchase Now
                        </button>
                    </div>
                )) : (
                    <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No crops available in the market right now.</p>
                )}
            </div>
        </div>
    );
};

export default Buyer;
