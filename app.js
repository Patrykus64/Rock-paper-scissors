//state
// score
// player pick
// ai pick
const playerWinsLSKey = "playerWins";
const AIWinsLSKey = "AIWins"; // Nazwa klucza który będziemy wykorzystywać zapisując czy odczytując playerwins
let state = {
    playerWins:localStorage.getItem(playerWinsLSKey)|| 0, //Na początku daliśmy tu zero ale teraz zmieniamy na localStorage aby odczytywać czy mamy w pamięci jakieś punkty już zrobione
    AIWins: localStorage.getItem(AIWinsLSKey) || 0 //Kreski po localStorage mówią, że jezeli mamy jakąs wartośc zapisaną to ja tam wrzćmy jak nie to przypisz 0
};

const renderScore = () => {
    const pointsElement = document.querySelector('.points'); //query selector Pierwszy element z klasą points
    pointsElement.innerText = state.playerWins - state.AIWins;//Tutaj do końca nwm

};
const bindPickEvents = () => {
    document.querySelectorAll(".options button").forEach((button)=> { //ForEach to dla każdego elementu jest wywołana funkcja
        button.addEventListener("click", ()=>{
                debugger;
        });

    });

};

const init = () => {
    renderScore();
    bindPickEvents();
};

init(); // Funkcja odpala się w momencie startu programu