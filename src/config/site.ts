// All company details live here.
export const site = {
  /** Brand name, as shown to visitors. */
  name: 'SYNAPSE Tech',
  /** Legal entity behind the brand (footer, schema.org). */
  legalName: 'COVALIOV VICTOR PFA',
  url: 'https://synapsetech.ro',
  phone: '0755 154 722',
  /** International format for tel: links and schema.org. */
  phoneIntl: '+40755154722',
  email: 'contact@synapsetech.ro',
  whatsapp: '40755154722', // international format, digits only, for wa.me links
  address: {
    city: 'Suceava',
    region: 'Suceava',
    country: 'RO',
  },
  cui: '55693416',
  /** Web3Forms access key (web3forms.com): submissions are emailed to the address it was created with. */
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
} as const;
