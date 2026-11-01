// Настройки на продажбата. Докато Google Play плащането не е включено, ENFORCE е изключено,
// за да не заключваме никого, който няма как да плати.
export const CONFIG = {
  ENFORCE: false, // сложи true едва когато плащането през Google Play работи
  trialDays: 14,
  freeLevels: ['A1'],
  prices: { monthly: '5,99 €', yearly: '39,99 €', lifetime: '79,99 €' },
};

const TEST_KEY = 'finapp.testPaywall';

export function paywallOn() {
  if (CONFIG.ENFORCE) return true;
  try { return localStorage.getItem(TEST_KEY) === '1'; } catch (e) { return false; }
}

export function setTestPaywall(on) {
  try { if (on) localStorage.setItem(TEST_KEY, '1'); else localStorage.removeItem(TEST_KEY); } catch (e) { /* няма хранилище */ }
}
