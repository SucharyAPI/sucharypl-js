import { dajKawal, masakra, wieleKawalow, wieleMasakr } from "./index"
import { expect, test } from "bun:test"

test("dajKawal zwraca pojedynczy żart jako string", async () => {
    const wynik = await dajKawal()
    
    expect(typeof wynik).toBe("string")
    expect(wynik.length).toBeGreaterThan(0)
})

test("dajKawal z kategorialnym filtrem zwraca żart", async () => {
    const wynik = await dajKawal("programowanie")
    
    expect(typeof wynik).toBe("string")
    expect(wynik.length).toBeGreaterThan(0)
})

test("masakra zwraca pojedynczy tekst jako string", async () => {
    const wynik = await masakra()
    
    expect(typeof wynik).toBe("string")
    expect(wynik.length).toBeGreaterThan(0)
})

test("wieleKawalow zwraca określoną liczbę żartów", async () => {
    const wynik = await wieleKawalow(3)
    
    expect(Array.isArray(wynik)).toBe(true)
    expect(wynik.length).toBe(3)
    expect(typeof wynik[0]).toBe("string")
})

test("wieleMasakr zwraca określoną liczbę masakr", async () => {
    const wynik = await wieleMasakr(2)
    
    expect(Array.isArray(wynik)).toBe(true)
    expect(wynik.length).toBe(2)
    expect(typeof wynik[0]).toBe("string")
})