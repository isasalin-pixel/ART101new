// declaring an array with name myCharacters
let myCharacters = ["Jake", "Nityri"];

// declaring an object with name myTransport
let myTransport = {
    type: "bird dinosour thingy",
    height: "10 ft",
    carry: "500 pounds",
    bonded: true,
    riders: ["Jake", "Nityri", "Sammy the slug"],
};

let megaSentence ;

megaSentence = "<p>Big ole bird loves to soar the skies with: " + myCharacters[1] +", " + myCharacters[0] + "</p>";
megaSentence = megaSentence + "<p>The animals characteristics: type - " + myTransport.type + ", height " + myTransport.height + ", can carry up to " + myTransport.carry + ", riders: " + myTransport.riders[2] + "</p>";

$("#output").html(megaSentence);

function askNumber(whatNumber) {
let userNumber = prompt("What are the chances you think we are gunna die on a scale of 1-10?");
if (userNumber == whatNumber) {
    $("#output").html("Yayy its Sammy!"+ "<img width=100px src='images/slug.png'>");
}
else {
    $("#output").html("Oh crap we are so dead");
}
}
$("#slug-button").click(function () {
    askNumber(2);


});