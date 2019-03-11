class House {
    constructor(b){
        this.window = b.window
        this.no_doors = b.no_doors
        this.room = b.room
    }
    static get Builder() {
        class Builder{
            constructor() {
             }
             buidWindow(w) {
                this.window = w;
                return this;
             }
             buidDoors(d) {
                this.no_doors = d;
                return this;
             }
        
             buidRooms(r) {
                this.room = r;
                return this;
             }
        
             build() {
                return new House(this);
             }
        }
        return Builder;
    }
}




module.exports = {House}