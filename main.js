const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c"){
            pantalla.textContent ="0";
            return;
        }

        if(boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            } 
            return; 
        }

        if (boton.id === "igual" ) {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!!";
            }
            return;
        } 

        if(pantalla.textContent === "0" || pantalla.textContent === "Error!!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

    })
});

const container = document.querySelector('.container');
const colors = ['#8c29d3', 'blue', 'green', 'pink', '#d32929','red','#DE36SC'];

const figures = () => {
    for(let i = 0 ; i <= 25; i++){
        let figure = document.createElement('span');
        let select = Math.round(colors.length * Math.random()) 


        figure.style.top = innerHeight * Math.random() + 'px';
        figure.style.left = innerWidth * Math.random() + 'px';
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure);
        
        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px';
        figure.style.left = innerWidth * Math.random() + 'px';
        },5000)
    }
}

figures()
    
    
