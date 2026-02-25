/**
 * Site configuration for the landing template.
 * Customize this file (or swap it for a JSON loader) to rebrand the site.
 * @fileoverview Single source for brand, meta, locale, nav, and footer copy.
 */

/** Single navigation or footer link. */
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** Primary call-to-action (e.g. header CTA). */
export interface PrimaryCta {
  readonly label: string;
  readonly href: string;
}

/** Social link with Material icon name. */
export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: string;
}

/** Footer column: heading + list of links. */
export interface FooterColumn {
  readonly title: string;
  readonly links: readonly NavLink[];
}

/** Footer bottom bar: copyright text and optional links. */
export interface FooterBottom {
  readonly copyright: string;
  readonly links?: readonly NavLink[];
}

/** Footer config: tagline, columns, social, bottom bar. */
export interface FooterConfig {
  readonly tagline: string;
  readonly columns: readonly FooterColumn[];
  readonly social: readonly SocialLink[];
  readonly bottom: FooterBottom;
}

/** Brand identity. */
export interface BrandConfig {
  readonly siteName: string;
  readonly tagline: string;
  readonly logoIcon: string;
  readonly logoImage?: string;
}

/** Default meta for layout and SEO. */
export interface MetaConfig {
  readonly defaultTitle: string;
  readonly defaultDescription: string;
  readonly ogImage?: string;
}

/** Locale and direction. */
export interface LocaleConfig {
  readonly lang: string;
  readonly dir: "ltr" | "rtl";
}

/** Full site config. */
export interface SiteConfig {
  readonly brand: BrandConfig;
  readonly meta: MetaConfig;
  readonly locale: LocaleConfig;
  readonly nav: {
    readonly links: readonly NavLink[];
    readonly primaryCta: PrimaryCta;
    readonly ariaLabel: string;
  };
  readonly footer: FooterConfig;
  /** Skip-to-main-content link text (a11y). */
  readonly skipLinkText: string;
}

const regulonNavLinks: readonly NavLink[] = [
  { label: "תמחור", href: "/pricing" },
  { label: "אודות", href: "/about" },
  { label: "צור קשר", href: "/contact" },
];

const regulonFooterColumns: readonly FooterColumn[] = [
  {
    title: "מוצר",
    links: [
      { label: "מחירון", href: "/pricing" },
      { label: "אינטגרציות", href: "#" },
      { label: "עדכוני גרסה", href: "#" },
    ],
  },
  {
    title: "משאבים",
    links: [
      { label: "בלוג רגולציה", href: "#" },
      { label: "מדריכי יבוא", href: "#" },
      { label: "מרכז עזרה", href: "#" },
      { label: "API למפתחים", href: "#" },
    ],
  },
  {
    title: "חברה",
    links: [
      { label: "אודותינו", href: "/about" },
      { label: "צור קשר", href: "/contact" },
      { label: "הצהרת נגישות", href: "/accessibility" },
      { label: "מדיניות פרטיות", href: "/privacy" },
    ],
  },
];

const regulonSocial: readonly SocialLink[] = [
  { label: "פייסבוק", href: "#", icon: "facebook" },
  { label: "יוטיוב", href: "#", icon: "smart_display" },
  { label: "אימייל", href: "#", icon: "email" },
];

/** Default site config matching current Regulon landing. */
export const siteConfig: SiteConfig = {
  brand: {
    siteName: "Regulon",
    tagline:
      "פלטפורמת ה-SaaS המובילה בישראל לניהול רגולציה, יבוא ותקינה. אנחנו הופכים בירוקרטיה ליתרון תחרותי.",
    logoIcon: "shield",
  },
  meta: {
    defaultTitle: "Regulon — Product File Compliance for Israeli Importers",
    defaultDescription:
      "AI-powered Product File and Code 65 readiness for Israeli importers.",
  },
  locale: {
    lang: "he",
    dir: "rtl",
  },
  nav: {
    links: regulonNavLinks,
    primaryCta: { label: "נסה בחינם", href: "/#audit" },
    ariaLabel: "תפריט ראשי",
  },
  footer: {
    tagline:
      "פלטפורמת ה-SaaS המובילה בישראל לניהול רגולציה, יבוא ותקינה. אנחנו הופכים בירוקרטיה ליתרון תחרותי.",
    columns: regulonFooterColumns,
    social: regulonSocial,
    bottom: {
      copyright: "© 2024 Regulon Ltd. כל הזכויות שמורות. תל אביב, ישראל.",
      links: [
        { label: "מדיניות פרטיות", href: "/privacy" },
        { label: "הצהרת נגישות", href: "/accessibility" },
      ],
    },
  },
  skipLinkText: "דלג לתוכן הראשי",
};
