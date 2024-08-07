import React, { useState, useEffect } from 'react';
import '../assets/css/SettingsModal.css';

const AccountSettingsModal = ({ isVisible, onClose, onSave, user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setJobTitle(user.jobTitle || '');
      setPhone(user.phone || '');
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, email, jobTitle, phone });
    onClose();
  };

  return (
    <div className={`modal-overlay ${isVisible ? '' : 'modal-hidden'}`} onClick={onClose}>
      <div className={`modal-content ${isVisible ? 'modal-open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Account Settings</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Job Title</label>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </div>
          <div>
            <label>Phone</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettingsModal;
