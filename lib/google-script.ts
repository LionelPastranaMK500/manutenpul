const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export async function sendQuoteRequest(data: any) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending to Google Script:", error);
    return { success: false };
  }
}