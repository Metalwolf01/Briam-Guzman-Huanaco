let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Tempo Storm: Rompiendo limites')
  .pauseFor(200)
  .deleteChars(10)
  .start();