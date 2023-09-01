var onSwitch = document.getElementById('on-switch');
var offSwitch = document.getElementById('off-switch');
var room = document.body;

onSwitch.addEventListener('click', function () {
    room.style.backgroundColor = '#f7ffb3';

})

offSwitch.addEventListener('click', function () {
    room.style.backgroundColor = '#000000';
})
