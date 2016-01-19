function func() {
if(document.getElementById('f_v').value > 0 && document.getElementById('s_v').value > 0 && document.getElementById('s_v').value != document.getElementById('f_v').value) { if(document.getElementById('ch_b').checked){  alert(Math.sqrt((document.getElementById('f_v').value)*(document.getElementById('f_v').value)+(document.getElementById('s_v').value)*document.getElementById('s_v').value));}else{alert(Math.sqrt(Math.abs((document.getElementById('f_v').value)*(document.getElementById('f_v').value)-(document.getElementById('s_v').value)*(document.getElementById('s_v').value))));}}else{alert('Error, my Master')}
}
window.onload = function() {
     document.getElementById('sub').onclick=func;
}