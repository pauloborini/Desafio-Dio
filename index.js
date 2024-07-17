const name = "Joãozin Rox";
const xp = 10001;
let level;


switch (true) {
    case xp <= 1000:
        level = "Ferro"
        break;

    case xp <= 2000:
        level = "Bronze"
        break;

    case xp <= 5000:
        level = "Prata"
        break;

    case xp <= 7000:
        level = "Ouro"
        break;

    case xp <= 8000:
        level = "Platina"
        break;

    case xp <= 9000:
        level = "Ascendente"
        break;

    case xp <= 10000:
        level = "Imortal"
        break;

    case xp > 10000:
        level = "Radiante"
        break;
}

console.log(`O Herói de nome ${name} está no nível de ${level}`);
