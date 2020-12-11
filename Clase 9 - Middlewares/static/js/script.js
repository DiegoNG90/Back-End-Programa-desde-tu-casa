function cambiarH1(){
    setTimeout(() => {
        const h1 = document.querySelector('h1')
        h1.textContent = "Ah, cambié y no te diste cuenta wachin!";
        h1.style.color = "green";
        h1.style.fontSize = "8rem";
    }, 1500);
}

cambiarH1();