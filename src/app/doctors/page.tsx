'use client';

import { useState } from "react";
import doctorsData from "../data/doctors.json";

interface Doctor {
  id: number;
  name: string;
  specialization: string;
  clinicName: string;
  consultationFee: string;
}

const DoctorsPage: React.FC = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>(doctorsData);

  const handleSpecializationFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const specialization = event.target.value;
    setSelectedSpecialization(specialization);
    if (specialization === "all") {
      setDoctors(doctorsData);
    } else {
      setDoctors(
        doctorsData.filter(
          (doctor) =>
            doctor.specialization.toLowerCase() === specialization.toLowerCase()
        )
      );
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Doctors</h1>

          {/* Filter Section */}
          <select
            value={selectedSpecialization}
            onChange={handleSpecializationFilter}
            className="px-4 py-2 rounded-lg bg-card text-primary"
          >
            <option value="all">All Specializations</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="orthopedic">Orthopedic</option>
            <option value="pediatrician">Pediatrician</option>
            <option value="gastroenterologist">Gastroenterologist</option>
            <option value="neurologist">Neurologist</option>
            <option value="oncologist">Oncologist</option>
            <option value="endocrinologist">Endocrinologist</option>

            {/* Add more specializations as needed */}
          </select>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div key={doctor.id} className="bg-card shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary">{doctor.name}</h3>
                <p className="text-sm text-card-foreground mt-2">
                  Specialization: {doctor.specialization}
                </p>
                <p className="text-sm text-card-foreground">Clinic: {doctor.clinicName}</p>
                <p className="text-sm text-card-foreground">Consultation Fee: {doctor.consultationFee}</p>
                <div className="flex justify-between mt-4">
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-opacity-80">
                    Book Hospital Visit
                  </button>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-opacity-80">
                    Book Online
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-card-foreground col-span-full">No doctors available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
