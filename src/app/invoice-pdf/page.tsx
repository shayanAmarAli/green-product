// pages/pdf-generator.tsx
"use client"

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { NextPage } from 'next';

const PdfGenerator: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // other form fields
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text(`Name: ${formData.name}`, 20, 20);
    pdf.text( `Email: ${formData.email}`, 20, 30);
    // Add more fields as needed
    pdf.save('form-data.pdf');
  };

  return (
    <div>
      <h1>PDF Generator</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {/* Other form fields */}
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;