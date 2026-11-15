// English copy — full mirror of ro.ts.
import type { Dictionary } from './ro';

export const en: Dictionary = {
  meta: {
    title: 'Hardware, firmware, computer vision and custom software',
    description:
      'Turnkey intelligent systems: PCB design, firmware, industrial IoT, computer vision and cloud applications. A complete team of hardware & software engineers.',
  },
  nav: {
    home: 'Home',
    solutions: 'Solutions',
    process: 'Process',
    whyUs: 'Why us',
    contact: 'Contact',
    cta: 'Request a demo',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
  },
  anchors: {
    home: 'home',
    solutions: 'solutions',
    process: 'process',
    cases: 'demo',
    whyUs: 'why-us',
    contact: 'contact',
  },
  hero: {
    title: 'Turnkey intelligent systems: from hardware and sensors to AI and the cloud.',
    subtitle:
      'We design and build custom solutions for industry, smart cities and hardware products. No middlemen — a complete team of software & hardware engineers.',
    primary: 'Talk to an engineer',
    secondary: 'See what we do',
    badge: 'Award-winning team at the Hard&Soft international engineering competition (USV)',
    imageAlt: 'Engineer soldering components onto a circuit board',
    audiencesLabel: 'Who we work with',
    audiences: [
      {
        id: 'industry',
        tab: 'Industry & cities',
        text: 'Factories, warehouses, municipalities: monitoring, computer vision and automation on the equipment you already have.',
      },
      {
        id: 'product',
        tab: 'Hardware products',
        text: 'Startups and companies with an idea for a physical product: from schematic to a prototype ready for production.',
      },
    ],
  },
  solutions: {
    title: 'What we solve',
    kicker: 'From sensor to cloud, with one team',
    intro: 'Four areas where we take a project from the sensor all the way to the app.',
    labels: {
      problem: 'The problem',
      solution: 'Our solution',
      benefit: 'Key benefit',
      outcomes: 'What you get',
    },
    items: [
      {
        id: 'iot',
        imageAlt: 'Industrial lathe running with coolant spray',
        tab: 'Industrial IoT',
        title: 'Industrial retrofitting & production monitoring',
        problem: 'Old machines with no data, unnoticed downtime, energy losses and scrap.',
        solution:
          'We fit industrial sensors (vibration, current, temperature, optical) and data-acquisition units to your existing machines, connected to a live cloud dashboard.',
        benefit: 'See your OEE in real time on your phone and get alerts before a machine breaks down.',
        /** Index of the outcome that gets the cyan live dot. */
        live: 0,
        outcomes: ['Real-time OEE', 'Predictive maintenance', 'No machine replacement'],
      },
      {
        id: 'vision',
        imageAlt: 'Two surveillance cameras mounted on a pole',
        tab: 'Computer vision',
        title: 'Computer vision & edge AI',
        problem:
          'Slow or error-prone manual visual inspection; no automation in traffic, parking or perimeter security.',
        solution:
          'Camera systems with on-site (edge) AI processing that detect defects on the production line, read licence plates or protect pedestrian crossings with active warnings.',
        benefit: 'Decisions in milliseconds, with no internet dependency and no human error.',
        outcomes: ['Decisions in milliseconds', 'Works offline', 'Your data stays with you'],
      },
      {
        id: 'rnd',
        imageAlt: 'Circuit board held in a hand',
        tab: 'Hardware R&D',
        title: 'Hardware / firmware R&D & prototyping',
        problem:
          'Companies and startups with an idea for a physical product, but no team to take it from schematic to working prototype.',
        solution:
          'PCB design, component selection, firmware (STM32, ESP32, embedded Linux), enclosures and the mobile/web control app.',
        benefit: 'One technical partner for the whole product, ready for testing and series production.',
        outcomes: ['One technical partner', 'From schematic to series', 'Code and files fully handed over'],
      },
      {
        id: 'automation',
        imageAlt: 'Orange metal shelving in a warehouse',
        tab: 'Logistics & agri',
        title: 'Custom automation for logistics & agriculture',
        problem: 'Slow warehouse processes, order-picking errors or no data from the field.',
        solution:
          'Pick-to-Light systems for shelving, autonomous weather/soil monitoring stations and custom telematics for fleets and machinery.',
        benefit: 'Lower operating costs and full control over what happens in the field.',
        outcomes: ['Fewer picking errors', 'Remote monitoring', 'Works with what you already have'],
      },
    ],
    cta: 'Discuss your project with an engineer',
  },
  process: {
    title: 'How we work',
    kicker: 'Small steps, verifiable results',
    intro: "You don't pay for something you haven't seen working. Every stage ends with a concrete result you see before we move on.",
    imageLabel: 'From audit to production',
    imageAlt: 'Engineer soldering components on a board under a workshop lamp',
    steps: [
      {
        title: 'Technical audit',
        text: 'On site or online. We analyse the real problem and define the specifications.',
      },
      {
        title: 'Prototype / PoC',
        text: 'We quickly build a working version on a single machine or flow, so you see concrete results.',
      },
      {
        title: 'Implementation & integration',
        text: 'We install the full system, connect the web/mobile interface and train your team.',
      },
      {
        title: 'Maintenance & scaling',
        text: 'We monitor the system long-term and extend it as you grow.',
      },
    ],
  },
  cases: {
    title: 'Case studies & demos',
    kicker: 'Systems already at work',
    intro: 'Demo kits and delivered projects, with photos and video.',
    watch: 'Watch the demo',
    featured: 'Recent project',
    results: 'Results',
  },
  whyUs: {
    title: 'Why us?',
    kicker: 'What sets us apart',
    intro: 'One team from the sensor to the app.',
    link: 'Talk to an engineer',
    items: [
      {
        title: 'Full-stack in the real world',
        text: "We don't stop at code. We understand both the electrics/electronics on the ground and the cloud architecture.",
      },
      {
        title: 'A team tested under pressure',
        text: 'Winners of the Hard&Soft international competition, used to delivering complex, working systems in record time.',
      },
      {
        title: 'No vendor lock-in',
        text: 'We build solutions around your infrastructure, easy to maintain and extend.',
      },
    ],
  },
  contact: {
    title: 'Book a technical call',
    kicker: 'An engineer replies, not a salesperson',
    intro: 'Tell us what you want to automate or build. You get a technical answer with the next steps.',
    imageAlt: 'Close-up of microchips on a circuit board',
    formLabel: 'Reply within one business day',
    form: {
      name: 'Name',
      company: 'Company / industry',
      reach: 'Phone or email',
      problem: 'Briefly describe what you want to automate or build',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Thank you! We will get back to you within one business day.',
      error: "We couldn't send your message. Please try again or message us on WhatsApp.",
      required: 'Required field',
      invalidReach: 'Enter a valid phone number or email address',
      consent: 'We only use your details to reply to you. See our',
      consentLink: 'privacy policy',
      subject: 'New message from the website',
    },
    direct: 'Or directly',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: "Hello! I'd like to discuss a project.",
    whatsappFab: 'Message us on WhatsApp',
  },
  privacy: {
    title: 'Privacy policy',
    description: 'What personal data we collect through this website, why, how long we keep it and your rights.',
    updated: 'Last updated: 15 November 2026',
    sections: [
      {
        title: 'Who we are',
        body: [
          'The data controller is COVALIOV VICTOR PFA (trading as SYNAPSE Tech), tax ID 55693416, based in Suceava, Romania. You can reach us at any time at contact@synapsetech.ro.',
        ],
      },
      {
        title: 'What we collect',
        body: [
          'Only what you send us through the contact form: name, company or industry, phone or email and your project description. If you email us, message us on WhatsApp or call, we receive the details in that message.',
          'This website uses no cookies, no tracking or advertising tools and builds no visitor profiles.',
        ],
      },
      {
        title: 'Why we use it',
        body: [
          'To reply to you and discuss your project, i.e. to take steps at your request before a possible contract (Art. 6(1)(b) GDPR). We send no newsletters and never sell or rent your data.',
        ],
      },
      {
        title: 'Who else sees it',
        body: [
          'Form messages reach our inbox through the Web3Forms service, which forwards them without using them for anything else. Our website host and email provider may technically store this data on our behalf. If you contact us on WhatsApp, the WhatsApp (Meta) privacy policy also applies.',
          'Some of these providers may process data outside the European Economic Area, under the safeguards set by the GDPR (such as standard contractual clauses).',
        ],
      },
      {
        title: 'How long we keep it',
        body: [
          'For as long as we discuss the project. If we do not end up working together, we delete your message within 2 years at most. If we do, the data becomes part of the contract records for the period required by law.',
        ],
      },
      {
        title: 'Your rights',
        body: [
          'You can ask at any time to access, correct or delete your data, restrict or object to its processing, or receive it in a portable format. Write to contact@synapsetech.ro and we will reply within one month.',
          'You may also lodge a complaint with the Romanian data protection authority (ANSPDCP), www.dataprotection.ro.',
        ],
      },
      {
        title: 'External content',
        body: [
          'Fonts are hosted on our own server. YouTube demo videos only load when you press play, in privacy-enhanced mode (youtube-nocookie.com).',
        ],
      },
    ],
    back: 'Back to the home page',
  },
  notFound: {
    title: 'Page not found',
    text: 'The link is wrong or the page has moved.',
    home: 'Back to the home page',
  },
  footer: {
    rights: 'All rights reserved.',
    cui: 'VAT ID',
    tagline: 'Hardware, firmware, computer vision and custom software. Based in Suceava, Romania.',
    navTitle: 'Page',
    contactTitle: 'Contact',
    companyTitle: 'Company',
    country: 'Romania',
    privacy: 'Privacy',
    backToTop: 'Top',
  },
};
