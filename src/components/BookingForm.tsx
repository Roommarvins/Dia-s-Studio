import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { addBookingRequest } from '../lib/firebase';
import {
  BUSINESS_NAME,
  APPOINTMENT_SERVICES,
  NAIL_SERVICES,
  LASH_SERVICES,
  TIME_SLOTS,
  WHATSAPP_NUMBER,
} from '../lib/constants';
import {
  sanitizeText,
  sanitizePhone,
  validateName,
  validatePhone,
  validateDate,
  validateSelect,
  hasFieldErrors,
  type FieldErrors,
} from '../lib/formValidation';

type AppointmentFormData = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const initialForm: AppointmentFormData = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  notes: '',
};

const BookingForm = () => {
  const [formData, setFormData] = useState<AppointmentFormData>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): { ok: boolean; sanitized: AppointmentFormData } => {
    const sanitized: AppointmentFormData = {
      name: sanitizeText(formData.name, 100),
      phone: sanitizePhone(formData.phone),
      service: formData.service,
      date: formData.date,
      time: formData.time,
      notes: sanitizeText(formData.notes, 500),
    };

    const nextErrors: FieldErrors = {};
    const nameErr = validateName(sanitized.name);
    if (nameErr) nextErrors.name = nameErr;
    const phoneErr = validatePhone(sanitized.phone);
    if (phoneErr) nextErrors.phone = phoneErr;
    const serviceErr = validateSelect(sanitized.service, APPOINTMENT_SERVICES, 'service');
    if (serviceErr) nextErrors.service = serviceErr;
    const dateErr = validateDate(sanitized.date);
    if (dateErr) nextErrors.date = dateErr;
    const timeErr = validateSelect(sanitized.time, TIME_SLOTS, 'time');
    if (timeErr) nextErrors.time = timeErr;

    setErrors(nextErrors);
    return { ok: !hasFieldErrors(nextErrors), sanitized };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { ok, sanitized } = validateForm();
    if (!ok) return;

    try {
      await addBookingRequest({
        bookingType: 'appointment',
        name: sanitized.name,
        phone: sanitized.phone,
        service: sanitized.service,
        date: sanitized.date,
        time: sanitized.time,
        notes: sanitized.notes || undefined,
      });
    } catch {
      // WhatsApp booking still proceeds if Firebase is unavailable
    }

    const message = [
      `*New Appointment: ${BUSINESS_NAME}*`,
      '',
      `*Name:* ${sanitized.name}`,
      `*Phone:* ${sanitized.phone}`,
      `*Service:* ${sanitized.service}`,
      `*Date:* ${sanitized.date}`,
      `*Time:* ${sanitized.time}`,
      `*Notes:* ${sanitized.notes || 'None'}`,
      '',
      'Please confirm this appointment. Thank you!',
    ].join('\n');

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setFormData(initialForm);
  };

  const fieldClass = (field: string) =>
    `glass-input glass-input-rose ${
      errors[field] ? 'glass-input-error' : ''
    }`;

  return (
    <section
      id="booking"
      className="py-20 md:py-24 px-6 bg-gradient-to-br from-rose-50/90 via-pink-50/60 to-purple-50/30 relative"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center ring-1 ring-white/80">
              <Sparkles className="text-rose-500 w-7 h-7" />
            </div>
          </div>
          <p className="section-eyebrow text-rose-600 mb-3">Appointments</p>
          <h2 id="booking-heading" className="heading-display text-3xl md:text-4xl mb-4">
            Book Your Appointment
          </h2>
          <div className="section-divider mb-6" aria-hidden="true" />
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Choose a nail or lash service and your preferred time. We will confirm your appointment on
            WhatsApp.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="apt-name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2 text-rose-500" aria-hidden="true" />
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="apt-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'apt-name-error' : undefined}
                  className={fieldClass('name')}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p id="apt-name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="apt-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-2 text-rose-500" aria-hidden="true" />
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <input
                  id="apt-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={24}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'apt-phone-error' : undefined}
                  className={fieldClass('phone')}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p id="apt-phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="apt-service" className="block text-sm font-medium text-gray-700 mb-2">
                <Sparkles className="inline w-4 h-4 mr-2 text-rose-500" aria-hidden="true" />
                Service <span className="text-rose-600">*</span>
              </label>
              <select
                id="apt-service"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                aria-invalid={Boolean(errors.service)}
                className={fieldClass('service')}
              >
                <option value="">Select a service</option>
                <optgroup label="Nail Services">
                  {NAIL_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Lash Services">
                  {LASH_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </optgroup>
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.service}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="apt-date" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2 text-rose-500" aria-hidden="true" />
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <input
                  id="apt-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  aria-invalid={Boolean(errors.date)}
                  className={fieldClass('date')}
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="apt-time" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-2 text-rose-500" aria-hidden="true" />
                  Preferred Time <span className="text-rose-600">*</span>
                </label>
                <select
                  id="apt-time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                  aria-invalid={Boolean(errors.time)}
                  className={fieldClass('time')}
                >
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.time}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="apt-notes" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="apt-notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className={fieldClass('notes')}
                placeholder="Style preferences, sensitivities, or special requests"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 flex items-center justify-center gap-2 rounded-xl"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Send Appointment Request via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
