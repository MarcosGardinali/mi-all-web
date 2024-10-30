import React from 'react';

const Reports = () => {
  const reports = [{ title: 'Castration after childbirth', doctor: 'Dr. Kleber Duarte', date: '30/09/2024' }];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Reports</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul>
        {reports.map((report, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <span>{report.title}</span>
            <p>{report.doctor} - {report.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
