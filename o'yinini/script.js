// 📌 Kompyuter tanlovini yaratish
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    return randomNum; // 1 = Tosh, 2 = Qog‘oz, 3 = Qaychi
}

// 📌 O'yinchidan raqamli tanlov olish
function getHumanChoice() {
    let choice = parseInt(prompt("Tanlovingizni kiriting:\n1 - Tosh\n2 - Qog‘oz\n3 - Qaychi"));
    
    // Noto'g'ri raqam kiritilgan bo'lsa, qayta so'rash
    while (![1, 2, 3].includes(choice)) {
        choice = parseInt(prompt("Noto'g'ri tanlov! Iltimos, 1, 2 yoki 3ni kiriting:\n1 - Tosh\n2 - Qog‘oz\n3 - Qaychi"));
    }
    return choice;
}

// 📌 Ballarni hisoblash
let humanScore = 0;
let computerScore = 0;

// 📌 Bitta raundni o‘ynash
function playRound(humanChoice, computerChoice) {
    console.log(`\nSizning tanlovingiz: ${convertToWord(humanChoice)} vs Kompyuter: ${convertToWord(computerChoice)}`);

    if (humanChoice === computerChoice) {
        console.log("🤝 Durrang!");
        return;
    }

    if (
        (humanChoice === 1 && computerChoice === 3) ||  // Tosh > Qaychi
        (humanChoice === 2 && computerChoice === 1) ||  // Qog‘oz > Tosh
        (humanChoice === 3 && computerChoice === 2)     // Qaychi > Qog‘oz
    ) {
        humanScore++;
        console.log("🎉 Siz g‘alaba qozondingiz!");
    } else {
        computerScore++;
        console.log("😢 Kompyuter g‘alaba qozondi!");
    }
}

// 📌 Tanlovni so‘z shaklida chiqarish
function convertToWord(choice) {
    if (choice === 1) return "Tosh";
    if (choice === 2) return "Qog‘oz";
    if (choice === 3) return "Qaychi";
}

// 📌 5 raundlik o‘yinni o‘ynash
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`\n🕹 ${i + 1}-RAUND`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`📊 Hisob: Siz ${humanScore} - ${computerScore} Kompyuter`);
    }

    console.log("\n🎯 Yakuniy natija:");
    if (humanScore > computerScore) {
        console.log("🎉 Siz o‘yinda g‘alaba qozondingiz!");
    } else if (computerScore > humanScore) {
        console.log("😢 Kompyuter yutdi! Keyingi safar omad!");
    } else {
        console.log("🤝 Durrang! Qayta urinib ko‘ring.");
    }
}

// 📌 O‘yinni ishga tushirish
playGame();
