"use client";

import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import { type ConsentStatus, type ConsentStorage, createCookieStorage } from "./storage";

interface ConsentContextValue {
  status: ConsentStatus;
  accept: () => void;
  decline: () => void;
  reset: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

interface ConsentProviderProps {
  children: ReactNode;
  storage?: ConsentStorage;
}

export function ConsentProvider({ children, storage: storageProp }: ConsentProviderProps) {
  const storage = useMemo(() => storageProp ?? createCookieStorage(), [storageProp]);
  const [status, setStatus] = useState<ConsentStatus>(() => storage.get());

  const accept = useCallback(() => {
    storage.set("accepted");
    setStatus("accepted");
  }, [storage]);

  const decline = useCallback(() => {
    storage.set("declined");
    setStatus("declined");
  }, [storage]);

  const reset = useCallback(() => {
    storage.clear();
    setStatus(null);
  }, [storage]);

  return (
    <ConsentContext.Provider value={{ status, accept, decline, reset }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within <ConsentProvider>");
  }
  return ctx;
}
