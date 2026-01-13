import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pricing = () => {
    const [crops, setCrops] = useState([]);
    const [cropName, setCropName] = useState('');
    const [pricePerKg, setPricePerKg] = useState('');

    // Load crops from DB
    const getCrops = async () => {
        const res = await axios.get('http://localhost:5000/api/crops');
        setCrops(res.data);
    };

    useEffect(() => { getCrops(); }, []);

    // Add crop to DB
    const addCrop = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/crops', { cropName, pricePerKg });
        setCropName('');
        setPricePerKg('');
        getCrops(); // Refresh list
    };

    return (
        <div style={{ padding: '30px' }}>
            <h1>Manage Crops & Pricing</h1>

            <form onSubmit={addCrop} style={{ marginBottom: '30px' }}>
                <input type="text" placeholder="Crop Name" value={cropName} onChange={e => setCropName(e.target.value)} required />
                <input type="number" placeholder="Price per Kg" value={pricePerKg} onChange={e => setPricePerKg(e.target.value)} required />
                <button type="submit">Add Crop</button>
            </form>

            <table border="1" cellPadding="10" width="100%">
                <thead>
                    <tr><th>Crop Name</th><th>Price per Kg</th></tr>
                </thead>
                <tbody>
                    {crops.map(c => (
                        <tr key={c._id}><td>{c.cropName}</td><td>${c.pricePerKg}</td></tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pricing;
