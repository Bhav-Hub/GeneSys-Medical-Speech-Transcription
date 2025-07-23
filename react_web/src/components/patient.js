import React from 'react';
import './styles_patient.css';
import { useParams } from 'react-router-dom';


const PatientProfile = () => {
    // const {id} = useParams()

    const phno = localStorage.getItem('phone');
    console.log(phno);

    const doctorRecords = [
        {
            DoctorName: "John Doe",
            date: "2024-02-01",
            diagnosis: "Common Cold",
            medication: "Paracetamol",
            pdf_url: "/path/to/pdf"
        },
        {
            DoctorName: "Jane Smith",
            date: "2024-02-01",
            diagnosis: "Allergies",
            medication: "Antihistamine",
            pdf_url: "/path/to/pdf"
        }
    ];

    return (
        <div className="patient-container">

            <h2 className="patient-heading">Previous Doctor Visits</h2>

            {doctorRecords.map((record, index) => (
                <div className="patient-card" key={index}>
                    <p className="patient-name">
                    <strong>Doctor Name: {record.DoctorName}</strong></p>
                    <p className="patient-detail">
                        <strong>Date:</strong> {record.date}
                    </p>
                    <p className="patient-detail">
                        <strong>Diagnosis:</strong> {record.diagnosis}
                    </p>
                    <p className="patient-detail">
                        <strong>Medication:</strong> {record.medication}
                    </p>
                    <a 
                        href={record.pdf_url} 
                        className="patient-button" 
                        download
                    >
                        Download PDF
                    </a>
                </div>
            ))}
        </div>
    );
};

export default PatientProfile;