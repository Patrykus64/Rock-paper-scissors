//state
// score
// player pick
// ai pick

let state = {
    playerWins:0,
    AIWins: 0
};

const renderScore = () => {
    const pointsElement = document.querySelector('.points');
    pointsElement.innerText = state.playerWins - state.AIWins;

}

const init = () => {
    renderScore();
};

init();