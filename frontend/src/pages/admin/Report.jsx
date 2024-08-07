// src/components/ReportPage.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../../assets/css/Reports.css';

Modal.setAppElement('#root');

const Reports = () => {
  const [reports, setReports] = useState([
    { id: 1, date: '2024-07-29', transportType: 'Airway', status: 'Delivered' },
    { id: 2, date: '2024-07-28', transportType: 'Roadway', status: 'In Transit' },
    { id: 3, date: '2024-07-27', transportType: 'Waterway', status: 'Pending' },
    // Add more mock reports as needed
  ]);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [reportsPerPage] = useState(5);
  const [selectedReport, setSelectedReport] = useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  const closeModal = () => {
    setSelectedReport(null);
  };

  const handleDelete = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Report ID", "Date", "Transport Type", "Status"];
    const tableRows = [];

    currentReports.forEach(report => {
      const reportData = [
        report.id,
        report.date,
        report.transportType,
        report.status,
      ];
      tableRows.push(reportData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Logistics Reports", 14, 15);
    doc.save("reports.pdf");
  };

  const filteredReports = reports.filter(report =>
    report.transportType.toLowerCase().includes(filter.toLowerCase()) ||
    report.status.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedReports = filteredReports.sort((a, b) => {
    if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = sortedReports.slice(indexOfFirstReport, indexOfLastReport);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="report-page">
      <h1>Logistics Reports</h1>
      <div className="filter-sort">
        <input
          type="text"
          placeholder="Filter by Transport Type or Status"
          value={filter}
          onChange={handleFilterChange}
        />
        <button onClick={() => handleSortChange('date')}>Sort by Date</button>
        <button onClick={() => handleSortChange('transportType')}>Sort by Transport Type</button>
        <button onClick={() => handleSortChange('status')}>Sort by Status</button>
      </div>
      <div className="export-options">
        <CSVLink data={currentReports} filename={"reports.csv"}>
          <button>Export as CSV</button>
        </CSVLink>
        <button onClick={handleExportPDF}>Export as PDF</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Report ID</th>
            <th>Date</th>
            <th>Transport Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.date}</td>
              <td>{report.transportType}</td>
              <td>{report.status}</td>
              <td>
                <button onClick={() => handleViewDetails(report)}>View Details</button>
                <button onClick={() => handleDelete(report.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        reportsPerPage={reportsPerPage}
        totalReports={filteredReports.length}
        paginate={paginate}
      />
      <Modal
        isOpen={!!selectedReport}
        onRequestClose={closeModal}
        contentLabel="Report Details"
      >
        {selectedReport && (
          <div>
            <h2>Report Details</h2>
            <p><strong>ID:</strong> {selectedReport.id}</p>
            <p><strong>Date:</strong> {selectedReport.date}</p>
            <p><strong>Transport Type:</strong> {selectedReport.transportType}</p>
            <p><strong>Status:</strong> {selectedReport.status}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

const Pagination = ({ reportsPerPage, totalReports, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReports / reportsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Reports;
