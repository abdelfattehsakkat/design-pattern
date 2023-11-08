import { Builder } from "./Builder";
import { Director } from "./Director";

// 1 - Build F430
const builderF430 = new Builder();
builderF430.setModel('F-430');
builderF430.setEngine('V8');
builderF430.paint('Red');
const f430 = builderF430.deliver();

// 2 - Build Enzo using a director
const builderEnzo = new Builder();
const director = new Director(builderEnzo)
director.buildFerrariEnzo();
const enzo = builderEnzo.deliver();

// Start Driving!!
f430.drive();
enzo.drive();