const DefaultMainDomain = 'firstorder.ai';
const DefaultHomeAddress =
  typeof window !== 'undefined' ? window?.location?.origin : 'https://' + DefaultMainDomain;

export { DefaultMainDomain, DefaultHomeAddress };
