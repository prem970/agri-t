import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Seller = () => {
    const [crops, setCrops] = useState([]);
    const [cropName, setCropName] = useState('');
    const [pricePerKg, setPricePerKg] = useState('');

    const fetchCrops = async () => {
        const res = await axios.get('http://localhost:5000/api/crops');
        setCrops(res.data);
    };

    useEffect(() => { fetchCrops(); }, []);

    const handleAddCrop = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/crops', { cropName, pricePerKg });
            setCropName('');
            setPricePerKg('');
            alert("Product listed successfully!");
            fetchCrops();
        } catch (err) {
            alert("Error listing product.");
        }
    };

    return (
        <div className="page-container">
            <h1>Seller Dashboard</h1>
            <p style={{ color: '#666', marginBottom: '30px' }}>List your crops for buyers to see.</p>

            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginBottom: '40px' }}>
                <h3>Add New Product</h3>
                <form onSubmit={handleAddCrop} style={{ display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' }}>
                    <input
                        className="input-field"
                        style={{ flex: 2, marginBottom: 0 }}
                        type="text"
                        placeholder="Crop Name (e.g. Wheat)"
                        value={cropName}
                        onChange={e => setCropName(e.target.value)}
                        required
                    />
                    <input
                        className="input-field"
                        style={{ flex: 1, marginBottom: 0 }}
                        type="number"
                        placeholder="Price/Kg"
                        value={pricePerKg}
                        onChange={e => setPricePerKg(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn-primary" style={{ padding: '0 30px' }}>Post Listing</button>
                </form>
            </div>

            <h3>Your Active Listings</h3>
            <div className="card-grid">
                {crops.length > 0 ? crops.map((crop) => (
                    <div key={crop._id} className="standard-card">
                        <h3>{crop.cropName}</h3>
                        <p style={{ color: '#2ecc71', fontWeight: 'bold' }}>${crop.pricePerKg} / Kg</p>
                        <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '10px' }}>Status: Live in Market</p>
                    </div>
                )) : <p>You haven't listed any crops yet.</p>}
            </div>
        </div>
    );
};

export default Seller;
