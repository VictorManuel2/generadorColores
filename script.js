$(document).ready(function(){
  generate();
  
  $("#generate").on("click", function() {
    generate();
  }); 
});

function generate() {
  let rgb, grey, color;
  for (let i = 1; i < 6; i++) {
    rgb = createRGB();
    grey = greyscale(rgb);
    color = RGBtoHex(rgb);
    // console.log(color);
    $("#box_" + i).css("background", "#"+color);
    // $("#box_" + i).css("background", "rgb(" + rgb + ")");
    $(".text_" + i).text("#" + color);
    $(".text_" + i).css("color", "rgb(" + grey + ")");
  }
  $(".container > div").css("box-shadow", "3px 3px 10px #DEE0E0");
}

function createRGB() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 256);
    color.push(random);
  }
  return color;
};

function RGBtoHex(rgb) {
  return rgb.reduce(function(hex, color){
    const hexLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let second = color % 16;
    let first = (color - second) / 16;
    hex += first > 9 ? hexLetters[first - 10] : first;
    hex += second > 9 ? hexLetters[second - 10] : second;
    return hex;
    }, '');
}

function greyscale(arr) {
  const grey = Math.floor(0.21 * arr[0] + 0.72 * arr[1] + 0.07 * arr[2]);
  return grey < 150 ? [235, 235, 235] : [35, 35, 35];
}

Waves.attach('.button', ['waves-button', 'waves-float', 'waves-light']);
Waves.init();