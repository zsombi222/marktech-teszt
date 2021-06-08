# HDMarkting IT marketing gyakornok tesztfeladat
- [HDMarkting IT marketing gyakornok tesztfeladat](#hdmarkting-it-marketing-gyakornok-tesztfeladat)
  - [Feladat](#feladat)
    - [Első rész](#első-rész)
    - [Második rész](#második-rész)
    - [Harmadik rész *Opcionális*](#harmadik-rész-opcionális)
  - [*Telepítés* segédlet](#telepítés-segédlet)
    - [Js](#js)
    - [Ts](#ts)
    - [Py](#py)
  - [Hogyan kezdj neki a feladatnak?](#hogyan-kezdj-neki-a-feladatnak)
## Feladat
### Első rész  
*Ezt a feladatrészt elvégezheted Javascript vagy Typescript nyelven, TSnek jobban örülünk😁*  
Készíts egy mini kriptovaluta szimulátort!
+ Használj [egy a API-t a listából](https://github.com/public-apis/public-apis#cryptocurrency) (vagy választhatsz neked tetszőt máshonnan is)
+ Elég lesz ezeket az adatokat kinyerni (*name, symbol, price(USD)*)  
Ha netán euroban kapnád meg az értéket, egyáltalán nem probléma.
+ Elég 3-5 valutát használni
+ Készíts egy Cryptocurrency osztályt, aminek az említett három adattagja és egy általad tetszőleges formátumú stringet return-ölő toString() metódusa legyen.
+ Bitcoin esetén legyen egy *difficulty* adattag is, aminek az értéke mindig `0.5`
+ Legyen egy szimulátor osztályod, ami másodpercenként változtatja a kriptovaluták értékét *(price)* random mértékkel, de nem többel mint a jelenlegi érték 10%-a!
+ A szimulátort maximum 10mp-ig futtasd.
+ Bitcoin esetén ez annyiban változik, hogy a random érték még megszorzódik a nehézséggel *(difficulty)*
+ **A megvalósítás egyéb részleteit rád bízom.**



### Második rész
*Ezt a feladatrészt Pythonban írd meg*
+ töltsd be egy Dataframe-be [ezt](https://drive.google.com/uc?export=download&id=142PVlvnQopODcgcdWjjIMVgtKhKGS7xg) a csv-t
+ a **link** oszlopban minden elem esetén a `'?utm_source=google_shopping...'` string rész utáni részt töröld és helyette annyit hagyj, hogy `'?utm_source=hd-test'`
+ dobd el azokat a sorokat, amelyek a **description** oszlopban tartalmazzák a `mosópisztoly` szócskát
+ a **description** oszlopban a legtöbb helyen össze van csúszva a szöveg.   
  pl.: `Magasság: 80  cmSúly: 350 gSzivacsos nyélTeleszkópos`  
  A feladat ezeket elválasztani egy tabulátorral.
+ írj meg azt a kódrészletet, amely által ezt a dataframe-t fel tudod tolni egy általad tesztőlegesen kiválasztott adatbázisba.  
+ sqldumb által vagy kézzel másold be a tábla sql kódját
+ **Opcionális feladat**, a megadott adatforrást ne lementett fájlból, hanem http lekérés által olvasd
### Harmadik rész *Opcionális*
*Ezt a feladatrészt elvégezheted Javascript vagy Typescript nyelven*
+ Menj fel a [socialblade](https://socialblade.com/) oldalra.
+ Válassz ki egy interneten népszerű tetszőleges személyt, akinek van instagram, twitch és youtube csatornája.  
pl. WeAreTheVr
+ Írd fel az említett 3 platformhoz tartozó felhasználónevüket
+ Készíts egy *Influencer* osztályt, legyen 4 adattagja:
  + név
  + instagram felhasználónév
  + twitch felhasználónév
  + youtube felhasználónév  
+ A megvalósításhoz használj [Puppeteer](https://github.com/puppeteer/puppeteer)-t!
A feladatod az lesz, hogy kiscrapeld ezeket az adatokat az oldalról.  
+ Adatok, amiket ki kell majd írnia:
  + ig followers rank
  + yt subscribers
  + twitch followers rank

Segítség:  
+ a socialbladenek csak fizetős apija van, így azt felesleges keresni.
+ socialblade-n az adott platformhoz tartozó adatlapoknak adott url sémájuk van
+ css selectorokat használj puppeteernél

## *Telepítés* segédlet
Természetesen ha magadtól is el tudod végezni, akkor skippelheted. 
### Js
Ebben az esetben nem igazán láttam értelmét a felsetupolásnak. Elég egy egyszerű `npm init -y` a `/js` mappában, illetve `node <fájlnév>` a futtatáshoz
### Ts
`package.json` és `tsconfig.json` már van a `/ts` mappában. Fork/clone után érdemes majd feltelepíteni a függőségeket `npm i` paranccsal. Buildeléshez használthatod az `npm run build` parancsot, build+futtatáshoz az `npm run start` parancsot.
### Py
`/py` mappában `source env/bin/active` a venv *'aktiválásához'*. Ezután mehet a `python3 <fájlnév>`

## Hogyan kezdj neki a feladatnak?
Forkold ezt a repo-t, majd a kész munkád (repo) linkjét küldd el nekünk.
