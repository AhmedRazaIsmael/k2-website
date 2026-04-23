import countries from "i18n-iso-countries";
import en from "i18n-iso-countries/langs/en.json";

countries.registerLocale(en);

export function getCountryCode(name: string) {
  const code = countries.getAlpha2Code(name, "en");
  return code ? code.toLowerCase() : "jp"; // fallback
}