import  { useState } from 'react';
import './Alert.css';
import { AlertTriangle, CheckCircle, XCircle, AlertCircle, Bell } from 'lucide-react';

const alertsData = [
  { id: 1, machine: 'Machine A', type: 'critical', message: 'Immediate maintenance required', timestamp: '2023-06-10 09:30:00' },
  { id: 2, machine: 'Machine B', type: 'warning', message: 'Performance degradation detected', timestamp: '2023-06-09 14:45:00' },
  { id: 3, machine: 'Machine C', type: 'info', message: 'Scheduled maintenance due in 3 days', timestamp: '2023-06-08 11:20:00' },
  { id: 4, machine: 'Machine D', type: 'success', message: 'Maintenance completed successfully', timestamp: '2023-06-07 16:00:00' },
];

const AlertIcon = ({ type }) => {
  switch (type) {
    case 'critical':
      return <XCircle className="icon red" />;
    case 'warning':
      return <AlertTriangle className="icon yellow" />;
    case 'info':
      return <AlertCircle className="icon blue" />;
    case 'success':
      return <CheckCircle className="icon green" />;
    default:
      return <Bell className="icon gray" />;
  }
};

function Alert() {
  const [alerts, setAlerts] = useState(alertsData);

  const handleDismiss = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="app">
      <h1 className="title">Alerts</h1>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Alerts</h2>
          <p className="card-description">System notifications and warnings</p>
        </div>
        <div className="card-content">
          {alerts.map((alert) => (
            <div key={alert.id} className="alert-card">
              <div className="alert-content">
                <AlertIcon type={alert.type} />
                <div className="alert-text">
                  <p className="machine-name">{alert.machine}</p>
                  <p className="alert-message">{alert.message}</p>
                  <p className="timestamp">{alert.timestamp}</p>
                </div>
              </div>
              <div className="alert-actions">
                <span className={`badge ${alert.type}`}>{alert.type}</span>
                <button className="dismiss-button" onClick={() => handleDismiss(alert.id)}>
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alert;
