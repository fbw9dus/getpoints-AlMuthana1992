# get points

Unser erstes Express-Projekt, für das automatisch Punkte vergeben Werden.

- Punkte werden nur dann vergeben, wenn nach dem **push** der automatische Test erfolgreich läuft
- Für jede Aufgabe gibt es eine Abgabefrist. Wenn ein push nach der Uhrzeit der Frist gemacht wird, gibt es dafür keine Punkte
- Die automatischen Tests können auch direkt auf dem Computer ausgeführt werden, bevor man pusht: `npm test`

## 1. Aufgabe
- Erstell eine einfache Express-App mit express-generator
- Bevor du die Abhängigkeiten installierst, füg in der `package.json` die Abhängigkeiten für automatische Tests hinzu:
```json
"devDependencies": {
    "@babel/core": "*",
    "@babel/preset-env": "*",
    "babel-jest": "*",
    "jest": "*",
    "supertest": "^4.0.2"
}
```
und das Skript um tests auszuführen:
```json
"scripts": {
    ...
    "test": "jest --runInBand"
}
```

**Anforderungen (Punkte):**
1. `app.js` muss die `app`(express) exportieren
1. Unter `/` kommt eine Antwort mit Status 200 (Der Server funktioniert) (**2**)
2. Unter `/api` kommt als Antwort das JSON `[{user: 'fake', password: 'fake'}]` (**3**)
