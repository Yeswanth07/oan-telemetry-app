/**
 * Runtime configuration for the application
 * Values are loaded from window.__APP_CONFIG__ at runtime (injected at container startup)
 * Fallbacks are provided for local development
 */

// Type for runtime config
declare global {
  interface Window {
    __APP_CONFIG__?: {
      KEYCLOAK_URL?: string;
      KEYCLOAK_REALM?: string;
      KEYCLOAK_CLIENT_ID?: string;
      API_SERVER_URL?: string;
      WATCHTOWER_BASE_URL?: string;
      WATCHTOWER_JWT?: string;
    };
  }
}

// Get runtime config with fallbacks
const getConfig = () => window.__APP_CONFIG__ || {};

// Keycloak Configuration
export const KEYCLOAK_CONFIG = {
  url: getConfig().KEYCLOAK_URL || import.meta.env.VITE_KEYCLOAK_URL || "",
  realm: getConfig().KEYCLOAK_REALM || import.meta.env.VITE_KEYCLOAK_REALM || "",
  clientId: getConfig().KEYCLOAK_CLIENT_ID || import.meta.env.VITE_KEYCLOAK_CLIENT_ID || "",
};

// API Configuration
export const API_CONFIG = {
  SERVER_URL: getConfig().API_SERVER_URL || import.meta.env.VITE_API_SERVER_URL || "",
};

// Watchtower Status API Configuration
export const WATCHTOWER_CONFIG = {
  BASE_URL: getConfig().WATCHTOWER_BASE_URL || import.meta.env.VITE_WATCHTOWER_BASE_URL || "",
  JWT_TOKEN: getConfig().WATCHTOWER_JWT || import.meta.env.VITE_WATCHTOWER_JWT || "",
};
