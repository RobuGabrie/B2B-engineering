// Romanian copy — primary language. Source: docs/BRIEF.md.
// en.ts must mirror this structure exactly (enforced by the Dictionary type).
export const ro = {
  meta: {
    title: 'Hardware, firmware, computer vision și software custom',
    description:
      'Sisteme inteligente la cheie: proiectare PCB, firmware, IoT industrial, computer vision și aplicații cloud. Echipă completă de ingineri hardware & software.',
  },
  nav: {
    home: 'Acasă',
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
      outcomes: 'Ce primești',
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
        outcomes: ['Erori de picking reduse', 'Monitorizare de la distanță', 'Integrare cu ce ai deja'],
      },
    ],
    cta: 'Discută proiectul cu un inginer',
  },
  process: {
    title: 'Cum lucrăm',
    kicker: 'Pași mici, rezultate verificabile',
    intro: 'Nu plătești pentru ceva ce nu ai văzut funcționând. Fiecare etapă se încheie cu un rezultat concret, pe care îl vezi înainte să mergem mai departe.',
    imageLabel: 'De la audit la producție',
    imageAlt: 'Inginer care lipește componente pe o placă, sub o lampă de atelier',
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
    kicker: 'Sisteme care funcționează deja',
    intro: 'Kit-uri demo și proiecte livrate, cu poze și video.',
    watch: 'Vezi demo-ul',
    featured: 'Proiect recent',
    results: 'Rezultate',
  },
  whyUs: {
    title: 'De ce noi?',
    kicker: 'Ce ne diferențiază',
    intro: 'Aceeași echipă de la senzor până la aplicație.',
    link: 'Discută cu un inginer',
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
    kicker: 'Răspunde un inginer, nu un agent de vânzări',
    intro: 'Spune-ne ce vrei să automatizezi sau să construiești. Primești un răspuns tehnic, cu pașii următori.',
    imageAlt: 'Prim-plan cu microcipuri pe o placă electronică',
    formLabel: 'Răspuns într-o zi lucrătoare',
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
      invalidReach: 'Scrie un număr de telefon sau o adresă de email validă',
      subject: 'Mesaj nou de pe site',
    },
    direct: 'Sau direct',
    phone: 'Telefon',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Bună ziua! Aș vrea să discut despre un proiect.',
    whatsappFab: 'Scrie-ne pe WhatsApp',
  },
  footer: {
    rights: 'Toate drepturile rezervate.',
    cui: 'CUI',
    tagline: 'Hardware, firmware, computer vision și software custom. Din Suceava, pentru toată țara.',
    navTitle: 'Pagină',
    contactTitle: 'Contact',
    companyTitle: 'Firmă',
    backToTop: 'Sus',
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof ro>;
