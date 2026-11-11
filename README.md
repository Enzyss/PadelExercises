# Padel Pre-Partita

Web app con una routine di 12 esercizi da fare a casa prima di una partita di padel.
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
| 10 | Volée di dritto | 2×8 | Preparazione corta, impatto davanti, passo di scarico |
| 11 | Bandeja | 2×6 | Girata, preparazione alta, impatto al lato a braccio disteso, accompagnamento in avanti |
| | **Esplosività** | | |
| 12 | Squat jump | 3×5 | Esplosività |

Volée di dritto e bandeja sono ricostruite fase per fase su due video tutorial di riferimento
(tecnica, errori più comuni e scelte tattiche). Gli angoli di braccia, tronco, bacino e gambe
in ogni fase vengono da una stima della postura 3D sulle ripetizioni del video, corretta sulle
posizioni 2D dei fotogrammi; l'orientamento della racchetta è misurato sui fotogrammi.
Volée di rovescio e vibora arriveranno quando
avranno un loro video di riferimento.

Per entrambi i colpi il pulsante **Campo e palla** mette il manichino su un campo da padel vero
(10 × 20 m, rete, vetri e griglia) e mostra la palla: quella che arriva, l'impatto sulla
racchetta e dove va nell'altro campo, con rimbalzi su pavimento, vetri e griglia. Si sceglie tra
le direzioni consigliate nel video e l'errore da evitare:

- volée di dritto: diagonale profonda, spazio libero, alla griglia, schiaffo al volo, errore (corta);
- bandeja: diagonale verso il vetro di fondo, lungolinea d'attacco, piatta alla griglia, errore
  (vetro laterale per primo, palla al centro).

In campo il colpo si orienta verso la direzione scelta: busto e braccio ruotano finché il piatto,
all'impatto, guarda dove va la palla, e a fine accompagnamento il petto è rivolto verso il
bersaglio. Vale anche per il mancino, che gioca dalla stessa metà del campo.

Le indicazioni tattiche sono riassunte anche nella scheda, sotto **Dove mandarla**.

I colpi sono animati per un destrorso; il pulsante **Mancino** li mostra a specchio. In campo
entrambi stanno nella metà destra: il mancino così ha il dritto verso il centro.

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
- **Racchetta** regolamentare (45 cm, piatto 26 cm, cuore aperto) impugnata in continental: il
  manico attraversa il palmo in diagonale, la V tra pollice e indice sullo spigolo superiore,
  indice un po' staccato, mignolo vicino al tappo, ogni dito appoggiato sul manico. In attesa
  l'altra mano tiene il cuore. L'orientamento della racchetta deriva da prono-supinazione e
  angoli del polso, sempre entro i limiti anatomici. Il pulsante **Impugnatura** segue la mano
  da vicino durante tutto il colpo.

`npm run verify` controlla 72 fotogrammi per esercizio (e per lato): corpo mai sotto il
pavimento, piedi a terra che non si staccano né scivolano, ginocchia e gomiti entro i
limiti anatomici, prono-supinazione e polso entro i loro range, nessuna compenetrazione
tra braccia, busto, gambe e racchetta (tutto il bordo del piatto, non solo il manico).

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
