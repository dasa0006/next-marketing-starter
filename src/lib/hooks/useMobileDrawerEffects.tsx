import { RefObject, useEffect } from "react";

interface UseMobileDrawerEffectsOptions {
  isOpen: boolean;
  onClose: () => void;
  panelRef: RefObject<HTMLDivElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
}

const useLockBodyScrollFocus = (
  isOpen: boolean,
  closeButtonRef: RefObject<HTMLButtonElement | null>
) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const id = window.setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => {
        clearTimeout(id);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, closeButtonRef]);
};

const useCloseOnEscape = (isOpen: boolean, onClose: () => void) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);
};

const useFocusTrap = (
  isOpen: boolean,
  panelRef: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (!isOpen) return;
    const panel = panelRef.current;
    if (!panel) return;

    const FOCUSABLE = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.closest("[aria-hidden='true']"));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [isOpen, panelRef]);
};

export function useMobileDrawerEffects({
  isOpen,
  onClose,
  panelRef,
  closeButtonRef,
}: UseMobileDrawerEffectsOptions) {
  // 1. Lock body scroll & auto‑focus close button
  useLockBodyScrollFocus(isOpen, closeButtonRef);
  // 2. Close on Escape
  useCloseOnEscape(isOpen, onClose);
  // 3. Focus trap
  useFocusTrap(isOpen, panelRef);
}
