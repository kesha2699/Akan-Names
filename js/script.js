
var dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

function getAkanName() {
    var year =document.getElementById("year").value;
    var month =document.getElementById("month").value;
    var dayOfMonth =document.getElementById("monthday").value;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    

    //var maleNames = document.getElementById("male");//
   //var femaleNames = document.getElementById("female");//

    var day=new Date();
    day.setDate(parseInt(dayOfMonth));
    day.setMonth(parseInt(month)-1);
    day.setFullYear(parseInt(year));
    var Day= day.getDay();
    
    if (Day === 0){
        alert("sunday");
    }else if(Day === 1){
        alert("monday");
    }else if(Day === 2){
        alert("tuesday");
    }else if(Day === 3){
        alert("wednesday");
    }else if(Day === 4){
        alert("thursday");
    }else if(Day === 5){
        alert("friday");
    }else if(Day === 6){
        alert("saturday");
    }

    if(dayOfMonth == "" || dayOfMonth >31){
        alert("Enter valid day");
    }else if(month == "" || month >12){
        alert("Enter valid month");
    
    }else if(year == "" || year >2030){
        alert("Enter valid year");
    
    }else if(document.getElementById("male").checked == true && document.getElementById("female").checked == false){
        alert("Your Akan name is " + maleNames[Day]);
    
    }else if(document.getElementById("female").checked == true && document.getElementById("male").checked == false){
        alert("Your Akan name is " + femaleNames[Day]);
    
    }
}

    



   
