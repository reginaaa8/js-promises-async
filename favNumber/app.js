const favNum = 3;
let baseURL = " http://numbersapi.com";

// Part 1 
// show fact abour favorite number 
async function showFact(){
    let data = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(data);
}
showFact();

// show facts about multiple numbers 
const favNums = [3, 7, 8, 26]
async function showMultipleFacts(){
    let data = await $.getJSON(`${baseURL}/${favNums}?json`);
    console.log(data);
}
showMultipleFacts();

// get 4 facts about my favorite number 
async function show4Facts(){
    let facts = await Promise.all(
        Array.from({length: 4}, () => $.getJSON(`${baseURL}/${favNum}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p> ${data.text}</p>`);
    });
}
show4Facts();