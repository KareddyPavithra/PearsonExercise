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
        <div className="container mt-4">
            <h2>Support Requests</h2>
            <table className="table table-striped table-bordered">
                <thead className="table-primary">
                <tr>
                    <th>Email</th>
                    <th>Description</th>
                    <th className="w-30">Due Date</th> {/* Adjust width as needed */}
                </tr>
                </thead>
                <tbody>
                {requests.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)).map((request) => (
                    <tr key={request.id}>
                        <td>{request.email}</td>
                        <td>{request.description}</td>
                        <td>{new Date(request.dueDate).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestList;
