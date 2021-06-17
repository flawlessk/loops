let tourists = [
    {
      name: "Mark",
      age: 19,
      city: ["Tbilisi", "London", "Rome", "Berlin"],
      money: [120, 200, 150, 140],
      info: {}
    },
    {
      name: "Bob",
      age: 21,
      city: ["Miami", "Moscow", "Vienna", "Riga", "Kiev"],
      money: [90, 240, 100, 76, 123],
      info: {}
    },
    {
      name: "Sam",
      age: 22,
      city: ["Tbilisi", "Budapest", "Warsaw", "Vilnius"],
      money: [118, 95, 210, 236],
      info: {}
    },
    {
      name: "Anna",
      age: 20,
      city: ["New York", "Athens", "Sydney", "Tokyo"],
      money: [100, 240, 50, 190],
      info: {}
    },
    {
      name: "Alex",
      age: 23,
      city: ["Paris", "Tbilisi", "Madrid", "Marcel", "Minsk"],
      money: [96, 134, 76, 210, 158],
      info: {}
    }
  ];

// Adult

for(let i = 0; i < tourists.length; i++) {
    tourists[i].info.adult = tourists[i].age >= 21;
}

// Sum
for(let i = 0; i < tourists.length; i++) {
    tourists[i].info.sum = 0;
    for(let s = 0; s < tourists[i].money.length; s++) {
        tourists[i].info.sum += tourists[i].money[s];
    }
}
// Average
for(let i = 0; i < tourists.length; i++) {
    tourists[i].info.ave = 0;
    for(let a = 0; a < tourists[i].money.length; a++) {
        tourists[i].info.ave = tourists[i].info.sum / tourists[i].money.length;
    }
}
// RICH GUY
let richGuy = tourists[0].info.sum;
let richGuyName = tourists[0].name;

for(let i = 1; i < tourists.length; i++) {
    if(tourists[i].info.sum > tourists[0].info.sum) {
        richGuy = tourists[i].info.sum;
        richGuyName = tourists[i].name;
    }
}
console.log(richGuyName + " " + "is the richest");
// been or not in "Tbilisi"

for(let i = 0; i < tourists.length; i++) {
    tourists[i].info.been = false;
    for(let a = 0; a < tourists[i].city.length; a++) {
        if(tourists[i].city[a] == "Tbilisi") {
            tourists[i].info.been = true;
        }
    }
}


console.log(tourists);