# SucharyJS - oficjalna biblioteka bazy SucharyAPI
Biblioteka JavaScript do pobierania kawałów z ogólnopolskiej bazy SucharyAPI

[![Node Version](https://img.shields.io/badge/node-16%2B-green)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/sucharyjs)](https://www.npmjs.com/package/sucharyjs)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 🚀 Instalacja
### Za pomocą npm
```bash
npm install sucharyjs
```

### Za pomocą bun
```bash
bun add sucharyjs
```

---

## ⚡ Suchary
### Pobranie losowego suchara
```javascript
import { dajKawal } from 'sucharyjs';

// Pobierz losowy suchar z dowolnej kategorii
const suchar = await dajKawal();
console.log(suchar);
```

### Pobranie suchara z konkretnej kategorii
```javascript
import { dajKawal } from 'sucharyjs';

// Pobierz suchar z kategorii "programowanie"
const suchar = await dajKawal({ kategoria: "programowanie" });
console.log(suchar);
```

### Pobranie więcej liczby sucharów
```javascript
import { wieleKawalow } from 'sucharyjs';

// Pobierz 3 suchary
const suchary = await wieleKawalow(3);
console.log(suchary);

// Funkcja wieleKawalow() zwraca listę (array []) z żartami
```

---

## Masakry
### Pobranie masakry
```javascript
import { masakra } from 'sucharyjs';

// Pobierz masakrę
const masakra = await masakra();
console.log(masakra);
```

### Pobranie więcej liczby masakr
```javascript
import { wieleMasakr } from 'sucharyjs';

// Pobierz 3 masakry
const masakry = await wieleMasakr(3);
console.log(masakry);

// Funkcja wieleMasakr() zwraca listę (array []) z masakrami
```

---

## Kategorie sucharów
- `"programowanie"` - Suchary o programowaniu
- `"dwuznaczne"` - Suchary dwuznaczne
- `"szkolne"` - Suchary szkolne
- `"suchary"` - Ogólne suchary
- `"wulgarne"` - Suchary wulgarne
- `"czarnyhumor"` - Czarny humor
- `"inne"` - Inne kategorie

---

## 🛡️ Obsługa błędów
Biblioteka rzuca sformalizowane wyjątki, które możesz łatwo obsługiwać:
### Dostępne wyjątki
- `SucharyError` - Bazowy wyjątek, rodzic wszystkich błędów z biblioteki
- `HTTPError` - Błędy serwera (np. 404 dla nieistniejącej kategorii)
- `TimeoutError` - Żądanie przekroczyło limit czasu (6.5s)
- `ConnectionError` - Problemy z połączeniem (brak internetu)

---

## 📡 API
Biblioteka jest produktem oraz korzysta z oficjalnej bazy SucharyAPI:  
🔗 [https://sucharyapi.onrender.com](https://sucharyapi.onrender.com)

---

## 📝 Licencja
MIT