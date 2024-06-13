const lightbulbswitch = document.querySelector('#lightbulb-switch');
const lightbulbimage = document.querySelector('#lightbulb-image');
console.log(lightbulbimage)

let islighbulbon = false;

lightbulbswitch.addEventListener('click', function() { 
    if (islighbulbon){ 
        lightbulbimage.src = 'off.png'
        islighbulbon = false;
    } else { 
        lightbulbimage.src = 'on.png'
        islighbulbon = true;
        } 
      console.log(islighbulbon)
        } )

