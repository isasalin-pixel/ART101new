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


