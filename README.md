# HDMarkting IT marketing gyakornok tesztfeladat
- [HDMarkting IT marketing gyakornok tesztfeladat](#hdmarkting-it-marketing-gyakornok-tesztfeladat)
  - [Feladat](#feladat)
    - [Első rész](#első-rész)
    - [Második rész](#második-rész)
    - [Harmadik rész](#harmadik-rész)
  - [*Telepítés* segédlet](#telepítés-segédlet)
    - [Js](#js)
    - [Ts](#ts)
    - [Py](#py)
  - [Hogyan kezdj neki a feladatnak?](#hogyan-kezdj-neki-a-feladatnak)
## Feladat
### Első rész  
*Ezt a feladatrészt elvégezheted Javascript vagy Typescript nyelven, TSnek jobban örülünk😁*


### Második rész
*Ezt a feladatrészt Pythonban írd meg*
+ töltsd be egy Dataframe-be [ezt](https://drive.google.com/file/d/142PVlvnQopODcgcdWjjIMVgtKhKGS7xg/view?usp=sharing) a csv-t
+ a **link** oszlopban minden elem esetén a `'?utm_source=google_shopping...'` string rész utáni részt töröld és helyette annyit hagyj, hogy `'?utm_source=hd-test'`
+ dobd el azokat a sorokat, amelyek a **description** oszlopban tartalmazzák a `mosópisztoly` szócskát
+ a **description** oszlopban a legtöbb helyen össze van csúszva a szöveg.   
  pl.: `Magasság: 80  cmSúly: 350 gSzivacsos nyélTeleszkópos`  
  A feladat ezeket elválasztani egy tabulátorral.
+ írj meg azt a kódrészletet, amely által ezt a dataframe-t fel tudod tolni egy általad tesztőlegesen kiválasztott adatbázisba.  
+ sqldumb által vagy kézzel másold be a tábla sql kódját
### Harmadik rész
*Ezt a feladatrészt elvégezheted Javascript vagy Typescript nyelven*

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
