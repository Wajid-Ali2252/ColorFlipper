let colors=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','f'];
let btn=document.getElementById('btn');
let color=document.querySelector('.color');

btn.addEventListener('click',function()
{
   let hexColor="#";
   for(let i=0;i<6;i++)
   {
    hexColor+=colors[ran_hex_color()];
   }
   color.textContent=hexColor;
   document.body.style.backgroundColor=hexColor;
})

function ran_hex_color()
{
    return Math.floor(Math.random()*colors.length);
}
