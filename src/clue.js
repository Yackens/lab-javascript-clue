// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Alberto",
        lastName: "Maroto",
        occupation: "Banker",
        age: 48,
        description: "He is a banker and is 48",
        image: "1",
        color: "black"
    },
    {
        firstName: "Gustavo",
        lastName: "Alvarez",
        occupation: "Cashier",
        age: 21,
        description: "He is a cashier and is 21",
        image: "2",
        color: "black"
    },
    {
        firstName: "Sophia",
        lastName: "White",
        occupation: "Janitor",
        age: 32,
        description: "She is a janitor and is 32",
        image: "3",
        color: "black"
    },
    {
        firstName: "Jack",
        lastName: "Peterson",
        occupation: "Server",
        age: 19,
        description: "He is a server and is 19",
        image: "4",
        color: "black"
    },
    {
        firstName: "Lea",
        lastName: "Bourne",
        occupation: "Policeman",
        age: 28,
        description: "She is a policeman and is 28",
        image: "5",
        color: "black"
    },
    {
        firstName: "Iñigo",
        lastName: "Quevedo",
        occupation: "Major",
        age: 63,
        description: "He is a major and is 73",
        image: "6",
        color: "black"
    }
];

// Rooms Array

const roomsArray = [
    {
        name: "1st Floor"
    },
    {
        name: "2nd Floor"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Bedroom"
    },
    {
        name: "Bath"
    },
    {
        name: "Classroom"
    },
    {
        name: "Studio"
    },
    {
        name: "3rd Floor"
    },
    {
        name: "Dining Room"
    },
    {
        name: "Family Room"
    },
    {
        name: "Suite"
    },
    {
        name: "Quad"
    },
    {
        name: "Queen"
    },
    {
        name: "Twin"
    },
    {
        name: "King"
    }

];

// Weapons Array

const weaponsArray = [
    {
        name: "M16",
        weight: 1.5
    },
    {
        name: "SKS",
        weight: 1.2
    },
    {
        name: "Commando",
        weight: 1.6
    },
    {
        name: "SPAS-12",
        weight: 2.1
    },
    {
        name: "Mustang & Sally",
        weight: 1.1
    },
    {
        name: "AK-47",
        weight: 1.5
    },
    {
        name: "IMI Galil",
        weight: 1.8
    },
    {
        name: "Raygun",
        weight: 0.9
    },
    {
        name: "Thundergun",
        weight: 2.8
    }
];


// ITERATION 2

function selectRandom(array) {
    if (array === undefined || array.length === 0) {
        return undefined;
      }

    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickMystery() {
    const newArray = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
    }

    return newArray;
}

// ITERATION 3

function revealMystery() {
const envelope = `${pickMystery().suspect.firstName} ${pickMystery().suspect.lastName} killed Mr. Boddy using the ${pickMystery().weapon.name} in the ${pickMystery().room.name}!`;
    return envelope;
}
console.log(revealMystery())