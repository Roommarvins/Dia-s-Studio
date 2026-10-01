const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;
const UNSAFE_CHARS = /[<>]/g;

export function sanitizeText(value: string, maxLength = 200): string {
  return value.replace(CONTROL_CHARS, "").replace(UNSAFE_CHARS, "").trim().slice(0, maxLength);
}

export function sanitizePhone(value: string): string {
  return value.replace(/[^\d+\s().-]/g, "").trim().slice(0, 24);
}

export function sanitizeEmail(value: string): string {
  return sanitizeText(value, 120).toLowerCase();
}

export function validateName(name: string): string | null {
  const sanitized = sanitizeText(name, 100);
  if (sanitized.length < 2) return "Please enter your full name (at least 2 characters).";
  if (!/^[\p{L}\s'.-]+$/u.test(sanitized)) return "Name contains invalid characters.";
  return null;
}

export function validatePhone(phone: string): string | null {
  const sanitized = sanitizePhone(phone);
  const digits = sanitized.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    return "Please enter a valid phone number.";
  }
  return null;
}

export function validateEmail(email: string, required = false): string | null {
  const sanitized = sanitizeEmail(email);
  if (!sanitized) return required ? "Email is required." : null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitized)) return "Please enter a valid email address.";
  return null;
}

export function validateDate(date: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "Please choose a valid date.";
  const chosen = new Date(`${date}T12:00:00`);
  if (Number.isNaN(chosen.getTime())) return "Please choose a valid date.";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (chosen < today) return "Date must be today or in the future.";
  return null;
}

export function validateSelect<T extends string>(
  value: string,
  allowed: readonly T[],
  label: string
): string | null {
  if (!allowed.includes(value as T)) return `Please select a valid ${label}.`;
  return null;
}

export type FieldErrors = Record<string, string>;

export function hasFieldErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}
