const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

$("button").click((e) => {
  e.preventDefault();
  let lett = $("#letters").val();
  let num = $("#numbers").val();
  let symbol = $("#symbols").val();

  const chosen_letters = [];
  const chosen_num = [];
  const chosen_symbols = [];

  for (i = 0; i < lett; i++) {
    chosen_letters.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  for (i = 0; i < num; i++) {
    chosen_num.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  for (i = 0; i < symbol; i++) {
    chosen_symbols.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }

  const password = [...chosen_letters, ...chosen_num, ...chosen_symbols];
  const p_shuffle = password.sort(() => 0.5 - Math.random());
  const password_to_str = password.toString().split(",").join("");
  const pp = `<h1 class="password">Your Password is: ${password_to_str}</h1>`;

  if (lett && num && symbol !== "") {
    $(".display").append(pp);
    $(".password").prev().hide();
  } else {
    alert("Please Type Something !");
  }

  console.log(password_to_str);
});
