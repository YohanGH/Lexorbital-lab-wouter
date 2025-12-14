/**
 * Extensions de types pour Wouter
 * aroundNav peut ne pas être dans les types officiels mais est disponible dans le runtime
 */
import "wouter";

declare module "wouter" {
  interface RouterOptions {
    aroundNav?: (
      navigate: (
        to: string,
        options?: { replace?: boolean; state?: unknown }
      ) => void,
      to: string,
      options?: { replace?: boolean; state?: unknown }
    ) => void;
  }
}
