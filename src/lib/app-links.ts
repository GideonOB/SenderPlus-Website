const configuredAppUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");

/** Operational actions are handled by the standalone Sender+ app. */
export const appConfig = {
  baseUrl: configuredAppUrl || null,
  paths: { send: "/submit", track: "/track" } as const,
};

export type AppDestination = keyof typeof appConfig.paths;

export function getAppUrl(destination: AppDestination): string {
  if (!appConfig.baseUrl) {
    throw new Error("NEXT_PUBLIC_APP_URL is required. Set it to the standalone Sender+ app's base URL before running or building the marketing website.");
  }

  try {
    const baseUrl = new URL(appConfig.baseUrl);
    if (!["http:", "https:"].includes(baseUrl.protocol) || baseUrl.search || baseUrl.hash) {
      throw new Error("Invalid app base URL");
    }
  } catch {
    throw new Error("NEXT_PUBLIC_APP_URL must be an absolute HTTP(S) base URL without a query string or fragment.");
  }

  return `${appConfig.baseUrl}${appConfig.paths[destination]}`;
}
