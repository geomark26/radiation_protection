// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: 'Module 1: Basic Physics of Ionizing Radiation',
    href: '/chapter-1',
    noLink: true,
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'Electromagnetic and Particulate Radiation',
        href: '/electromagnetic-and-particulate-radiation',
      },
      {
        title: 'Atomic Structure',
        href: '/atomic-structure',
      },
      {
        title: 'Radioactivity',
        href: '/radioactivity',
      },
    ],
  },
  {
    title: 'Module 2: Interactions of Ionizing Radiation with Matter',
    href: '/chapter-2',
    noLink: true,
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'Classification of Radiation',
        href: '/classification-of-radiation',
      },
      {
        title: 'Interactions of High-Energy Photons with Matter',
        href: '/interactions-of-photons-with-matter',
      },
      {
        title: 'Interactions of Energetic Charged Particles with Matter',
        href: '/interactions-of-charged-particles-with-matter',
      },
      {
        title: 'Penetrating Power',
        href: '/penetrating-power',
      },
      {
        title: 'Quantities and Units',
        href: '/quantities-and-units',
      },
    ],
  },
  {
    title: 'Module 3: Radiobiology and Biological Effects',
    href: '/chapter-3',
    noLink: true,
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'The Cell',
        href: '/the-cell',
      },
      {
        title: 'Sources of Ionizing Radiation',
        href: '/sources-of-ionizing-radiation',
      },
      {
        title: 'Radiation Effects on Biological Systems',
        href: '/radiation-effects-on-biological-systems',
      },
      {
        title: 'Factors Affecting Radiation Damage',
        href: '/factors-affecting-radiation-damage',
      },
      {
        title: 'Deterministic and Stochastic Effects',
        href: '/deterministic-and-stochastic-effects',
      },
      {
        title: 'Fetal Irradiation',
        href: '/fetal-irradiation',
      },
    ],
  },
  {
    title: 'Module 4: Principles and System of Radiation Protection',
    href: '/chapter-4',
    noLink: true,
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'The System of Radiation Protection',
        href: '/system-of-radiation-protection',
      },
      {
        title: 'Types and Categories of Exposure',
        href: '/types-and-categories-of-exposure',
      },
      {
        title: 'Fundamental Principles of Radiation Protection',
        href: '/fundamental-principles',
      },
      {
        title: 'Quantities and Units of Radiation Protection',
        href: '/quantities-and-units-of-radiation-protection',
      },
      {
        title: 'Dose Limits',
        href: '/dose-limits',
      },
    ],
  },
  {
    title: 'Module 5: Practical Radiation Protection in Medical Applications',
    href: '/chapter-5',
    noLink: true,
    items: [
      {
        title: 'Introduction',
        href: '/introduction',
      },
      {
        title: 'General Radiation Protection Measures',
        href: '/general-radiation-protection-measures',
      },
      {
        title:
          'Diagnostic Radiology and Image-Guided Interventional Procedures',
        href: '/diagnostic-radiology',
      },
      {
        title: 'Nuclear Medicine',
        href: '/nuclear-medicine',
      },
      {
        title: 'Radiotherapy',
        href: '/radiotherapy',
      },
    ],
  },
  {
    title: 'References',
    href: '/references',
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();

// Map route hrefs to translation keys
export const ROUTE_TITLE_KEYS: Record<string, string> = {
  '/chapter-1': 'module1',
  '/chapter-1/introduction': 'module1-introduction',
  '/chapter-1/electromagnetic-and-particulate-radiation': 'module1-electromagnetic',
  '/chapter-1/atomic-structure': 'module1-atomic',
  '/chapter-1/radioactivity': 'module1-radioactivity',
  '/chapter-2': 'module2',
  '/chapter-2/introduction': 'module2-introduction',
  '/chapter-2/classification-of-radiation': 'module2-classification',
  '/chapter-2/interactions-of-photons-with-matter': 'module2-photons',
  '/chapter-2/interactions-of-charged-particles-with-matter': 'module2-charged',
  '/chapter-2/penetrating-power': 'module2-penetrating',
  '/chapter-2/quantities-and-units': 'module2-quantities',
  '/chapter-3': 'module3',
  '/chapter-3/introduction': 'module3-introduction',
  '/chapter-3/the-cell': 'module3-cell',
  '/chapter-3/sources-of-ionizing-radiation': 'module3-sources',
  '/chapter-3/radiation-effects-on-biological-systems': 'module3-effects',
  '/chapter-3/factors-affecting-radiation-damage': 'module3-factors',
  '/chapter-3/deterministic-and-stochastic-effects': 'module3-deterministic',
  '/chapter-3/fetal-irradiation': 'module3-fetal',
  '/chapter-4': 'module4',
  '/chapter-4/introduction': 'module4-introduction',
  '/chapter-4/system-of-radiation-protection': 'module4-system',
  '/chapter-4/types-and-categories-of-exposure': 'module4-types',
  '/chapter-4/fundamental-principles': 'module4-fundamental',
  '/chapter-4/quantities-and-units-of-radiation-protection': 'module4-quantities',
  '/chapter-4/dose-limits': 'module4-dose',
  '/chapter-5': 'module5',
  '/chapter-5/introduction': 'module5-introduction',
  '/chapter-5/general-radiation-protection-measures': 'module5-general',
  '/chapter-5/diagnostic-radiology': 'module5-diagnostic',
  '/chapter-5/nuclear-medicine': 'module5-nuclear',
  '/chapter-5/radiotherapy': 'module5-radiotherapy',
  '/references': 'references',
};
