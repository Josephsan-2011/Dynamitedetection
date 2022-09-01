img = ""
status1 = ""
objects = []
img1=""
function preload() {
    //img = loadImage("dog_cat.jpg")
    img = loadImage("fruit.jpeg")
}

function setup() {
    canvas = createCanvas(380, 380)
    v1=createCapture(VIDEO)
    v1.size(380,380)
    v1.hide()
    canvas.center()
}
function start() {
    objDetector = ml5.objectDetector("cocossd", model_loaded)
    document.getElementById("status").innerHTML = "status= detecting objects"
}
function draw() {
    image(v1, 0, 0, 390, 380)
    if (status1 != "") {
        objDetector.detect(v1, got_results)
        r=random(255)
        g=random(255)
        b=random(255)
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML = "status= object detecting"
            document.getElementById("numberOfObjects").innerHTML = "Number Of Objects Is Detecting "+ objects.length
            fill(r,g,b)
            percent = floor(objects[index].confidence * 100)
            text(objects[index].label + " " + percent + "%", objects[index].x, objects[index].y)
            noFill()
            stroke(r,g,b)
            rect(objects[index].x, objects[index].y, objects[index].width, objects[index].height)
        }
    }
}

function gotof() {

    window.location.href = "fruits.html"
    img1="fruit.jpeg"
}

function gotoc() {

    window.location.href = "city.html"
    img1="city.jpeg"
}
function gotofarm() {

    window.location.href = "farm.html"
    img1="https://grist.org/wp-content/uploads/2022/02/USDA-CRP-cows-farm-e1644361600714.jpg"
}
function gotor() {

    window.location.href = "room.html"
    img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgFKtD_-EEZNfuOuOyZzCFXIG7ZR23aILbYavF09kiJTmv3fjYlci7-A_eewjoEWzY9c&usqp=CAU"
}

function model_loaded() {
    console.log("Model Is Loaded")
    status1 = true;
    objDetector.detect(v1, got_results)
}

function got_results(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }

}