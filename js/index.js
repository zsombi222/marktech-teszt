const axios = require('axios')

class CryptoCurrency {
    symbol
    price

    constructor(id) {
        this.name = id
    }

    async getData() {
        try {
            const response = await axios.get(`https://api.coincap.io/v2/rates/${this.name}`)
            this.symbol = response.data.data.symbol
            this.price = parseFloat(response.data.data.rateUsd)

        } catch (error) {
            console.log(error)
        }

    }

    toString() {
        return `${this.name} (${this.symbol}): ${this.price} USD`
    }
}

class Bitcoin extends CryptoCurrency {
    constructor(id) {
        super(id);
        this.difficulty = 0.5
    }

    toString() {
        return `${this.name} (${this.symbol}): ${this.price} USD | diff: ${this.difficulty}`
    }
}


const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

class Simulator {
    async changeValue(...cryptos) {
        for (let i = 0; i < 10; i++) {
            await delay(1000)
            console.log(i)            
            cryptos.forEach(c => {
                //10% value changing
                c.price += parseFloat(Math.random() * (-c.price/5) + c.price/10)
                console.log(c.toString())
                console.log()
            });            
        }
    }
}

async function main(){
    let bitcoin = new Bitcoin("bitcoin");
    let ethereum = new CryptoCurrency("ethereum");
    let eos = new CryptoCurrency("eos");

    await bitcoin.getData();
    await ethereum.getData();
    await eos.getData();

    let sim = new Simulator();

    await sim.changeValue(bitcoin,ethereum,eos)
}

main()
