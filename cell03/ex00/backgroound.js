const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  document.body.style.backgroundColor = changeC();
});

function changeC() { 
  var x = Math.floor(Math.random()  
 *256),
    y = Math.floor(Math.random() * 256),
    z = Math.floor(Math.random() * 256);

  return "rgb(" + x  
 + "," + y + "," + z + ")";
};