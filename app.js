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
        button.addEventListener("click", pick)

            
            //console.log(state); To pokazuje co klikneliśmy i całe state
                //console.log(a.target) // to pokazuje nam jaki przycisk klikneliśmy 
        });     

};
const pick = (a) => {
    pickByPlayer(a.currentTarget.dataset.pick);
    pickByAI();
    hideOptions();
    showFight();

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
    state = {
        ...state,
        AIPick //destructering czy coś takiego:D
    };
};
const hideOptions = () =>{
    document.querySelector(".options").classList.add("hidden");
};// To nada pierwszemu z klasy options klase hidden przez  co zniknie

const showFight = () =>{
 document.querySelector(".fight").classList.remove("hidden");//To usunie tą klase 
createElementPickByPlayer();
createElementPickByAI();

};
const createElementPickByPlayer = () =>{
    const playerPick = state.playerPick;
    

    const pickContainerElement = document.querySelector(".pick__container--player");
    pickContainerElement.innerHTML = "";
    pickContainerElement.appendChild(createPickElement(playerPick));
   
};
const createElementPickByAI = () => {
    const AIPick = state.AIPick;
    

    const pickContainerElement = document.querySelector(".pick__container--ai");
    pickContainerElement.innerHTML = "";
    pickContainerElement.appendChild(createPickElement(AIPick));//appendchild tworzy element w rodzicu i wstawia go na koniec
   
};
const createPickElement = (option) =>{
    const buttEle = document.createElement("div");
    buttEle.classList.add("button", `button--${option}`);

    const divImageContainer = document.createElement("div");
    divImageContainer.classList.add("button_image");

    const imgElement = document.createElement("img");
    imgElement.src = `./images/icon-${option}.svg`;
    imgElement.alt = option;

    ////To zrozumieć co poniżej
    divImageContainer.appendChild(imgElement);

    buttEle.appendChild(divImageContainer);
    return buttEle;

};

const init = () => {
    renderScore();
    bindPickEvents();
};

init(); // Funkcja odpala się w momencie startu programu