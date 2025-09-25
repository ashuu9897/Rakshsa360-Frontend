import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('/api/doctorRequest/my-requests');
        setRequests(res.data.doctorRequests || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
      setLoading(false);
    };
    fetchRequests();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Doctor Dashboard</h2>
      {loading && <p>Loading requests...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <h3>You have {requests.length} request(s)</h3>
          <ul>
            {requests.map((req) => (
              <li key={req._id}>
                <b>From Hospital:</b> {req.hospital?.name || 'Unknown'}<br />
                <b>Description:</b> {req.description}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DoctorDashboard;
