import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  GraduationCap,
  Mail,
  BookOpen,
  BarChart3,
} from 'lucide-react';
import { addBookingRequest } from '../lib/firebase';
import {
  BUSINESS_NAME,
  TRAINING_DISCIPLINES,
  CLASS_OPTIONS_BY_DISCIPLINE,
  EXPERIENCE_LEVELS,
  TIME_SLOTS,
  WHATSAPP_NUMBER,
} from '../lib/constants';
import {
  sanitizeText,
  sanitizePhone,
  sanitizeEmail,
  validateName,
  validatePhone,
  validateEmail,
  validateDate,
  validateSelect,
  hasFieldErrors,
  type FieldErrors,
} from '../lib/formValidation';

type ClassFormData = {
  name: string;
  phone: string;
  email: string;
  trainingDiscipline: string;
  classType: string;
  experienceLevel: string;
  date: string;
  time: string;
  notes: string;
};

const initialForm: ClassFormData = {
  name: '',
  phone: '',
  email: '',
  trainingDiscipline: '',
  classType: '',
  experienceLevel: '',
  date: '',
  time: '',
  notes: '',
};

const ClassBookingForm = () => {
  const [formData, setFormData] = useState<ClassFormData>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === 'trainingDiscipline' && value !== prev.trainingDiscipline) {
        next.classType = '';
      }
      return next;
    });
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (name === 'trainingDiscipline' && errors.classType) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.classType;
        return next;
      });
    }
  };

  const classOptionsForDiscipline =
    formData.trainingDiscipline in CLASS_OPTIONS_BY_DISCIPLINE
      ? CLASS_OPTIONS_BY_DISCIPLINE[
          formData.trainingDiscipline as keyof typeof CLASS_OPTIONS_BY_DISCIPLINE
        ]
      : [];

  const validateForm = (): { ok: boolean; sanitized: ClassFormData } => {
    const sanitized: ClassFormData = {
      name: sanitizeText(formData.name, 100),
      phone: sanitizePhone(formData.phone),
      email: sanitizeEmail(formData.email),
      trainingDiscipline: formData.trainingDiscipline,
      classType: formData.classType,
      experienceLevel: formData.experienceLevel,
      date: formData.date,
      time: formData.time,
      notes: sanitizeText(formData.notes, 500),
    };

    const allowedClassOptions =
      sanitized.trainingDiscipline in CLASS_OPTIONS_BY_DISCIPLINE
        ? CLASS_OPTIONS_BY_DISCIPLINE[
            sanitized.trainingDiscipline as keyof typeof CLASS_OPTIONS_BY_DISCIPLINE
          ]
        : [];

    const nextErrors: FieldErrors = {};
    const nameErr = validateName(sanitized.name);
    if (nameErr) nextErrors.name = nameErr;
    const phoneErr = validatePhone(sanitized.phone);
    if (phoneErr) nextErrors.phone = phoneErr;
    const emailErr = validateEmail(sanitized.email);
    if (emailErr) nextErrors.email = emailErr;
    const disciplineErr = validateSelect(
      sanitized.trainingDiscipline,
      TRAINING_DISCIPLINES,
      'training type'
    );
    if (disciplineErr) nextErrors.trainingDiscipline = disciplineErr;
    const classErr = validateSelect(sanitized.classType, allowedClassOptions, 'class');
    if (classErr) nextErrors.classType = classErr;
    const levelErr = validateSelect(
      sanitized.experienceLevel,
      EXPERIENCE_LEVELS,
      'experience level'
    );
    if (levelErr) nextErrors.experienceLevel = levelErr;
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
        bookingType: 'class',
        name: sanitized.name,
        phone: sanitized.phone,
        email: sanitized.email || undefined,
        service: `${sanitized.trainingDiscipline}: ${sanitized.classType}`,
        date: sanitized.date,
        time: sanitized.time,
        notes: sanitized.notes || undefined,
        experienceLevel: sanitized.experienceLevel,
      });
    } catch {
      // WhatsApp booking still proceeds if Firebase is unavailable
    }

    const message = [
      `*New Training Booking: ${BUSINESS_NAME}*`,
      '',
      `*Student:* ${sanitized.name}`,
      `*Phone:* ${sanitized.phone}`,
      sanitized.email ? `*Email:* ${sanitized.email}` : '',
      `*Training:* ${sanitized.trainingDiscipline}`,
      `*Class:* ${sanitized.classType}`,
      `*Experience:* ${sanitized.experienceLevel}`,
      `*Preferred date:* ${sanitized.date}`,
      `*Preferred time:* ${sanitized.time}`,
      `*Notes:* ${sanitized.notes || 'None'}`,
      '',
      'Please confirm class availability. Thank you!',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    setFormData(initialForm);
  };

  const fieldClass = (field: string) =>
    `glass-input glass-input-amber ${
      errors[field] ? 'glass-input-error' : ''
    }`;

  return (
    <section
      id="class-booking"
      className="py-20 md:py-24 px-6 bg-gradient-to-br from-amber-50/70 via-rose-50/80 to-stone-50/90 relative"
      aria-labelledby="class-booking-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4" aria-hidden="true">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center ring-1 ring-white/80">
              <GraduationCap className="text-amber-700 w-7 h-7" />
            </div>
          </div>
          <p className="section-eyebrow text-amber-700 mb-3">Student Booking</p>
          <h2 id="class-booking-heading" className="heading-display text-3xl md:text-4xl mb-4">
            Training & Classes
          </h2>
          <div className="section-divider mb-6" aria-hidden="true" />
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Reserve your seat in a nail or lash training class. Choose your discipline and course. We
            will confirm your date and details on WhatsApp.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-8 md:p-12 border-amber-100/40">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="class-name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="class-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'class-name-error' : undefined}
                  className={fieldClass('name')}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="class-name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="class-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <input
                  id="class-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={24}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'class-phone-error' : undefined}
                  className={fieldClass('phone')}
                  placeholder="e.g. +233 50 000 0000"
                />
                {errors.phone && (
                  <p id="class-phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="class-email" className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                Email <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                id="class-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="email"
                maxLength={120}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'class-email-error' : undefined}
                className={fieldClass('email')}
                placeholder="you@email.com"
              />
              {errors.email && (
                <p id="class-email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="training-discipline"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <GraduationCap className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Training Type <span className="text-rose-600">*</span>
                </label>
                <select
                  id="training-discipline"
                  name="trainingDiscipline"
                  value={formData.trainingDiscipline}
                  onChange={handleInputChange}
                  required
                  aria-invalid={Boolean(errors.trainingDiscipline)}
                  className={fieldClass('trainingDiscipline')}
                >
                  <option value="">Select nail or lash training</option>
                  {TRAINING_DISCIPLINES.map((discipline) => (
                    <option key={discipline} value={discipline}>
                      {discipline}
                    </option>
                  ))}
                </select>
                {errors.trainingDiscipline && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.trainingDiscipline}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="class-type" className="block text-sm font-medium text-gray-700 mb-2">
                  <BookOpen className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Class <span className="text-rose-600">*</span>
                </label>
                <select
                  id="class-type"
                  name="classType"
                  value={formData.classType}
                  onChange={handleInputChange}
                  required
                  disabled={!formData.trainingDiscipline}
                  aria-invalid={Boolean(errors.classType)}
                  className={fieldClass('classType')}
                >
                  <option value="">
                    {formData.trainingDiscipline ? 'Select a class' : 'Choose training type first'}
                  </option>
                  {classOptionsForDiscipline.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.classType && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.classType}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="experience-level"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <BarChart3 className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                Experience Level <span className="text-rose-600">*</span>
              </label>
              <select
                id="experience-level"
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                required
                aria-invalid={Boolean(errors.experienceLevel)}
                className={fieldClass('experienceLevel')}
              >
                <option value="">Select your level</option>
                {EXPERIENCE_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
              {errors.experienceLevel && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.experienceLevel}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="class-date" className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <input
                  id="class-date"
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
                <label htmlFor="class-time" className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-2 text-amber-700" aria-hidden="true" />
                  Preferred Time <span className="text-rose-600">*</span>
                </label>
                <select
                  id="class-time"
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
              <label htmlFor="class-notes" className="block text-sm font-medium text-gray-700 mb-2">
                Questions or Goals
              </label>
              <textarea
                id="class-notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className={fieldClass('notes')}
                placeholder="Tell us what you hope to learn or any scheduling notes"
              />
            </div>

            <button
              type="submit"
              className="btn-class w-full py-4 flex items-center justify-center gap-2 rounded-xl"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Send Class Booking via WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClassBookingForm;
