// src/utils/validators.ts

/**
 * Validates the app name.
 * - Must be 3–30 characters
 * - Can contain letters, numbers, hyphens, and underscores
 */
export function validateAppName(name: string): boolean {
  const regex = /^[A-Za-z0-9_-]{3,30}$/;
  return regex.test(name);
}

/**
 * Validates the description.
 * - Must not be empty
 * - Maximum 200 characters
 */
export function validateDescription(desc: string): boolean {
  return desc.trim().length > 0 && desc.trim().length <= 200;
}
