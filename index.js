
/*[1]
Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]);  //Svar: Maradonna

/*[2] I samma array, lägg till namnet "Drogba" 
i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
names.push("Drogba");
console.log(names); //Svar: 7

/*[3] Lägg nu till namnet "Figo" i börja av arrayen. 
Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
names.unshift("Figo");
console.log(names); //Svar: 8

/* [4]Ta nu bort det sista namnen från array med pop(). 
Logga ut returvärdet av den metoden.
names.pop();
console.log(names); //Svar:['Figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']
*/
/*[5] Vid det här laget så bör du ha motsvarande array nedan. 
Hur kan du flytta namnet 
"Ronaldo" från sluten av arrayen till början av arrayen? 
Visa i kod samt förklara varför du gör som du gör.*/
/*
const names = [
    "Figo",
    "Zlatan",
    "Beckham",
    "Zidane",
    "Maradona",
    "Pele",
    "Ronaldo",
  ];
  names.pop(); // tar bort sista namnet i arrayen ronaldo
  names.unshift("Ronaldo"); // lägger till det i början
  console.log(names);*/

  /* [7]Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om 
        "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?*/
//const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
//console.log(players);
//console.log((players.includes("Messi")));

/*[8]Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). 
  Om han finns, logga ut en bekräftande text, t.ex. 
 "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."*/
    //  if (players.includes("Zlatan")) {
       // console.log("Zlatan är med i listan");
     // } else {
       // console.log("Zlatan är inte med i listan");
      //}

/*[9] Skriv ut indexet för "Maradona" i arrayen 
 "players" med hjälp av indexOf(). Vad är resultatet och varför?*/
 //console.log(players.indexOf("Maradona")); //Svar: Index är 5

 /*[10] Använd indexOf() för att försöka hitta indexet för "Messi" i "players". 
 Vad returnerar indexOf() när elementet inte finns i arrayen, 
 och hur kan den informationen vara användbar?*/
 //console.log(players.indexOf("Messi")); //Svar: -1

 /*[11] Kombinera alla namn i "players" till en sträng där varje namn är 
 separerat med ett kommatecken och ett mellanslag (, ). 
Använd join() för att göra detta och logga resultatet.*/
//console.log(players.join(", ")); //Svar: Zlatan, Beckham, Zidane, Ronaldo, Romario, Maradona

/*[12] Använd join() för att skapa en sträng av alla namn i "players", 
separerade med ett " - ". 
Vilket resultat får du?*/
//console.log(players.join(" - ")); //Svar: Zlatan - Beckham - Zidane - Ronaldo - Romario - Maradona

/*[13] Använd splice() för att ta bort "Beckham" och "Zidane" från 
 "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.*/
// players.splice(1,2);
 //console.log(players); // splice 1,2 index 1 och tar bort index 1 och 2

 /*[14] Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). 
 Vilken förändring sker i arrayen och vad returnerar splice()?*/
//players.splice(2,0, "Ronaldinho");
//console.log(players); //Svar: 'Zlatan', 'Ronaldo', 'Ronaldinho', 'Romario', 'Maradona'

/*[15] Kombinera indexOf() och splice() för att ta bort "Ronaldo" 
från arrayen, oavsett var i listan han befinner sig.*/
//const index = players.indexOf("Ronaldo");
//if (index !== -1) {
 // players.splice(index, 1);
//}
//console.log(players); 

/*[16] Använd slice() för att skapa en ny array från "players" 
som innehåller de tre första spelarna. 
Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.*/
//const newPlayers = players.slice(0,3);
//console.log(newPlayers);

/*[17] Skapa en ny array med slice() som innehåller alla spelare från index 2 och 
framåt i "players". 
Vad innehåller den nya arrayen, och vad blir kvar i "players"?*/
//const newPlayers1 = players.splice(2);

//console.log(newPlayers1);//Romario och Maradona
//console.log(players); // Zlatan och Ronaldinho

/*[18] Använd metoden with() för att ersätta spelaren på indexposition 1 i 
"players" med "Mbappé". 
Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?*/
//const updatedPlayers = players.with(1, "Mbappé");


//console.log(updatedPlayers); //Zlatan, Mbappe
//console.log(players);

/*[19] Utgå från arrayen nedan. 
Skriv en for-loop som skriver ut varje tal i arrayen.*/
const numbers = [5, 8, 12, 20, 3];
//for (const number of numbers)
 // console.log(number);

/*[20] Använd en for-loop för att summera alla tal i arrayen numbers ovan. 
Logga ut summan efter att loopen har körts klart.
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
  sum+= numbers[i];
}
console.log("Summan av alla tal är:", sum);*/

/*[21] Skriv en for-loop som letar efter det största talet i numbers. 
Logga det största värdet.
let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Det största talet är:", max);*/

/*[22]Skapa en ny array som heter doubledNumbers. Använd en for-loop 
för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.
const doubledNumbers = [];

for (const num of numbers) {
  doubledNumbers.push(num * 2);
}
console.log(doubledNumbers);*/

/*[23] Använd en for-loop för att räkna ut 
medelvärdet av talen i numbers. Logga ut medelvärdet.
let summ = 0;
for (const num of numbers) {
  summ += num;
}
const medel = sum / numbers.length;
console.log("Medel värdet är:", medel);*/

/*[24] Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.
let min = numbers[0];
for (const numm of numbers) {
  if (numm < min) {
    min = numm;
  }
}
console.log("Det minsta talet är:",min);*/

/*[25]Skapa en ny array som heter positiveNumbers och fyll den med endast de 
positiva talen från arrayen nedan. 
Använd en for-loop och en if-sats.
const positiveNumbers = [];

for (const numberr of numbers) {
  if (numberr > 0){
    positiveNumbers.push(numberr);
  }
}
console.log(positiveNumbers);*/

/*[26] Utgå från arrayen mixedNumbers nedan. 
Skriv en for-loop utan att använda index, där du loggar varje positivt tal.
const mixedNumbers = [3, -5, 12, -1, 8, -6];
for (const nummer of mixedNumbers) {
  if (nummer > 0) {
    console.log(nummer);
  }
}*/

/* [27] Använd en while-loop för att logga alla tal i arrayen numbers 
från och med index 0. Avbryt loopen om talet är större än 10.
let i = 0;
while (i < numbers.length) {
  if (numbers[i] > 10) {
    break; 
  }
  console.log(numbers[i]); 
  i++; 
}*/
/* [28] Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att 
räkna hur många negativa tal det finns i arrayen. Logga antalet.*/
const mixedNumbers = [3, -5, 12, -1, 8, -6];
/*
let count = 0; 
let i = 0; 
while (i < mixedNumbers.length) {
  if (mixedNumbers[i] < 0) { 
    count++;
  }
  i++; 
}
console.log(`Antalet negativa tal är: ${count}`); */

/*[29] Skapa en array words med några ord i den, (exempel nedan). 
Använd en for-loop för 
att logga varje ord tillsammans med dess längd (antal bokstäver).*/
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];
for (const word of words) {
  console.log(`${word}: ${word.length} bokstäver`);
}

/*[30] Använd words-arrayen ovan och en for-loop för att bygga en ny sträng 
som består av de första bokstäverna i 
varje ord. Logga ut den nya strängen.*/
let firstLetters = "";

for (let i = 0; i < words.length; i++) {
  firstLetters += words[i][0]; 
}
console.log(firstLetters);

/* [31] Skriv en while-loop som itererar genom arrayen numbers 
och loggar varje tal tills summan av de loggade talen överstiger 25.
let i = 0;
let sum = 0; 

while (i < numbers.length && sum <= 25) {
  sum += numbers[i]; 
  console.log(numbers[i]); 
  if (sum > 25) {
    break; 
  }
  i++;
}*/

/* [32] Använd en for-loop utan index för att 
summera alla värden i arrayen mixedNumbers. Logga ut summan.*/
let sum = 0;
for (const num of mixedNumbers) {
sum += num;
}
console.log(sum);

/*[33] Skapa en array temperatures (exempel nedan) med några temperaturer 
i Celsius. Använd en for-loop för att hitta den högsta temperaturen. 
Därefter, logga både högsta temperaturen och dess index i arrayen.*/ 
const temperatures = [15, 22, 19, 30, 28, 18, 25];
let highestTemp = temperatures[0]; 
let highestIndex = 0; 

for (let i = 1; i < temperatures.length; i++) {
  if (temperatures[i] > highestTemp) {
    highestTemp = temperatures[i];
    highestIndex = i;
  }
}
console.log("Högsta temperaturen är:", highestTemp);
console.log("Index för högsta temperaturen är:", highestIndex);

/* [34] Använd en for-loop för att räkna antalet 
ord i words-arrayen som innehåller fler än fem bokstäver.*/
let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 5) {
    count++;
  }
}
console.log("Antalet ord med fler än fem bokstäver är:", count);

/*[35] Skriv en while-loop som räknar upp talen från numbers-arrayen ovan 
tills ett udda tal hittas. 
Avbryt loopen vid första udda talet och logga resultatet.*/
let i = 0;
while (i < numbers.length) {
  if (numbers[i] % 2 !== 0) { 
    console.log("Första udda talet är:", numbers[i]);
    break;
  }
  i++;
}










