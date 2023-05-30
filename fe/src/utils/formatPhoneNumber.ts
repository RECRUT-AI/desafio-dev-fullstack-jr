export function formatPhoneNumber(phoneNumber: string) {
  const regex = /(\d{2})(\d)(\d{4})(\d{4})/;
  const formattedNumber = phoneNumber.replace(regex, '($1) $2 $3-$4');
  return formattedNumber;
}