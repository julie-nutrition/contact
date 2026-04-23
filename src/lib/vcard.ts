export type VCardInput = {
  firstName: string;
  lastName: string;
  title?: string;
  email?: string;
  phone?: string;
  website?: string;
  instagram?: string;
  calendar?: string;
};

/**
 * Build a vCard 3.0 payload and return a data: URL suitable for an anchor
 * `href` with `download` attribute. vCard is the de-facto format for saving
 * contacts on iOS and Android.
 */
export function buildVCardUrl(input: VCardInput): string {
  const lines: string[] = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escape(input.lastName)};${escape(input.firstName)};;;`,
    `FN:${escape(`${input.firstName} ${input.lastName}`)}`,
  ];

  if (input.title) lines.push(`TITLE:${escape(input.title)}`);
  if (input.phone) lines.push(`TEL;TYPE=CELL:${input.phone}`);
  if (input.email) lines.push(`EMAIL;TYPE=INTERNET:${input.email}`);
  if (input.website) lines.push(`URL:${input.website}`);
  if (input.instagram)
    lines.push(`X-SOCIALPROFILE;TYPE=instagram:${input.instagram}`);
  if (input.calendar) lines.push(`X-CALURI:${input.calendar}`);

  lines.push("END:VCARD");

  const body = lines.join("\r\n");
  return `data:text/vcard;charset=utf-8,${encodeURIComponent(body)}`;
}

function escape(value: string): string {
  return value.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
}
