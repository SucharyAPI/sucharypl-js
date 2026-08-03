// Typ zwracanego kawału
interface Zart {
    id: number,
    tresc: string,
    kategoria: string
};

// Typ kategorii
type Kategoria = null | "programowanie" | "dwuznaczne" | "szkolne" | "suchary" | "wulgarne" | "czarnyhumor" | "inne";

// Custom errory
class SucharyError extends Error {
    constructor(tresc: string) {
        super(tresc);
        this.name = "SucharyError"
    }
}

class HTTPError extends SucharyError {
    status: number;
    constructor(status: number, tresc: string) {
        super(tresc);
        this.name = "HTTPError";
        this.status = status;
    }
}

class TimeoutError extends SucharyError {
    constructor(tresc: string = "Zapytanie przekroczyło limit czasu") {
        super(tresc);
        this.name = "TimeoutError";
    }
}

class ConnectionError extends SucharyError {
    constructor(tresc: string) {
        super(tresc);
        this.name = "ConnectionError";
    }
}

// Główna funkcja async
async function dajKawal(kategoria: Kategoria = null): Promise<string> {
    let adres: string = "https://sucharyapi.onrender.com";
    if (kategoria !== null) {
        adres = `https://sucharyapi.onrender.com/${kategoria}`
    }

    const kontrolerCzasu = new AbortController();
    const timeoutId = setTimeout(() => kontrolerCzasu.abort(), 6500)

    try {
        const odpowiedz = await fetch(adres, {signal: kontrolerCzasu.signal});
        clearTimeout(timeoutId);

        if (!odpowiedz.ok){
            throw new HTTPError(odpowiedz.status, `Serwer zwrócił kod błędu ${odpowiedz.status}: ${odpowiedz.statusText}`)
        }
        const dane = await odpowiedz.json() as Zart;
        return dane.tresc
    } catch (error: any) {
        clearTimeout(timeoutId);
        if (error.name === "AbortError") {
            throw new TimeoutError()
        }
        if (error instanceof HTTPError) {
            throw error;
        }
        throw new ConnectionError(error.message || "Błąd połączenia z serwerem")
    }
}

export { dajKawal, SucharyError, HTTPError, TimeoutError, ConnectionError };
export type { Kategoria };