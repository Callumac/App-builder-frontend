// src/utils/formatters.ts

/**
 * Formats a file size in bytes into a human‑readable string.
 * @param bytes Number of bytes
 * @returns Formatted size (e.g. "1.2 MB")
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let size = bytes / 1024;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

/**
 * Formats a timestamp into a human‑readable date string.
 * @param timestamp Epoch milliseconds
 * @returns Date string (e.g. "May 1, 2025, 14:30")
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
