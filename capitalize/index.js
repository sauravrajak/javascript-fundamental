const userName = document.getElementById('name');
const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
 const justName = userName.value;
 justName[0] === justName[0].toUpperCase() ? console.log(justName) : console.log(justName[0].toUpperCase() + justName.slice(1, justName.length))
})




