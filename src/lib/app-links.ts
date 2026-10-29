const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");

/** Operational actions are handled by the standalone Sender+ app. */
export const appConfig = {
  baseUrl: configuredAppUrl || null,
  paths: { send: "/submit", track: "/track" } as const,
};

export type AppDestination = keyof typeof appConfig.paths;

export function getAppUrl(destination: AppDestination): string | null {
  if (!appConfig.baseUrl) return null;
  const path = appConfig.paths[destination];
  return path ? `${appConfig.baseUrl}${path}` : appConfig.baseUrl;
}
