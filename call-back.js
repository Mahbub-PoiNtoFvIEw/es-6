function greeting(greetingHandler,name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning,', name);
}
function greetEvening(name){
    console.log('Good Evening,', name);
}

greeting(greetingHandler,'Tom Hanks');
greeting(greetingHandler,'Tom Brady');
greeting(greetEvening,'Tom ricky');