import crypto from "crypto";

const hash = (value: string) =>
  crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");

export async function sendMetaLeadEvent({
  email,
  phone,
  eventSourceUrl,
}: {
  email?: string;
  phone?: string;
  eventSourceUrl: string;
}) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CONVERSION_API_TOKEN;

  if (!pixelId || !accessToken) return;

  const userData: Record<string, string[]> = {};
  if (email) userData.em = [hash(email)];
  if (phone) userData.ph = [hash(phone.replace(/\D/g, ""))];

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Lead",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "website",
              event_source_url: eventSourceUrl,
              user_data: userData,
            },
          ],
        }),
      }
    );
  } catch (err) {
    console.error("Meta Conversion API error:", err);
  }
}
