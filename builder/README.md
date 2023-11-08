# Builder Design Pattern with TypeScript

This project demonstrates the Builder design pattern implemented in TypeScript. It includes the following files:

- `Builder.ts`: Defines the `Builder` class, which constructs a `Car` step by step. The `Builder` class has methods for setting the car's model, engine, color, and customization options. It creates a `Car` object with these parameters and returns it when the construction is complete.

- `Car.ts`: Defines the `Car` class, which represents the product to be constructed. It contains attributes for the car's model, color, engine, and optional customization. The `drive()` method allows you to simulate driving the car, displaying its characteristics.

- `Director.ts`: The `Director` class orchestrates the construction of a car. It has a reference to a `Builder` and provides custom methods to build specific car models. For example, `buildFerrariEnzo()` configures the builder to construct a Ferrari Enzo.

- `IBuilder.ts`: Defines the `IBuilder` interface, specifying the methods required for building a car. These methods include setting the model, color, engine, and customization options.

- `ICar.ts`: Defines the `ICar` interface, representing the structure of a car. It includes attributes for the car's model, color, engine, optional customization, and a `drive()` method to simulate driving the car.

- `main.ts`: The main entry point demonstrates the use of the Builder pattern. It creates two cars, an F430, and an Enzo, showing how to use the `Builder` and `Director` to construct and drive them.

- `builder-pattern-uml.png`: A UML class diagram illustrating the relationships between the classes. The `Builder` creates a `Car`, and the `Director` guides the construction process.

## Installation

Before running the project, make sure you have Node.js and TypeScript installed. You can install TypeScript globally using the following command:

```bash
npm install -g typescript
```


1. Clone the project
2. Install and then build the project

```bash
npm install
npm run build
```

## Usage
To run the project and see the Builder design pattern in action, use the following command:

```bash
npm run go
```

This will build and execute the TypeScript code, creating two different cars (F430 and Enzo) and demonstrating how the Builder pattern works.

**UML Diagram**
You can find a UML class diagram (uml.png) in the project directory. This diagram illustrates the associations and relationships between the classes in the Builder pattern.

![Alt text](uml.png)

**Structure**
- src/: Contains the TypeScript source files.
- dist/: Will contain the compiled JavaScript files.

**Sources**
- refactoring.guru: https://refactoring.guru/design-patterns/builder/typescript/example
- sbcode: https://sbcode.net/typescript/builder/













