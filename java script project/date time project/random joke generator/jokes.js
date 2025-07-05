const jokes =[
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't programmers like nature? It has too many bugs.",
        "I told my computer I needed a break, and it said no problem — it's on standby.",
        "Why was the math book sad? Because it had too many problems.",
        "Parallel lines have so much in common… it’s a shame they’ll never meet.",
        "I used to play piano by ear, but now I use my hands.",
        "Why did the bicycle fall over? Because it was two-tired.",
        "I asked my dog what's two minus two. He said nothing.",
        "Why can’t your nose be 12 inches long? Because then it would be a foot.",
        "What do you call fake spaghetti? An impasta!",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "I’m reading a book on anti-gravity. It’s impossible to put down!",
        "Did you hear about the guy who invented Lifesavers? He made a mint.",
        "How do you organize a space party? You planet.",
        "Why are elevator jokes so good? They work on many levels.",
        "I told a joke about construction... but I’m still working on it.",
        "What do you call a fish wearing a bowtie? Sofishticated.",
        "I used to hate facial hair, but then it grew on me.",
        "I would tell you a joke about time travel, but you didn't like it.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "Why don't eggs tell jokes? They'd crack each other up.",
        "What did one wall say to the other wall? I'll meet you at the corner.",
        "I asked the lion at the zoo if he was a comedian. He said he was just lion.",
        "How do you make holy water? You boil the hell out of it.",
        "Why did the computer get cold? It left its Windows open.",
        "I ate a clock yesterday. It was very time-consuming.",
        "I only know 25 letters of the alphabet. I don’t know y.",
        "What do you call cheese that isn't yours? Nacho cheese.",
        "Why did the cookie go to the hospital? Because it felt crummy."
      
      
];

function getJokes(){
    let random = Math.floor(Math.random()* jokes.length);
    document.getElementById("jokes").innerText=jokes[random];
}