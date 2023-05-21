//funkcja wlaczajaca sie po kliknieciu przycisku
function walidacja(){

    //walidacja imienia	
    let imie = document.getElementById("imie");
        
        //przyklady jak maja wygladac poprawnie dane wpisane w polu
        let poprawnie = /[a-z]{1,10}\s[a-z]{1,10}/g;
        let tylkoimie = /[a-z]{1,8}/g;
        
        //jesli jest poprawnie wpisane
        if (poprawnie.test(imie.value)==true){
            imie.style.background="white";
        
        //jesli jest wpisane samo imie
        }else if(tylkoimie.test(imie.value)==true){
            alert("samo imie lub samo nazwisko nie wystarczy!");
        }
        
        //jesli pole jest puste
        else if(imie.value==""){
            alert("wpisz imie oraz nazwisko!");
        }
        
    //walidacja emaila
    let email = document.getElementById("email");
        
        //jesli pole jest puste
        if(email.value==""){
            alert("podaj email!");
        }
        
    //walidacja oceny
    let ocena = document.getElementById("ocena");
    
        //jesli pole jest puste
        if(ocena.value==""){
            alert("wpisz ocenę!");
        }
        
    //walidacja daty
    let data = document.getElementById("data")
    
        //jesli pole jest puste
        if(data.value==""){
            alert("wpisz datę!")
        }
    }