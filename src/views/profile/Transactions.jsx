import React, { useState } from 'react';
import ProfileLayout from './ProfileLayout';

const Transactions = () => {
  // Mock data - en producción esto vendría de Redux/API
  const [transactions] = useState([
    {
      id: '#12345',
      pickUp: 'New York, USA',
      dropUp: 'New York, USA',
      duration: '1 Months',
      price: '$600',
      status: 'Completed',
      statusClass: 'text-success',
      date: '2024-01-15'
    },
    {
      id: '#12346',
      pickUp: 'Los Angeles, USA',
      dropUp: 'San Francisco, USA',
      duration: '2 Weeks',
      price: '$450',
      status: 'Pending',
      statusClass: 'text-warning',
      date: '2024-01-20'
    },
    {
      id: '#12347',
      pickUp: 'Miami, USA',
      dropUp: 'Orlando, USA',
      duration: '5 Days',
      price: '$300',
      status: 'Cancelled',
      statusClass: 'text-danger',
      date: '2024-01-25'
    },
    {
      id: '#12348',
      pickUp: 'Chicago, USA',
      dropUp: 'Detroit, USA',
      duration: '3 Days',
      price: '$250',
      status: 'Active',
      statusClass: 'text-primary',
      date: '2024-02-01'
    }
  ]);

  const handleViewTransaction = (transactionId) => {
    // TODO: Navigate to transaction detail or show modal
    console.log('View transaction:', transactionId);
    alert(`Viewing transaction ${transactionId}`);
  };

  const getStatusBadge = (status, statusClass) => {
    return (
      <span className={`badge ${statusClass}`} style={{ 
        padding: '4px 8px',
        fontSize: '0.75rem',
        fontWeight: '500'
      }}>
        {status}
      </span>
    );
  };

  return (
    <ProfileLayout title="Transactions">
      <div className="user-profile-card">
        <div className="user-profile-card-title">
          <h4>Transaction History</h4>
        </div>
        <div className="car-table-content">
          <div className="car-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Pick Up</th>
                  <th scope="col">Drop Up</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>
                        <b>{transaction.id}</b>
                      </td>
                      <td>{transaction.pickUp}</td>
                      <td>{transaction.dropUp}</td>
                      <td>{transaction.duration}</td>
                      <td><strong>{transaction.price}</strong></td>
                      <td>
                        {getStatusBadge(transaction.status, transaction.statusClass)}
                      </td>
                      <td>
                        <button 
                          className="car-table-btn"
                          onClick={() => handleViewTransaction(transaction.id)}
                          title="View transaction details"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      <div className="empty-state">
                        <i className="far fa-receipt" style={{ fontSize: '3rem', color: '#ccc', marginBottom: '1rem' }}></i>
                        <h5>No transactions found</h5>
                        <p className="text-muted">You haven't made any transactions yet.</p>
                        <a href="/" className="theme-btn mt-3">
                          <i className="far fa-search"></i> Browse Cars
                        </a>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Transaction Summary */}
      <div className="user-profile-card mt-4">
        <div className="user-profile-card-title">
          <h4>Summary</h4>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="transaction-stat">
              <div className="transaction-stat-icon text-success">
                <i className="far fa-check-circle"></i>
              </div>
              <div className="transaction-stat-info">
                <h5>{transactions.filter(t => t.status === 'Completed').length}</h5>
                <span>Completed</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="transaction-stat">
              <div className="transaction-stat-icon text-primary">
                <i className="far fa-clock"></i>
              </div>
              <div className="transaction-stat-info">
                <h5>{transactions.filter(t => t.status === 'Active').length}</h5>
                <span>Active</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="transaction-stat">
              <div className="transaction-stat-icon text-warning">
                <i className="far fa-hourglass-half"></i>
              </div>
              <div className="transaction-stat-info">
                <h5>{transactions.filter(t => t.status === 'Pending').length}</h5>
                <span>Pending</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="transaction-stat">
              <div className="transaction-stat-icon text-danger">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="transaction-stat-info">
                <h5>{transactions.filter(t => t.status === 'Cancelled').length}</h5>
                <span>Cancelled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Transactions;