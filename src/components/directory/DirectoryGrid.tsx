
import React from 'react';
import DirectoryCard from './DirectoryCard';

interface DirectoryGridProps {
  activeTab: string;
  isSeniorMode: boolean;
}

const DirectoryGrid: React.FC<DirectoryGridProps> = ({ activeTab, isSeniorMode }) => {
  const directoryData = {
    departments: [
      {
        id: 1,
        name: "Mayor's Office",
        head: "Hon. Jenny Austria Barzaga",
        phone: "(046) 416-0133",
        email: "mayor@dasmarinas.gov.ph",
        location: "2nd Floor, City Hall",
        hours: "8:00 AM - 5:00 PM"
      },
      {
        id: 2,
        name: "City Planning and Development Office",
        head: "Engr. Maria Santos",
        phone: "(046) 416-0145",
        email: "cpdo@dasmarinas.gov.ph",
        location: "3rd Floor, City Hall",
        hours: "8:00 AM - 5:00 PM"
      },
      {
        id: 3,
        name: "Business Permits and Licensing Office",
        head: "Ms. Ana Cruz",
        phone: "(046) 416-0156",
        email: "bplo@dasmarinas.gov.ph",
        location: "Ground Floor, City Hall",
        hours: "8:00 AM - 5:00 PM"
      }
    ],
    officials: [
      {
        id: 1,
        name: "Hon. Jenny Austria Barzaga",
        position: "City Mayor",
        phone: "(046) 416-0133",
        email: "mayor@dasmarinas.gov.ph",
        office: "Mayor's Office",
        hours: "By Appointment"
      },
      {
        id: 2,
        name: "Hon. Pidi Barzaga Jr.",
        position: "Vice Mayor",
        phone: "(046) 416-0134",
        email: "vicemayor@dasmarinas.gov.ph",
        office: "Vice Mayor's Office",
        hours: "8:00 AM - 5:00 PM"
      }
    ],
    barangays: [
      {
        id: 1,
        name: "Barangay Poblacion 1",
        captain: "Hon. Roberto dela Cruz",
        phone: "(046) 416-1001",
        email: "poblacion1@dasmarinas.gov.ph",
        address: "Poblacion 1, Dasmariñas City",
        population: "8,500"
      },
      {
        id: 2,
        name: "Barangay San Agustin",
        captain: "Hon. Maria Gonzales",
        phone: "(046) 416-1002",
        email: "sanagustin@dasmarinas.gov.ph",
        address: "San Agustin, Dasmariñas City",
        population: "12,300"
      }
    ],
    emergency: [
      {
        id: 1,
        name: "Emergency Response Unit",
        service: "24/7 Emergency Response",
        phone: "911",
        alternatePhone: "(046) 416-0199",
        email: "emergency@dasmarinas.gov.ph",
        response: "5-10 minutes"
      },
      {
        id: 2,
        name: "Fire Department",
        service: "Fire Emergency & Prevention",
        phone: "911",
        alternatePhone: "(046) 416-0177",
        email: "fire@dasmarinas.gov.ph",
        response: "3-8 minutes"
      },
      {
        id: 3,
        name: "Police Station",
        service: "Public Safety & Security",
        phone: "911",
        alternatePhone: "(046) 416-0188",
        email: "police@dasmarinas.gov.ph",
        response: "5-15 minutes"
      }
    ]
  };

  const currentData = directoryData[activeTab as keyof typeof directoryData] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentData.map((item) => (
        <DirectoryCard 
          key={item.id}
          data={item}
          type={activeTab}
          isSeniorMode={isSeniorMode}
        />
      ))}
    </div>
  );
};

export default DirectoryGrid;
