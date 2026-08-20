const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");

/** App paths are intentionally unset until the standalone app supplies them. */
export const appConfig = {
  baseUrl: configuredAppUrl || null,
  paths: { send: null, track: null } as const,
};

export type AppDestination = keyof typeof appConfig.paths;

export function getAppUrl(destination: AppDestination): string | null {
  if (!appConfig.baseUrl) return null;
  const path = appConfig.paths[destination];
  return path ? `${appConfig.baseUrl}${path}` : appConfig.baseUrl;
}
