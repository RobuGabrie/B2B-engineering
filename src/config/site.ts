// All company details live here. Placeholders until the real data arrives.
export const site = {
  name: 'NUMECOMPANIE',
  /** Wordmark in the header: first part bold, second regular (as "PROIMPROVER" in the reference). */
  wordmark: ['NUME', 'COMPANIE'],
  url: 'https://example.com',
  phone: '+40 700 000 000',
  email: 'contact@example.com',
  whatsapp: '40700000000', // international format, digits only, for wa.me links
  address: {
    street: 'Str. Exemplu nr. 1',
    city: 'Suceava',
    region: 'Suceava',
    postalCode: '720000',
    country: 'RO',
  },
  cui: 'RO00000000',
} as const;
