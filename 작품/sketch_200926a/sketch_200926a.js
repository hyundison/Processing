let size = 5;

function setup() {
  createCanvas(1000, 937);
  


  for(let i=0; i<1000; i+=size){
    for(let j=0; j<1000; j+=size){
        let red = int(random(0, 256));
        let green = int(random(0, 256));
        let blue = int(random(0, 256));
  
  fill(red, green, blue);
      rect(i, j, size, size);
    }           
  }
}


function draw() {

}
