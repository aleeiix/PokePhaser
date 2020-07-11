export class EntityBase {
    readonly position: {x: number, y: number};

    constructor() {
        this.position = {
            x: 0,
            y: 0
        }
    }

    setPosition(x: number, y: number) {
        this.position.x = x;
        this.position.y = y;
    }

}