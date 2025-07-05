let color = 0;

function ChangeColor(){
    const myColor= ["red", "blue", "green", "yellow", "orange",
        "purple", "pink", "brown", "black", "white"];{
            document.body.style.backgroundColor = myColor[color++];{
                if(color > myColor.length -1)
                    color=0;
            }
        }
}