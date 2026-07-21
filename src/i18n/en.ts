import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Reclaiming the Earth We Farm | AMR Awareness",
    description:
      "How agricultural antibiotic pollution in Indonesia's Citarum River is driving antimicrobial resistance — and the six proven solutions that can reverse it.",
  },
  nav: {
    home: "Home",
    problem: "The Problem",
    science: "The Science",
    solutions: "Solutions",
    takeAction: "Take Action",
    about: "About Us",
    resources: "Resources",
    menu: "Menu",
  },
  common: {
    scrollHint: "Scroll",
    readMore: "Read more",
    close: "Close",
    download: "Download",
    share: "Share",
    learnMore: "Learn more",
    tapToExpand: "Tap to expand",
  },
  hero: {
    kicker: "Citarum River, West Java, Indonesia",
    quote: "The Citarum River used to be so beautiful back then.",
    quoteAuthor: "Ibu Edah",
    quoteMeta: "resident of the Citarum riverbank since 1968",
    headline: "The most dangerous threat cannot be seen, smelled, or tasted.",
    subhead:
      "Antibiotic residues from farms, hospitals, and factories are silently conditioning bacteria to resist every medicine we have. This is the story of one river — and 28 million people whose future depends on what happens to it.",
    statValue: 28,
    statLabel: "people depend on a watershed being quietly re-engineered by drug resistance",
    cta: "Begin the Journey",
    beforeLabel: "Before",
    afterLabel: "Today",
    beforeYear: "Clean enough to bathe in",
    afterYear: "Biologically dead in places",
    sliderHint: "Drag to compare",
  },
  problem: {
    kicker: "Section 2 — The Problem",
    title: "A River, a Resistance, and a Global Emergency",
    intro:
      "Today the river is streaked with textile dye, thick with sewage, and choked with garbage. Yet the threat that matters most is invisible: antibiotic residues conditioning bacteria to become untreatable.",
    riverTitle: "The Citarum River",
    riverLength: "≈300 km through the heart of West Java",
    riverStats: [
      { value: "80%", label: "of Jakarta's drinking water" },
      { value: "400,000 ha", label: "of rice paddies irrigated" },
      { value: "2,000+", label: "factories discharging into the river" },
      { value: "280,000 t", label: "of untreated sewage every year" },
      { value: "20,000 t", label: "of plastic waste every year" },
    ],
    oxygenLabel: "Dissolved oxygen in the worst-hit sections",
    oxygenNote:
      "So low the Indonesian government has declared parts of the river biologically dead.",
    amrKicker: "Section 2.2",
    amrTitle: "Understanding AMR: From the River to the Bedside",
    amrIntro:
      "To understand what happens when resistant bacteria enter the human body, consider the story of Pak Ahmad.",
    steps: [
      {
        title: "A farmer's routine",
        text: "Pak Ahmad, a rice farmer, cuts his foot on a piece of rusty metal while working the paddies he has farmed for decades.",
      },
      {
        title: "The wound becomes infected",
        text: "An ordinary injury — the kind treated safely for generations.",
      },
      {
        title: "Amoxicillin is prescribed",
        text: "The standard first-line treatment. It has always worked before.",
      },
      {
        title: "Nothing happens",
        text: "The infection does not respond. The bacteria have already met this drug — in the river.",
      },
      {
        title: "The infection spreads",
        text: "By the time Pak Ahmad reaches a hospital in Bandung, the infection has spread to his bones. Antibiotic after antibiotic is tried. Nothing works.",
      },
      {
        title: "A once-treatable wound becomes fatal",
        text: "Pak Ahmad dies two weeks later from a wound that penicillin would have resolved a generation ago — shaped by the very river where he farmed and bathed.",
      },
    ],
    keysTitle: "Antibiotics as molecular keys",
    keysNote:
      "Antibiotics function as molecular keys designed to open specific bacterial locks. Repeated exposure to low, sub-lethal concentrations lets bacteria mutate those locks — through gene mutation or by absorbing resistance genes from neighbouring organisms (horizontal gene transfer) — until no existing key fits.",
    genesTitle: "Resistance genes detected in Citarum sediment",
    genes: [
      { code: "blaCTX-M", name: "Cephalosporin resistance", resistance: "Confers resistance to broad-spectrum cephalosporins, a mainstay antibiotic class." },
      { code: "mcr-1", name: "Colistin resistance", resistance: "Confers resistance to colistin — a last-resort antibiotic used when nothing else works." },
      { code: "tetA", name: "Tetracycline resistance", resistance: "One of three tetracycline-resistance genes found in Citarum sediment, common in livestock waste." },
      { code: "tetB", name: "Tetracycline resistance", resistance: "Enables bacteria to pump tetracycline out of their cells before it can act." },
      { code: "tetM", name: "Tetracycline resistance", resistance: "Protects bacterial ribosomes directly, blocking the antibiotic's target site." },
    ],
    globalKicker: "Section 2.3",
    globalTitle: "Global Stakes",
    directDeaths: "1.27M",
    directDeathsLabel: "direct deaths from AMR every year",
    associatedDeaths: "4.95M",
    associatedDeathsLabel: "deaths annually associated with AMR — over 3,500 lives every single day",
    perDayLabel: "lives lost per day",
    timelineTitle: "Projected deaths, 2026 → 2050",
    timelineNote:
      "By 2050, AMR-related deaths are projected to reach 10 million per year — surpassing current cancer mortality — with an estimated $100 trillion in cumulative economic cost.",
    economicImpact: "$100T",
    economicLabel: "projected cumulative economic cost by 2050",
    bridgeText:
      "This is not a distant scientific concern. It is an immediate global crisis rooted in one very local, very fixable practice: how we use antibiotics in agriculture.",
  },
  science: {
    kicker: "Section 3 — The Science",
    title: "The Citarum as an Incubator of Resistance",
    intro:
      "Antibiotic contamination in the Citarum originates from three interconnected sources — and agriculture is the largest, most overlooked driver of all.",
    sourcesTitle: "Three Sources of Antibiotic Pollution",
    sourcesIntro: "Tap each source to see the evidence behind it.",
    sources: [
      {
        name: "Pharmaceutical Factories",
        stat: "45,000 people/day",
        detail:
          "Bulk drug manufacturing discharge can release enough active antibiotic to treat 45,000 people daily into surrounding waterways (Lübbert et al., 2017).",
      },
      {
        name: "Hospitals & Clinics",
        stat: "70% excreted unchanged",
        detail:
          "Up to 70% of each antibiotic dose passes through the human body unchanged and enters untreated sewage systems.",
      },
      {
        name: "Agriculture",
        stat: "73% of global consumption",
        detail:
          "Agriculture is globally the largest and most overlooked source of antibiotic use, responsible for 73% of all antibiotics consumed worldwide (Van Boeckel et al., 2019).",
      },
    ],
    agricultureTitle: "Agriculture: The Primary Driver",
    agricultureIntro:
      "Farmers administer antibiotics to poultry, pig, and fish feed to accelerate growth and prevent disease in densely crowded factory-farm conditions.",
    pathway: [
      "Antibiotics added to poultry, pig & fish feed",
      "50–70% of each dose excreted unchanged in waste",
      "Raw manure spread on rice paddies as fertilizer",
      "Rainfall carries antibiotics & resistant bacteria into streams",
      "Streams drain into the Citarum River",
    ],
    findingsTitle: "What the data shows",
    findings: [
      "BRIN (2021) detected amoxicillin residues in every water sample collected from the Upper Citarum.",
      "Ciprofloxacin found at up to 50 µg/L in South Asian rivers — roughly 500× the safe resistance-selection threshold.",
      "Tetracycline levels in West Java livestock wastewater reached 140–380 µg/L, sufficient to actively drive resistance.",
      "The mcr-1 gene identified in E. coli from Citarum-adjacent poultry farms.",
      "Resistance markers detected in river sediment at up to 10⁸ gene copies per gram.",
    ],
    cycleKicker: "Section 4",
    cycleTitle: "The AMR Escalation Cycle",
    cycleIntro:
      "AMR does not produce a constant level of risk — it drives a self-reinforcing escalation. Tap each stage to see how it feeds the next.",
    stages: [
      { title: "Antibiotic emission", detail: "Active antibiotics enter rivers from farms, hospitals, and factories." },
      { title: "Resistant bacteria selected", detail: "Sub-lethal concentrations don't kill bacteria — they select for the ones that survive." },
      { title: "Treatment failures", detail: "Standard first-line antibiotics like amoxicillin stop working." },
      { title: "Stronger drugs deployed", detail: "Doctors are forced to reach for last-resort antibiotics." },
      { title: "More persistent drugs released", detail: "These stronger drugs are more environmentally persistent, re-entering rivers." },
      { title: "Resistance to those drugs emerges", detail: "The cycle repeats at a higher, more dangerous tier." },
      { title: "No therapeutic options remain", detail: "For some infections, every available antibiotic fails." },
    ],
    warning: "Genetic pollution is irreversible on human timescales.",
    consequencesTitle: "Compounding environmental consequences",
    consequences: [
      "Soil fertility loss",
      "Rising water treatment costs",
      "Resistant bacteria accumulating in fish tissue",
      "Contamination entering crops through irrigation water",
      "Death of the microbial communities that give rivers their self-cleaning capacity",
    ],
    bridgeText:
      "Resistance genes can persist in sediment for decades or centuries — even if all antibiotic use stopped today, future bacteria could inherit resistance from ancestors that never encountered a single antibiotic molecule. This permanence is exactly why prevention — not remediation — has to be the strategy. And prevention is possible.",
  },
  solutions: {
    kicker: "Section 5 — Solutions",
    title: "An Integrated One Health Strategy",
    intro:
      "The WHO, FAO, and World Organisation for Animal Health all endorse One Health: human health, animal health, and environmental health form a single, inseparable system. Because AMR originates at the intersection of all three, no single-sector intervention is sufficient.",
    oneHealthTitle: "The One Health Framework",
    oneHealthHuman: "Human Health",
    oneHealthAnimal: "Animal Health",
    oneHealthEnvironment: "Environmental Health",
    oneHealthResult: "One Health",
    oneHealthDescription:
      "AMR originates at the intersection of all three domains — so solutions must address agricultural practice, environmental contamination, and human health simultaneously.",
    counterTitle: "Addressing the counterarguments",
    counterarguments: [
      {
        q: "\"But we need antibiotics for food security!\"",
        a: "When the EU banned growth-promoting antibiotics in 2006, livestock antibiotic use fell by 50% with no collapse in meat production. Danish pig production actually increased after the ban, as farmers adopted improved hygiene and vaccination instead.",
      },
      {
        q: "\"But the alternatives cost too much!\"",
        a: "Biochar production from rice husks costs approximately $0.05 per litre of treated effluent. Left unchecked, AMR could push 28 million people into poverty by 2050. Subsidised composting and farmer training are investments in public health infrastructure, not expenditures to avoid.",
      },
    ],
    solutionsTitle: "Six Evidence-Based Solutions",
    solutionsIntro: "Six coordinated interventions constitute a comprehensive policy response.",
    items: [
      {
        title: "Enforce Permentan No. 14/2017",
        detail: "Ban antibiotic growth promoters in animal feed through regular inspections, meaningful penalties, and transition subsidies for smallholders.",
        evidence: "Existing Indonesian law — enforcement, not new legislation, is the gap.",
      },
      {
        title: "60-Day Composting Mandate",
        detail: "Mandate manure composting for a minimum of 60 days before field application, delivered through subsidised community facilities.",
        evidence: "Destroys 90–99% of resistant bacteria before manure reaches soil.",
      },
      {
        title: "Biochar Filters from Rice Husks",
        detail: "Deploy low-cost biochar filters made from locally abundant rice husks at farm level.",
        evidence: "94% removal of Pseudomonas aeruginosa, 88% removal of clarithromycin (Xiang et al., 2022).",
      },
      {
        title: "Farmer Training",
        detail: "Train farmers in hygiene, vaccination, and composting as alternatives to routine antibiotic use.",
        evidence: "Cut antibiotic use by 40% in Thai poultry farms within two years — directly replicable in Indonesia (FAO, 2019).",
      },
      {
        title: "Advanced Wastewater Treatment",
        detail: "Mandate ozonation, activated carbon filtration, and membrane bioreactors for all Citarum-basin factories and hospitals.",
        evidence: "Ozonation: 99% bacterial removal. Activated carbon: 90–95% antibiotic removal. Membrane bioreactors: 99.9% bacterial removal.",
      },
      {
        title: "Bacteriophage & Probiotics",
        detail: "Replace routine antibiotic use in livestock with bacteriophage therapy and probiotic supplementation.",
        evidence: "Reduced Salmonella infections in poultry by 70% without generating resistance.",
      },
    ],
    leadersTitle: "The Role of Future Leaders",
    leadersIntro:
      "Systemic crises of this magnitude are ultimately resolved by the generation that inherits them. Choose a path to see what it means in practice.",
    roles: [
      {
        name: "Advocate",
        tagline: "Demand enforcement, organise, hold power accountable.",
        actions: [
          "Demand enforcement of existing legislation such as Permentan No. 14/2017",
          "Organise evidence-based public campaigns",
          "Hold governments and corporations accountable",
        ],
      },
      {
        name: "Innovator",
        tagline: "Build locally adapted, low-cost technical solutions.",
        actions: [
          "Design low-cost biochar filters for smallholder farms",
          "Build mobile systems for monitoring antibiotic residues in waterways",
          "Prototype and test solutions with local farming communities",
        ],
      },
      {
        name: "Bridge-Builder",
        tagline: "Turn scientific evidence into narratives that move people.",
        actions: [
          "Translate complex AMR data into accessible stories",
          "Close the gap between evidence and policy action",
          "Motivate change across sectors and communities",
        ],
      },
    ],
    actionsTitle: "Individual Actions That Matter",
    actionsIntro: "Policy reform and individual behaviour are mutually reinforcing, not competing, strategies.",
    actions: [
      "Never buy antibiotics without a prescription",
      "Always complete the full prescribed course",
      "Ask your doctor whether an antibiotic is genuinely necessary",
      "Choose antibiotic-free meat and eggs to reward sustainable farming",
      "Support local producers and farmers markets",
      "Share what you know about AMR — awareness is the first step",
    ],
  },
  takeAction: {
    kicker: "Section 6 — Take Action",
    title: "Join the Movement",
    intro:
      "The knowledge exists. The solutions are proven. The question is whether the next generation will act before the window closes.",
    pledgeTitle: "Make the pledge",
    pledgeText:
      "Commit to at least one evidence-based action from this page — and join everyone else who already has.",
    pledgeCta: "I commit to act",
    pledgeDone: "Thank you — you're counted.",
    pledgeCountLabel: "people have committed to action",
    shareTitle: "Share this fact",
    shareIntro: "Awareness is the first step toward both policy change and personal behaviour change.",
    shareStat: "Amoxicillin was found in every single water sample tested in the Upper Citarum River. Antimicrobial resistance is one of the top 10 global health threats identified by the WHO.",
    resourcesTitle: "Downloadable Resources",
    essayCta: "Download the full essay (PDF)",
    newsletterTitle: "Stay informed",
    newsletterText: "Get occasional updates on AMR policy progress in Indonesia.",
    newsletterPlaceholder: "you@example.com",
    newsletterCta: "Sign up",
    newsletterSuccess: "You're on the list — thank you.",
  },
  about: {
    kicker: "1.1 The Team",
    title: "About",
    titleAccent: "Us",
    intro:
      "Five students from SMA Ibnu Hajar Boarding School researched, wrote, and built this project to make antimicrobial resistance impossible to ignore.",
    missionTitle: "Our Mission",
    mission:
      "To translate rigorous science about the Citarum River and antimicrobial resistance into a story that moves people to act — proving that the next generation of leaders is already at work.",
    institutionName: "SMA Ibnu Hajar Boarding School",
    institutionLocation: "Depok, West Java, Indonesia",
    institutionYear: "2026",
    contactTitle: "Contact the team",
  },
  resources: {
    kicker: "Section 7 — Resources",
    title: "Go Deeper",
    intro: "Every figure on this site is drawn from the sources below.",
    essayTitle: "The Full Essay",
    essayText:
      "\"Reclaiming the Earth We Farm: Sustainable Agriculture and Environmental Action as a Global Strategy Against Antimicrobial Resistance\" — the complete academic essay this website is based on.",
    essayDownload: "Download PDF",
    essayRead: "Read online",
    posterTitle: "The Poster",
    posterText:
      "Our competition infographic — the whole story of AMR and the Citarum River, condensed into one visual. Tap to view full size.",
    posterView: "View full size",
    posterDownload: "Download poster",
    referencesTitle: "References",
    referencesIntro: "All 16 sources cited in the essay, in APA style.",
    glossaryTitle: "Glossary",
    glossary: [
      { term: "Antimicrobial Resistance (AMR)", def: "The ability of microorganisms (bacteria, viruses, fungi, parasites) to survive exposure to drugs that once killed them or stopped their growth." },
      { term: "One Health", def: "A framework recognising that human, animal, and environmental health are interconnected and must be addressed together." },
      { term: "Horizontal Gene Transfer (HGT)", def: "The movement of genetic material — including resistance genes — between organisms other than by reproduction." },
      { term: "Growth Promoter", def: "An antibiotic given to livestock at low doses not to treat illness, but to accelerate growth and weight gain." },
      { term: "Biochar", def: "A charcoal-like material produced from organic matter (e.g. rice husks) that can filter contaminants from water." },
      { term: "Dissolved Oxygen", def: "The amount of oxygen present in water, essential for aquatic life; very low levels indicate severe pollution." },
      { term: "Bacteriophage", def: "A virus that infects and kills specific bacteria, usable as a targeted alternative to antibiotics." },
    ],
    linksTitle: "External Resources",
    links: [
      { label: "World Health Organization — Antimicrobial Resistance", url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance" },
      { label: "BRIN — Badan Riset dan Inovasi Nasional", url: "https://www.brin.go.id/" },
      { label: "FAO — One Health", url: "https://www.fao.org/one-health/en" },
    ],
  },
  footer: {
    tagline: "An investigation into the Citarum River, antimicrobial resistance, and the path back.",
    quickLinksTitle: "Quick Links",
    credits: "Built for the AMR Awareness Competition by SMA Ibnu Hajar Boarding School.",
    copyright: "SMA Ibnu Hajar Boarding School. All rights reserved.",
  },
};
