import trabajo from "../images/icon-work.svg"
import mando from "../images/icon-play.svg"
import libro from "../images/icon-study.svg"
import run from "../images/icon-exercise.svg"
import chat from "../images/icon-social.svg"
import love from "../images/icon-self-care.svg"
const lista = []
const nuevatarjeta1 = {
    id: "1",
    hobby: "Work",
    hour: "32hrs",
    last: "36hrs",
    theme: "back-work",
    img: trabajo
}
lista.push(nuevatarjeta1)
const nuevatarjeta2 = {
    id: "2",
    hobby: "Play",
    hour: "10hrs",
    last: "8hrs",
    theme: "back-play",
    img: mando
}
lista.push(nuevatarjeta2)
const nuevatarjeta3 = {
    id: "3",
    hobby: "Study",
    hour: "4hrs",
    last: "7hrs",
    theme: "back-study",
    img: libro
}
lista.push(nuevatarjeta3)
const nuevatarjeta4 = {
    id: "4",
    hobby: "Exercise",
    hour: "4hrs",
    last: "5hrs",
    theme: "back-exercise",
    img: run
}
lista.push(nuevatarjeta4)
const nuevatarjeta5 = {
    id: "5",
    hobby: "Social",
    hour: "5hrs",
    last: "10hrs",
    theme: "back-social",
    img: chat
}
lista.push(nuevatarjeta5)
const nuevatarjeta6 = {
    id: "6",
    hobby: "Self Care",
    hour: "32hrs",
    last: "2hrs",
    theme: "back-self",
    img: love
}
lista.push(nuevatarjeta6)


export { lista }