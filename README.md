# Padel Pre-Partita

Web app con una routine di 11 esercizi da fare a casa prima di una partita di padel.
Ogni esercizio è animato su un manichino 3D con i muscoli coinvolti evidenziati
(rosso = principali, giallo = secondari), con serie, ripetizioni, ritmo, istruzioni
ed errori da evitare. La modalità **Inizia routine** conta le ripetizioni, gestisce
recuperi e cambi di lato e passa da sola all'esercizio successivo.

Serve solo **un elastico** (più una sedia e un tappetino) e, per i colpi, la tua racchetta.

| # | Esercizio | Dose | Obiettivo |
|---|---|---|---|
| | **Attivazione e prevenzione** | | |
| 1 | Rotazione esterna con elastico | 2×12 | Cuffia dei rotatori, spalla stabile nei colpi alti |
| 2 | Pull-apart con elastico | 2×12 | Muscoli tra le scapole, deltoide posteriore |
| 3 | Estensione del polso con elastico sotto il piede | 2×10 per braccio | Prevenzione dell'epicondilite |
| 4 | Sollevamenti sui polpacci | 2×12 | Polpacci e tendine d'Achille |
| 5 | Ponte glutei | 2×12 | Attivazione dei glutei |
| 6 | Affondo laterale alternato | 2×8 per lato | Adduttori, spostamenti laterali |
| 7 | Affondo con rotazione del busto | 2×6 per lato | Gambe + rotazione del tronco |
| 8 | Dead bug | 2×8 per lato | Stabilità del core |
| 9 | Diagonale con elastico sotto il piede | 2×8 per lato | Rotazione dal basso verso l'alto |
| | **Colpi a vuoto (con la racchetta)** | | |
| 10 | Bandeja | 2×6 | Girata, preparazione alta, impatto davanti, accompagnamento a sinistra |
| | **Esplosività** | | |
| 11 | Squat jump | 3×5 | Esplosività |

La bandeja è ricostruita fase per fase su un video tutorial di riferimento. Volée e vibora
sono state tolte finché non avranno un loro video di riferimento.

I colpi sono animati per un destrorso; il pulsante **Mancino** li mostra a specchio.

## Come funzionano le animazioni

Le animazioni non sono video: ogni ripetizione è descritta in termini anatomici
(`src/exercises.js`) e risolta in tempo reale sullo scheletro del manichino (`src/rig.js`):

- **Gambe** con cinematica inversa a due segmenti: i piedi restano agganciati al
  pavimento, il ginocchio si piega solo nel suo piano e segue la punta del piede.
- **Piedi** che ruotano sull'avampiede (sollevamenti, rotazioni, spinta del piede dietro).
- **Braccia** ad angoli articolari (flessione, abduzione, rotazione della spalla,
  gomito, prono-supinazione) oppure con cinematica inversa quando le mani devono
  raggiungere un punto preciso (coscia, elastico, mani unite).
- **Colonna** distribuita su tre vertebre, collo e testa separati.
- **Racchetta** impugnata in continental: il manico attraversa il palmo in diagonale e
  l'orientamento della racchetta deriva da prono-supinazione e angoli del polso, sempre
  entro i limiti anatomici.

`npm run verify` controlla 72 fotogrammi per esercizio (e per lato): corpo mai sotto il
pavimento, piedi a terra che non si staccano né scivolano, ginocchia e gomiti entro i
limiti anatomici, prono-supinazione e polso entro i loro range, nessuna compenetrazione
tra braccia, busto, gambe e racchetta.

## Sviluppo

```bash
npm install
npm run build    # crea dist/ (index.html, app.js, Xbot.glb)
npm run serve    # http://localhost:8124
npm run verify   # controlli biomeccanici (con il server avviato)
```

`dist/` è un sito statico: si può pubblicare così com'è, ad esempio con GitHub Pages.

Il manichino è `Xbot.glb`, preso dagli esempi di [three.js](https://github.com/mrdoob/three.js)
(personaggio Mixamo).

> Gli esercizi sono indicazioni generali di riscaldamento. In caso di dolore o infortuni
> fatti seguire da un fisioterapista.
