import { MouseEvent, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export type TrackingMeta = Record<
  string,
  string | number | boolean | undefined
>;

export type TrackFn = (event: string, meta?: TrackingMeta) => void;

interface UseButtonTrackingOptions {
  event?: string;
  meta?: TrackingMeta;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  track?: TrackFn;
}

interface UseButtonTrackingReturn {
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

// ─── Default Adapter ─────────────────────────────────────────────────────────
// Swap this out for Segment, Mixpanel, PostHog, etc. at the app boundary
// by calling `configureTracking` once at startup.

let _track: TrackFn = (event, meta) => {
  if (process.env.NODE_ENV === "development") {
    console.debug("[tracking]", event, meta ?? {});
  }
};

/**
 * Override the default no-op tracking adapter.
 *
 * Call this once at app startup (e.g. in `app/layout.tsx`) before any
 * Button renders.
 *
 * @example
 * // With Segment:
 * configureTracking((event, meta) => window.analytics.track(event, meta));
 *
 * // With PostHog:
 * configureTracking((event, meta) => posthog.capture(event, meta));
 */
export function configureTracking(fn: TrackFn): void {
  _track = fn;
}

// ─── Hook ────────────────────────────────────────────────────────────────────

/**
 * Wraps a button's onClick with an optional analytics tracking call.
 *
 * Keeps the Button component decoupled from any specific analytics library.
 * The tracking call fires *before* the consumer's onClick so that network
 * failures in the consumer don't silently swallow events.
 */
export function useButtonTracking({
  event,
  meta,
  onClick,
  track: trackFn,
}: UseButtonTrackingOptions): UseButtonTrackingReturn {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const fn = trackFn ?? _track;
      if (event) {
        fn(event, meta);
      }
      onClick?.(e);
    },
    [event, meta, onClick, trackFn]
  );

  return { handleClick };
}
