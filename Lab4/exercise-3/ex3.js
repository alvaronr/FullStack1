const say = require('say');

 let sorryDave = () => {
    say.speak("I'm sorry", null, 1, () => {
        setTimeout((param)=>{
            say.speak(param);
        }, 5000, "Dave"); 
        say.stop();
     });
    
 }

sorryDave();