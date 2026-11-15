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
    services: 'Servicii',
    allServices: 'Toate serviciile',
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
    title: 'Sisteme inteligente la cheie.',
    subtitle:
      'De la hardware și senzori până la AI și cloud: proiectăm soluții custom pentru industrie, orașe inteligente și produse hardware. Fără intermediari, cu o echipă completă de ingineri.',
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
        /** Index of the outcome that gets the cyan live dot. */
        live: 0,
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
      consent: 'Folosim datele doar ca să-ți răspundem. Detalii în',
      consentLink: 'Politica de confidențialitate',
      subject: 'Mesaj nou de pe site',
    },
    direct: 'Sau direct',
    phone: 'Telefon',
    email: 'Email',
    whatsapp: 'WhatsApp',
    whatsappMessage: 'Bună ziua! Aș vrea să discut despre un proiect.',
    whatsappFab: 'Scrie-ne pe WhatsApp',
  },
  services: {
    labels: {
      breadcrumb: 'Servicii',
      how: 'Cum funcționează',
      howIntro: 'De la semnalul fizic până la decizie, cu aceeași echipă.',
      uses: 'Unde se aplică',
      tech: 'Tehnologii',
      faq: 'Întrebări frecvente',
      others: 'Alte servicii',
      details: 'Detalii despre serviciu',
      more: 'Detalii',
      whatsapp: 'Scrie pe WhatsApp',
      problem: 'Problema',
      solution: 'Soluția noastră',
    },
    items: {
      iot: {
        demo: {
          caption: 'Exemplu de dashboard',
          machine: 'Strung CNC 02 · Linia 3',
          oee: 'OEE',
          bars: ['Disponibilitate', 'Performanță', 'Calitate'],
          chart: 'Piese / oră, ultimele 8 ore',
          alert: 'Vibrații peste prag la rulmentul axului 2',
          alertTime: 'acum 3 min',
        },
        metaTitle: 'Monitorizare producție IoT și retrofitting utilaje',
        metaDescription:
          'Senzori industriali pe utilajele existente, OEE în timp real, alerte de mentenanță predictivă și dashboard în cloud. Proiectăm și instalăm din Suceava, în toată România.',
        lead: 'Transformăm utilajele pe care le ai deja în surse de date: montăm senzori și unități de achiziție, fără să schimbi mașinile și fără opriri lungi de producție.',
        how: [
          {
            title: 'Senzori pe utilaj',
            text: 'Curent, vibrații, temperatură, senzori optici sau semnale din automatul existent (PLC). Montaj neinvaziv, de regulă fără modificări în schema electrică a mașinii.',
          },
          {
            title: 'Achiziție & edge',
            text: 'O unitate de achiziție proiectată de noi citește senzorii, filtrează datele local și le trimite securizat prin Ethernet, Wi-Fi sau LTE.',
          },
          {
            title: 'Cloud & dashboard',
            text: 'Datele ajung într-un dashboard web și mobil: starea utilajelor, timpi de funcționare și opriri, OEE, consum de energie.',
          },
          {
            title: 'Alerte & rapoarte',
            text: 'Praguri și tipare care anunță din timp o problemă: notificări pe telefon sau email și rapoarte periodice pentru management.',
          },
        ],
        uses: [
          'Strunguri, freze și centre CNC',
          'Prese, injecție mase plastice, linii de ambalare',
          'Compresoare, pompe, motoare și ventilatoare',
          'Consumul de energie pe utilaj sau pe hală',
          'Contorizarea pieselor bune și a rebuturilor',
          'Integrare cu ERP / MES prin API',
        ],
        tech: ['Senzori de curent (CT)', 'Accelerometre MEMS', 'Modbus RTU / TCP', 'MQTT', 'OPC UA', 'ESP32 / STM32', 'Linux embedded', 'Dashboard web & mobil'],
        faq: [
          {
            q: 'Trebuie să opresc producția pentru montaj?',
            a: 'De obicei nu, sau doar pentru scurt timp. Majoritatea senzorilor se montează în exterior, iar instalarea se planifică în pauze sau în schimburi cu încărcare mică.',
          },
          {
            q: 'Funcționează și pe utilaje vechi, fără PLC?',
            a: 'Da, pentru asta e gândit retrofitting-ul: măsurăm direct mărimi fizice (curent, vibrații, temperatură), deci nu depindem de electronica mașinii.',
          },
          {
            q: 'Cu ce începem?',
            a: 'Cu un audit și un pilot pe unul sau câteva utilaje. Vezi datele reale înainte să decizi extinderea pe toată hala.',
          },
          {
            q: 'Ale cui sunt datele?',
            a: 'Ale tale. Platforma poate rula în cloud sau pe serverul tău, iar datele se pot exporta oricând.',
          },
        ],
      },
      vision: {
        demo: {
          caption: 'Exemplu de detecție',
          cam: 'CAM 01 · 1080p · 30 FPS',
          labels: ['Cameră IP', 'Cameră IP', 'Stâlp'],
          inference: 'Inferență locală',
          objects: 'obiecte',
        },
        metaTitle: 'Soluții computer vision și Edge AI pentru industrie și orașe',
        metaDescription:
          'Control vizual automat pe linia de producție, recunoașterea numerelor de înmatriculare și treceri de pietoni cu avertizare activă. Procesare AI locală, fără dependență de internet.',
        lead: 'Sisteme cu camere și inteligență artificială care rulează local, lângă cameră: decid în milisecunde, funcționează și fără internet, iar imaginile nu pleacă din locația ta.',
        how: [
          {
            title: 'Camere & iluminare',
            text: 'Alegem camera, obiectivul și iluminarea potrivite locului: bandă de producție, parcare sau intersecție. O imagine bună e jumătate din soluție.',
          },
          {
            title: 'Model AI pe cazul tău',
            text: 'Antrenăm și testăm modelul pe imagini din procesul tău real, nu pe exemple generice.',
          },
          {
            title: 'Procesare edge',
            text: 'Modelul rulează pe un calculator industrial compact, lângă cameră. Rezultatul vine în milisecunde, fără să trimiți video în cloud.',
          },
          {
            title: 'Acțiune & raportare',
            text: 'Sistemul acționează (respinge piesa, ridică bariera, aprinde avertizarea) și înregistrează evenimentele într-un dashboard.',
          },
        ],
        uses: [
          'Detecția defectelor pe linia de producție',
          'Verificarea etichetelor, ambalajelor și a asamblării',
          'Numărarea și sortarea produselor',
          'Recunoașterea numerelor de înmatriculare (ANPR) pentru parcări și acces',
          'Treceri de pietoni cu avertizare activă',
          'Monitorizarea perimetrului și a zonelor periculoase',
        ],
        tech: ['Camere industriale & IP', 'Iluminare dedicată', 'NVIDIA Jetson', 'OpenCV', 'Modele YOLO', 'Python / C++', 'Integrare PLC / I/O', 'Dashboard & alerte'],
        faq: [
          {
            q: 'De ce local și nu în cloud?',
            a: 'Pentru viteză, cost și confidențialitate: decizia se ia în milisecunde, nu plătești transfer video continuu, iar imaginile rămân la tine.',
          },
          {
            q: 'Cât de precis este?',
            a: 'Depinde de caz. De aceea începem cu un test pe imagini reale și stabilim împreună pragul de acceptare înainte de implementare.',
          },
          {
            q: 'Se poate integra cu linia existentă?',
            a: 'Da. Sistemul poate comanda un actuator sau poate trimite un semnal către PLC (de exemplu pentru respingerea piesei) și poate transmite date către sistemele tale.',
          },
          {
            q: 'Ce se întâmplă cu datele personale din imagini?',
            a: 'Proiectăm sistemul să proceseze local și să păstreze doar ce e necesar (de exemplu evenimentul, nu tot video-ul), conform GDPR.',
          },
        ],
      },
      rnd: {
        demo: {
          caption: 'Exemplu de placă',
          layers: 'Strat 1 / 4 · cupru',
        },
        metaTitle: 'Proiectare PCB, firmware și prototipare hardware',
        metaDescription:
          'Dezvoltăm produse hardware de la idee la serie: schemă și PCB, firmware STM32, ESP32 sau Linux embedded, carcasă și aplicație web sau mobilă.',
        lead: 'Ai o idee de produs fizic? O ducem de la schemă la un prototip funcțional și apoi spre producția de serie, cu o singură echipă pentru electronică, firmware și aplicație.',
        how: [
          {
            title: 'Specificații & arhitectură',
            text: 'Clarificăm ce trebuie să facă produsul, costul țintă, alimentarea, conectivitatea și certificările necesare.',
          },
          {
            title: 'Schemă & PCB',
            text: 'Alegem componentele (cu atenție la disponibilitate), proiectăm schema și cablajul și comandăm primele plăci.',
          },
          {
            title: 'Firmware & aplicație',
            text: 'Scriem firmware-ul pentru microcontroler sau Linux embedded și aplicația web sau mobilă care controlează dispozitivul.',
          },
          {
            title: 'Prototip & pregătire de serie',
            text: 'Asamblăm, testăm și îmbunătățim prototipul, apoi pregătim documentația de producție: BOM, fișiere Gerber, proceduri de test.',
          },
        ],
        uses: [
          'Dispozitive IoT conectate (Wi-Fi, BLE, LTE, LoRa)',
          'Plăci de achiziție și control pentru utilaje',
          'Senzori și noduri alimentate pe baterie',
          'Interfețe și controlere pentru echipamente existente',
          'Modernizarea unui produs vechi cu componente actuale',
          'Kit-uri demo și proof-of-concept pentru investitori',
        ],
        tech: ['KiCad / Altium', 'STM32', 'ESP32', 'Linux embedded', 'C / C++', 'BLE · Wi-Fi · LTE · LoRa', 'Carcase printate 3D', 'Aplicații web & mobile'],
        faq: [
          {
            q: 'Ce primesc la final?',
            a: 'Toate fișierele: scheme, PCB, BOM, codul sursă al firmware-ului și al aplicației. Produsul e al tău, fără dependență de noi.',
          },
          {
            q: 'Puteți porni de la un prototip existent?',
            a: 'Da. Putem prelua un proiect început (de exemplu pe Arduino sau pe o placă de dezvoltare) și îl transformăm într-un produs robust, gata de serie.',
          },
          {
            q: 'Vă ocupați și de producție?',
            a: 'Pregătim documentația și lucrăm cu fabrici de PCB și asamblare pentru serii mici și medii. Pentru volume mari predăm pachetul complet producătorului ales de tine.',
          },
          {
            q: 'Cât durează un prototip?',
            a: 'Depinde de complexitate. După audit primești un plan pe etape, fiecare încheiată cu un rezultat pe care îl vezi funcționând.',
          },
        ],
      },
      automation: {
        demo: {
          caption: 'Exemplu Pick-to-Light',
          order: 'Comanda #1042',
          lines: 'linii',
          shelf: 'Raft A',
        },
        metaTitle: 'Automatizări logistică și agricultură: Pick-to-Light, telematică',
        metaDescription:
          'Sisteme Pick-to-Light pentru depozite, stații autonome de monitorizare meteo și sol, telematică custom pentru flote și utilaje agricole.',
        lead: 'Automatizăm procesele din depozit și din teren acolo unde soluțiile standard nu se potrivesc: hardware robust, software adaptat și integrare cu ce folosești deja.',
        how: [
          {
            title: 'Analiza fluxului',
            text: 'Vedem cum se lucrează azi: unde se pierde timp, unde apar erori și ce date lipsesc.',
          },
          {
            title: 'Hardware pentru teren',
            text: 'Module de raft, stații alimentate solar sau trackere pentru utilaje, proiectate pentru praf, umezeală și temperaturi extreme.',
          },
          {
            title: 'Conectare & software',
            text: 'Dispozitivele comunică prin rețeaua locală, LTE sau LoRa cu o aplicație care centralizează datele și comenzile.',
          },
          {
            title: 'Integrare & instruire',
            text: 'Conectăm sistemul la WMS, ERP sau alte aplicații existente și instruim echipa să-l folosească din prima zi.',
          },
        ],
        uses: [
          'Pick-to-Light și Put-to-Light pentru pregătirea comenzilor',
          'Inventarul și localizarea mărfii pe rafturi',
          'Stații meteo și senzori de umiditate a solului',
          'Monitorizarea serelor, silozurilor și depozitelor frigorifice',
          'Telematică pentru flote și utilaje agricole',
          'Alerte de la distanță pentru pompe, generatoare și echipamente izolate',
        ],
        tech: ['Module LED de raft', 'Energie solară & baterii', 'LoRaWAN', 'LTE / NB-IoT', 'GPS / GNSS', 'Modbus', 'Integrare WMS / ERP', 'Aplicații web & mobile'],
        faq: [
          {
            q: 'Se poate integra cu WMS-ul sau ERP-ul pe care îl avem?',
            a: 'De cele mai multe ori da, prin API, baze de date sau fișiere de schimb. Verificăm asta încă din etapa de audit.',
          },
          {
            q: 'Funcționează unde nu este internet?',
            a: 'Da. Stațiile din teren pot comunica prin LoRa sau LTE, păstrează datele local și le transmit când conexiunea revine.',
          },
          {
            q: 'Putem începe cu un singur raft sau o singură stație?',
            a: 'Da, recomandăm un pilot mic. Vezi rezultatele concret și apoi extindem.',
          },
        ],
      },
    },
  },
  privacy: {
    title: 'Politica de confidențialitate',
    description: 'Ce date personale colectăm prin site, de ce, cât timp le păstrăm și ce drepturi ai.',
    updated: 'Ultima actualizare: 15 noiembrie 2026',
    sections: [
      {
        title: 'Cine suntem',
        body: [
          'Operatorul datelor este COVALIOV VICTOR PFA (marca SYNAPSE Tech), CUI 55693416, cu sediul în Suceava, România. Ne poți scrie oricând la contact@synapsetech.ro.',
        ],
      },
      {
        title: 'Ce date colectăm',
        body: [
          'Doar ce ne trimiți tu prin formularul de contact: nume, firmă sau domeniu, telefon sau email și descrierea proiectului. Dacă ne scrii pe email, WhatsApp sau ne suni, primim datele din acel mesaj.',
          'Site-ul nu folosește cookie-uri, nu are instrumente de urmărire sau reclame și nu creează profiluri ale vizitatorilor.',
        ],
      },
      {
        title: 'De ce le folosim',
        body: [
          'Ca să-ți răspundem și să discutăm proiectul tău, adică pentru demersuri înainte de un eventual contract, la cererea ta (art. 6 alin. 1 lit. b din GDPR). Nu trimitem newslettere și nu vindem sau închiriem datele.',
        ],
      },
      {
        title: 'Cine le mai vede',
        body: [
          'Mesajele din formular ajung la noi pe email prin serviciul Web3Forms, care le transmite fără să le folosească în alt scop. Găzduirea site-ului și furnizorul de email pot stoca tehnic aceste date, în numele nostru. Dacă ne contactezi pe WhatsApp, se aplică și politica de confidențialitate WhatsApp (Meta).',
          'Unii dintre acești furnizori pot procesa date în afara Spațiului Economic European, cu garanțiile prevăzute de GDPR (de exemplu clauze contractuale standard).',
        ],
      },
      {
        title: 'Cât timp le păstrăm',
        body: [
          'Cât durează discuția despre proiect. Dacă nu ajungem la o colaborare, ștergem mesajul în cel mult 2 ani. Dacă lucrăm împreună, datele intră în evidența contractului, pe durata impusă de lege.',
        ],
      },
      {
        title: 'Drepturile tale',
        body: [
          'Poți cere oricând acces la datele tale, corectarea sau ștergerea lor, restricționarea prelucrării, portabilitatea lor sau te poți opune prelucrării. Scrie-ne la contact@synapsetech.ro și îți răspundem în cel mult o lună.',
          'Dacă ești nemulțumit, poți depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), www.dataprotection.ro.',
        ],
      },
      {
        title: 'Conținut extern',
        body: [
          'Fonturile sunt găzduite pe serverul nostru. Videoclipurile demo de pe YouTube se încarcă doar când apeși play, în modul cu confidențialitate sporită (youtube-nocookie.com).',
        ],
      },
    ],
    back: 'Înapoi la pagina principală',
  },
  notFound: {
    title: 'Pagina nu există',
    text: 'Linkul e greșit sau pagina a fost mutată.',
    home: 'Înapoi la pagina principală',
  },
  footer: {
    rights: 'Toate drepturile rezervate.',
    cui: 'CUI',
    tagline: 'Hardware, firmware, computer vision și software custom. Din Suceava, pentru toată țara.',
    servicesTitle: 'Servicii',
    navTitle: 'Pagină',
    contactTitle: 'Contact',
    companyTitle: 'Firmă',
    country: 'România',
    privacy: 'Confidențialitate',
    backToTop: 'Sus',
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof ro>;
