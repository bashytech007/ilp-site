// import { NextRequest, NextResponse } from "next/server";
// import { Resend } from "resend";

// // Ensure this runs in the Node.js runtime (Resend's SDK is not edge-compatible).
// export const runtime = "nodejs";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const MAX_LENGTHS = {
//   firstName: 80,
//   lastName: 80,
//   company: 120,
//   email: 254,
//   phone: 30,
//   message: 3000,
// };

// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // Permissive international phone validation: allows +, digits, spaces, dashes, parentheses.
// const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

// interface ContactPayload {
//   firstName: string;
//   lastName: string;
//   company?: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// function sanitize(value: string) {
//   // Strip newlines (prevents header/content injection when values are echoed into the email)
//   // and trim whitespace.
//   return value.replace(/[\r\n]+/g, " ").trim();
// }

// function validate(payload: Partial<ContactPayload>): string[] {
//   const errors: string[] = [];

//   if (!payload.firstName?.trim()) errors.push("First name is required.");
//   else if (payload.firstName.length > MAX_LENGTHS.firstName) errors.push("First name is too long.");

//   if (!payload.lastName?.trim()) errors.push("Last name is required.");
//   else if (payload.lastName.length > MAX_LENGTHS.lastName) errors.push("Last name is too long.");

//   if (payload.company && payload.company.length > MAX_LENGTHS.company) {
//     errors.push("Company name is too long.");
//   }

//   if (!payload.email?.trim()) errors.push("Email is required.");
//   else if (payload.email.length > MAX_LENGTHS.email || !EMAIL_REGEX.test(payload.email)) {
//     errors.push("A valid email address is required.");
//   }

//   if (!payload.phone?.trim()) errors.push("Phone number is required.");
//   else if (!PHONE_REGEX.test(payload.phone)) errors.push("A valid phone number is required.");

//   if (!payload.message?.trim()) errors.push("Message cannot be empty.");
//   else if (payload.message.length > MAX_LENGTHS.message) errors.push("Message is too long.");

//   return errors;
// }

// function escapeHtml(value: string) {
//   return value
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

// export async function POST(req: NextRequest) {
//   let body: Partial<ContactPayload>;

//   try {
//     body = await req.json();
//   } catch {
//     return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
//   }

//   const errors = validate(body);
//   if (errors.length > 0) {
//     return NextResponse.json({ error: errors[0], errors }, { status: 400 });
//   }

//   const firstName = sanitize(body.firstName!);
//   const lastName = sanitize(body.lastName!);
//   const company = body.company ? sanitize(body.company) : "";
//   const email = sanitize(body.email!);
//   const phone = sanitize(body.phone!);
//   const message = sanitize(body.message!).slice(0, MAX_LENGTHS.message);

//   const recipient = process.env.CONTACT_EMAIL;
//   const fromAddress = process.env.RESEND_FROM_EMAIL;

//   if (!process.env.RESEND_API_KEY || !recipient || !fromAddress) {
//     // Config problem, not a user error — log generically, don't leak details to the client.
//     console.error("Contact form is misconfigured: missing RESEND_API_KEY, CONTACT_EMAIL, or RESEND_FROM_EMAIL.");
//     return NextResponse.json(
//       { error: "The enquiry form is temporarily unavailable. Please try again later." },
//       { status: 500 }
//     );
//   }

//   const submittedAt = new Date().toLocaleString("en-GB", {
//     timeZone: "Africa/Lagos",
//     dateStyle: "medium",
//     timeStyle: "short",
//   });

//   const html = `
//     <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
//         <div style="padding: 24px 32px 12px; text-align: center;">
//             <img
//             src="https://ilp-site-iota.vercel.app/images/logo/logo.png"
//             alt="I. Lawrence Practice"
//             width="140"
//             style="display: inline-block; height: auto;"
//             />
//         </div>
//       <div style="background-color: #D97757; padding: 24px 32px; border-radius: 8px 8px 0 0;">
//         <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-family: Arial, sans-serif;">New Website Enquiry</h1>
//         <p style="color: #ffffff; font-size: 13px; margin: 4px 0 0; opacity: 0.9; font-family: Arial, sans-serif;">I. Lawrence Practice</p>
//       </div>
//       <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
//         <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
//           <tbody>
//             <tr>
//               <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
//               <td style="padding: 8px 0; color: #111827; font-weight: 600;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
//               <td style="padding: 8px 0; color: #111827;">${escapeHtml(email)}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td>
//               <td style="padding: 8px 0; color: #111827;">${escapeHtml(phone)}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td>
//               <td style="padding: 8px 0; color: #111827;">${company ? escapeHtml(company) : "—"}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Submitted</td>
//               <td style="padding: 8px 0; color: #111827;">${escapeHtml(submittedAt)} (WAT)</td>
//             </tr>
//           </tbody>
//         </table>
//         <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
//           <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px; font-family: Arial, sans-serif;">Message</p>
//           <p style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
//         </div>
//       </div>
//     </div>
//   `;

//   const text = `New Website Enquiry — Lawrence Practice

// Name: ${firstName} ${lastName}
// Email: ${email}
// Phone: ${phone}
// Company: ${company || "—"}
// Submitted: ${submittedAt} (WAT)

// Message:
// ${message}
// `;

//   try {
//     const { error } = await resend.emails.send({
//       from: fromAddress,
//       to: recipient,
//       replyTo: email,
//       subject: "New Website Enquiry — Lawrence Practice",
//       html,
//       text,
//     });

//     if (error) {
//       console.error("Resend failed to send contact enquiry email.");
//       return NextResponse.json(
//         { error: "We couldn't send your enquiry. Please try again shortly." },
//         { status: 502 }
//       );
//     }

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch {
//     console.error("Unexpected error while sending contact enquiry email.");
//     return NextResponse.json(
//       { error: "We couldn't send your enquiry. Please try again shortly." },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure this runs in the Node.js runtime (Resend's SDK is not edge-compatible).
export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  company: 120,
  email: 254,
  phone: 30,
  message: 3000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Permissive international phone validation: allows +, digits, spaces, dashes, parentheses.
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

interface ContactPayload {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  phone: string;
  message: string;
}

function sanitize(value: string) {
  // Strip newlines (prevents header/content injection when values are echoed into the email)
  // and trim whitespace.
  return value.replace(/[\r\n]+/g, " ").trim();
}

function validate(payload: Partial<ContactPayload>): string[] {
  const errors: string[] = [];

  if (!payload.firstName?.trim()) errors.push("First name is required.");
  else if (payload.firstName.length > MAX_LENGTHS.firstName) errors.push("First name is too long.");

  if (!payload.lastName?.trim()) errors.push("Last name is required.");
  else if (payload.lastName.length > MAX_LENGTHS.lastName) errors.push("Last name is too long.");

  if (payload.company && payload.company.length > MAX_LENGTHS.company) {
    errors.push("Company name is too long.");
  }

  if (!payload.email?.trim()) errors.push("Email is required.");
  else if (payload.email.length > MAX_LENGTHS.email || !EMAIL_REGEX.test(payload.email)) {
    errors.push("A valid email address is required.");
  }

  if (!payload.phone?.trim()) errors.push("Phone number is required.");
  else if (!PHONE_REGEX.test(payload.phone)) errors.push("A valid phone number is required.");

  if (!payload.message?.trim()) errors.push("Message cannot be empty.");
  else if (payload.message.length > MAX_LENGTHS.message) errors.push("Message is too long.");

  return errors;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: Partial<ContactPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const errors = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ error: errors[0], errors }, { status: 400 });
  }

  const firstName = sanitize(body.firstName!);
  const lastName = sanitize(body.lastName!);
  const company = body.company ? sanitize(body.company) : "";
  const email = sanitize(body.email!);
  const phone = sanitize(body.phone!);
  const message = sanitize(body.message!).slice(0, MAX_LENGTHS.message);

  const recipient = process.env.CONTACT_EMAIL;
  const fromAddress = process.env.RESEND_FROM_EMAIL;

  if (!process.env.RESEND_API_KEY || !recipient || !fromAddress) {
    // Config problem, not a user error — log generically, don't leak details to the client.
    console.error("Contact form is misconfigured: missing RESEND_API_KEY, CONTACT_EMAIL, or RESEND_FROM_EMAIL.");
    return NextResponse.json(
      { error: "The enquiry form is temporarily unavailable. Please try again later." },
      { status: 500 }
    );
  }

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Lagos",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 560px; margin: 0 auto; color: #1f2937;">
        <div style="padding: 24px 32px 12px; text-align: center;">
            <img
            src="https://ilp-site-iota.vercel.app/images/logo/logo.png"
            alt="I. Lawrence Practice"
            width="140"
            style="display: inline-block; height: auto;"
            />
        </div>
      <div style="background-color: #D97757; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; font-family: Arial, sans-serif;">New Website Enquiry</h1>
        <p style="color: #ffffff; font-size: 13px; margin: 4px 0 0; opacity: 0.9; font-family: Arial, sans-serif;">I. Lawrence Practice</p>
      </div>
      <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
          <tbody>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #111827; font-weight: 600;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; color: #111827;">${escapeHtml(phone)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Company</td>
              <td style="padding: 8px 0; color: #111827;">${company ? escapeHtml(company) : "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; vertical-align: top;">Submitted</td>
              <td style="padding: 8px 0; color: #111827;">${escapeHtml(submittedAt)} (WAT)</td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px; font-family: Arial, sans-serif;">Message</p>
          <p style="color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
        </div>
      </div>
    </div>
  `;

  const text = `New Website Enquiry — Lawrence Practice

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company || "—"}
Submitted: ${submittedAt} (WAT)

Message:
${message}
`;

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipient,
      replyTo: email,
      subject: "New Website Enquiry — Lawrence Practice",
      html,
      text,
    });

    if (error) {
      console.error("Resend failed to send contact enquiry email:", JSON.stringify(error));
      return NextResponse.json(
        { error: "We couldn't send your enquiry. Please try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error while sending contact enquiry email:", err);
    return NextResponse.json(
      { error: "We couldn't send your enquiry. Please try again shortly." },
      { status: 500 }
    );
  }
}