import { Car } from "./Car";
import { IBuilder } from "./IBuilder";

export class Builder implements IBuilder {
    private _car: Car = new Car();

    setModel(model: string): void {
        this._car.model = model;
    }

    setEngine(reference: string): void {
        this._car.engine = reference;
    }

    paint(color: string): void {
        this._car.color = color;
    }

    makeCustumization(options: string): void {
        this._car.custumization = options;
    }

    deliver() : Car {
        return this._car;
    }

}
