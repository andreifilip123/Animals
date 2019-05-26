import Animal from "./Animal";
import Dog from "./Dog";
import Fish from "./Fish";
import Snake from "./Snake";

export const main = () => {
    const AnimalArray: Array<Animal> = [];
    AnimalArray.push(new Dog("Rex"));
    AnimalArray.push(new Fish("Nebunul"));
    AnimalArray.push(new Snake("Kaa"));

    AnimalArray.forEach(animal => {
        animal.move(5);
        animal.makeSound();
    });
}

main();

