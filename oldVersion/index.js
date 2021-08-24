const clock = document.getElementById('clock');
const imgElement = document.getElementById('some');
const bttnEvent = document.getElementById('mybtn')


const modifyText = () => {
    console.log(bttnEvent)
}

const startClock = () => {
    if (bttnEvent.value == 'start') {
        bttnEvent.value = 'stop'
        bttnEvent.innerHTML = "Stop"
        const clockMove = setInterval(timer, 1000)

    }
    else {

        bttnEvent.value = 'stop'
        bttnEvent.innerHTML = 'Start'
        clearInterval(clockMove)
    }


}

const positions = [120, 60]
let step = 0
const setRotation = () => {
    //let step = 0

    const pendulum = document.getElementById('pendulum')

    pendulum.style.setProperty("--rotation", positions[step])
    step++

    if (step >= 2) {
        positions.reverse()
        step = 0

    }
}

const addKukuska = () => imgElement.outerHTML = ('<img id = "img" src="kukuska.png" alt="left">');

const timer = async () => {
    await new Promise((resolve) => {
        const date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = `0${hours}`;
        let mins = date.getMinutes();
        if (mins < 10) mins = `0${mins}`;
        let secs = date.getSeconds();
        if (secs < 10) secs = `0${secs}`;
        let timeAm = 'AM';
        if (hours > 12) {
            timeAm = 'PM';
        }
        if (hours == 0) {
            timeAm = 'AM';
        }
        // show time now
        const time = `${hours}:${mins}:${secs} ${timeAm} `;
        clock.innerHTML = time;

        // returning error when at the new hour

        if (secs == 0) {
            throw new Error("New hour")
        }
        resolve()

    })
        .then(resolve = () => {
            setRotation()
            setTimeout(setRotation, 1000)
        })

        .catch(() => {
            addKukuska();
            setTimeout(() => document.getElementById("img").remove(), 5000)
        })
}
//setInterval(timer, 1000)

modifyText()