//state
// score
// player pick
// ai pick
const playerWinsLSKey = "playerWins";
const AIWinsLSKey = "AIWins"; // Nazwa klucza który będziemy wykorzystywać zapisując czy odczytując playerwins
let state = {
    playerWins:localStorage.getItem(playerWinsLSKey)|| 0, //Na początku daliśmy tu zero ale teraz zmieniamy na localStorage aby odczytywać czy mamy w pamięci jakieś punkty już zrobione
    AIWins: localStorage.getItem(AIWinsLSKey) || 0, //Kreski po localStorage mówią, że jezeli mamy jakąs wartośc zapisaną to ja tam wrzćmy jak nie to przypisz 0
    playerPick: null,
    AIPick: null
};

const renderScore = () => {
    const pointsElement = document.querySelector('.points'); //query selector Pierwszy element z klasą points
    pointsElement.innerText = state.playerWins - state.AIWins;//Tutaj do końca nwm

};
const bindPickEvents = () => {
    document.querySelectorAll(".options button").forEach((button)=> { //ForEach to dla każdego elementu jest wywołana funkcja
        button.addEventListener("click", (a)=>{

            pickByPlayer(a.currentTarget.dataset.pick);
            pickByAI();
            console.log(state);
                //console.log(a.target) // to pokazuje nam jaki przycisk klikneliśmy 
        });     

    });

};
const pickByPlayer = (pickedOption) =>{
    state = { // Nasz state to ten stary state na początku co deklarowaliśmy
                // Ale teraz mały update gdzie playerPick nie ma już zera tylko pickedOption
        ...state,
        playerPick: pickedOption,
    };
};
const pickByAI = () => {
    const options =["rock","paper","scissors"];
    const AIPick = options[Math.floor(Math.random() * options.length)];//math.random wybiera liczbe od 0 do 1
    //pomnożone przez optionslength da liczbe od 0 do 3
    //Mathfloor zaokrągla
    stata = {
        ...state,
        AIPick //destructering czy coś takiego:D
    };
};


const init = () => {
    renderScore();
    bindPickEvents();
};

init(); // Funkcja odpala się w momencie startu programu