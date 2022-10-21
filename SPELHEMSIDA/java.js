var output = document.getElementById('output');
var knapp = document.getElementById('knapp');
var omstart = document.getElementById('omstart');
var number = Math.ceil(Math.random()*100);
var count = 1;

console.log(number);


var stop = (e) =>{
    event.preventDefault()
}
var spel = () =>{
    var input = document.getElementById('input').value;
    

    if(input == number){
        output.innerHTML="Du gissade rätt. Du gissade på " 
        + number + ". Du gissade " + count + " gånger."
        

    }else if(input > number){
        output.innerHTML='Du gissade för högt';
        count++

    }else if(input < number){
        
        output.innerHTML="Du gissade för lågt";
        count++
    }else if(isNaN){
        output.innerHTML="Du måste anvädna siffror";
    }}


knapp.addEventListener('click', spel);



omstart.addEventListener('click', () => {
    window.location.reload(true);
})