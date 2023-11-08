
import { ICar } from './ICar';
export class Car implements ICar {
    constructor() {
        
    }
    model: string | undefined;
    color: string | undefined;
    engine: string| undefined;
    custumization?: string | undefined;

    drive (): void {
        console.log(`Vrooom!!! This is a ${this.model} car, color: ${this.color}, engine: ${this.engine}`);
        if (this.custumization) console.log(`   With options: ${this.custumization} `);
    }
}