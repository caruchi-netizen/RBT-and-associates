
function calc(){
let a=parseFloat(document.getElementById('amt').value||0);
let r=parseFloat(document.getElementById('rate').value||0);
let gst=a*r/100;
document.getElementById('result').innerHTML='GST: ₹'+gst.toFixed(2)+' | Total: ₹'+(a+gst).toFixed(2);
}
