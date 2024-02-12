console.log("Задача 1")
let tda = [
    [132, 2, 13,52],
    [43, 18, 63],
    [712, 82,]
  ];
  
  console.log("Содержимое двумерного массива:");
  for (let rd = 0; rd < tda.length; rd++) {
     for (let j = 0; j < tda[rd].length; j++ ) {
        let result = tda[rd][j]
        console.log(result)
  }
  console.log("---------------")
}
  
  let sum = 0;
  for (let rd of tda) {
    for (let elem of rd) {
      sum += elem;
    }
  }
  console.log("Сумма всех элементов двумерного массива:", sum);
  

  console.log("Количество элементов в каждом вложенном массиве:");
  for (let i = 0; i < tda.length; i++) {
    console.log(`Вложенный массив ${i + 1} содержит ${tda[i].length} элементов`);
  }


  console.log("\nЗадача 2")
  let computers = [
    { model: 'MSI', RAM: 8 },
    { model: 'Aser', RAM: 16 },
    { model: 'Asus', RAM: 32 }
];

for (let i = 0; i < computers.length; i++) {
    console.log(`Модель: ${computers[i].model}, RAM: ${computers[i].RAM}GB`);
}

for (let i = 0; i < computers.length; i++) {
    computers[i].RAM *= 2;
}
console.log('\n')
for (let i = 0; i < computers.length; i++) {
    console.log(`Модель: ${computers[i].model}, RAM: ${computers[i].RAM}GB`);
}


console.log("\nЗадача 3");
const movies = {
    "Начало": {
        actors: ["Леонардо Ди Каприо", "Джозеф Гордон-Левитт", "Элиот Пейдж"]
    },
    "Побег из Шоушенка": {
        actors: ["Тим Роббинс", "Морган Фримен", "Боб Гартон"]
    },
    "Бойцовский клуб": {
        actors: ["Эдвард Нортон", "Брэд Питт", "Хелена Бонем Картер"]
    }
};

for (let movie in movies) {
    console.log(`Актеры фильма ${movie}:`);
    for (let i = 0; i < movies[movie].actors.length; i++) {
        console.log(movies[movie].actors[i]);
    }
    console.log("============")
}