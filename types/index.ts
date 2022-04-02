export interface CookieAttributes {
  name: string;
  value: string;
  path?: string;
  domain?: string;
  expires?: number | Date;
  sameSite?: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
  secure?: boolean;
  options?: object;
}
