import React from 'react';

const Attendances = () => {
  const attendances = [
    { date: '01/10/2024', events: [{ time: '08:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida' }] },
    { date: '30/09/2024', events: [{ time: '10:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida' }] },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Attendances</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul>
        {attendances.map((attendance, index) => (
          <li key={index}>
            <h3 className="text-yellow-600 font-semibold my-2">{attendance.date}</h3>
            {attendance.events.map((event, idx) => (
              <div key={idx} className="flex justify-between items-center mb-3">
                <span>{event.time} - {event.type}</span>
                <p>{event.doctor}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendances;
