import React from 'react';

const Appointments = () => {
  // Dados fictícios, substituir por dados da API
  const appointments = [
    { time: '14:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida', date: '19/10/2024' },
    { time: '15:00', type: 'Vacinação', doctor: 'Dr. Jurandir Miranda', date: '14/12/2024' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Appointments</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul>
        {appointments.map((appt, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <span>{appt.time} - {appt.type}</span>
            <div className="text-right">
              <p>{appt.doctor}</p>
              <p>{appt.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
