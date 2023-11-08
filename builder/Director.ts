import { Builder } from "./Builder";

export class Director {
    builder : Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    // Custom method to build a Ferrari Enzo
    buildFerrariEnzo() {
        this.builder.setModel('Enzo');
        this.builder.setEngine('V12');
        this.builder.paint('Red');
        this.builder.makeCustumization('Racing Package');
    }
}