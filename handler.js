module.exports.sendEmail = async (event) => {
  // Debug: log the raw incoming event
  console.log("Incoming Event:", JSON.stringify(event, null, 2));
  console.log("Event Body (raw):", event.body);

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON format" }),
    };
  }

  const { receiver_email, subject, body_text } = body;

  if (!receiver_email || !subject || !body_text) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  try {
    // Simulate sending email
    console.log(`Sending email to ${receiver_email} with subject "${subject}"`);
    

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
