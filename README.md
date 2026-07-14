# SucharyPL - oficjalna biblioteka bazy SucharyAPI
Biblioteka JavaScript do pobierania kawałów z ogólnopolskiej bazy SucharyAPI

[![Node Version](https://img.shields.io/badge/node-16%2B-green)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/sucharypl)](https://www.npmjs.com/package/sucharypl)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## 🚀 Instalacja
### Za pomocą npm
```bash
npm install sucharypl
```

### Za pomocą bun
```bash
bun add sucharypl
```

---

## ⚡ Szybki start
### Pobranie losowego suchara
```javascript
import { dajKawal } from 'sucharypl';

// Pobierz losowy suchar z dowolnej kategorii
const suchar = await dajKawal();
console.log(suchar);
```

### Pobranie suchara z konkretnej kategorii
```javascript
import { dajKawal } from 'sucharypl';

// Pobierz suchar z kategorii "programowanie"
const suchar = await dajKawal({ kategoria: "programowanie" });
console.log(suchar);
```

---

## Kategorie
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