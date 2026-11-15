// English copy — full mirror of ro.ts.
import type { Dictionary } from './ro';

export const en: Dictionary = {
  meta: {
    title: 'Hardware, firmware, computer vision and custom software',
    description:
      'Turnkey intelligent systems: PCB design, firmware, industrial IoT, computer vision and cloud applications. A complete team of hardware & software engineers.',
  },
  nav: {
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
      input: 'Input',
      processing: 'Processing',
      diagram: 'System diagram',
      outcomes: 'What you get',
      result: 'Result',
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
        stages: [
          {
            title: 'Sensors on the machine',
            items: ['Vibration and temperature', 'Current and energy use', 'Optical sensors for cycles and scrap'],
          },
          {
            title: 'Acquisition & cloud',
            items: ['Industrial gateway (ESP32 / Linux)', 'Encrypted data (MQTT) to the cloud', 'Works on old machines, no PLC needed'],
          },
          {
            title: 'Live OEE + alerts',
            items: ['OEE dashboard on your phone', 'Alerts before a breakdown', 'Energy and scrap reports'],
          },
        ],
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
        stages: [
          {
            title: 'Video camera',
            items: ['Industrial or IP cameras', 'Controlled lighting on the line', 'Works day and night (IR)'],
          },
          {
            title: 'On-site AI (edge)',
            items: ['Models trained on your images', 'Processing on a local edge computer', 'Images never leave the site'],
          },
          {
            title: 'Decision in ms',
            items: ['Defective parts rejected automatically', 'Licence plates read', 'Active warnings at pedestrian crossings'],
          },
        ],
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
        stages: [
          {
            title: 'Idea & specs',
            items: ['Requirements workshop', 'Hardware + software architecture', 'Component selection and BOM cost'],
          },
          {
            title: 'PCB + firmware',
            items: ['Schematic and PCB layout', 'Firmware for STM32 / ESP32 / embedded Linux', 'Enclosure designed and 3D printed'],
          },
          {
            title: 'Working prototype',
            items: ['Prototype tested in real conditions', 'Mobile / web control app', 'Documentation for series production'],
          },
        ],
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
        stages: [
          {
            title: 'Shelves, fields, fleet',
            items: ['Orders from your WMS / ERP', 'Weather and soil sensors', 'GPS and CAN data from machinery'],
          },
          {
            title: 'Automation',
            items: ['Pick-to-Light on every shelf', 'Autonomous solar stations, LoRa / 4G', 'Custom fleet telematics'],
          },
          {
            title: 'Lower costs',
            items: ['Fewer order-picking errors', 'Real-time data from the field', 'Full control over your fleet'],
          },
        ],
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
    intro: 'Demo kits and delivered projects, with photos and video.',
    watch: 'Watch the demo',
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
    intro: 'Tell us what you want to automate or build. An engineer replies, not a salesperson.',
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
    },
    direct: 'Or directly',
    phone: 'Phone',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: "Hello! I'd like to discuss a project.",
  },
  footer: {
    rights: 'All rights reserved.',
    cui: 'VAT ID',
  },
};
