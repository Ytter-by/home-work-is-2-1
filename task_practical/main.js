let apartment = {
    name:"Apartment in Fort Myers, USA",
    location: "Fort Myers",
    area: 172,
    totalrooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    costRent: 3200,
    furniture: true,
    wifi: false
  };
  
  for (let i in apartment) {
    if (i === 'name') {
        console.log(apartment[i]);
    }
    if (i === 'location') {
        console.log("Локация: " + apartment[i]);
    }
    if (i === 'area') {
        console.log("Площадь: " + apartment[i] + " кв. м");
    }
    if (i === 'totalrooms') {
        console.log("Количество комнат: " + apartment[i]);
    }
    if (i === 'bedrooms') {
        console.log("Спальные комнаты: " + apartment[i]);
    }
    if (i === 'bathrooms') {
        console.log("Ванные комнаты: " + apartment[i]);
    }
    if (i === 'costRent') {
        console.log("Стоимость аренды: " + apartment[i] + " $");
    }
    if (i === 'furniture') {
        console.log("Мебель: " + (apartment[i] ? "есть" : "нет"));
    }
    if (i === 'wifi') {
        console.log("Wi-Fi: " + (apartment[i] ? "есть" : "нет"));
    }
}
  
  if (apartment.costRent <= 4000) {
    console.log("Аренда квартиры доступна");
  } else {
    console.log("Аренда квартиры дорогая");
  }