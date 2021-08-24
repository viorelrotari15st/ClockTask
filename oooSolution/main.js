

class Clock {
    constructor() {
        this.state = true
        this.positions = [120, 60]
        this.step = 0
    }

    setRotation = () => {
        const pendulum = document.getElementById('pendulum')

        pendulum.style.setProperty("--rotation", this.positions[step])
        this.step++

        if (this.step >= 2) {
            positions.reverse()
            this.step = 0

        }
    }
     addKukuska = () =>{
         const imgElement = document.getElementById('some')
         imgElement.outerHTML = ('<img id = "img" src="kukuska.png" alt="left">')};



    timer = () => {
        new Promise((resolve) => {
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
            const clock = document.getElementById('clock');
            clock.innerHTML = time;
    
            // returning error when at the new hour
    
            if (secs == 0) {
                throw new Error("New hour")
            }
            resolve()
    
        })
            .then(resolve = () => {
                this.setRotation()
                setTimeout(this.setRotation, 1000)
            })
    
            .catch(() => {
                this.addKukuska();
                setTimeout(() => document.getElementById("img").remove(), 5000)
            })
    }
    start = () => setInterval(this.timer, 1000)
}