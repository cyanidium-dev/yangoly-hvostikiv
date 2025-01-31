import { dictionaries } from "../utils/getDictionary";

export * from "./dictionary.types";
export type Locale = keyof typeof dictionaries;
export type ButtonVariant = "primary" | "secondary";
