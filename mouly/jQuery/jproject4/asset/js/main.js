console.clear()

const canvas = document.querySelector('.main')
const para = document.querySelector('p')
const speedVal = document.querySelector('.speed-val')
const wheelVal = document.querySelector('.wheel-val')
const lineVal = document.querySelector('.line-val')
const opacityVal = document.querySelector('.opacity-val')
let wheelCount = 3
let rose

// encapsulated code
const Gilloche = (canvas) => {
  // A variable defined in a factory or constructor function scope
  // is private to that function.
  let ctx = canvas.getContext('2d');
  let cw = canvas.width = window.innerWidth;
  let ch = canvas.height = window.innerHeight;
  let wheels = []
  let lastX = 0
  let lastY = 0
  let scale = 1
  let animFrame = 0
  let speed = 750
  let lineWidth = 1
  let opacity = 0.2
  let hue = Math.floor(Math.random() * 360)
  let lum = Math.random()
  let hueStep = 0.00001 + Math.random()/5000
  let lumStep = 0.000005 + Math.random()/100000
  let colorCount = 0
  let drawColor = ''
  let currentColor
  let nextColor
  
  // private methods 
  const wrnd = (min,max) => {
    let acc = 8 ** (Math.random() - 1)
    return min + Math.floor((max - min + 1) * acc)
  }
  const rnd = (min = 0, max = 1) => min + Math.floor(Math.random()*(1+max-min))
  const sign = () => Math.round(Math.random()) * 2 - 1
  
  const drawFrame = () => {
    let x = 0
    let y = 0
    let l = 50+(Math.sin(+lum)*20)
    ctx.save()
    ctx.translate(cw/2,ch/2)
    ctx.strokeStyle = drawColor
    let pen = getPen()
    ctx.beginPath()
    ctx.moveTo(lastX,lastY)
    ctx.lineTo(pen.x,pen.y)
    ctx.stroke()
    lastX = pen.x
    lastY = pen.y
    ctx.restore()
  }
  
  const getPen = () => {
    let x = 0
    let y = 0
    wheels.forEach( (w,i) => {
      x += Math.sin(w.rot)*+w.l
      y += Math.cos(+w.rot)*w.l
      w.rot+=w.r
    })
    return {x:x*scale,y:y*scale}
  }
  
  const animate = () => {
    drawFrames(speed)
    animFrame = window.requestAnimationFrame(animate)
  }
  
  const getColor = () => {
    return {
      hue:rnd(0,360), 
      sat:rnd(30,60), 
      lum: rnd(30,70)
    }
  }
  
  const drawFrames = (count=50) => {
    for(let i = 0;i<count;i++) {
      updateColor(currentColor, nextColor, colorCount/70000)
      drawFrame()
    }
  }
  
  const updateColor = (color1, color2, percent) => {
    colorCount++
    if(percent >= 1) {
      colorCount = 0
      currentColor = nextColor
      nextColor = getColor()
    }
    let delta = {
      hue: color2.hue - color1.hue,
      sat: color2.sat - color1.sat,
      lum: color2.lum - color1.lum,
    }
    let hue = color1.hue + (delta.hue * percent)
    let sat = color1.sat + (delta.sat * percent)
    let lum = color1.lum + (delta.lum * percent)
    drawColor = `hsla(${hue},${sat}%,${lum}%,${opacity})`
  }
  
  const addWheel = () => {
    let mag = rnd(1,(wheels.length%3))
    wheels.push(
      {
        l: (2 ** rnd(1,5)) * sign(),
        // l: (rnd(0,8) ** rnd(1,3)) * sign(),
        r: rnd(1,720) * (Math.PI / 180000) * sign(),
        rot: rnd(1,360) * (Math.PI / 180) * sign(),
      }
    )    
  }
  
  const init = () => {
    window.cancelAnimationFrame(animFrame)
    animFrame = 0
    colorCount = 0
    currentColor = getColor()
    nextColor = getColor()
    console.log(document.body.offsetWidth,document.body.offsetHeight)
    let maxDim = Math.min(document.body.offsetWidth,document.body.offsetHeight)
    ctx = canvas.getContext('2d');
    cw = canvas.width = maxDim;
    ch = canvas.height = maxDim;
    wheels = []
    ctx.clearRect(0,0,cw,ch)
    // ctx.fillStyle = '#101113'
    // ctx.fillRect(0,0,cw,ch)
    ctx.lineWidth = lineWidth
  }

  const addWheels = count => {
    for(let i = 0;i<count;i++) {
      addWheel()
    }
    wheels.sort((a, b) => b.l - a.l)
    // wheels.reverse()
    let maxR = wheels.reduce((total, currentEl) => +total + Math.abs(currentEl.l),[])
    let disR = Math.min(cw,ch)/2
    scale = disR/maxR
    let pen = getPen()
    lastX = pen.x
    lastY = pen.y
  }

  
  return ({
    // Any other functions defined in the same scope are privileged:
    // These both have access to the private `count` variable
    // defined anywhere in their scope chain (containing function
    // scopes).
    addWheels: addWheels,
    init: init,
    start: animate,
    setSpeed: val => speed = val,
    setLine: val => lineWidth = val,
    setOpacity: val => opacity = val,
  });
};

const init = () => {
  rose = Gilloche(canvas)
  draw()
}

const draw = () => {
  rose.init()
  rose.addWheels(wheelCount)
  rose.setSpeed(speed.value)
  rose.start()
}

const setSpeed = val => {
  speedVal.innerHTML = val
  rose.setSpeed(val)
}

const setLineWidth = val => {
  lineVal.innerHTML = val
  rose.setLine(val)
  draw()
}

const setOpacity = val => {
  opacityVal.innerHTML = val
  rose.setOpacity(val)
  draw()
}

const setWheels = val => {
  wheelVal.innerHTML = val
  wheelCount = val
  draw()
}

init();

window.onresize = draw
window.ondblclick = draw