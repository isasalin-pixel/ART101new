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

megaSentence = `
  <p>Big ole bird loves to soar the skies with: ${myCharacters[1]}, ${myCharacters[0]}</p>
  <p>The animal's characteristics: type - ${myTransport.type}, height ${myTransport.height}, can carry up to ${myTransport.carry}, riders: ${myTransport.riders[2]}</p>
`;

$("#output").html(megaSentence);

// Guessing game
function askNumber(correctNumber) {
  const userNumber = prompt("What are the chances you think we are gunna die on a scale of 1-10?");

  if (Number(userNumber) === correctNumber) {
    $("#output").html(
      "Yayy it's Sammy! <img width='100px' src='environ/images/slug.png'>"
    );
  } else {
    $("#output").html("Oh crap we are so dead!!!");
  }
}

// Sammy guessing button
$("#slug-button").click(() => askNumber(2));


function makeImage(imageName) {
  // Don't clear the container — just keep adding images
  $("#image-container").append(
    `<img width="150px" src="environ/images/darth.png">`
  );
}

function changeBackground(newColor) {
  $("body").css("background-color", newColor);
}

// When a Darth button is clicked
$(".darth-button").click(function () {
  const colorClicked = this.id; // e.g. "red"
  changeBackground(colorClicked); // change background color
  makeImage(colorClicked); // add another Darth image
});


$(".darth-button").hover(function(){
  $(this).css("background-color", "red");
  }, function(){
  $(this).css("background-color", "pink");
});

$("#erase-button").click(function() {
  $("#image-container img[src='environ/images/darth.png']").remove();
});

$(document).mousemove(function(event) {
  $("#apple").css({
    left: event.pageX - 60,
    top: event.pageY - 60,
    position: "absolute"
  });
});
