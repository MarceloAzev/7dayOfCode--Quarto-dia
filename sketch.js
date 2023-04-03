const max = 10;
const min = 0;
const adivinha = Math.floor(Math.random() * (max - min) + min);
let tentativa = " "

console.log(adivinha)

for(cont = 3; cont>0; cont--){
  let tentativas = cont - 1;
  tentativa = prompt("Qual o número estou pensando?");
  if(tentativa == adivinha){
    alert("Parabéns!! O número " + adivinha+ " era o que eu estava pensando");
    cont = 0;
  }else{
    alert("Você possui mais "+tentativas+ " tentativas");
  }
}