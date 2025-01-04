# Dummies Factory

## Concept

**Have you ever tried to build a UI or test some functions for your app but struggled to create the "dummy array" to test your workflow before releasing?**

Well, worry no more about that, our tool will generate these dummy objects for you using your specifications to match its use-cases in your project and to prevent any mismatches among your data while testing.

## Pre-Requirements

You only need a node environment to use this tool.

> If you're using React or Next JS, you can use this derived tool that provide you with client-side handlers to help you test faster and prevent common errors: [react-dummies-factory](https://www.npmjs.com/package/@kaiserleap/react-dummies-factory?activeTab=readme)

## Usage

Using this tool is a peace of cake, just follow these steps in your node environment:

### Install the package:

    `npm i @kaiserleap/dummies-factory`

### Import the class:

- Using the import statement: `import { DummiesFactory } from "@kaiserleap/dummies-factory";`

- Using the require statement: `const { DummiesFactory } = require("@kaiserleap/dummies-factory");`

### Create an array of objects

Let's say we want to create an array of employees with their basic info:

```
const factory = new DummiesFactory({
    arrayLength: 5,
    shape: {
        type: "object",
        properties: {
            id: { type: "string", theme: "uuid" },
            name: { type: "string", theme: "american-names" },
            age: { type: "number", min: 15, max: 60 },
            salary: {
                type: "number",
                numericType: "decimal",
                decimalPlaces: 2,
                min: 200,
                max: 1000,
            },
            address: {
                type: "object",
                properties: {
                    country: { type: "string", theme: "country" },
                    place: { type: "string", theme: "place" },
                    line1: { type: "string" },
                    line2: { type: "string" },
                },
            },
        },
    },
});

const employees = factory.getArray();
```

### Result

```
[
    {
        "id": "e5054edc-4e46-414c-8463-3e1c226bd884",
        "name": "Adam Jordan",
        "age": 15,
        "salary": 975.42,
        "address": {
            "country": "Morocco",
            "place": "Angkor Wat",
            "line1": "green",
            "line2": "green"
        }
    },
    {
        "id": "66e176b2-5f55-4dc6-a5f5-cb091716f101",
        "name": "Kimberly King",
        "age": 27,
        "salary": 200.26,
        "address": {
            "country": "Sri lanka",
            "place": "Lake Louise",
            "line1": "hockey",
            "line2": "ace"
        }
    },
    {
        "id": "153fa8c9-5648-46b0-9fdf-aef237e36a18",
        "name": "Jack Simmons",
        "age": 57,
        "salary": 661.59,
        "address": {
            "country": "Equatorial guinea",
            "place": "Copacabana Beach",
            "line1": "drive",
            "line2": "set"
        }
    },
    {
        "id": "be199872-181a-40fe-b123-440b01b9f292",
        "name": "Anna Powell",
        "age": 37,
        "salary": 433.61,
        "address": {
            "country": "Philippines",
            "place": "Colosseum",
            "line1": "eagle",
            "line2": "slapshot"
        }
    },
    {
        "id": "e9e98505-7f0b-448d-a8ec-0ea14a7fd9e2",
        "name": "Edward Phillips",
        "age": 23,
        "salary": 259.66,
        "address": {
            "country": "Libya",
            "place": "Blue Ridge Parkway",
            "line1": "kickboxing",
            "line2": "punch"
        }
    }
]
```