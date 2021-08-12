const para = document.getElementById('updateBtn');
const renewName = document.getElementsByClassName('renewName')[0];
renewName.addEventListener('change',renewNameFc);
para.addEventListener('click',pClick);
const nowName = document.getElementById('playerName');
function pClick() {
 nowName.innerHTML = renewName.value;
}
function renewNameFc() {
  nowName.innerHTML = renewName.value;
}