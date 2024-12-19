import "server-only"
export enum LocalEnum {
  en = "en",
  de = "de",
}
const dictionaries = {
  en: () => import("dictionaries/en.json").then((module) => module.default),
  de: () => import("dictionaries/de.json").then((module) => module.default),
}

// export const getDictionary = async (locale: LocalEnum) => dictionaries[locale]()
export const getDictionary = async (locale: LocalEnum) => {
  const loadDictionary = dictionaries[locale]

  if (typeof loadDictionary !== "function") {
    throw new Error(`No dictionary found for locale: ${locale}`)
  }

  return loadDictionary() // Call the function only if it exists
}
