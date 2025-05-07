const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://your-backend-url/api";

export async function generateApp(payload: any) {
  const response = await fetch(`${API_BASE}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to generate app");
  }

  return await response.json();
}

export async function fetchTemplates() {
  const response = await fetch(`${API_BASE}/templates`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch templates");
  }

  return await response.json();
}

export async function submitFeedback(data: any) {
  const response = await fetch(`${API_BASE}/feedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}
