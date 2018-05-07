const ballResponses = [
    "magic8BallResponses/1.jpg",
    "magic8BallResponses/2.jpg",
    "magic8BallResponses/3.jpg",
    "magic8BallResponses/4.jpg",
    "magic8BallResponses/5.jpg",
    "magic8BallResponses/6.jpg",
    "magic8BallResponses/7.jpg",
    "magic8BallResponses/8.jpg",
    "magic8BallResponses/9.jpg",
    "magic8BallResponses/10.jpg",
    "magic8BallResponses/11.jpg",
    "magic8BallResponses/12.jpg",
    "magic8BallResponses/13.jpg",
    "magic8BallResponses/14.jpg",
    "magic8BallResponses/15.jpg",
    "magic8BallResponses/16.jpg",
    "magic8BallResponses/17.jpg",
    "magic8BallResponses/18.jpg",
    "magic8BallResponses/19.jpg",
    "magic8BallResponses/20.jpg",
]

document.getElementById("askButton").onclick = function() {
    let randomNumber = Math.floor(Math.random() * 20)
    document.getElementById("magic8BallImage").src=ballResponses[randomNumber]
}