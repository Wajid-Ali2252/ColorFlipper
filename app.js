const colors=['green','red','#f4f4f4','#000'];
let btn=document.getElementById('btn');
let color=document.querySelector('.color');

btn.addEventListener('click', function()
{ 
   let random_color=get_ran_num();
    document.body.style.backgroundColor=colors[random_color];
  color.textContent=colors[random_color];
});
function get_ran_num()
{
    return Math.floor(Math.random()*colors.length);
}
