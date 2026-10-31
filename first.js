let btn     = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice   = document.querySelector("#animation");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate   =1;
    text_speak.pitch  =1;
    text_speak.volume =1;
    text_speak.lang   ="hi-IN";

    window.speechSynthesis.speak(text_speak);
}

function wishme(){
    let day = new Date;
    let hours = day.getHours();
    
     if(hours >= 0 &&  hours<12)
        speak("Good Morning")

     else if (hours>=12 && hours<16)
        speak("Good afternoon")
    
     else 
        speak("Good evening")
     
}

window.addEventListener(`load`,()=>{
    wishme();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition  = new speechRecognition()
 
    recognition.onresult =(event)=>{

        let currentIndex = event.resultIndex

        let transcript = event.results[currentIndex][0].transcript;
   
        content.innerHTML = transcript
    
        takecommand(transcript)
    
    
}


   btn.addEventListener("click", () => {
    
        recognition.start();

        btn.style.display = "none";
        voice.style.display = "block";


    })


 function takecommand(message){

          btn.style.display = "flex";
          voice.style.display = "none";
   
      message = message.toLowerCase();
    
      if(message.includes("hello") || message.includes("hey") || message.includes("hi")|| message.includes("good") ){
         wishme();
         speak("Hey i am vertex  virtual ai assistant and  What can I help you ?");
        }

     else if(message.includes("who are you")){
        speak("i am your AI voice assistant crated by Rishu raj")
     }
    
     else if(message.includes("who is travis")){
        speak("travis is a nice guy but sometime they become naughty boy ")
     }

     else if(message.includes("who is Arun")){
        speak("Abe Arun, tu itna bada chutiya hai ki teri girlfriend bhi tujhe dekh ke sochti hogi, “Bhenchod, meri choice mein itni badi galti kaise ho gayi")
     }

    else if (message.includes("open youtube")){
    speak("Openning youtube...");
    window.open("https://www.youtube.com/","_blank")
    } 
        
    else if(message.includes("openfacebook")){
    speak("Openning facebook...");
    window.open("https://www.facebook.com/","_blank")
   }
    
    else if(message.includes("open chatgpt")){
    speak("Openning chatgpt...");
    window.open("https://chat.openai.com/", "_blank");
   }
     else if(message.includes("open gemini")){
    speak("Openning google gemini...");
    window.open("https://gemini.google.com/app","_blank")
   }
     else if(message.includes("open perplexity")){
    speak("Openning perplexity...");
    window.open("https://www.perplexity.ai/","_blank")
   }
    else if(message.includes("open marwadi university login page")){
    speak("Openning marwadi university login page ...");
    window.open("https://login.marwadiuniversity.ac.in:553/","_blank")
   }
    else if(message.includes("open marwadi university web page")){
    speak("Openning marwadi university web page...");
    window.open("https://www.marwadiuniversity.ac.in/","_blank")
   }
        
     else if(message.includes("viratkohi insta id")){
    speak("Openning marwadi university web page...");
     window.open("https://www.instagram.com/virat.kohli/?hl=en/","_blank")
   }    
    
    else if(message.includes("open linkedin")){
    speak("Openning marwadi university web page...");
     window.open("https://www.linkedin.com/in/rishuraj777/","_blank")
   }
    else if(message.includes("openinstagram")){
    speak("Openning instagram...");
    window.open("https://www.instagram.com/","_blank")
   }
    else if(message.includes("open spotify")){
    speak("Openning spotify...");
    window.open("https://www.spotify.com/","_blank")  
   }
    else if(message.includes("opencalculator")){
    speak("Openning calculator...");
    window.open("calculator://")
   }
    else if(message.includes("openwhatsapp")){
    speak("Openning whatsapp...");
    window.open("whatsapp://")
   }
    else if(message.includes("time")){
    let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
    speak(time);
   }
    else if(message.includes("date")){
    let date= new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
    speak(date);
   }

     
    else{
    speak(`This is whatever I found on Internet regarding to ${message}`)
    window.open(`https://www.google.com/search?q=${message}`)
   }

}




