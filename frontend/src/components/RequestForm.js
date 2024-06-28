import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = ({ onRequestSubmit }) => {
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email.includes('@')) {
            setError('Invalid email address');
            return;
        }
        if (description.length < 100 || description.length > 1000) {
            setError('Description length must be between 100 and 1000 characters');
            return;
        }
        const dueDateObj = new Date(dueDate);
        const now = new Date();
        const oneYearLater = new Date();
        oneYearLater.setFullYear(now.getFullYear() + 1);

        if (dueDateObj < now || dueDateObj > oneYearLater) {
            setError('Due date must be within one year from today');
            return;
        }

        try {
            const response = await axios.post('/api/support-requests', { email, description, dueDate });
            onRequestSubmit(response.data);
            setEmail('');
            setDescription('');
            setDueDate('');
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="container mt-4">
            <h3>Submit Support Request</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date:</label>
                    <input
                        type="date"
                        id="dueDate"
                        className="form-control"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default RequestForm;