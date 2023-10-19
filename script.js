const targetDate = new Date("2023-10-20T17:15:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById("fireworks").style.display = "block";
        document.getElementById("timer").style.display = "none";
        clearInterval(timerInterval);
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Construir la cadena de tiempo en el formato deseado
        const timeString = `${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`;

        // Actualizar el elemento HTML con la cadena de tiempo
        document.getElementById("timer").textContent = timeString;
    }
}

const timerInterval = setInterval(updateCountdown, 1000);


