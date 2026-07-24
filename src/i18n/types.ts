export interface StatItem {
  value: string;
  label: string;
}

export interface GeneCard {
  code: string;
  name: string;
  resistance: string;
}

export interface AmrStep {
  title: string;
  text: string;
}

export interface SourceItem {
  name: string;
  stat: string;
  detail: string;
}

export interface CycleStage {
  title: string;
  detail: string;
}

export interface QA {
  q: string;
  a: string;
}

export interface SolutionItem {
  title: string;
  detail: string;
  evidence: string;
}

export interface LeaderRole {
  name: string;
  tagline: string;
  actions: string[];
}

export interface GlossaryItem {
  term: string;
  def: string;
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    problem: string;
    science: string;
    solutions: string;
    challenge: string;
    takeAction: string;
    about: string;
    resources: string;
    menu: string;
  };
  common: {
    scrollHint: string;
    readMore: string;
    close: string;
    download: string;
    share: string;
    learnMore: string;
    tapToExpand: string;
  };
  hero: {
    kicker: string;
    quote: string;
    quoteAuthor: string;
    quoteMeta: string;
    headline: string;
    subhead: string;
    statValue: number;
    statLabel: string;
    cta: string;
    beforeLabel: string;
    afterLabel: string;
    beforeYear: string;
    afterYear: string;
    sliderHint: string;
  };
  problem: {
    kicker: string;
    title: string;
    intro: string;
    riverTitle: string;
    riverLength: string;
    riverStats: StatItem[];
    oxygenLabel: string;
    oxygenNote: string;
    amrKicker: string;
    amrTitle: string;
    amrIntro: string;
    steps: AmrStep[];
    keysTitle: string;
    keysNote: string;
    genesTitle: string;
    genes: GeneCard[];
    globalKicker: string;
    globalTitle: string;
    directDeaths: string;
    directDeathsLabel: string;
    associatedDeaths: string;
    associatedDeathsLabel: string;
    perDayLabel: string;
    timelineTitle: string;
    timelineNote: string;
    economicImpact: string;
    economicLabel: string;
    bridgeText: string;
  };
  science: {
    kicker: string;
    title: string;
    intro: string;
    sourcesTitle: string;
    sourcesIntro: string;
    sources: SourceItem[];
    agricultureTitle: string;
    agricultureIntro: string;
    pathway: string[];
    findingsTitle: string;
    findings: string[];
    cycleKicker: string;
    cycleTitle: string;
    cycleIntro: string;
    stages: CycleStage[];
    warning: string;
    consequencesTitle: string;
    consequences: string[];
    bridgeText: string;
  };
  solutions: {
    kicker: string;
    title: string;
    intro: string;
    oneHealthTitle: string;
    oneHealthHuman: string;
    oneHealthAnimal: string;
    oneHealthEnvironment: string;
    oneHealthResult: string;
    oneHealthDescription: string;
    counterTitle: string;
    counterarguments: QA[];
    solutionsTitle: string;
    solutionsIntro: string;
    items: SolutionItem[];
    leadersTitle: string;
    leadersIntro: string;
    roles: LeaderRole[];
    actionsTitle: string;
    actionsIntro: string;
    actions: string[];
  };
  challenge: {
    kicker: string;
    title: string;
    subtitle: string;
    stats: StatItem[];
    searchPlaceholder: string;
    allCategories: string;
    difficultyLabel: string;
    difficultyAll: string;
    difficultyEasy: string;
    difficultyMedium: string;
    difficultyHard: string;
    tldrLabel: string;
    takeawayLabel: string;
    noResultsTitle: string;
    noResultsHint: string;
    progressLabel: string;
    progressReady: string;
    resetLabel: string;
    simulatorButton: string;
    simulatorTitle: string;
    simulatorIntro: string;
    simulatorStart: string;
    simulatorThinking: string;
    simulatorReveal: string;
    simulatorNext: string;
    simulatorClose: string;
    countLabel: string;
  };
  takeAction: {
    kicker: string;
    title: string;
    intro: string;
    pledgeTitle: string;
    pledgeText: string;
    pledgeCta: string;
    pledgeDone: string;
    pledgeCountLabel: string;
    shareTitle: string;
    shareIntro: string;
    shareStat: string;
    resourcesTitle: string;
    essayCta: string;
    newsletterTitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterCta: string;
    newsletterSuccess: string;
  };
  about: {
    kicker: string;
    title: string;
    titleAccent: string;
    intro: string;
    missionTitle: string;
    mission: string;
    institutionName: string;
    institutionLocation: string;
    institutionYear: string;
    contactTitle: string;
  };
  resources: {
    kicker: string;
    title: string;
    intro: string;
    essayTitle: string;
    essayText: string;
    essayDownload: string;
    essayRead: string;
    posterTitle: string;
    posterText: string;
    posterView: string;
    posterDownload: string;
    referencesTitle: string;
    referencesIntro: string;
    glossaryTitle: string;
    glossary: GlossaryItem[];
    linksTitle: string;
    links: ExternalLink[];
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    credits: string;
    copyright: string;
  };
}
