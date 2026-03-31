'use client';

import { useState, FormEvent } from 'react';

interface BookingFormProps {
  variant?: 'sidebar' | 'full';
  title?: string;
}

export default function BookingForm({
  variant = 'sidebar',
  title = 'Book Your Time Now!',
}: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    person_name: '',
    person_email: '',
    person_phone: '',
    escort_services: '',
    form_message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Redirect to thank you page or show success
        window.location.href = '/thankyou';
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`booking-form ${variant}`}>
      <h3 className="form-title">{title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="person_name"
            placeholder="Please enter your name."
            value={formData.person_name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="person_email"
            placeholder="Please enter your email."
            value={formData.person_email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="person_phone"
            placeholder="Please enter your phone number."
            value={formData.person_phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="escort_services"
            placeholder="Please enter your service requirement."
            value={formData.escort_services}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            name="form_message"
            placeholder="Please share your address and service requirement details."
            value={formData.form_message}
            onChange={handleChange}
            required
            className="form-control"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="btn btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Please wait...' : 'Submit Now'}
        </button>
      </form>
    </div>
  );
}
