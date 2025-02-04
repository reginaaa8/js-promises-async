let baseURL = "https://deckofcardsapi.com";

// Part 2 

// 1. 
//  async function showCard(){
//     let data = await $.getJSON(`${baseURL}/api/deck/new/draw/?count=1`);
//     console.log(data)

//     let {suit, value} = data.cards[0]
//     console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
//  }
//  showCard();

//  2. 
async function draw2(){
    let firstCard = await $.getJSON(`${baseURL}/api/deck/new/draw/?count=1`);

    let deckId = firstCard.deck_id;

    let secondCard = await $.getJSON(`${baseURL}/api/deck/${deckId}/draw/?count=1`);

    [firstCard, secondCard].forEach(card => {
        let {suit, value} = card.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
}
draw2();

// 3. 
async function drawCards(){
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deck = await $.getJSON(`${baseURL}/api/deck/new/shuffle/?deck_count=1`);

    $btn.show().on('click', async function(){
        let card = await $.getJSON(`${baseURL}/api/deck/${deck.deck_id}/draw/?count=1`);

        let cardImg = card.cards[0].image

        $cardArea.append(
            $(`<img src="${cardImg}">`)
        );

    });
}
drawCards();