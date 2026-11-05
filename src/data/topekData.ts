export interface DivisionItem {
  id: string;
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  icon: string;
  image: string;
  link: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'civil-infrastructure' | 'gas-energy' | 'industrial-commercial' | 'specialized';
  categoryLabel: string;
  status: 'Ongoing' | 'Completed';
  image: string;
  galleryImages?: string[];
  client: string;
  scope: string;
  location: string;
  year?: string;
  featured: boolean;
  division?: string;
}

export interface DeliveryStage {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  quantity: string;
  specifications: string;
  status: 'Operational' | 'Mobilized' | 'Under Maintenance';
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  author: string;
}

export interface CertificationItem {
  title: string;
  category: string;
  number: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'TOPEK Construction Limited',
  shortName: 'TOPEK',
  cacNumber: 'RC: 1946874',
  foundedYear: '2022',
  tagline: 'Building Africa. Engineering the World.',
  secondaryTagline: 'Delivering Globally with Indigenous Engineering Precision',
  address: '6 Fadeyi Street, Off Obafemi Awolowo Way, Ikeja, Lagos, Nigeria.',
  phone: '+2348035371594',
  phoneDisplay: '+234 803 537 1594',
  altPhone: '+234 701 307 4843',
  email: 'topekconstructionlimited@gmail.com',
  website: 'www.topekengineering.com',
  social: {
    facebook: 'https://fb.me/TOPEKEngineering1',
    linkedin: 'https://www.linkedin.com/company/topek-engineering-and-consultancy-services-ltd',
    instagram: 'https://instagram.com/topekconstruction',
  },
  operatingCorridors: 'Lagos · Abuja · Northern Industrial Corridor · Niger Delta',
  about:
    'TOPEK Construction Limited (RC: 1946874) is a tier-one indigenous infrastructure, civil engineering, and specialized construction firm. Operating across 8 integrated divisions, we execute large-scale civil foundations, industrial processing complexes, high-pressure utility pipelines, commercial real estate, bespoke interiors, and overland heavy haulage with unyielding quality and zero-harm HSE standards.',
  history:
    'Incorporated under Nigerian law (RC 1946874) to consolidate and expand the capital construction operations of the TOPEK conglomerate, TOPEK Construction Limited combines seasoned engineering stewardship with a multi-million-dollar heavy machinery fleet. Our verified track record spans mission-critical infrastructure for multinationals and national titans including NNPC/NGML, BUA Cement, NIPCO Gas, Mangal Industries, and A.A. Rano.',
  vision:
    'To become Africa’s foremost integrated infrastructure builder, celebrated globally for structural durability, technological innovation, and uncompromised safety.',
  mission:
    'To build world-class civil, energy, and commercial infrastructure by leveraging multidisciplinary divisions, cutting-edge geomatics, certified indigenous master engineers, and seamless supply chain integration.',
  missionPoints: [
    'ZERO HARM: Preserve life and health of all workers, subcontractors, and communities through strict ISO 45001 safety controls.',
    'UNCOMPROMISED QUALITY: Build to international structural codes (BS, Eurocode, ASTM, API) with full material traceability.',
    'TIMELY DELIVERY: Deploy rapid mobilization frameworks and advanced project management to deliver ahead of milestones.',
    'ENVIRONMENTAL CONSERVATION: Minimize carbon and ecological footprints via modern low-emission fleet and green construction methodologies.'
  ],
  coreValues: [
    { letter: 'T', word: 'Teamwork', detail: 'Multidisciplinary synergy across civil, mechanical, structural, and architectural crafts.' },
    { letter: 'O', word: 'Optimism & Agility', detail: 'Resourceful problem solving and proactive mobilization across any Nigerian terrain.' },
    { letter: 'P', word: 'Probity', detail: 'Rigorous corporate governance, open-book cost engineering, and absolute integrity.' },
    { letter: 'E', word: 'Excellence', detail: 'High-tolerance structural execution, millimetre survey accuracy, and aesthetic prestige.' },
    { letter: 'K', word: 'Kaizen', detail: 'Continuous technological upgrading, workforce skill certification, and process refinement.' },
  ],
  stats: [
    { label: 'Major Verified Projects', value: '11+' },
    { label: 'Integrated Divisions', value: '8' },
    { label: 'Safe Man-Hours (LTI-Free)', value: '750k+' },
    { label: 'Heavy Equipment Units', value: '70+' },
    { label: 'Indigenous Ownership', value: '100%' },
  ]
};

export const NAVIGATION = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/who-we-are',
    children: [
      { label: 'Who We Are & Identity', path: '/who-we-are' },
      { label: 'Regulatory Accreditations & Licenses', path: '/certifications' },
      { label: 'Health, Safety & Environment (HSE)', path: '/hse-policy' },
      { label: 'Quality Policy Statement', path: '/quality-policy' },
      { label: 'News & Media Dispatches', path: '/news' },
      { label: 'Careers & Talent Pool', path: '/careers' },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    columns: 2,
    children: [
      { label: '1. Construction & Civil Engineering', path: '/services#construction-civil-engineering' },
      { label: '2. Architecture, Surveying & Consultancy', path: '/services#architecture-surveying-consultancy' },
      { label: '3. Skilled Manpower & Specialist Trades', path: '/services#skilled-manpower-specialist-trades' },
      { label: '4. Real Estate & Property Development', path: '/services#real-estate-property-development' },
      { label: '5. Furniture, Interiors & Exterior Décor', path: '/services#furniture-interiors-exterior-decor' },
      { label: '6. General Procurement & Supplies', path: '/services#general-procurement-supplies' },
      { label: '7. Agriculture & Agro-Allied Infrastructure', path: '/services#agriculture-agro-allied' },
      { label: '8. Heavy Haulage & Logistics', path: '/services#heavy-haulage-logistics' },
    ]
  },
  {
    label: 'Projects',
    path: '/projects',
    children: [
      { label: 'All 11 Verified Projects', path: '/projects' },
      { label: 'Ongoing Flagship Works', path: '/projects?filter=Ongoing' },
      { label: 'Completed Portfolio', path: '/projects?filter=Completed' },
      { label: 'Distinguished Clients & Partners', path: '/clients' },
    ]
  },
  { label: 'Fleet', path: '/equipment' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/assets/projects/hero-pipeline-sunset.png',
    lead: 'BUILDING A STRONGER TOMORROW',
    highlight: 'Gas Pipeline & Epic',
    sub: 'Civil Excellence',
    description:
      'Executing high-pressure civil/structural gas supply networks for NNPC/NGML, Mangal Cement, BUA Cement, and NIPCO across Nigeria.',
    ctaText: 'Inspect Ongoing Projects',
    ctaPath: '/projects?filter=Ongoing',
    secondaryCtaText: 'Request Consultation',
    secondaryCtaPath: '/contact',
    badge: 'BUILDING A STRONGER TOMORROW'
  },
  {
    id: 2,
    image: '/assets/projects/hero-industrial-complex.png',
    lead: 'NATIONWIDE CAPITAL INFRASTRUCTURE',
    highlight: 'Mega Industrial Plants &',
    sub: 'Structural Landmarks',
    description:
      'Delivering 60 MMSCFD gas PRMS stations, heavy concrete foundation slabs, and specialized process facilities across Nigeria.',
    ctaText: 'Explore 8 Divisions',
    ctaPath: '/services',
    secondaryCtaText: 'Request Consultation',
    secondaryCtaPath: '/contact',
    badge: '100% INDIGENOUS CAPACITY'
  },
  {
    id: 3,
    image: '/assets/projects/general/20241221_141500.jpg',
    lead: 'UNRIVALED OPERATIONAL CAPACITY',
    highlight: '70+ Owned Heavy Fleet &',
    sub: 'Turnkey Mobilization',
    description:
      'Deploying Caterpillar 330D excavators, Tadano 100-ton telescopic cranes, mobile batching plants, and heavy freight haulage with zero downtime.',
    ctaText: 'Inspect Equipment Fleet',
    ctaPath: '/equipment',
    secondaryCtaText: 'Request Consultation',
    secondaryCtaPath: '/contact',
    badge: 'CAC RC: 1946874'
  }
];

export const THREE_PILLARS = [
  {
    number: '01',
    title: 'ENVIRONMENT & ZERO HARM',
    text: 'A zero-compromise safety culture targeting 0 incidents. We proactively implement daily Job Hazard Analysis (JHA), strict PPE enforcement, and ecological remediation.',
    bgColor: 'bg-[#141518]',
    image: '/assets/projects/general/20201126_110021.jpg',
    imageAlt: 'Safety & Environmental Standards'
  },
  {
    number: '02',
    title: 'DESIGN & INTEGRATED BUILD',
    text: 'Seamless delivery from 3D architectural CAD/BIM modeling and geotechnical site investigations to structural steel erection, precision casting, and MEP fit-out.',
    bgColor: 'bg-[#c1121f]',
    image: '/assets/projects/general/20241228_150025.jpg',
    imageAlt: 'Integrated Design and Build'
  },
  {
    number: '03',
    title: 'ENGINEERING HEALTH & QUALITY',
    text: 'Continuous third-party non-destructive testing (NDT), concrete cube compressive break audits, and certified weld radiography ensuring 100-year structural lifespans.',
    bgColor: 'bg-[#1e2025]',
    image: '/assets/projects/completed/20201127_092812.jpg',
    imageAlt: 'Engineering Quality Testing'
  }
];

export const DIVISIONS: DivisionItem[] = [
  {
    id: 'div-1',
    number: 1,
    slug: 'construction-civil-engineering',
    title: 'Construction & Civil Engineering',
    subtitle: 'Industrial, Utility, Civic & Highway Infrastructure',
    shortDescription:
      'Turnkey civil engineering, heavy industrial foundation pads, high-tolerance concrete slabs, and municipal civic infrastructure.',
    fullDescription:
      'TOPEK Construction delivers major civil infrastructure projects with meticulous structural calculations, site supervision, and rigorous HSE adherence. We specialize in deep foundation piling, heavy machinery foundation pads, industrial warehouses, drainage networks, and high-pressure pipeline civil works across Nigeria.',
    capabilities: [
      'Heavy Reinforced Concrete Foundations & Slabs',
      'Industrial Warehouses & Steel Superstructures',
      'Highway, Access Road & Culvert Engineering',
      'Valve Pit & Pipeline Civil Support Structures',
      'Effluent Treatment & Drainage Civil Works',
    ],
    icon: 'Buildings',
    image: '/assets/projects/general/20241221_141500.jpg',
    link: '/services#construction-civil-engineering'
  },
  {
    id: 'div-2',
    number: 2,
    slug: 'architecture-surveying-consultancy',
    title: 'Architecture, Surveying & Consultancy',
    subtitle: '3D BIM Modeling, Geodetic Mapping & Feasibility',
    shortDescription:
      'Comprehensive architectural designs, topographic site surveys, environmental feasibility appraisals, and structural consultancy.',
    fullDescription:
      'We combine architectural ingenuity with technical precision. Using RTK GPS surveying, 3D laser mapping, and Revit/BIM modeling, our consultancy ensures constructibility, zoning compliance, and optimized material usage before breaking ground.',
    capabilities: [
      '3D Architectural Visualization & BIM Modeling',
      'Topographic & Geodetic Boundary Surveys',
      'Structural Integrity & Stress Analysis',
      'Bill of Quantities (BOQ) & Cost Engineering',
      'EIA & Environmental Regulatory Approvals',
    ],
    icon: 'Compass',
    image: '/assets/projects/general/IMG_20231016_094339_663.jpg',
    link: '/services#architecture-surveying-consultancy'
  },
  {
    id: 'div-3',
    number: 3,
    slug: 'skilled-manpower-specialist-trades',
    title: 'Skilled Manpower & Specialist Trades',
    subtitle: 'Certified Engineers, Coded Welders & Technical Crafts',
    shortDescription:
      'Deployment of certified structural, mechanical, and electrical engineers, 6G coded welders, scaffolding experts, and QA/QC inspectors.',
    fullDescription:
      'Human capital is the cornerstone of structural reliability. TOPEK deploys thoroughly vetted, certified technical personnel for complex project execution. From ASME/API certified pipe welders to COREN registered structural engineers, we guarantee technical excellence on every site.',
    capabilities: [
      'COREN Registered Civil & Structural Engineers',
      'ASME Section IX & API 1104 6G Coded Welders',
      'NDT Level II Radiography & Ultrasonic Technicians',
      'CISRS Certified Scaffolding Erection Teams',
      'Dedicated Site HSE Officers & Quality Controllers',
    ],
    icon: 'Users',
    image: '/assets/projects/completed/20201127_092812.jpg',
    link: '/services#skilled-manpower-specialist-trades'
  },
  {
    id: 'div-4',
    number: 4,
    slug: 'real-estate-property-development',
    title: 'Real Estate & Property Development',
    subtitle: 'Master-Planned Communities & Commercial Assets',
    shortDescription:
      'Strategic real estate development, contemporary residential estates, commercial office hubs, and turnkey facility lifecycle management.',
    fullDescription:
      'We design and construct prime residential gated communities, modern corporate office complexes, and high-yield commercial properties. Our development philosophy integrates sustainable green architecture, premium infrastructure, and maximum ROI for investors.',
    capabilities: [
      'Master-Planned Residential Communities',
      'Grade-A Commercial Office Complexes',
      'Built-to-Suit Industrial Facilities',
      'Turnkey Property Facility Management',
      'Land Banking & Title Regularization',
    ],
    icon: 'HouseLine',
    image: '/assets/projects/lindner-school/WhatsApp Image 2026-10-10 at 11.45.54 AM.jpeg',
    link: '/services#real-estate-property-development'
  },
  {
    id: 'div-5',
    number: 5,
    slug: 'furniture-interiors-exterior-decor',
    title: 'Furniture, Interiors & Exterior Décor',
    subtitle: 'Bespoke Joinery, Acoustic Partitions & Modern Finishes',
    shortDescription:
      'Custom luxury cabinetry, executive office fit-outs, acoustic wall treatments, premium landscaping, and modern architectural façades.',
    fullDescription:
      'From boardroom luxury outfitting to industrial-grade acoustic dampening, our interior and exterior décor division transforms blank structural shells into aesthetically striking, ergonomic workspaces and premium residences.',
    capabilities: [
      'Executive Office & Boardroom Outfitting',
      'Bespoke Solid Hardwood Joinery & Cabinetry',
      'Acoustic Wall Paneling & Suspended Ceilings',
      'Architectural Cladding & Curtain Wall Façades',
      'Hardscape Paving & Modern Exterior Landscaping',
    ],
    icon: 'Armchair',
    image: '/assets/projects/global-earth/WhatsApp Image 2026-10-09 at 5.25.35 PM.jpeg',
    link: '/services#furniture-interiors-exterior-decor'
  },
  {
    id: 'div-6',
    number: 6,
    slug: 'general-procurement-supplies',
    title: 'General Procurement & Supplies',
    subtitle: 'OEM Line Pipes, Structural Steel & Heavy Materials',
    shortDescription:
      'Direct-from-manufacturer supply chains for ASTM high-tensile steel, high-pressure piping, industrial fittings, and heavy building commodities.',
    fullDescription:
      'TOPEK maintains direct relationships with ISO-certified global original equipment manufacturers (OEMs). We supply project-critical materials with full mill test certificates (MTC), ensuring uninterrupted material supply schedules and complete traceability.',
    capabilities: [
      'Structural Steel Beams, Rebars & Pre-stressing Wire',
      'API 5L Line Pipes & High-Pressure Fittings',
      'Industrial Ball Valves, Actuators & Metering Skids',
      'Heavy Geotextiles & Geosynthetic Liners',
      'Customized Industrial Fasteners & Flange Insulation',
    ],
    icon: 'Package',
    image: '/assets/projects/general/20201126_110021.jpg',
    link: '/services#general-procurement-supplies'
  },
  {
    id: 'div-7',
    number: 7,
    slug: 'agriculture-agro-allied',
    title: 'Agriculture & Agro-Allied Infrastructure',
    subtitle: 'Commercial Farm Civil Works & Agro Processing',
    shortDescription:
      'Civil construction for large-scale agricultural processing plants, grain silos, drip irrigation canals, and farm access networks.',
    fullDescription:
      'Supporting Africa’s agricultural industrialization, we build modern agro-processing facilities, mechanized grain silos, refrigerated storage warehouses, and large-scale water management canals that withstand extreme weather and heavy seasonal throughput.',
    capabilities: [
      'Industrial Grain Silo Foundation & Erection',
      'Cold Chain Storage Warehouses & Sheds',
      'Commercial Drip & Pivot Irrigation Systems',
      'Farmland Access Roads, Bridges & Culverts',
      'Agro-Processing Heavy Mechanical Foundations',
    ],
    icon: 'Plant',
    image: '/assets/projects/general/20220716_122757.jpg',
    link: '/services#agriculture-agro-allied'
  },
  {
    id: 'div-8',
    number: 8,
    slug: 'heavy-haulage-logistics',
    title: 'Heavy Haulage & Logistics',
    subtitle: 'Overland Abnormal Loads & Plant Machinery Mobilization',
    shortDescription:
      'Specialized lowbed transport, mobile crane rigging, oversized cargo haulage, and site-to-site equipment mobilization across Nigeria.',
    fullDescription:
      'Our dedicated heavy transport fleet handles abnormal, oversized, and ultra-heavy equipment relocations across nationwide industrial corridors. With comprehensive route escorts, certified rigging crews, and lowbed multi-axle trailers, cargo arrives safely and on schedule.',
    capabilities: [
      'Multi-Axle Heavy Lowbed Semi-Trailers',
      'Mobile Crane Tandem Rigging & Loading',
      'Interstate Heavy Machinery Transport Escorts',
      'Bulk Aggregates & Cement Tanker Logistics',
      'Real-Time GPS Fleet Tracking & Route Auditing',
    ],
    icon: 'Truck',
    image: '/assets/projects/general/WhatsApp Image 2026-10-15 at 1.45.38 PM.jpeg',
    link: '/services#heavy-haulage-logistics'
  },
];

export const DELIVERY_STAGES: DeliveryStage[] = [
  {
    step: '01',
    title: 'Consultation & Strategic Briefing',
    tagline: 'Discovery, Geotechnical Audits & Scope Alignment',
    description:
      'We engage directly with client executives, structural architects, and site stakeholders to evaluate project objectives, perform soil geotechnics, and establish baseline constraints.',
    deliverables: ['Site Topographic Feasibility Study', 'Geotechnical Soil Bearing Capacity Report', 'Preliminary Risk & HSE Assessment Matrix'],
    icon: 'ChatCircleDots',
  },
  {
    step: '02',
    title: 'Engineering Design & Planning',
    tagline: '3D CAD/BIM Modeling & High-Tolerance Calculations',
    description:
      'Our design engineers produce full structural shop drawings, mechanical layouts, bar-bending schedules (BBS), and 3D virtual walkthroughs compliant with Eurocode and BS 8110.',
    deliverables: ['Detailed 3D BIM Architectural & Structural Blueprints', 'Comprehensive Bill of Quantities (BOQ)', 'Value Engineering Optimization Options'],
    icon: 'Blueprint',
  },
  {
    step: '03',
    title: 'Tendering & Contract Structuring',
    tagline: 'Transparent Pricing & Milestone-Driven Agreements',
    description:
      'We finalize transparent contract terms, clear milestone-based financial schedules, and SLA commitments backed by bank performance guarantees and insurance bonds.',
    deliverables: ['Milestone Schedule of Values', 'Procurement Strategy & Lead-Time Matrix', 'Formal Fixed-Price / Turnkey Contract'],
    icon: 'FileText',
  },
  {
    step: '04',
    title: 'Heavy Mobilization & Procurement',
    tagline: 'Machinery Staging, OEM Supplies & HSE Encampment',
    description:
      'Within days of contract sign-off, our heavy haulage division stages excavators, batching plants, and cranes on-site while procurement secures certified ASTM steel and OEM pipes.',
    deliverables: ['Heavy Plant & Equipment Mobilization Notice', 'Certified Mill Test Reports (MTC)', 'Full Site HSE Inductions & Safety Barriers'],
    icon: 'Truck',
  },
  {
    step: '05',
    title: 'Precision Construction & Execution',
    tagline: 'Turnkey Civil Erection, Daily Audits & Milestones',
    description:
      'Execution takes place under the direct supervision of COREN certified site directors. Weekly drone progress flights and client milestone inspections keep stakeholders completely informed.',
    deliverables: ['Weekly Milestone Photo & Drone Progress Reports', 'Concrete Cube Compressive Break Test Logs', 'NDT Radiographic & Ultrasonic Inspection Sheets'],
    icon: 'Hammer',
  },
  {
    step: '06',
    title: 'Commissioning, Handover & After-Care',
    tagline: 'As-Built Documentation, Warranty & Lifetime Integrity',
    description:
      'We perform joint client walk-throughs, pressure and structural load testing, deliver signed As-Built blueprints, and initiate warranty maintenance programs.',
    deliverables: ['Final As-Built Architectural & Engineering Blueprints', 'Operating & Maintenance (O&M) Handover Manuals', 'Comprehensive Defect Liability Warranty Certificate'],
    icon: 'CheckCircle',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-ardagh-warehouse',
    title: 'Ardagh Nigeria Warehouse & Generator Upgrade',
    category: 'industrial-commercial',
    categoryLabel: 'Industrial Infrastructure',
    status: 'Ongoing',
    client: 'Ardagh Glass Packaging Nigeria Ltd.',
    location: 'Ikeja Industrial Estate, Lagos',
    year: '2025 - Present',
    scope: 'Turnkey civil foundation expansion, structural steel warehousing, and heavy diesel generator foundation pads with reinforced acoustic baffles.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/general/20241221_141500.jpg',
    galleryImages: [
      '/assets/projects/general/20241221_141500.jpg',
      '/assets/projects/general/20241228_150025.jpg',
      '/assets/projects/general/20241228_150029.jpg',
    ],
  },
  {
    id: 'p-mangal-gas-pipeline',
    title: 'EPC of Civil/Structural for Gas Supply Pipeline to Mangal Cement Plant',
    category: 'gas-energy',
    categoryLabel: 'Gas & Energy Civil',
    status: 'Ongoing',
    client: 'NNPC/NGML & Mangal Industries Ltd.',
    location: 'Iluagba, Kogi State',
    year: '2024 - Present',
    scope: 'Engineering, procurement, and heavy civil construction for cross-country natural gas pipeline river crossings, thrust blocks, valve pits, and PRMS foundations.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/mangal-cement/WhatsApp Image 2026-10-16 at 2.38.19 PM.jpeg',
    galleryImages: [
      '/assets/projects/mangal-cement/WhatsApp Image 2026-10-16 at 2.38.19 PM.jpeg',
      '/assets/projects/mangal-cement/WhatsApp Image 2026-10-09 at 5.24.20 PM (1).jpeg',
      '/assets/projects/mangal-cement/WhatsApp Image 2026-10-09 at 2.35.02 PM (2).jpeg',
    ],
  },
  {
    id: 'p-lindner-school',
    title: 'Construction of Lindner Nursery, Primary School and College',
    category: 'civil-infrastructure',
    categoryLabel: 'Institutional Civil',
    status: 'Ongoing',
    client: 'Lindner Education Foundation',
    location: 'Simawa, Ogun State',
    year: '2024 - Present',
    scope: 'Multi-storey educational institution construction featuring modern classrooms, administrative blocks, multi-sport courts, drainage, and perimeter civil security structures.',
    featured: true,
    division: 'Real Estate & Property Development',
    image: '/assets/projects/lindner-school/WhatsApp Image 2026-10-10 at 11.45.54 AM.jpeg',
    galleryImages: [
      '/assets/projects/lindner-school/WhatsApp Image 2026-10-10 at 11.45.54 AM.jpeg',
      '/assets/projects/lindner-school/WhatsApp Image 2026-10-10 at 11.45.55 AM (1).jpeg',
      '/assets/projects/lindner-school/20260430_183533.jpg',
    ],
  },
  {
    id: 'p-mangal-water-supply',
    title: 'Water Supply Civil Infrastructure to Mangal Cement Factory',
    category: 'civil-infrastructure',
    categoryLabel: 'Utility & Water Civil',
    status: 'Completed',
    client: 'Mangal Industries Ltd.',
    location: 'Iluagba, Kogi State',
    year: '2023 - 2024',
    scope: 'Turnkey raw water intake civil station, booster pump structural housings, and over 12km high-density pipeline trenching and concrete encasement.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/mangal-cement/WhatsApp Image 2026-10-09 at 2.35.02 PM (2).jpeg',
    galleryImages: [
      '/assets/projects/mangal-cement/WhatsApp Image 2026-10-09 at 2.35.02 PM (2).jpeg',
      '/assets/projects/mangal-cement/Designer (1).png',
    ],
  },
  {
    id: 'p-valve-pit-sapade',
    title: 'Valve Pit Construction, 18" x 10km Pipeline Sapade to Orile Oko',
    category: 'gas-energy',
    categoryLabel: 'Pipeline Infrastructure',
    status: 'Completed',
    client: 'NIPCO Gas Ltd.',
    location: 'Sapade to Orile Oko Corridor, Ogun State',
    year: '2023',
    scope: 'Deep excavation, high-grade waterproof concrete valve chambers, heavy cover slab casting, and cathodic protection station enclosures along the interstate corridor.',
    featured: false,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/completed/20201127_093955.jpg',
    galleryImages: [
      '/assets/projects/completed/20201127_093955.jpg',
      '/assets/projects/completed/20201127_093329.jpg',
    ],
  },
  {
    id: 'p-valve-pit-lekki',
    title: 'Valve Pit Construction, 12" x 8km Pipeline Lekki-Epe Expressway',
    category: 'gas-energy',
    categoryLabel: 'Pipeline Infrastructure',
    status: 'Completed',
    client: 'NIPCO Gas Ltd.',
    location: 'Lekki - Epe Expressway, Lagos State',
    year: '2023',
    scope: 'Civil construction of reinforced concrete sectional valve chambers in coastal sandy terrain with sheet-piling shoring and dewatering.',
    featured: false,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/completed/20201127_094009.jpg',
    galleryImages: [
      '/assets/projects/completed/20201127_094009.jpg',
      '/assets/projects/completed/20201126_174543.jpg',
    ],
  },
  {
    id: 'p-fabrication-yard',
    title: 'Construction of Heavy Fabrication Yard Workshop',
    category: 'industrial-commercial',
    categoryLabel: 'Heavy Industrial',
    status: 'Ongoing',
    client: 'TOPEK Engineering',
    location: 'Ogun / Lagos Industrial Corridor',
    year: '2024 - Present',
    scope: 'Heavy structural steel workshop framework, overhead gantry crane runway beams (20-ton capacity), precision leveled industrial flooring, and administrative annex.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/general/20241228_150025.jpg',
    galleryImages: [
      '/assets/projects/general/20241228_150025.jpg',
      '/assets/projects/general/20241228_150029.jpg',
    ],
  },
  {
    id: 'p-global-earth-warehouse',
    title: 'Warehouse & Administrative Complex',
    category: 'industrial-commercial',
    categoryLabel: 'Commercial Development',
    status: 'Ongoing',
    client: 'Global Earth Ltd.',
    location: 'Agbara Industrial Zone, Ogun State',
    year: '2024 - Present',
    scope: 'Turnkey multi-bay distribution warehouse, 3-floor administrative office block, truck maneuvering concrete apron, and surrounding stormwater drainage.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/global-earth/WhatsApp Image 2026-10-09 at 5.25.35 PM.jpeg',
    galleryImages: [
      '/assets/projects/global-earth/WhatsApp Image 2026-10-09 at 5.25.35 PM.jpeg',
      '/assets/projects/global-earth/IMG-20250918-WA0007.jpg',
      '/assets/projects/global-earth/IMG-20250918-WA0010.jpg',
    ],
  },
  {
    id: 'p-bua-prms-phase2',
    title: 'EPCIC of Civil Works for 60 MMSCFD PRMS BUA Cement Phase 2',
    category: 'industrial-commercial',
    categoryLabel: 'Energy & Heavy Industry',
    status: 'Completed',
    client: 'BUA Cement Plc',
    location: 'Kalambaina Industrial Area, Sokoto State',
    year: '2022 - 2023',
    scope: 'Complete civil foundations for high-pressure gas pressure regulating and metering station (PRMS), pipe support sleepers, control room building, and blast-resistant perimeter wall.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/general/GV 7.jpg',
    galleryImages: [
      '/assets/projects/general/GV 7.jpg',
      '/assets/projects/general/GV 8.jpg',
      '/assets/projects/general/GV 9.jpg',
      '/assets/projects/general/GV 10.jpg',
    ],
  },
  {
    id: 'p-rano-lobp',
    title: 'EPCIC of Civil/Structures for A.A. Rano Ltd. LOBP Plant',
    category: 'industrial-commercial',
    categoryLabel: 'Process Plant Infrastructure',
    status: 'Completed',
    client: 'A.A. Rano Nigeria Ltd.',
    location: 'Ijegun Egba, Satellite Town, Lagos',
    year: '2022',
    scope: 'Lube Oil Blending Plant (LOBP) heavy civil engineering, processing vessel foundation pads, pump houses, secondary containment bund walls, and loading gantry slabs.',
    featured: false,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/general/civil2 (1).jpg',
    galleryImages: [
      '/assets/projects/general/civil2 (1).jpg',
      '/assets/projects/general/20220304_104803(0).jpg',
    ],
  },
  {
    id: 'p-rano-storage-tanks',
    title: 'Civil & Structural Works of 22 Storage Tanks',
    category: 'specialized',
    categoryLabel: 'Specialized Civil Engineering',
    status: 'Completed',
    client: 'A.A. Rano Nigeria Ltd.',
    location: 'Ijegun Egba, Satellite Town, Lagos',
    year: '2022 - 2023',
    scope: 'Geotechnical soil improvement, concrete ring-beam tank foundations for 22 petroleum product storage tanks, impervious asphaltic internal bund paving, and firewater ring main civil routing.',
    featured: true,
    division: 'Construction & Civil Engineering',
    image: '/assets/projects/completed/20201127_093340.jpg',
    galleryImages: [
      '/assets/projects/completed/20201127_093340.jpg',
      '/assets/projects/completed/20201127_093341.jpg',
      '/assets/projects/completed/20201126_110750.jpg',
    ],
  },
];

export const CLIENTS = [
  { name: 'NNPC / NGML', logoText: 'NNPC / NGML', industry: 'National Petroleum & Gas Infrastructure' },
  { name: 'BUA Cement Plc', logoText: 'BUA CEMENT', industry: 'Heavy Industry & Cement Manufacturing' },
  { name: 'Mangal Industries Ltd.', logoText: 'MANGAL INDUSTRIES', industry: 'Heavy Industrial & Building Materials' },
  { name: 'NIPCO Gas Ltd.', logoText: 'NIPCO GAS', industry: 'Downstream Gas Distribution & Networks' },
  { name: 'A.A. Rano Nigeria Ltd.', logoText: 'A.A. RANO', industry: 'Oil, Gas & Lube Oil Blending' },
  { name: 'Ardagh Glass Packaging', logoText: 'ARDAGH GROUP', industry: 'Global Multinational Manufacturing' },
  { name: 'Global Earth Ltd.', logoText: 'GLOBAL EARTH', industry: 'Industrial Warehousing & Supply Chain' },
  { name: 'Lindner Foundation', logoText: 'LINDNER GROUP', industry: 'Institutional Education & Civil Assets' },
];

export const EQUIPMENT_LIST: EquipmentItem[] = [
  {
    id: 'eq-1',
    name: 'CAT 320D & 330D Hydraulic Excavators',
    category: 'Earthmoving',
    quantity: '6 Units',
    specifications: 'Crawler excavators with 1.4m³ - 2.0m³ heavy rock buckets and hydraulic breakers for deep pipeline trenching.',
    status: 'Operational'
  },
  {
    id: 'eq-2',
    name: 'CAT D6R & Komatsu D85 Heavy Bulldozers',
    category: 'Earthmoving',
    quantity: '4 Units',
    specifications: 'Heavy semi-U tilt blades with multi-shank rippers for site clearing and rock leveling.',
    status: 'Operational'
  },
  {
    id: 'eq-3',
    name: 'Caterpillar 140K Motor Graders',
    category: 'Earthmoving',
    quantity: '3 Units',
    specifications: '14ft moldboard with precision laser slope control for roadbed subgrade compaction.',
    status: 'Operational'
  },
  {
    id: 'eq-4',
    name: 'Tadano & Sany All-Terrain Hydraulic Cranes (30T - 100T)',
    category: 'Lifting & Cranes',
    quantity: '5 Units',
    specifications: 'Telescopic booms up to 58m, continuous load moment indicator, 360-degree lift rating.',
    status: 'Operational'
  },
  {
    id: 'eq-5',
    name: 'Zoomlion 50m Jib Tower Cranes',
    category: 'Lifting & Cranes',
    quantity: '2 Units',
    specifications: 'Max hoisting capacity 8 Tons, tip load 1.3 Tons at 50m, anti-collision radar systems.',
    status: 'Mobilized'
  },
  {
    id: 'eq-6',
    name: 'Heavy Ready-Mix Concrete Truck Mixers (10m³)',
    category: 'Concrete & Paving',
    quantity: '12 Units',
    specifications: 'Mercedes Actros / Sinotruk 8x4 chassis with high-wear resistant drum and continuous slump agitation.',
    status: 'Operational'
  },
  {
    id: 'eq-7',
    name: 'Mobile Planetary Concrete Batching Plants (60m³/h)',
    category: 'Concrete & Paving',
    quantity: '2 Units',
    specifications: 'Automated aggregate weighing hoppers, dual 100-ton cement silos, computerized slump control.',
    status: 'Operational'
  },
  {
    id: 'eq-8',
    name: 'Heavy Dump Trucks (30T Howo/Sinotruk 6x4 & 8x4)',
    category: 'Haulage & Logistics',
    quantity: '18 Units',
    specifications: 'Hardox reinforced tipper bodies for mass earthmoving, ballast, and granite haulage.',
    status: 'Operational'
  },
  {
    id: 'eq-9',
    name: 'Multi-Axle Lowbed Semi-Trailers & Heavy Prime Movers',
    category: 'Haulage & Logistics',
    quantity: '8 Units',
    specifications: 'Up to 100-ton carrying capacity with hydraulic ramps for heavy construction equipment mobilization.',
    status: 'Operational'
  },
  {
    id: 'eq-10',
    name: 'Dynapac Asphalt Pavers & Pneumatic Tired Rollers',
    category: 'Concrete & Paving',
    quantity: '4 Units',
    specifications: 'High-compaction screeds with automatic grade and slope sensors for highway pavement.',
    status: 'Operational'
  },
  {
    id: 'eq-11',
    name: 'Leica TS07 Total Stations & RTK GNSS GPS Sets',
    category: 'Survey & Testing',
    quantity: '8 Sets',
    specifications: 'Sub-millimeter EDM accuracy, real-time geodetic kinematic mapping, and digital leveling.',
    status: 'Operational'
  },
  {
    id: 'eq-12',
    name: 'Industrial Soundproof Diesel Generators (100kVA - 1000kVA)',
    category: 'Power & Welding',
    quantity: '16 Units',
    specifications: 'Cummins & Perkins turbo-charged prime power generators with automatic transfer switches.',
    status: 'Operational'
  },
  {
    id: 'eq-13',
    name: 'High-Pressure Hydrostatic Test Pumps (up to 15,000 PSI)',
    category: 'Survey & Testing',
    quantity: '6 Sets',
    specifications: 'Pneumatic reciprocating test rigs with dual calibrated digital chart pressure recorders.',
    status: 'Operational'
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Nigerian Upstream Petroleum Regulatory Commission (NUPRC / DPR)',
    category: 'Federal Regulatory License',
    number: 'NUPRC/OGISP/MAJOR/2024',
    description: 'Category Major permit for heavy civil/structural works, pipeline construction, deep foundation piling, and industrial plant installation.'
  },
  {
    title: 'Nigerian Petroleum Exchange (NipeX) Joint Qualification System',
    category: 'Oil & Gas Operator Prequalification',
    number: 'NipeX-JQS Certified Vendor #10892',
    description: 'Pre-qualified vendor status for upstream, midstream, and downstream major operator EPCIC civil tenders across Nigeria.'
  },
  {
    title: 'Council for the Regulation of Engineering in Nigeria (COREN)',
    category: 'Engineering Practice Registration',
    number: 'COREN Corporate Engineering Practice EF.2819',
    description: 'Full corporate practice license ensuring all structural blueprints and civil works are supervised by registered Nigerian engineers.'
  },
  {
    title: 'ISO 9001:2015 Quality Management System',
    category: 'International Standards Organization',
    number: 'ISO-9001:2015 Certified Framework',
    description: 'Systematic procedures for quality assurance, procurement verification, material mill certificate testing, and continuous process audit.'
  },
  {
    title: 'ISO 45001:2018 Occupational Health & Safety',
    category: 'Global Safety Management',
    number: 'ISO-45001:2018 Certified Framework',
    description: 'Zero-harm policy implementation, proactive job hazard analysis (JHA), site safety barriers, and over 750,000 LTI-free man-hours.'
  },
  {
    title: 'Nigerian Content Development and Monitoring Board (NCDMB)',
    category: 'Local Content Compliance',
    number: 'NOGIC JQS Registered & Fully Compliant',
    description: '100% indigenous ownership and workforce compliance under the Nigerian Oil and Gas Industry Content Development Act.'
  }
];

export const NEWS_ARTICLES: NewsItem[] = [
  {
    id: 'news-1',
    title: 'TOPEK Construction Advances Mangal Cement Gas Pipeline EPC Civil Works',
    date: 'February 2026',
    category: 'Project Milestone',
    excerpt: 'Civil works for the critical natural gas pipeline supplying Mangal Cement Plant in Iluagba achieve 85% completion milestone, including reinforced river crossings and valve chambers.',
    image: '/assets/projects/mangal-cement/WhatsApp Image 2026-10-16 at 2.38.19 PM.jpeg',
    author: 'Project Engineering Team'
  },
  {
    id: 'news-2',
    title: 'TOPEK Expands Heavy Haulage Fleet with Additional 100-Ton Lowbed Transporters',
    date: 'January 2026',
    category: 'Corporate Growth',
    excerpt: 'To support concurrent multi-state industrial projects across Nigeria, TOPEK Construction has commissioned new multi-axle prime movers and heavy lowbed semi-trailers.',
    image: '/assets/projects/general/WhatsApp Image 2026-10-15 at 1.45.38 PM.jpeg',
    author: 'Logistics Directorate'
  },
  {
    id: 'news-3',
    title: 'Achieving Over 750,000 Safe Man-Hours Without Lost Time Injury (LTI)',
    date: 'November 2025',
    category: 'HSE Achievement',
    excerpt: 'Demonstrating an unwavering commitment to site safety, TOPEK Construction Limited celebrates another milestone across high-risk industrial civil construction sites.',
    image: '/assets/projects/completed/20201127_092812.jpg',
    author: 'QHSE Directorate'
  }
];
