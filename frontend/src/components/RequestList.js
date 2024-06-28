import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await axios.get('/api/support-requests');
            setRequests(response.data);
        };

        fetchRequests();
    }, []);

    return (
        <div>
            <h2>Support Requests</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>
                        <p>Email: {request.email}</p>
                        <p>Description: {request.description}</p>
                        <p>Due Date: {request.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestList;