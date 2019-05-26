export default abstract class Animal {
    name: string;
    sound: string;
    moveAction: string;

    constructor(name: string, sound: string, moveAction: string) {
        this.name = name;
        this.sound = sound;
        this.moveAction = moveAction;
    }

    makeSound() {
        if (this.sound !== "") {
            console.log(`${this.name} face ${this.sound}`);
        } else {
            console.log(`${this.name} nu face niciun sunet`);
        }
    }

    move(distance: number) {
        console.log(`${this.name} ${this.moveAction} ${distance} metri`);
    }
}
