// Romanian copy — primary language. Source: docs/BRIEF.md.
// en.ts must mirror this structure exactly (enforced by the Dictionary type).
export const ro = {
  meta: {
    title: 'Hardware, firmware, computer vision și software custom',
    description:
      'Sisteme inteligente la cheie: proiectare PCB, firmware, IoT industrial, computer vision și aplicații cloud. Echipă completă de ingineri hardware & software.',
  },
  nav: {
    solutions: 'Soluții',
    process: 'Proces',
    whyUs: 'De ce noi',
    contact: 'Contact',
    cta: 'Cere un demo',
    menu: 'Meniu',
    close: 'Închide',
    language: 'Limba',
  },
  anchors: {
    home: 'acasa',
    solutions: 'solutii',
    process: 'proces',
    cases: 'demo',
    whyUs: 'de-ce-noi',
    contact: 'contact',
  },
  hero: {
    title: 'Sisteme inteligente la cheie: de la hardware și senzori până la AI și Cloud.',
    subtitle:
      'Proiectăm și dezvoltăm soluții custom pentru industrie, orașe inteligente și produse hardware. Fără intermediari — echipă completă de ingineri software & hardware.',
    primary: 'Discută cu un inginer',
    secondary: 'Vezi domeniile noastre',
    badge: 'Echipă premiată la competiția internațională de inginerie Hard&Soft (USV)',
    imageAlt: 'Inginer care lipește componente pe o placă electronică',
    audiencesLabel: 'Pentru cine lucrăm',
    audiences: [
      {
        id: 'industry',
        tab: 'Industrie & orașe',
        text: 'Fabrici, depozite, primării: monitorizare, computer vision și automatizări pe ce aveți deja.',
      },
      {
        id: 'product',
        tab: 'Produse hardware',
        text: 'Startup-uri și companii cu o idee de produs fizic: de la schemă la prototip gata de serie.',
      },
    ],
  },
  solutions: {
    title: 'Ce rezolvăm concret',
    kicker: 'De la senzor la cloud, cu aceeași echipă',
    intro: 'Patru domenii în care ducem un proiect de la senzor până la aplicație.',
    labels: {
      problem: 'Problema',
      solution: 'Soluția noastră',
      benefit: 'Beneficiu cheie',
      input: 'Input',
      processing: 'Procesare',
      diagram: 'Schema sistemului',
      outcomes: 'Ce primești',
      result: 'Rezultat',
    },
    items: [
      {
        id: 'iot',
        imageAlt: 'Strung industrial în funcțiune, cu jet de lichid de răcire',
        tab: 'IoT industrial',
        title: 'Retrofitting industrial & monitorizare producție',
        problem: 'Utilaje vechi fără date, timpi morți neobservați, pierderi de energie și rebuturi.',
        solution:
          'Atașăm senzori industriali (vibrații, curent, temperatură, optic) și unități de achiziție pe utilajele existente, conectate la un dashboard live în cloud.',
        benefit:
          'Vezi randamentul (OEE) în timp real pe telefon și primești alerte înainte ca un utilaj să se defecteze.',
        stages: [
          {
            title: 'Senzori pe utilaj',
            items: ['Vibrații și temperatură', 'Curent și consum de energie', 'Senzori optici pentru cicluri și rebut'],
          },
          {
            title: 'Achiziție & cloud',
            items: ['Gateway industrial (ESP32 / Linux)', 'Date trimise criptat (MQTT) în cloud', 'Merge și pe utilaje vechi, fără PLC'],
          },
          {
            title: 'OEE live + alerte',
            items: ['Dashboard OEE pe telefon', 'Alerte înainte de defectare', 'Rapoarte de energie și rebut'],
          },
        ],
        outcomes: ['OEE în timp real', 'Mentenanță predictivă', 'Fără înlocuirea utilajelor'],
      },
      {
        id: 'vision',
        imageAlt: 'Două camere de supraveghere montate pe un stâlp',
        tab: 'Computer vision',
        title: 'Computer vision & Edge AI',
        problem:
          'Control vizual lent sau greșit făcut manual; lipsa automatizării în trafic, parcări sau securitate perimetrală.',
        solution:
          'Sisteme cu camere video și procesare AI locală (Edge) care detectează defecte pe banda de producție, recunosc numere de înmatriculare sau protejează trecerile de pietoni prin avertizare activă.',
        benefit: 'Decizii în milisecunde, fără dependență de internet și fără erori umane.',
        stages: [
          {
            title: 'Cameră video',
            items: ['Camere industriale sau IP', 'Iluminare controlată pe bandă', 'Funcționează zi și noapte (IR)'],
          },
          {
            title: 'AI local (Edge)',
            items: ['Modele antrenate pe imaginile tale', 'Procesare pe un calculator edge, local', 'Imaginile nu pleacă în cloud'],
          },
          {
            title: 'Decizie în ms',
            items: ['Piesele defecte sunt respinse automat', 'Numere de înmatriculare citite', 'Avertizare activă la trecerile de pietoni'],
          },
        ],
        outcomes: ['Decizii în milisecunde', 'Funcționează offline', 'Datele rămân la tine'],
      },
      {
        id: 'rnd',
        imageAlt: 'Placă electronică ținută în mână',
        tab: 'R&D hardware',
        title: 'R&D & prototipare hardware / firmware',
        problem:
          'Companii sau startup-uri care au o idee de produs fizic, dar nu au echipa care să ducă proiectul de la schemă la prototip funcțional.',
        solution:
          'Proiectare PCB, selecție componente, firmware (STM32, ESP32, Linux Embedded), carcasare și aplicația mobilă/web de control.',
        benefit: 'Un singur partener tehnic pentru tot produsul, gata de testare și producție în serie.',
        stages: [
          {
            title: 'Idee & specificații',
            items: ['Workshop de cerințe', 'Arhitectură hardware + software', 'Selecție componente și cost BOM'],
          },
          {
            title: 'PCB + firmware',
            items: ['Schemă și layout PCB', 'Firmware STM32 / ESP32 / Linux Embedded', 'Carcasă proiectată și printată 3D'],
          },
          {
            title: 'Prototip funcțional',
            items: ['Prototip testat în condiții reale', 'Aplicație mobilă / web de control', 'Documentație pentru producția în serie'],
          },
        ],
        outcomes: ['Un singur partener tehnic', 'De la schemă la serie', 'Cod și fișiere predate integral'],
      },
      {
        id: 'automation',
        imageAlt: 'Rafturi metalice portocalii într-un depozit',
        tab: 'Logistică & agro',
        title: 'Automatizări custom pentru logistică & agricultură',
        problem: 'Procese lente în depozite, erori la pregătirea comenzilor sau lipsa datelor din teren.',
        solution:
          'Sisteme Pick-to-Light pentru rafturi, stații autonome de monitorizare meteo/sol și sisteme telematice custom pentru flote și utilaje.',
        benefit: 'Reducerea costurilor operaționale și control total asupra activității din teren.',
        stages: [
          {
            title: 'Rafturi, câmp, flotă',
            items: ['Comenzi din WMS / ERP', 'Senzori meteo și de sol', 'GPS și date CAN de la utilaje'],
          },
          {
            title: 'Automatizare',
            items: ['Pick-to-Light pe fiecare raft', 'Stații autonome solare, LoRa / 4G', 'Telematică custom pentru flotă'],
          },
          {
            title: 'Costuri reduse',
            items: ['Mai puține erori la pregătirea comenzilor', 'Date din teren în timp real', 'Control total asupra flotei'],
          },
        ],
        outcomes: ['Erori de picking reduse', 'Monitorizare de la distanță', 'Integrare cu ce ai deja'],
      },
    ],
    cta: 'Discută proiectul cu un inginer',
  },
  process: {
    title: 'Cum lucrăm',
    intro: 'Pași mici, rezultate verificabile. Nu plătești pentru ceva ce nu ai văzut funcționând.',
    steps: [
      {
        title: 'Audit tehnic',
        text: 'La fața locului sau online. Analizăm problema reală și definim specificațiile.',
      },
      {
        title: 'Prototip / PoC',
        text: 'Construim rapid o variantă funcțională pe un singur utilaj sau flux, ca să vezi rezultatele concret.',
      },
      {
        title: 'Implementare & integrare',
        text: 'Instalăm sistemul complet, conectăm interfața web/mobilă și instruim echipa ta.',
      },
      {
        title: 'Mentenanță & scalare',
        text: 'Monitorizăm sistemul pe termen lung și îl extindem pe măsură ce crești.',
      },
    ],
  },
  cases: {
    title: 'Studii de caz & demo-uri',
    intro: 'Kit-uri demo și proiecte livrate, cu poze și video.',
    watch: 'Vezi demo-ul',
  },
  whyUs: {
    title: 'De ce noi?',
    items: [
      {
        title: 'Full-stack în lumea reală',
        text: 'Nu ne oprim la cod. Înțelegem atât electrica/electronica de pe teren, cât și arhitectura cloud.',
      },
      {
        title: 'Echipă testată sub presiune',
        text: 'Câștigători ai concursului internațional Hard&Soft, obișnuiți să livrăm sisteme complexe funcționale în timp record.',
      },
      {
        title: 'Fără vendor lock-in',
        text: 'Construim soluții adaptate pe infrastructura ta, ușor de întreținut și extins.',
      },
    ],
  },
  contact: {
    title: 'Programează o discuție tehnică',
    intro: 'Spune-ne ce vrei să automatizezi sau să construiești. Răspunde un inginer, nu un agent de vânzări.',
    form: {
      name: 'Nume',
      company: 'Firmă / domeniu',
      reach: 'Telefon sau email',
      problem: 'Descrie pe scurt ce vrei să automatizezi sau să construiești',
      submit: 'Trimite',
      sending: 'Se trimite…',
      success: 'Mulțumim! Te contactăm în cel mult o zi lucrătoare.',
      error: 'Nu am putut trimite mesajul. Încearcă din nou sau scrie-ne pe WhatsApp.',
      required: 'Câmp obligatoriu',
    },
    direct: 'Sau direct',
    phone: 'Telefon',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Bună ziua! Aș vrea să discut despre un proiect.',
  },
  footer: {
    rights: 'Toate drepturile rezervate.',
    cui: 'CUI',
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof ro>;
