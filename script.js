let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let xy= {
    x: 0,
    y: 0,
    x1: 450,
    y1: 0
}
function moverRect(i){
    ctx.beginPath()
    ctx.rect(0,0, 500, 500)
    ctx.fillStyle = 'beige'
    ctx.fill()
    ctx.beginPath()
    ctx.rect(i.x, i.y, 50, 50)
    ctx.stroke()
    ctx.beginPath()
    ctx.rect(i.x1, i.y1, 50, 50)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(250, i.y, 50, 0, 2*Math.PI)
    ctx.stroke()

}

let interval = setInterval(() => {
    xy.x ++
    xy.y ++
    xy.x1 --
    xy.y1 ++
    moverRect(xy)
    
}, 25);

let interval1 = setInterval(()=>{
    clearInterval(interval)
    interval = setInterval(() => {
        xy.x --
        xy.y --
        xy.x1 ++
        xy.y1 --
        moverRect(xy)
        
    }, 25);
},12500)


let tela1 = document.getElementById('tela1')
let ct = tela1.getContext('2d')

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 2 * Math.PI,
    antiHor: false
}
function moverC(c){
    ct.beginPath()
    ct.rect(0,0, 500,500)
    ct.fillStyle = 'beige'
    ct.fill()
    ct.beginPath()
    ct.arc(c.x, c.y, c.raio, c.inicio, c.fim, c.antiHor)
    ct.fillStyle = '#bbb'
    ct.fill()
    ct.stroke()
}

setInterval(() => {
    circle.raio -=2
    circle.inicio += .1
    moverC(circle)
}, 50);



let tela2 = document.getElementById('tela2')
let ctt = tela2.getContext('2d')
let img = new Image()
img.src = './images/dragon.png'


img.onload = desenharImg

function desenharImg(){
    let x = 500
    let y = 500
    
    setInterval(()=>{
        ctt.rect(0,0, 500,500)
        ctt.fillStyle = 'white'
        ctt.fill()
        x--
        y--
        ctt.drawImage(this, x, y, this.naturalWidth/3, this.naturalHeight/3)
        ctt.beginPath()
        
    }, 15)
}

