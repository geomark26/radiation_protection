export type QuestionItem = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
};

export type ModuleQuestions = {
  en: QuestionItem[];
  el: QuestionItem[];
};

export const radiationQuestionsData: Record<number, ModuleQuestions> = {
  1: {
    en: [
      {
        question: "Radiation can be defined as:",
        answers: [
          "Energy stored inside atoms",
          "The emission and propagation of energy through space or matter",
          "The interaction of atoms with electrons",
          "The vibration of atomic nuclei",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Depending on the carriers of energy, radiation can be classified into:",
        answers: [
          "Chemical and electrical",
          "Electromagnetic and particulate",
          "Visible and invisible light",
          "Fast and slow traveling radiation",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which of the following is classified as particulate radiation?",
        answers: [
          "Gamma rays",
          "Photons",
          "Electrons",
          "Infrared radiation",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Electromagnetic radiation consists of:",
        answers: [
          "Oscillating electric and magnetic fields perpendicular to each other",
          "Moving neutral particles",
          "Oscillating nuclear forces",
          "Static electric fields",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "The energy of electromagnetic radiation is proportional to its:",
        answers: [
          "Speed",
          "Amplitude",
          "Frequency",
          "Wavelength",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which type of electromagnetic radiation has sufficient energy to ionize matter and is therefore important in radiation protection?",
        answers: [
          "Microwaves and radio waves",
          "Visible light",
          "Infrared",
          "X-rays and gamma rays",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "According to the Rutherford–Bohr model, electrons:",
        answers: [
          "Are randomly distributed around the nucleus",
          "Orbit in discrete energy levels around the nucleus",
          "Are stationary",
          "Have identical energies",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Atomic excitation is the process where:",
        answers: [
          "An electron is completely removed from the atom",
          "An electron absorbs energy and moves to a higher energy level",
          "The nucleus emits radiation",
          "The nucleus absorbs energy and becomes unstable",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Characteristic X-rays are emitted when:",
        answers: [
          "An electron transitions from a higher energy level and fills a vacancy in an inner shell.",
          "An unstable nucleus decays",
          "A positron annihilates with an electron",
          "An electron is removed from the atom",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ionization occurs when:",
        answers: [
          "The atom emits a neutron",
          "The atom emits electromagnetic radiation",
          "An electron is removed from the atom",
          "An electron moves from a higher to a lower energy level",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "The nucleus of an atom is composed of:",
        answers: [
          "Electrons and protons",
          "Neutrons and electrons",
          "Protons only",
          "Protons and neutrons",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "What is the best description of radioactivity?",
        answers: [
          "A process where stable nuclei absorb energy",
          "A spontaneous process where an unstable nucleus transforms into a more stable one by emitting radiation",
          "A chemical reaction involving electron transfer",
          "A process where electrons rearrange to form a stable atom",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "In alpha decay, an unstable parent nucleus transforms into a more stable nucleus by emitting:",
        answers: [
          "A helium nucleus (alpha particle)",
          "A proton",
          "A neutron",
          "A gamma ray",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "In beta minus decay, a neutron-rich parent nucleus converts one of its neutrons into a proton and emits:",
        answers: [
          "A positron",
          "An alpha particle",
          "A neutron",
          "An electron",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "In beta plus decay, a proton-rich parent nucleus converts one of its protons into a neutron and emits:",
        answers: [
          "A neutron",
          "A proton",
          "An electron",
          "A positron",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "In gamma decay, an excited nucleus releases its excess energy in the form of:",
        answers: [
          "One or more gamma photons",
          "One or more X-rays",
          "One or more neutrons",
          "One or more protons",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "What does radioactive activity represent?",
        answers: [
          "The total energy emitted by a radioactive source",
          "The number of radioactive nuclei in a sample",
          "The rate at which radioactive nuclei decay",
          "The time required for complete decay of the nuclei in a sample",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "A radioactive sample is said to have high activity. What does this imply?",
        answers: [
          "It contains a large number of stable atoms",
          "It emits high-energy photons only",
          "A large number of nuclei decay per second",
          "It has a long half-life",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "The half-life of a radionuclide is the time required for:",
        answers: [
          "All nuclei to decay",
          "Half of the nuclei to decay",
          "Activity to become zero",
          "One decay to occur",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A radionuclide sample has an activity of 1000 Bq (1000 decays per second). After one half-life, the activity will be:",
        answers: [
          "500 Bq",
          "750 Bq",
          "250 Bq",
          "100 Bq",
        ],
        correctAnswerIndex: 0,
      },
    ],
    el: [
      {
        question: "Η ακτινοβολία µπορεί να οριστεί ως:",
        answers: [
          "Ενέργεια αποθηκευµένη µέσα στα άτοµα",
          "Η εκποµπή και διάδοση ενέργειας µέσω του χώρου ή της ύλης",
          "Η αλληλεπίδραση των ατόµων µε τα ηλεκτρόνια",
          "Η ταλάντωση των ατοµικών πυρήνων",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ανάλογα µε τους φορείς ενέργειας, η ακτινοβολία ταξινοµείται σε:",
        answers: [
          "Χηµική και ηλεκτρική",
          "Ηλεκτροµαγνητική και σωµατιδιακή",
          "Ορατό και αόρατο φως",
          "Γρήγορα και αργά κινουµένη ακτινοβολία",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ποιο από τα παρακάτω ταξινοµείται ως σωµατιδιακή ακτινοβολία;",
        answers: [
          "Ακτίνες γάµµα",
          "Φωτόνια",
          "Ηλεκτρόνια",
          "Υπέρυθρη ακτινοβολία",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η ηλεκτροµαγνητική ακτινοβολία αποτελείται από:",
        answers: [
          "Κάθετα µεταξύ τους ταλαντούµενα ηλεκτρικά και µαγνητικά πεδία",
          "Κινούµενα ουδέτερα σωµατίδια",
          "Ταλαντούµενες πυρηνικές δυνάµεις",
          "Στατικά ηλεκτρικά πεδία",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η ενέργεια της ηλεκτροµαγνητικής ακτινοβολίας είναι ανάλογη µε:",
        answers: [
          "Την ταχύτητα",
          "Το πλάτος",
          "Την συχνότητα",
          "Το µήκος κύµατος",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ποιος τύπος ηλεκτροµαγνητικής ακτινοβολίας έχει επαρκή ενέργεια για να ιονίσει την ύλη και εποµένως είναι σηµαντικός στην ακτινοπροστασία;",
        answers: [
          "Μικροκύµατα και ραδιοκύµατα",
          "Ορατό φως",
          "Υπέρυθρη ακτινοβολία",
          "Ακτίνες Χ και ακτίνες γάµµα",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Σύµφωνα µε το µοντέλο Rutherford-Bohr, τα ηλεκτρόνια:",
        answers: [
          "Κατανέµονται τυχαία γύρω από τον πυρήνα",
          "Κινούνται σε διακριτά ενεργειακά επίπεδα γύρω από τον πυρήνα",
          "Είναι ακίνητα",
          "Έχουν όλα την ίδια ενέργεια",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Η ατοµική διέγερση είναι η διαδικασία κατά την οποία:",
        answers: [
          "Ένα ηλεκτρόνιο αποµακρύνεται εντελώς από το άτοµο",
          "Ένα ηλεκτρόνιο απορροφά ενέργεια και µετακινείται σε υψηλότερο ενεργειακό επίπεδο",
          "Ο πυρήνας εκπέµπει ακτινοβολία",
          "Ο πυρήνας απορροφά ενέργεια και γίνεται ασταθής",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Χαρακτηριστικές ακτίνες Χ εκπέµπονται όταν:",
        answers: [
          "Ένα ηλεκτρόνιο µεταβαίνει από υψηλότερο ενεργειακό επίπεδο και καταλαµβάνει µια κενή θέση σε εσωτερικό φλοιό",
          "Ένας ασταθής πυρήνας διασπάται",
          "Ένα ποζιτρόνιο εξαϋλώνεται µε ένα ηλεκτρόνιο",
          "Ένα ηλεκτρόνιο αποµακρύνεται από το άτοµο",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ιονισµός συµβαίνει όταν:",
        answers: [
          "Το άτοµο εκπέµπει ένα νετρόνιο",
          "Το άτοµο εκπέµπει ηλεκτροµαγνητική ακτινοβολία",
          "Ένα ηλεκτρόνιο αποµακρύνεται από το άτοµο",
          "Ένα ηλεκτρόνιο µετακινείται σε χαµηλότερο ενεργειακό επίπεδο",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ο πυρήνας ενός ατόµου αποτελείται από:",
        answers: [
          "Ηλεκτρόνια και πρωτόνια",
          "Νετρόνια και ηλεκτρόνια",
          "Μόνο πρωτόνια",
          "Πρωτόνια και νετρόνια",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Η ραδιενέργεια είναι:",
        answers: [
          "Μια διαδικασία κατά την οποία σταθεροί πυρήνες απορροφούν ενέργεια",
          "Μια αυθόρµητη διαδικασία κατά την οποία ένας ασταθής πυρήνας µετατρέπεται σε πιο σταθερό εκπέµποντας ακτινοβολία",
          "Μια χηµική αντίδραση µεταφοράς ηλεκτρονίων",
          "Μια διαδικασία αναδιάταξης ηλεκτρονίων για σταθερότητα",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Στη διάσπαση άλφα, ένας ασταθής πυρήνας µετατρέπεται σε πιο σταθερό εκπέµποντας:",
        answers: [
          "Έναν πυρήνα ηλίου (σωµατίδιο άλφα)",
          "Ένα πρωτόνιο",
          "Ένα νετρόνιο",
          "Μια ακτίνα γάµµα",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Στη διάσπαση βήτα µείον, ένας πυρήνας πλούσιος σε νετρόνια µετατρέπει ένα νετρόνιο σε πρωτόνιο και εκπέµπει:",
        answers: [
          "Ένα ποζιτρόνιο",
          "Ένα σωµατίδιο άλφα",
          "Ένα νετρόνιο",
          "Ένα ηλεκτρόνιο",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Στη διάσπαση βήτα συν, ένας πυρήνας πλούσιος σε πρωτόνια µετατρέπει ένα πρωτόνιο σε νετρόνιο και εκπέµπει:",
        answers: [
          "Ένα νετρόνιο",
          "Ένα πρωτόνιο",
          "Ένα ηλεκτρόνιο",
          "Ένα ποζιτρόνιο",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Στη διάσπαση γάµµα, ένας διεγερµένος πυρήνας εκπέµπει την περίσσεια ενέργειάς του µε τη µορφή:",
        answers: [
          "Ενός ή περισσοτέρων φωτονίων γάµµα",
          "Ενός ή περισσοτέρων ακτίνων Χ",
          "Ενός ή περισσοτέρων νετρονίων",
          "Ενός ή περισσοτέρων πρωτονίων",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Τι εκφράζει η ραδιενεργός ενεργότητα;",
        answers: [
          "Τη συνολική ενέργεια που εκπέµπεται από µια ραδιενεργό πηγή",
          "Τον αριθµό των ραδιενεργών πυρήνων σε ένα δείγµα",
          "Τον ρυθµό µε τον οποίο διασπώνται οι ραδιενεργοί πυρήνες",
          "Τον χρόνο που απαιτείται για πλήρη διάσπαση των πυρήνων ενός δείγµατος",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ένα ραδιενεργό δείγµα λέγεται ότι έχει υψηλή ενεργότητα. Τι σηµαίνει αυτό;",
        answers: [
          "Περιέχει µεγάλο αριθµό σταθερών ατόµων",
          "Εκπέµπει µόνο υψηλής ενέργειας φωτόνια",
          "Ένας µεγάλος αριθµός πυρήνων διασπάται ανά δευτερόλεπτο",
          "Έχει µεγάλο χρόνο ηµιζωής",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ο χρόνος ηµιζωής ενός ραδιονουκλιδίου είναι ο χρόνος που απαιτείται για:",
        answers: [
          "Να διασπαστούν όλοι οι πυρήνες",
          "Να διασπαστεί το ήµισυ των πυρήνων",
          "Να µηδενιστεί η ενεργότητα",
          "Να συµβεί µία διάσπαση",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ένα δείγµα έχει ενεργότητα 1000 Bq (1000 διασπάσεις ανά δευτερόλεπτο). Μετά από διάστηµα ενός χρόνου ηµιζωής, η ενεργότητα θα είναι:",
        answers: [
          "500 Bq",
          "750 Bq",
          "250 Bq",
          "100 Bq",
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
  2: {
    en: [
      {
        question: "Ionizing radiation is defined as radiation that:",
        answers: [
          "Produces heat",
          "Penetrates all materials",
          "Can remove electrons from atoms",
          "Travels at the speed of sound",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "A radiation beam is unable to remove electrons from atoms but can excite them. How should this radiation be classified?",
        answers: [
          "Non-Ionizing radiation",
          "Directly ionizing radiation",
          "Ionizing radiation",
          "Secondary radiation",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Why are photons considered indirectly ionizing radiation?",
        answers: [
          "They do not interact with matter",
          "They transfer energy directly to nuclei",
          "They only produce heat",
          "They first produce charged particles that then cause ionization",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Charged particles (such as electrons and protons) deposit energy directly through interactions with matter. How is this radiation classified?",
        answers: [
          "Indirectly ionizing radiation",
          "Non-ionizing radiation",
          "Directly ionizing radiation",
          "Electromagnetic radiation",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "A photon collides with an outer-shell electron, ejecting it and continuing with reduced energy. Which interaction is this?",
        answers: [
          "Photoelectric effect",
          "Pair production",
          "Compton scattering",
          "Coherent scattering",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Why is Compton scattering particularly important in radiation protection?",
        answers: [
          "It is the main source of occupational radiation exposure",
          "It produces protons",
          "It destroys all photons",
          "It produces neutrons",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "A photon is completely absorbed and an inner-shell electron is ejected. What interaction occurred?",
        answers: [
          "Compton scattering",
          "Photoelectric effect",
          "Pair production",
          "Elastic collision",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A high-energy photon disappears and produces an electron and a positron. Which interaction is this?",
        answers: [
          "Photoelectric effect",
          "Compton scattering",
          "Ionization",
          "Pair production",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A beam of photons passes through a material and only some photons interact, while others continue unaffected. What does this demonstrate?",
        answers: [
          "The probabilistic nature of radiation interactions",
          "The deterministic behavior of radiation interactions",
          "That radiation absorption is constant and the same for all photons",
          "That all photons are completely absorbed",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "A photon beam decreases in intensity as it passes through material. What explains this behavior?",
        answers: [
          "Due to attenuation, as some photons interact with the material and are absorbed or scattered",
          "Due to an increase in the wavelength of all photons as they pass through the material",
          "Due to the creation of additional energy within the material",
          "Due to multiplication of photons as they pass through the material",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "The Half-Value Layer (HVL) is the thickness of material that:",
        answers: [
          "Completely absorbs radiation",
          "Reduces beam intensity to one-half",
          "Stops all charged particles",
          "Allows photons to travel without interaction",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "If the thickness of a material has two half-value layers (HVLs), what fraction of the beam passes through it?",
        answers: [
          "50%",
          "25%",
          "75%",
          "10%",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "In general, energetic charged particles interacting with matter:",
        answers: [
          "Gradually lose energy through many interactions",
          "Do not interact with atoms",
          "Travel in perfectly straight paths without deflection",
          "Lose all their energy in one interaction",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Alpha particles:",
        answers: [
          "Travel a few centimeters in air and can be stopped by a sheet of paper or the outer layer of human skin",
          "Can travel several meters in air and easily penetrate human skin",
          "Can penetrate thick metal but not biological tissue",
          "Pass through the body without interacting with tissue",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Beta particles (electrons):",
        answers: [
          "Travel only a few centimeters in air and are stopped by paper",
          "Cannot penetrate the skin and pose no external hazard",
          "Penetrate deeply through the entire human body without interaction",
          "Can travel several meters in air, penetrate a few millimeters in solids, and may reach the skin’s germinal layer",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Gamma rays and X-rays:",
        answers: [
          "They travel only a few centimeters in air and are stopped by the skin",
          "They have a finite range and stop abruptly in matter",
          "They can pass through significant thicknesses of matter, including the human body, and are attenuated exponentially",
          "They cannot penetrate solid materials",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Absorbed dose is defined as:",
        answers: [
          "Energy deposited per unit mass of material",
          "Decays per second",
          "Energy per unit area",
          "Ionization events per second",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "The quantity linear energy transfer (LET) refers to:",
        answers: [
          "The total energy emitted by a radioactive source",
          "The rate at which radiation decays over time",
          "The average energy transferred per unit length along the path of radiation",
          "The total distance radiation travels in matter",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Low-LET radiation such as X-rays and gamma rays:",
        answers: [
          "Produces dense ionization along a short track",
          "Produces sparsely distributed ionizations along its path",
          "Does not interact with matter",
          "Deposits all its energy in a single interaction",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "High-LET radiation such as protons and heavy ions:",
        answers: [
          "Produces sparsely distributed ionizations along long tracks",
          "Does not interact with matter",
          "Deposits all its energy in a single interaction",
          "Produces dense ionization along short tracks",
        ],
        correctAnswerIndex: 3,
      },
    ],
    el: [
      {
        question: "Η ιονίζουσα ακτινοβολία ορίζεται ως ακτινοβολία που:",
        answers: [
          "Παράγει θερµότητα",
          "Διεισδύει σε όλα τα υλικά",
          "Μπορεί να αποµακρύνει ηλεκτρόνια από τα άτοµα",
          "Διαδίδεται µε την ταχύτητα του ήχου",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Μια δέσµη ακτινοβολίας δεν µπορεί να αποµακρύνει ηλεκτρόνια από τα άτοµα αλλά µπορεί να τα διεγείρει. Πώς ταξινοµείται αυτή η ακτινοβολία;",
        answers: [
          "Μη ιονίζουσα ακτινοβολία",
          "Ιονίζουσα ακτινοβολία",
          "Άµεσα ιονίζουσα ακτινοβολία",
          "Δευτερογενής ακτινοβολία",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Γιατί τα φωτόνια θεωρούνται έµµεσα ιονίζουσα ακτινοβολία;",
        answers: [
          "Δεν αλληλεπιδρούν µε την ύλη",
          "Μεταφέρουν ενέργεια απευθείας στους πυρήνες",
          "Παράγουν µόνο θερµότητα",
          "Πρώτα παράγουν φορτισµένα σωµατίδια που στη συνέχεια προκαλούν ιονισµό",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Τα φορτισµένα σωµατίδια (όπως ηλεκτρόνια και πρωτόνια) αποθέτουν ενέργεια απευθείας µέσω αλληλεπιδράσεων µε την ύλη. Πώς ταξινοµείται αυτή η ακτινοβολία;",
        answers: [
          "Έµµεσα ιονίζουσα ακτινοβολία",
          "Μη ιονίζουσα ακτινοβολία",
          "Άµεσα ιονίζουσα ακτινοβολία",
          "Ηλεκτροµαγνητική ακτινοβολία",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ένα φωτόνιο συγκρούεται µε ένα ηλεκτρόνιο εξωτερικού φλοιού, το εκτοξεύει και συνεχίζει µε µειωµένη ενέργεια. Ποια αλληλεπίδραση είναι αυτή;",
        answers: [
          "Φωτοηλεκτρικό φαινόµενο",
          "Δηµιουργία ζεύγους",
          "Σκέδαση Compton",
          "Σύµφωνη σκέδαση",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Γιατί η σκέδαση Compton είναι ιδιαίτερα σηµαντική στην ακτινοπροστασία;",
        answers: [
          "Αποτελεί την κύρια πηγή επαγγελµατικής έκθεσης",
          "Παράγει πρωτόνια",
          "Καταστρέφει όλα τα φωτόνια",
          "Παράγει νετρόνια",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ένα φωτόνιο απορροφάται πλήρως και ένα ηλεκτρόνιο εσωτερικού φλοιού εκτοξεύεται. Ποια αλληλεπίδραση συνέβη;",
        answers: [
          "Σκέδαση Compton",
          "Φωτοηλεκτρικό φαινόµενο",
          "Δηµιουργία ζεύγους",
          "Ελαστική σύγκρουση",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ένα φωτόνιο υψηλής ενέργειας εξαφανίζεται και δηµιουργεί ένα ηλεκτρόνιο και ένα ποζιτρόνιο. Ποια αλληλεπίδραση είναι αυτή;",
        answers: [
          "Φωτοηλεκτρικό φαινόµενο",
          "Σκέδαση Compton",
          "Ιονισµός",
          "Δηµιουργία ζεύγους",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Μια δέσµη φωτονίων διέρχεται από υλικό και µόνο µερικά φωτόνια αλληλεπιδρούν, ενώ άλλα συνεχίζουν ανεπηρέαστα. Τι δείχνει αυτό;",
        answers: [
          "Την πιθανοκρατική φύση των αλληλεπιδράσεων",
          "Την ντετερµινιστική συµπεριφορά των αλληλεπιδράσεων",
          "Ότι η απορρόφηση της ακτινοβολίας είναι σταθερή και ίδια για όλα τα φωτόνια",
          "Ότι όλα τα φωτόνια απορροφώνται πλήρως",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Μια δέσµη φωτονίων µειώνεται σε ένταση καθώς διέρχεται από υλικό. Πώς εξηγείται αυτό;",
        answers: [
          "Λόγω εξασθένησης, καθώς ένα µέρος των φωτονίων αλληλεπιδρά µε το υλικό και απορροφάται ή σκεδάζεται",
          "Λόγω αύξησης του µήκους κύµατος όλων των φωτονίων κατά τη διέλευση από το υλικό",
          "Λόγω δηµιουργίας επιπλέον ενέργειας µέσα στο υλικό",
          "Λόγω πολλαπλασιασµού των φωτονίων καθώς διέρχονται από το υλικό",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Το πάχος ηµιεξασθένησης (HVL) είναι το πάχος υλικού που:",
        answers: [
          "Απορροφά πλήρως την ακτινοβολία",
          "Μειώνει την ένταση της δέσµης στο µισό",
          "Σταµατά όλα τα φορτισµένα σωµατίδια",
          "Επιτρέπει στα φωτόνια να διέρχονται χωρίς αλληλεπίδραση",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Αν το πάχος ενός υλικού είναι δύο πάχη ηµιεξασθένησης (HVL), ποιο ποσοστό της δέσµης το διαπερνά;",
        answers: [
          "50%",
          "25%",
          "75%",
          "10%",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Γενικά, τα ενεργητικά φορτισµένα σωµατίδια όταν αλληλεπιδρούν µε την ύλη:",
        answers: [
          "Χάνουν σταδιακά ενέργεια µέσω πολλών αλληλεπιδράσεων",
          "Δεν αλληλεπιδρούν µε τα άτοµα",
          "Κινούνται σε απόλυτα ευθύγραµµες τροχιές χωρίς εκτροπή",
          "Χάνουν όλη την ενέργειά τους σε µία µόνο αλληλεπίδραση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Τα σωµατίδια άλφα:",
        answers: [
          "Διανύουν λίγα εκατοστά στον αέρα και µπορούν να σταµατήσουν από ένα φύλλο χαρτιού ή το εξωτερικό στρώµα του δέρµατος",
          "Διανύουν αρκετά µέτρα στον αέρα και διαπερνούν εύκολα το δέρµα",
          "Διαπερνούν παχύ µέταλλο αλλά όχι βιολογικούς ιστούς",
          "Διέρχονται από το σώµα χωρίς αλληλεπίδραση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Τα σωµατίδια βήτα (ηλεκτρόνια):",
        answers: [
          "Διανύουν λίγα εκατοστά στον αέρα και σταµατούν από χαρτί",
          "Δεν µπορούν να διαπεράσουν το δέρµα",
          "Διαπερνούν πλήρως το ανθρώπινο σώµα χωρίς αλληλεπίδραση",
          "Μπορούν να διανύσουν αρκετά µέτρα στον αέρα και να διεισδύσουν λίγα χιλιοστά στους ιστούς, φτάνοντας στο βασικό στρώµα του δέρµατος",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Οι ακτίνες γάµµα και οι ακτίνες Χ:",
        answers: [
          "Διανύουν λίγα εκατοστά στον αέρα και σταµατούν από το δέρµα",
          "Έχουν πεπερασµένο βεληνεκές και σταµατούν απότοµα",
          "Μπορούν να διαπεράσουν σηµαντικά πάχη ύλης, συµπεριλαµβανοµένου του ανθρώπινου σώµατος, και εξασθενούν εκθετικά",
          "Δεν µπορούν να διαπεράσουν στερεά υλικά",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η απορροφούµενη δόση ορίζεται ως:",
        answers: [
          "Ενέργεια που αποτίθεται ανά µονάδα µάζας",
          "Διασπάσεις ανά δευτερόλεπτο",
          "Ενέργεια ανά µονάδα επιφάνειας",
          "Ιονισµοί ανά δευτερόλεπτο",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η ποσότητα γραµµική µεταφορά ενέργειας (LET) αναφέρεται σε:",
        answers: [
          "Τη συνολική ενέργεια που εκπέµπεται",
          "Τον ρυθµό διάσπασης",
          "Τη µέση ενέργεια που µεταφέρεται ανά µονάδα µήκους της τροχιάς",
          "Τη συνολική απόσταση που διανύει η ακτινοβολία",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η ακτινοβολία χαµηλού LET (όπως οι ακτίνες Χ και γάµµα):",
        answers: [
          "Παράγει πυκνό ιονισµό σε µικρή τροχιά",
          "Παράγει αραιά κατανεµηµένο ιονισµό κατά µήκος της τροχιάς της",
          "Δεν αλληλεπιδρά µε την ύλη",
          "Αποθέτει όλη την ενέργειά της σε µία αλληλεπίδραση",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Η ακτινοβολία υψηλού LET (όπως πρωτόνια και βαρέα ιόντα):",
        answers: [
          "Παράγει αραιό ιονισµό σε µεγάλες τροχιές",
          "Δεν αλληλεπιδρά µε την ύλη",
          "Αποθέτει όλη την ενέργειά της σε µία αλληλεπίδραση",
          "Παράγει πυκνό ιονισµό σε µικρές τροχιές",
        ],
        correctAnswerIndex: 3,
      },
    ],
  },
  3: {
    en: [
      {
        question: "Which type of cell is generally most radiosensitive and why?",
        answers: [
          "Stem cells, because they divide rapidly and are poorly differentiated",
          "Neurons, because they are highly specialized",
          "Muscle cells, because they consume large amounts of energy",
          "Mature epithelial cells, because they are fully developed",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which cells are most radioresistant and why?",
        answers: [
          "Bone marrow cells, because they divide rapidly",
          "Germ cells, because they contain DNA",
          "Neurons, because they are highly differentiated and rarely divide",
          "Stem cells, because they are undifferentiated",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Why are germ cells particularly important in radiation protection?",
        answers: [
          "They are resistant to radiation",
          "They cannot divide",
          "They repair DNA instantly",
          "Damage can be transmitted to future generations",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A cell exposed to radiation pauses its progression to repair DNA damage. What mechanism is responsible for this?",
        answers: [
          "Apoptosis",
          "Cell membrane signaling",
          "Cell cycle checkpoints",
          "Protein synthesis",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which natural source contributes most to average radiation exposure?",
        answers: [
          "Cosmic radiation at sea level",
          "Radon inhalation indoors",
          "Terrestrial radiation from soil",
          "Internal radiation from food",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Which artificial source contributes most to population exposure?",
        answers: [
          "Nuclear accidents",
          "Industrial sources",
          "Medical applications",
          "Research laboratories",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Direct action of radiation refers to:",
        answers: [
          "Interaction with water producing free radicals",
          "Direct deposition of energy in DNA causing damage",
          "Heating of tissues without molecular damage",
          "Reflection of radiation from tissues",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Free radicals are:",
        answers: [
          "Stable molecules that do not participate in chemical reactions",
          "Electrically neutral molecules that are always non-reactive",
          "Highly reactive ions, atoms, or molecules with unpaired electrons",
          "Non-reactive atoms that do not interact with biological molecules",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Indirect radiation damage occurs mainly due to:",
        answers: [
          "Direct interaction with DNA",
          "Formation of free radicals from water molecules (radiolysis)",
          "Thermal energy transfer",
          "Nuclear reactions in cells",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Double-strand DNA breaks:",
        answers: [
          "Are easily repaired",
          "Occur only in non-dividing cells",
          "Can lead to cell death or mutations",
          "Do not affect DNA replication or cell survival",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "A cell successfully repairs radiation-induced DNA damage. What is the outcome?",
        answers: [
          "Mutation",
          "Normal function restored",
          "Cell death",
          "Cancer",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Misrepair of DNA damage may result in:",
        answers: [
          "Immediate recovery",
          "Increased stability",
          "Genetic mutations and cancer risk",
          "No effect",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "What is the most likely outcome when radiation-induced cellular damage is extensive and too severe?",
        answers: [
          "The cell still recovers without any effect",
          "The cell increases its rate of division",
          "The cell loses its function and/or ability to divide, leading to cell death",
          "The damage is always reversed immediately",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "How does a low dose rate influence radiation-induced damage?",
        answers: [
          "It reduces damage because cells have time to repair",
          "It has no effect on biological response",
          "It increases radiation energy",
          "It increases damage because exposure lasts longer",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Compared to adults, children are more radiosensitive because:",
        answers: [
          "They have fully differentiated cells",
          "They have higher rates of cell division and a longer life expectancy",
          "They always receive higher doses",
          "They do not repair DNA damage",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Deterministic effects are characterized by:",
        answers: [
          "No threshold and random occurrence",
          "Effects independent of dose",
          "Only long-term effects",
          "A threshold dose with severity increasing with dose",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Deterministic effects are caused by:",
        answers: [
          "Damage to a small number of cells",
          "Loss of a large number of cells in a tissue",
          "Random DNA mutation only",
          "Heat generation",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Why are stochastic effects described as probabilistic?",
        answers: [
          "They always occur at high doses",
          "Their occurrence is based on chance and likelihood increases with dose",
          "They depend only on time",
          "They are predictable for each individual",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Stochastic effects:",
        answers: [
          "Have a threshold dose",
          "Their severity increases with dose",
          "Have no threshold, with probability increasing with dose",
          "Always causing immediate symptoms",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which statement best describes fetal radiation sensitivity?",
        answers: [
          "The fetus is always resistant",
          "Radiation has no effect",
          "Only affects the mother",
          "Sensitivity depends on developmental stage",
        ],
        correctAnswerIndex: 3,
      },
    ],
    el: [
      {
        question: "Ποιος τύπος κυττάρων είναι γενικά πιο ακτινοευαίσθητος και γιατί;",
        answers: [
          "Βλαστοκύτταρα, επειδή διαιρούνται γρήγορα και είναι ελάχιστα διαφοροποιηµένα",
          "Νευρώνες, επειδή είναι πολύ εξειδικευµένοι",
          "Μυϊκά κύτταρα, επειδή καταναλώνουν µεγάλες ποσότητες ενέργειας",
          "Ώριµα επιθηλιακά κύτταρα, επειδή είναι πλήρως ανεπτυγµένα",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ποια κύτταρα είναι τα πιο ραδιοανθεκτικά και γιατί;",
        answers: [
          "Κύτταρα µυελού των οστών, επειδή διαιρούνται γρήγορα",
          "Γαµετικά κύτταρα, επειδή περιέχουν DNA",
          "Νευρώνες, επειδή είναι υψηλά διαφοροποιηµένοι και σπάνια διαιρούνται",
          "Βλαστοκύτταρα, επειδή είναι αδιαφοροποίητα",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Γιατί τα γαµετικά κύτταρα είναι ιδιαίτερα σηµαντικά στην ακτινοπροστασία;",
        answers: [
          "Είναι ανθεκτικά στην ακτινοβολία",
          "Δεν µπορούν να διαιρεθούν",
          "Επιδιορθώνουν άµεσα το DNA",
          "Η βλάβη µπορεί να µεταδοθεί στις επόµενες γενιές",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Ένα κύτταρο που εκτίθεται σε ακτινοβολία σταµατά την πρόοδό του για να επιδιορθώσει βλάβες στο DNA. Ποιος µηχανισµός είναι υπεύθυνος;",
        answers: [
          "Απόπτωση",
          "Σηµατοδότηση κυτταρικής µεµβράνης",
          "Σηµεία ελέγχου του κυτταρικού κύκλου",
          "Σύνθεση πρωτεϊνών",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ποια φυσική πηγή συµβάλλει περισσότερο στη µέση έκθεση του πληθυσµού σε ακτινοβολία;",
        answers: [
          "Κοσµική ακτινοβολία στο επίπεδο της θάλασσας",
          "Εισπνοή ραδονίου σε εσωτερικούς χώρους",
          "Γήινη ακτινοβολία από το έδαφος",
          "Εσωτερική ακτινοβολία από τρόφιµα",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ποια τεχνητή πηγή συµβάλλει περισσότερο στην έκθεση του πληθυσµού;",
        answers: [
          "Πυρηνικά ατυχήµατα",
          "Βιοµηχανικές πηγές",
          "Ιατρικές εφαρµογές",
          "Ερευνητικά εργαστήρια",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η άµεση δράση της ακτινοβολίας αναφέρεται σε:",
        answers: [
          "Αλληλεπίδραση µε το νερό που παράγει ελεύθερες ρίζες (ραδιόλυση)",
          "Άµεση εναπόθεση ενέργειας στο DNA προκαλώντας βλάβη",
          "Θέρµανση ιστών χωρίς µοριακή βλάβη",
          "Ανάκλαση της ακτινοβολίας από τους ιστούς",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Οι ελεύθερες ρίζες είναι:",
        answers: [
          "Σταθερά µόρια που δεν συµµετέχουν σε χηµικές αντιδράσεις",
          "Ηλεκτρικά ουδέτερα µόρια που είναι πάντα µη αντιδραστικά",
          "Πολύ αντιδραστικά ιόντα, άτοµα ή µόρια µε ασύζευκτα ηλεκτρόνια",
          "Μη αντιδραστικά άτοµα που δεν αλληλεπιδρούν µε βιολογικά µόρια",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η έµµεση βλάβη από ακτινοβολία οφείλεται κυρίως σε:",
        answers: [
          "Άµεση αλληλεπίδραση µε το DNA",
          "Σχηµατισµό ελεύθερων ριζών από το νερό",
          "Μεταφορά θερµικής ενέργειας",
          "Πυρηνικές αντιδράσεις στα κύτταρα",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Οι θραύσεις διπλής αλυσίδας DNA:",
        answers: [
          "Επιδιορθώνονται εύκολα",
          "Εµφανίζονται µόνο σε µη διαιρούµενα κύτταρα",
          "Μπορούν να οδηγήσουν σε κυτταρικό θάνατο ή µεταλλάξεις",
          "Δεν επηρεάζουν την αντιγραφή του DNA ή την επιβίωση του κυττάρου",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ένα κύτταρο επιδιορθώνει επιτυχώς βλάβες στο DNA που προκλήθηκαν από ακτινοβολία. Ποιο είναι το αποτέλεσµα;",
        answers: [
          "Μετάλλαξη",
          "Αποκατάσταση φυσιολογικής λειτουργίας",
          "Κυτταρικός θάνατος",
          "Καρκίνος",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Η εσφαλµένη επιδιόρθωση του DNA µπορεί να οδηγήσει σε:",
        answers: [
          "Άµεση αποκατάσταση",
          "Αυξηµένη σταθερότητα",
          "Γενετικές µεταλλάξεις και αυξηµένο κίνδυνο καρκίνου",
          "Καµία επίδραση",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ποιο είναι το πιθανότερο αποτέλεσµα όταν η κυτταρική βλάβη από ακτινοβολία είναι εκτεταµένη και πολύ σοβαρή;",
        answers: [
          "Το κύτταρο ανακάµπτει πλήρως",
          "Το κύτταρο αυξάνει τον ρυθµό διαίρεσης",
          "Το κύτταρο χάνει τη λειτουργία του ή/και την ικανότητα διαίρεσης, οδηγώντας σε θάνατο",
          "Η βλάβη αναστρέφεται πάντα άµεσα",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Πώς επηρεάζει ένας χαµηλός ρυθµός δόσης τη βλάβη από ακτινοβολία;",
        answers: [
          "Μειώνει τη βλάβη επειδή τα κύτταρα έχουν χρόνο να την επιδιορθώσουν",
          "Δεν έχει καµία επίδραση",
          "Αυξάνει την ενέργεια της ακτινοβολίας",
          "Αυξάνει τη βλάβη επειδή η έκθεση διαρκεί περισσότερο",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Σε σύγκριση µε τους ενήλικες, τα παιδιά είναι πιο ακτινοευαίσθητα επειδή:",
        answers: [
          "Έχουν πλήρως διαφοροποιηµένα κύτταρα",
          "Έχουν υψηλότερους ρυθµούς κυτταρικής διαίρεσης και µεγαλύτερο προσδόκιµο ζωής",
          "Λαµβάνουν πάντα υψηλότερες δόσεις",
          "Δεν επιδιορθώνουν τις βλάβες στο DNA",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Οι ντετερµινιστικές επιδράσεις χαρακτηρίζονται από:",
        answers: [
          "Απουσία κατωφλίου και τυχαία εµφάνιση",
          "Ανεξαρτησία από τη δόση",
          "Μόνο µακροχρόνιες επιδράσεις",
          "Ύπαρξη κατωφλίου και αύξηση της σοβαρότητας µε τη δόση",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Οι ντετερµινιστικές επιδράσεις προκαλούνται από:",
        answers: [
          "Βλάβη σε µικρό αριθµό κυττάρων",
          "Απώλεια µεγάλου αριθµού κυττάρων σε έναν ιστό",
          "Τυχαίες µεταλλάξεις DNA µόνο",
          "Παραγωγή θερµότητας",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Γιατί οι στοχαστικές επιδράσεις χαρακτηρίζονται ως πιθανοκρατικές;",
        answers: [
          "Εµφανίζονται πάντα σε υψηλές δόσεις",
          "Η εµφάνισή τους βασίζεται στην πιθανότητα και η πιθανότητα αυξάνεται µε τη δόση",
          "Εξαρτώνται µόνο από τον χρόνο",
          "Είναι προβλέψιµες για κάθε άτοµο",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Οι στοχαστικές επιδράσεις:",
        answers: [
          "Έχουν κατώφλι δόσης",
          "Η σοβαρότητά τους αυξάνεται µε τη δόση",
          "Δεν έχουν κατώφλι και η πιθανότητα εµφάνισης αυξάνεται µε τη δόση",
          "Προκαλούν πάντα άµεσα συµπτώµατα",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ποια δήλωση περιγράφει καλύτερα την ακτινοευαισθησία του εµβρύου;",
        answers: [
          "Το έµβρυο είναι πάντα ανθεκτικό",
          "Η ακτινοβολία δεν έχει καµία επίδραση",
          "Επηρεάζεται µόνο η µητέρα",
          "Η ευαισθησία εξαρτάται από το στάδιο ανάπτυξης",
        ],
        correctAnswerIndex: 3,
      },
    ],
  },
  4: {
    en: [
      {
        question: "The system of radiation protection is designed to balance the risks and benefits of radiation use. Which of the following best describes its primary goal?",
        answers: [
          "To eliminate all radiation exposure",
          "To maximize radiation use in medicine",
          "To prevent deterministic effects and reduce stochastic risks to acceptable levels",
          "To regulate only nuclear power plants",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "In Greece, which authority is responsible for radiation protection regulation and supervision?",
        answers: [
          "Ministry of Health",
          "Greek Atomic Energy Commission",
          "European Parliament",
          "World Health Organization",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A hospital performing routine diagnostic X-ray examinations is an example of which exposure situation?",
        answers: [
          "Emergency",
          "Existing",
          "Accidental",
          "Planned",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A malfunction that could lead to unintended patient overexposure is classified as:",
        answers: [
          "Normal exposure",
          "Potential exposure",
          "Existing exposure",
          "Public exposure",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A nuclear accident requiring urgent response is classified as:",
        answers: [
          "Emergency exposure",
          "Occupational exposure",
          "Planned exposure",
          "Existing exposure",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Exposure from radon in homes is best classified as:",
        answers: [
          "Planned",
          "Emergency",
          "Occupational",
          "Existing",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A radiology technologist working with X-ray equipment is subject to:",
        answers: [
          "Occupational exposure",
          "Environmental exposure",
          "Public exposure",
          "Medical exposure",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "A patient undergoing CT imaging is an example:",
        answers: [
          "Medical exposure",
          "Accidental exposure",
          "Occupational exposure",
          "Public exposure",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "A visitor in a hospital waiting room exposed to background radiation is considered:",
        answers: [
          "Occupationally exposed",
          "Medically exposed",
          "Emergency exposure",
          "Public exposure",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Why are non-radiation healthcare workers considered members of the public in radiation protection?",
        answers: [
          "Because their exposure to radiation is not part of their duties",
          "Because their exposure is not occupational",
          "Because their exposure is incidental",
          "All of the above",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "What does the principle of justification states?",
        answers: [
          "Radiation exposure must always be minimized regardless of outcome",
          "Any use of ionizing radiation should produce more benefit than harm",
          "Using radiation only in emergency situations",
          "Only occupational exposure needs to be controlled",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "The ALARA (as low as reasonably achievable) principle refers to:",
        answers: [
          "Keeping radiation exposure as low as reasonably achievable, taking into account practical factors",
          "Eliminating all radiation exposure in all situations",
          "Exposure is acceptable if below dose limits only",
          "Using radiation only in emergency situations",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "What does the principle of dose limitation states?",
        answers: [
          "Radiation exposure should only be used if it provides a net benefit",
          "Radiation doses should be kept as low as reasonably achievable",
          "Individual radiation doses must not exceed established limits to prevent unacceptable risk",
          "Eliminating all radiation exposure in all situations",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Dose limits are applied to:",
        answers: [
          "Patients undergoing diagnostic procedures",
          "Emergency situations only",
          "Patients undergoing therapeutic procedures",
          "Occupational and public exposure",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Why is absorbed dose alone insufficient to describe biological effects?",
        answers: [
          "Because it does not account for the type of radiation",
          "Because it only applies to photons",
          "Because it only applies to non-ionizing radiation",
          "Because it is difficult to measure",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Equivalent dose accounts for:",
        answers: [
          "Time of exposure",
          "Dose rate",
          "Type of radiation",
          "Number of particles",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Effective dose represents:",
        answers: [
          "Energy absorbed in one organ",
          "Total time of exposure",
          "Overall risk to the whole body",
          "Dose rate",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Why do dose limits not apply to patients?",
        answers: [
          "Because medical radiation is always safe",
          "Because patients are resistant to radiation",
          "Because their dose is always low",
          "Because patient exposure is medically justified and provides direct health benefit",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "The average annual effective dose from background radiation is 2–3 mSv. What is the annual effective dose limit for the public in planned exposure situations?",
        answers: [
          "3 mSv",
          "5 mSv",
          "1 mSv",
          "10 mSv",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Why must special radiation protection measures be taken for pregnant workers?",
        answers: [
          "Because pregnancy reduces the physical endurance of the worker",
          "Because the embryo/fetus is more radiosensitive and exposure may lead to developmental effects",
          "Because pregnancy weakens the immune system of the worker",
          "Because pregnancy increases radiation absorption",
        ],
        correctAnswerIndex: 1,
      },
    ],
    el: [
      {
        question: "Το σύστηµα ακτινοπροστασίας έχει σχεδιαστεί για να εξισορροπεί τους κινδύνους και τα οφέλη από τη χρήση της ακτινοβολίας. Ποιο από τα παρακάτω περιγράφει καλύτερα τον κύριο στόχο του;",
        answers: [
          "Την εξάλειψη κάθε έκθεσης σε ακτινοβολία",
          "Τη µεγιστοποίηση της χρήσης της ακτινοβολίας στην ιατρική",
          "Την πρόληψη των ντετερµινιστικών επιδράσεων και τη µείωση των στοχαστικών κινδύνων σε αποδεκτά επίπεδα",
          "Τη ρύθµιση µόνο των πυρηνικών σταθµών παραγωγής ενέργειας",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Στην Ελλάδα, ποια αρχή είναι υπεύθυνη για τη ρύθµιση και εποπτεία της ακτινοπροστασίας;",
        answers: [
          "Υπουργείο Υ γείας",
          "Ελληνική Επιτροπή Ατοµικής Ενέργειας",
          "Ευρωπαϊκό Κοινοβούλιο",
          "Παγκόσµιος Οργανισµός Υ γείας",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ένα νοσοκοµείο που πραγµατοποιεί συνήθεις διαγνωστικές εξετάσεις ακτίνων Χ αποτελεί παράδειγµα ποιας κατηγορίας έκθεσης;",
        answers: [
          "Έκθεση έκτακτης ανάγκης",
          "Υ φιστάµενη έκθεση",
          "Τυχαία έκθεση",
          "Σχεδιασµένη έκθεση",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Μια δυσλειτουργία που θα µπορούσε να οδηγήσει σε ακούσια υπερέκθεση ασθενούς ταξινοµείται ως:",
        answers: [
          "Κανονική έκθεση",
          "Δυνητική έκθεση",
          "Υ φιστάµενη έκθεση",
          "Έκθεση του κοινού",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ένα πυρηνικό ατύχηµα που απαιτεί άµεση ανταπόκριση ταξινοµείται ως:",
        answers: [
          "Έκθεση έκτακτης ανάγκης",
          "Επαγγελµατική έκθεση",
          "Σχεδιασµένη έκθεση",
          "Υ φιστάµενη έκθεση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η έκθεση από ραδόνιο σε κατοικίες ταξινοµείται καλύτερα ως:",
        answers: [
          "Σχεδιασµένη έκθεση",
          "Έκθεση έκτακτης ανάγκης",
          "Επαγγελµατική έκθεση",
          "Υ φιστάµενη έκθεση",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Ένας τεχνολόγος ακτινολογίας που εργάζεται µε εξοπλισµό ακτίνων Χ υπόκειται σε:",
        answers: [
          "Επαγγελµατική έκθεση",
          "Περιβαλλοντική έκθεση",
          "Έκθεση του κοινού",
          "Ιατρική έκθεση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ένας ασθενής που υποβάλλεται σε αξονική τοµογραφία αποτελεί παράδειγµα:",
        answers: [
          "Ιατρικής έκθεσης",
          "Τυχαίας έκθεσης",
          "Επαγγελµατικής έκθεσης",
          "Έκθεσης του κοινού",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ένας επισκέπτης σε χώρο αναµονής νοσοκοµείου που εκτίθεται σε φυσική ακτινοβολία θεωρείται:",
        answers: [
          "Επαγγελµατικά εκτιθέµενος",
          "Ιατρικά εκτιθέµενος",
          "Έκθεση έκτακτης ανάγκης",
          "Έκθεση του κοινού",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Γιατί οι επαγγελµατίες υγείας που δεν εργάζονται µε ακτινοβολία θεωρούνται µέλη του κοινού στο πλαίσιο της ακτινοπροστασίας;",
        answers: [
          "Επειδή η έκθεσή τους σε ακτινοβολία δεν αποτελεί µέρος των καθηκόντων τους",
          "Επειδή η έκθεσή τους δεν είναι επαγγελµατική",
          "Επειδή η έκθεσή τους είναι περιστασιακή",
          "Όλα τα παραπάνω",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Τι ορίζει η αρχή της δικαιολόγησης;",
        answers: [
          "Η έκθεση σε ακτινοβολία πρέπει πάντα να ελαχιστοποιείται ανεξαρτήτως αποτελέσµατος",
          "Κάθε χρήση ιονίζουσας ακτινοβολίας πρέπει να προσφέρει περισσότερο όφελος παρά βλάβη",
          "Η χρήση της ακτινοβολίας επιτρέπεται µόνο σε καταστάσεις έκτακτης ανάγκης",
          "Μόνο η επαγγελµατική έκθεση χρειάζεται να ελέγχεται",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Η αρχή ALARA (όσο το δυνατόν χαµηλότερα, λαµβάνοντας υπόψη οικονοµικούς και κοινωνικούς παράγοντες) αναφέρεται σε:",
        answers: [
          "Διατήρηση της έκθεσης σε ακτινοβολία όσο το δυνατόν χαµηλότερα, λαµβάνοντας υπόψη πρακτικούς παράγοντες",
          "Πλήρη εξάλειψη κάθε έκθεσης σε ακτινοβολία σε όλες τις περιπτώσεις",
          "Η έκθεση είναι αποδεκτή µόνο εφόσον είναι κάτω από τα όρια δόσης",
          "Χρήση ακτινοβολίας µόνο σε καταστάσεις έκτακτης ανάγκης",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Τι ορίζει η αρχή του περιορισµού της δόσης;",
        answers: [
          "Η χρήση της ακτινοβολίας πρέπει να γίνεται µόνο εφόσον προσφέρει καθαρό όφελος",
          "Οι δόσεις ακτινοβολίας πρέπει να διατηρούνται όσο το δυνατόν χαµηλότερες",
          "Οι ατοµικές δόσεις ακτινοβολίας δεν πρέπει να υπερβαίνουν καθορισµένα όρια ώστε να αποφεύγεται µη αποδεκτός κίνδυνος",
          "Πλήρης εξάλειψη κάθε έκθεσης σε ακτινοβολία",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Τα όρια δόσης εφαρµόζονται σε:",
        answers: [
          "Ασθενείς που υποβάλλονται σε διαγνωστικές εξετάσεις",
          "Μόνο σε καταστάσεις έκτακτης ανάγκης",
          "Ασθενείς που υποβάλλονται σε θεραπευτικές διαδικασίες",
          "Επαγγελµατική έκθεση και έκθεση του κοινού",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Γιατί η απορροφούµενη δόση από µόνη της δεν επαρκεί για την περιγραφή των βιολογικών επιδράσεων;",
        answers: [
          "Επειδή δεν λαµβάνει υπόψη το είδος της ακτινοβολίας",
          "Επειδή εφαρµόζεται µόνο σε φωτόνια",
          "Επειδή εφαρµόζεται µόνο σε µη ιονίζουσα ακτινοβολία",
          "Επειδή είναι δύσκολο να µετρηθεί",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η ισοδύναµη δόση λαµβάνει υπόψη:",
        answers: [
          "Τον χρόνο έκθεσης",
          "Τον ρυθµό δόσης",
          "Το είδος της ακτινοβολίας",
          "Τον αριθµό των σωµατιδίων",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Η ενεργός δόση αντιπροσωπεύει:",
        answers: [
          "Την ενέργεια που απορροφάται σε ένα όργανο",
          "Τον συνολικό χρόνο έκθεσης",
          "Τον συνολικό κίνδυνο για ολόκληρο το σώµα",
          "Τον ρυθµό δόσης",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Γιατί τα όρια δόσης δεν εφαρµόζονται στους ασθενείς;",
        answers: [
          "Επειδή η ιατρική ακτινοβολία είναι πάντα ασφαλής",
          "Επειδή οι ασθενείς είναι ανθεκτικοί στην ακτινοβολία",
          "Επειδή η δόση τους είναι πάντα χαµηλή",
          "Επειδή η έκθεση των ασθενών είναι ιατρικά δικαιολογηµένη και προσφέρει άµεσο όφελος για την υγεία",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Η µέση ετήσια ενεργός δόση από φυσική ακτινοβολία είναι 2–3 mSv. Ποιο είναι το ετήσιο όριο ενεργού δόσης για το κοινό σε σχεδιασµένες καταστάσεις έκθεσης;",
        answers: [
          "3 mSv",
          "5 mSv",
          "1 mSv",
          "10 mSv",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Γιατί πρέπει να λαµβάνονται ειδικά µέτρα ακτινοπροστασίας για εγκύους εργαζόµενες;",
        answers: [
          "Επειδή η εγκυµοσύνη µειώνει τη φυσική αντοχή της εγκύου",
          "Επειδή το έµβρυο είναι ραδιοευαίσθητο και η έκθεση µπορεί να προκαλέσει αναπτυξιακές επιδράσεις",
          "Επειδή η εγκυµοσύνη εξασθενεί το ανοσοποιητικό σύστηµα της εγκύου",
          "Επειδή η εγκυµοσύνη αυξάνει την απορρόφηση ακτινοβολίας",
        ],
        correctAnswerIndex: 1,
      },
    ],
  },
  5: {
    en: [
      {
        question: "Which of the following is NOT a fundamental principle of radiation protection?",
        answers: [
          "Minimizing time near a radiation source",
          "Maximizing distance from a radiation source",
          "Using appropriate shielding",
          "Increasing radiation dose for better results",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Reducing the time spent near a radiation source will:",
        answers: [
          "Increase absorbed dose",
          "Decrease absorbed dose",
          "Have no effect",
          "Increase radiation intensity",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Doubling the distance from a radiation source reduces exposure to approximately:",
        answers: [
          "Half",
          "One-sixth",
          "One-quarter",
          "No change",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Which statement best explains the role of shielding in radiation protection?",
        answers: [
          "Shielding completely eliminates radiation in all situations",
          "Shielding reduces radiation exposure by placing suitable material between the source and the individual",
          "Shielding is useful only for contamination, not external exposure",
          "Shielding is unnecessary if exposure time is short",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A controlled area is:",
        answers: [
          "An area where radiation exposure or contamination risk is significant, requiring specific protective measures and restricted access",
          "An area where radiation exposure is negligible and no specific protective measures are required",
          "An area with no radiation risk but restricted access for administrative reasons",
          "An area with no radiation exposure risk and unrestricted access",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Which of the following is an example of a controlled area?",
        answers: [
          "Radiotherapy treatment room",
          "X-ray or fluoroscopy room",
          "Post–nuclear medicine therapy room",
          "All of the above",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A supervised area is:",
        answers: [
          "An area with low radiation levels requiring periodic monitoring and review",
          "An area with high exposure and restricted access",
          "An area where radiation levels are always zero",
          "An area requiring full protective measures",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "The main source of occupational radiation exposure in radiology is:",
        answers: [
          "Primary beam",
          "Leakage radiation from equipment",
          "Cosmic radiation",
          "Scattered radiation from the patient",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Mobile X-ray systems in wards, emergency departments, or intensive care units require special attention because:",
        answers: [
          "They produce high leakage radiation",
          "Structural shielding may be limited compared with dedicated X-ray rooms",
          "They produce high levels of radiation",
          "Distance does not reduce radiation dose",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Why is fluoroscopy particularly important from a staff radiation protection perspective?",
        answers: [
          "Because staff are exposed to scattered radiation from the patient over extended periods",
          "Because structural shielding (e.g., walls) does not protect staff during the procedure",
          "Because it is not always possible to maintain distance from the patient",
          "All of the above",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "A healthcare worker who is or may be pregnant is asked to participate in a procedure involving radiation exposure. What should be done?",
        answers: [
          "Report the pregnancy or possible pregnancy to the responsible authority",
          "No action is required",
          "Work closer to the radiation source to reduce procedure time",
          "Report the pregnancy or possible pregnancy only if the procedure involves high radiation exposure",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "In nuclear medicine, occupational exposure may occur through the following pathways:",
        answers: [
          "Only internal exposure, from intake of radioactive material",
          "Only external exposure, from radioactive sources, including patients",
          "Both internal and external exposure",
          "No exposure occurs in nuclear medicine",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "After administration of a radiopharmaceutical, the patient:",
        answers: [
          "Becomes a source of radiation",
          "Is not radioactive",
          "Emits only visible light",
          "Becomes immune to radiation",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Contamination refers to:",
        answers: [
          "Presence of radioactive material on surfaces, clothing, skin, or within the body",
          "Presence of radioactive material within the body only",
          "Exposure to X-rays",
          "The production of radioactive material in nuclear reactions",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "If a worker’s skin becomes contaminated with radioactive material, what is the recommended immediate action?",
        answers: [
          "Scrub the skin forcefully with abrasive soap",
          "Apply antiseptic solution to disinfect the area",
          "Apply hot water to increase removal speed",
          "Wash the affected area promptly with non-abrasive soap and cold water",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "If a worker’s eye becomes contaminated with radioactive material, what is the recommended immediate action?",
        answers: [
          "Keep the eye closed and wait for instructions without rinsing",
          "Rub the eye vigorously to remove contamination",
          "Flush the eye immediately with large quantities of water and then inform radiation protection personnel",
          "Wipe the eye with dry gauze",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "In the event of a spill of radioactive material (e.g., bodily fluid), what is the most appropriate action?",
        answers: [
          "Avoid direct contact and perform cleanup at the end of the shift",
          "Avoid direct contact, warn others, restrict access, cover the spill with absorbent material, and notify radiation protection personnel",
          "Clean the spill immediately without special precautions",
          "Ignore the incident because it is of minor importance",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "A patient who has recently received a therapeutic radiopharmaceutical develops a life-threatening emergency. Which statement best reflects appropriate practice?",
        answers: [
          "Emergency treatment should be delayed until radiation levels fall",
          "Emergency treatment should be provided only in nuclear medicine facilities",
          "Life-saving care must not be delayed, but precautions to reduce contamination and exposure should be taken",
          "Radiation protection is more important than urgent medical management",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "A radioactive patient requires urgent surgery. Why should the Radiation Protection Officer (RPO) be informed immediately?",
        answers: [
          "To provide specific instructions to reduce staff exposure and contamination during the operation",
          "To transfer the patient automatically to a radiotherapy unit",
          "To provide instructions after the surgery is completed",
          "To cancel the surgery",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "What is the main purpose of interlocks in an external beam radiotherapy room?",
        answers: [
          "To improve treatment accuracy",
          "To increase beam energy during treatment",
          "To replace all staff supervision",
          "To stop radiation delivery immediately if an unsafe situation occurs",
        ],
        correctAnswerIndex: 3,
      },
    ],
    el: [
      {
        question: "Ποιο από τα παρακάτω ΔΕΝ αποτελεί θεµελιώδη αρχή της ακτινοπροστασίας;",
        answers: [
          "Ελαχιστοποίηση του χρόνου κοντά σε πηγή ακτινοβολίας",
          "Μεγιστοποίηση της απόστασης από πηγή ακτινοβολίας",
          "Χρήση κατάλληλης θωράκισης",
          "Αύξηση της δόσης ακτινοβολίας για καλύτερα αποτελέσµατα",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Η µείωση του χρόνου παραµονής κοντά σε µια πηγή ακτινοβολίας θα:",
        answers: [
          "Αυξήσει την απορροφούµενη δόση",
          "Μειώσει την απορροφούµενη δόση",
          "Δεν έχει καµία επίδραση",
          "Αυξήσει την ένταση της ακτινοβολίας",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ο διπλασιασµός της απόστασης από µια πηγή ακτινοβολίας µειώνει την έκθεση περίπου σε:",
        answers: [
          "Μισό",
          "Ένα έκτο",
          "Ένα τέταρτο",
          "Καµία µεταβολή",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ποια από τις παρακάτω δηλώσεις περιγράφει καλύτερα τον ρόλο της θωράκισης στην ακτινοπροστασία;",
        answers: [
          "Η θωράκιση εξαλείφει πλήρως την ακτινοβολία σε όλες τις περιπτώσεις",
          "Η θωράκιση µειώνει την έκθεση στην ακτινοβολία τοποθετώντας κατάλληλο υλικό µεταξύ της πηγής και του ατόµου",
          "Η θωράκιση είναι χρήσιµη µόνο στη ραδιενεργό µόλυνση και όχι για την εξωτερική έκθεση",
          "Η θωράκιση δεν είναι απαραίτητη όταν ο χρόνος έκθεσης είναι µικρός",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Μια ελεγχόµενη περιοχή ορίζεται ως:",
        answers: [
          "Μια περιοχή όπου η έκθεση σε ακτινοβολία ή ο κίνδυνος µόλυνσης είναι σηµαντικός, απαιτώντας ειδικά µέτρα προστασίας και περιορισµένη πρόσβαση",
          "Μια περιοχή όπου η έκθεση σε ακτινοβολία είναι αµελητέα και δεν απαιτούνται ειδικά µέτρα προστασίας",
          "Μια περιοχή χωρίς κίνδυνο ακτινοβολίας αλλά µε περιορισµένη πρόσβαση για διοικητικούς λόγους",
          "Μια περιοχή χωρίς κίνδυνο έκθεσης σε ακτινοβολία και µε ελεύθερη πρόσβαση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ποιο από τα παρακάτω αποτελεί παράδειγµα ελεγχόµενης περιοχής;",
        answers: [
          "Αίθουσα ακτινοθεραπείας",
          "Αίθουσα ακτινογραφίας ή ακτινοσκόπησης",
          "Θάλαµος ασθενούς µετά από θεραπεία πυρηνικής ιατρικής",
          "Όλα τα παραπάνω",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Μια επιτηρούµενη περιοχή ορίζεται ως:",
        answers: [
          "Μια περιοχή µε χαµηλά επίπεδα ακτινοβολίας που απαιτεί περιοδική παρακολούθηση και επανεκτίµηση",
          "Μια περιοχή µε υψηλή έκθεση και περιορισµένη πρόσβαση",
          "Μια περιοχή όπου τα επίπεδα ακτινοβολίας είναι πάντα µηδενικά",
          "Μια περιοχή που απαιτεί πλήρη µέτρα προστασίας",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η κύρια πηγή επαγγελµατικής έκθεσης σε ακτινοβολία στην ακτινολογία είναι:",
        answers: [
          "Η πρωτογενής δέσµη",
          "Η διαρρέουσα ακτινοβολία από τον εξοπλισµό",
          "Η κοσµική ακτινοβολία",
          "Η σκεδαζόµενη ακτινοβολία από τον ασθενή",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Τα φορητά συστήµατα ακτινογραφίας σε θαλάµους, τµήµατα επειγόντων περιστατικών ή µονάδες εντατικής θεραπείας απαιτούν ιδιαίτερη προσοχή επειδή:",
        answers: [
          "Παράγουν υψηλή διαρρέουσα ακτινοβολία",
          "Η δοµική θωράκιση µπορεί να είναι περιορισµένη σε σύγκριση µε ειδικά διαµορφωµένες αίθουσες ακτινογραφίας",
          "Παράγουν υψηλά επίπεδα ακτινοβολίας",
          "Η απόσταση δεν µειώνει τη δόση ακτινοβολίας",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Γιατί η ακτινοσκόπηση είναι ιδιαίτερα σηµαντική από την άποψη της ακτινοπροστασίας του προσωπικού;",
        answers: [
          "Επειδή το προσωπικό εκτίθεται σε σκεδαζόµενη ακτινοβολία από τον ασθενή για παρατεταµένα χρονικά διαστήµατα",
          "Επειδή η δοµική θωράκιση (π.χ. τοίχοι) δεν προστατεύει το προσωπικό κατά τη διάρκεια της εξέτασης",
          "Επειδή δεν είναι πάντα εφικτό να κρατήσει απόσταση από τον ασθενή",
          "Όλα τα παραπάνω",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Μια επαγγελµατίας υγείας που είναι ή ενδέχεται να είναι έγκυος καλείται να συµµετάσχει σε διαδικασία που περιλαµβάνει έκθεση σε ακτινοβολία. Τι πρέπει να γίνει;",
        answers: [
          "Να αναφέρει την εγκυµοσύνη ή πιθανή εγκυµοσύνη στον αρµόδιο υπεύθυνο",
          "Δεν απαιτείται καµία ενέργεια",
          "Να εργαστεί πιο κοντά στην πηγή ακτινοβολίας για να µειωθεί ο χρόνος της διαδικασίας",
          "Να αναφέρει την εγκυµοσύνη ή πιθανή εγκυµοσύνη µόνο στην περίπτωση που η διαδικασία περιλαµβάνει υψηλή έκθεση σε ακτινοβολία",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Στην πυρηνική ιατρική, η επαγγελµατική έκθεση µπορεί να προκύψει µε τους εξής τρόπους:",
        answers: [
          "Μόνο µέσω εσωτερικής έκθεσης, από πρόσληψη ραδιενεργού υλικού",
          "Μόνο µέσω εξωτερικής έκθεσης, από ραδιενεργές πηγές συµπεριλαµβανοµένων των ασθενών",
          "Τόσο εσωτερικής όσο και εξωτερικής έκθεσης",
          "Δεν παρατηρείται έκθεση στην πυρηνική ιατρική",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Μετά τη χορήγηση ενός ραδιοφαρµάκου, ο ασθενής:",
        answers: [
          "Γίνεται πηγή ακτινοβολίας",
          "Δεν είναι ραδιενεργός",
          "Εκπέµπει µόνο ορατό φως",
          "Γίνεται ανθεκτικός στην ακτινοβολία",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Η µόλυνση αναφέρεται σε:",
        answers: [
          "Την παρουσία ραδιενεργού υλικού σε επιφάνειες, ρουχισµό, δέρµα ή εντός του σώµατος",
          "Την παρουσία ραδιενεργού υλικού µόνο εντός του σώµατος",
          "Την έκθεση σε ακτίνες Χ",
          "Την παραγωγή ραδιενεργού υλικού σε πυρηνικές αντιδράσεις",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Εάν το δέρµα ενός εργαζοµένου µολυνθεί µε ραδιενεργό υλικό, ποια είναι η συνιστώµενη άµεση ενέργεια;",
        answers: [
          "Να τρίψει έντονα το δέρµα µε λειαντικό σαπούνι",
          "Να εφαρµόσει αντισηπτικό διάλυµα για απολύµανση της περιοχής",
          "Να χρησιµοποιήσει ζεστό νερό για ταχύτερη αποµάκρυνση",
          "Να πλύνει άµεσα την περιοχή µε µη λειαντικό σαπούνι και κρύο νερό",
        ],
        correctAnswerIndex: 3,
      },
      {
        question: "Εάν το µάτι ενός εργαζοµένου µολυνθεί µε ραδιενεργό υλικό, ποια είναι η συνιστώµενη άµεση ενέργεια;",
        answers: [
          "Να κρατήσει το µάτι κλειστό και να περιµένει οδηγίες χωρίς ξέπλυµα",
          "Να τρίψει έντονα το µάτι για αποµάκρυνση της µόλυνσης",
          "Να ξεπλύνει άµεσα το µάτι µε µεγάλες ποσότητες νερού και στη συνέχεια να ενηµερώσει το προσωπικό ακτινοπροστασίας",
          "Να σκουπίσει το µάτι µε στεγνή γάζα",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Σε περίπτωση διαρροής ραδιενεργού υλικού (π.χ. σωµατικού υγρού), ποια είναι η καταλληλότερη ενέργεια;",
        answers: [
          "Να αποφευχθεί η άµεση επαφή και ο καθαρισµός να πραγµατοποιηθεί στο τέλος της βάρδιας",
          "Να αποφευχθεί η άµεση επαφή, να ειδοποιηθούν οι παρευρισκόµενοι, να περιοριστεί η πρόσβαση, να καλυφθεί η διαρροή µε απορροφητικό υλικό και να ενηµερωθεί το προσωπικό ακτινοπροστασίας",
          "Να καθαριστεί άµεσα η διαρροή χωρίς ιδιαίτερες προφυλάξεις",
          "Να αγνοηθεί το συµβάν επειδή είναι µικρής σηµασίας",
        ],
        correctAnswerIndex: 1,
      },
      {
        question: "Ένας ασθενής που έχει πρόσφατα λάβει θεραπευτικό ραδιοφάρµακο εµφανίζει απειλητική για τη ζωή κατάσταση. Ποια δήλωση αντανακλά την ορθή πρακτική;",
        answers: [
          "Η επείγουσα θεραπεία πρέπει να καθυστερήσει έως ότου µειωθούν τα επίπεδα ακτινοβολίας",
          "Η επείγουσα θεραπεία πρέπει να παρέχεται µόνο σε µονάδες πυρηνικής ιατρικής",
          "Η σωτήρια για τη ζωή φροντίδα δεν πρέπει να καθυστερεί, αλλά πρέπει να λαµβάνονται µέτρα για τη µείωση της µόλυνσης και της έκθεσης",
          "Η ακτινοπροστασία είναι πιο σηµαντική από την επείγουσα ιατρική αντιµετώπιση",
        ],
        correctAnswerIndex: 2,
      },
      {
        question: "Ένας ραδιενεργός ασθενής χρειάζεται επείγουσα χειρουργική επέµβαση. Γιατί πρέπει να ενηµερωθεί άµεσα ο Υπεύθυνος Ακτινοπροστασίας (RPO);",
        answers: [
          "Για να παρέχει συγκεκριµένες οδηγίες για τη µείωση της έκθεσης και της µόλυνσης του προσωπικού κατά τη διάρκεια της επέµβασης",
          "Για να µεταφερθεί αυτόµατα ο ασθενής σε µονάδα ακτινοθεραπείας",
          "Για να δώσει οδηγίες µετά την ολοκλήρωση της επέµβασης",
          "Για να ακυρωθεί η επέµβαση",
        ],
        correctAnswerIndex: 0,
      },
      {
        question: "Ποιος είναι ο κύριος σκοπός των συστηµάτων διασύνδεσης ασφαλείας (interlocks) σε µια αίθουσα εξωτερικής ακτινοθεραπείας;",
        answers: [
          "Να βελτιώνουν την ακρίβεια της θεραπείας",
          "Να αυξάνουν την ενέργεια της δέσµης κατά τη διάρκεια της θεραπείας",
          "Να αντικαθιστούν πλήρως την επίβλεψη του προσωπικού",
          "Να διακόπτουν άµεσα την εκποµπή ακτινοβολίας σε περίπτωση επικίνδυνης κατάστασης",
        ],
        correctAnswerIndex: 3,
      },
    ],
  },
};
