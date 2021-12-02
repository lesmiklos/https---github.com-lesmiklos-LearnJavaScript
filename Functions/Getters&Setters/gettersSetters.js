console.log('----------Getters & Setters-----------');

const person = {
    firstName: 'John',
    lastName: 'Baptist',
    title: '',
    aspiration: 'To be the best I can!! ',
    nightmare: 'Take apart my troubles and leave them by the door',

    get fullName(){                                                                                                //this the 'getter'. Will allow us to access object properties
        return `${person.firstName} ${person.lastName}` 
    }, 
    set fullName(value){                                                                                          // this is the setter. Allows us to modify object properties.
        const parts = value.split(' ');  // to insert a space between elements, note that # of spaces affects split point
        this.firstName = parts[0];       // an array with 'firstname' space 'lastname'
        this.lastName = parts[1];
        
    },         


    get features(){                                                                                                //this the 'getter'. Will allow us to access object properties
        return `${person.aspiration} ${person.nightmare}` 
    }, 
    set features(value){  
        
       const parts = (person.aspiration + person.nightmare);  
       
        
    }   
        
};

      


person.fullName ;
person.title = 'Canine Intervention Agent';
person.features ;


console.log(person);
console.log(person.features);



window.onload = function() {

    document.querySelector("#callback-btn")
        .addEventListener('click', function(){
        console.log("User Has Clicked The Button")
        document.getElementById("UserClickNotice").innerHTML = "User clicked the button at least once";
       // document.getElementById("UserClickNotice").innerHTML = document.getElementById("ThirdParagraph").innerHTML = person.aspirations;
        
        
    });
    
    
    
    document.getElementById("FirstParagraph").innerHTML = person.fullName;
    document.getElementById("SecondParagraph").innerHTML = person.title;
    document.getElementById("ThirdParagraph").innerHTML = person.features;
   // document.getElementById("FourthParagraph").innerHTML = person.enumerate;

    
    
    } 


    
    