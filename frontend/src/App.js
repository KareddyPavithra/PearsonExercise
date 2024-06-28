import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';
import Navbar from './components/Navbar';

const App = () => {
    const [requests, setRequests] = useState([]);

    const handleRequestSubmit = (newRequest) => {
        setRequests([...requests, newRequest]);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<RequestForm onRequestSubmit={handleRequestSubmit} />} />
                <Route path="/requests" element={<RequestList requests={requests} />} />
            </Routes>
        </Router>
    );
};

export default App;
