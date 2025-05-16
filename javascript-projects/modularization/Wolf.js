class Wolf {
    constructor(){
        this.strength = Math.floor(Math.random() * 100)
    }

    growl(){
        console.log("AUUUUUUUU");
    }
}

module.exports = Wolf