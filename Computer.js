class Computer {
    constructor(brand, OS, type) {
        this.brand = brand
        this.OS = OS    
        this.type = type
    }

    powerOn() {
        return `${this.brand} ${this.type} powers on with ${this.OS}`
    }
    
    static arr(array) {
        powerOn(array)
    }
}

let mac = new Computer('Apple', 'Mac', 'desktop')
let windows = new Computer('Microsoft', 'Windows', 'laptop')
