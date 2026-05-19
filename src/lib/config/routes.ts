export const LEGAL_ROUTES = {
  PRIVACY: "/privacy",
  TERMS: "/terms",
  COOKIE_POLICY: "/cookie-policy",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  ...LEGAL_ROUTES,
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];
