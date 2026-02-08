let heroName = "Samus Aran";
let heroXP = 10500;
let heroLevel = "";


if (heroXP <= 1000) {heroLevel = "Ferro"}
else if (heroXP > 1000 && heroXP <=2000) {heroLevel = "Bronze"}
else if (heroXP > 2000 && heroXP <=5000) {heroLevel = "Prata"}
else if (heroXP > 6000 && heroXP <=7000) {heroLevel = "Ouro"}
else if (heroXP > 7000 && heroXP <=8000) {heroLevel = "Platina"}
else if (heroXP > 8000 && heroXP <=9000) {heroLevel = "Ascendente"}
else if (heroXP > 9000 && heroXP <=10000) {heroLevel = "Imortal"}
else  {heroLevel = "Radiante"}

console.log(`O herói de nome ${heroName} está no nível ${heroLevel}`);