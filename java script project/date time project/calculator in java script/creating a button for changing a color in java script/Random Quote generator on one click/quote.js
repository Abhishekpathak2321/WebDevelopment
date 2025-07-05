const quotes=[
    {
        quote:"Every setback is a setup for an even greater comeback.",
        author:"Abhishek Pathak"
    },

    {
        quote:"The struggle you’re in today is building the strength you need for tomorrow.",
        author:"Unknown"
    },
    
    {
        quote: "Your only limit is the one you place on your mind.",
        author:"Abhishek Pathak"
    },

    {
        quote:"If you want to shine like the sun, first burn like it.",
        author:"A.P.J. Abdul Kalam"

    },
    {
        quote:"Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        author:"Marie Forleo"

    },
];

function Generate(){
    const random = Math.floor(Math.random()* quotes.length);
    document.getElementById("quoteText").innerText= quotes[random].quote;
    document.getElementById("author").innerText=`-${quotes[random].author}`;
}
  
    
