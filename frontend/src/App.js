import React, { useState } from 'react';
import RequestForm from './components/RequestForm';
import RequestList from './components/RequestList';

const App = () => {
  const [requests, setRequests] = useState([]);

  const handleRequestSubmit = (newRequest) => {
    setRequests([...requests, newRequest]);
  };

  return (
      <div>
        <h1>Technical Support Request System</h1>
        <RequestForm onRequestSubmit={handleRequestSubmit} />
        <RequestList />
      </div>
  );
};

export default App;
