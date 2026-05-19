export type ConsentStatus = "accepted" | "declined" | null;

export interface ConsentStorage {
  get: () => ConsentStatus;
  set: (status: "accepted" | "declined") => void;
  clear: () => void;
}

export function createCookieStorage(): ConsentStorage {
  const CONSENT_KEY = "cookie-consent";
  const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

  return {
    get: () => {
      if (typeof window === "undefined") return null;
      const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${CONSENT_KEY}=`));
      const val = match?.split("=")[1];
      if (val === "accepted" || val === "declined") return val;
      return null;
    },
    set: (status) => {
      document.cookie = [
        `${CONSENT_KEY}=${status}`,
        `max-age=${CONSENT_MAX_AGE_SECONDS}`,
        "path=/",
        "SameSite=Lax",
        process.env.NODE_ENV === "production" ? "Secure" : "",
      ]
        .filter(Boolean)
        .join("; ");
    },
    clear: () => {
      document.cookie = `${CONSENT_KEY}=; max-age=0; path=/`;
    },
  };
}

export function createFakeStorage(initial: ConsentStatus = null): ConsentStorage {
  let value = initial;
  return {
    get: () => value,
    set: (s) => {
      value = s;
    },
    clear: () => {
      value = null;
    },
  };
}
