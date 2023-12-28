console.log("Strings in javascript.");

const name = "ajeet";
const greeting = "Good morning";
console.log(greeting + name);
console.log(greeting + " " + name);

let html;
html = "<h1>This is Heading</h1>" + "<p>This is my Para</p>";
console.log(html);

html = html.concat("This ", "Godhuli");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);

console.log(html[0]);
console.log(html[10]);

console.log(html.indexOf("This"));
console.log(html.indexOf("h1"));
console.log(html.indexOf("my"));
console.log(html.indexOf("vjfjfgbcf"));
console.log(html.lastIndexOf("<"));
console.log(html.charAt(11));

console.log(html.endsWith("Godhuli"));
console.log(html.endsWith("Godhulifhdh"));
console.log(html.includes("my"));
console.log(html.includes("fdsgdg"));

console.log(html.substring(1, 15));
console.log(html.slice(0, 5));
console.log(html.split(" "));

console.log(html.replace("This", "it"));
console.log(html.replace("my", "your"));

let fruit1 = "apple'";
let fruit2 = "banana";
let myhtml = `hello ${name}
                 <h1> This is "my" heading </h1>
                <p>you like ${fruit1} and ${fruit2} 
                </p>

                  `;
document.body.innerHTML = myhtml;
