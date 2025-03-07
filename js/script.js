let night = document.querySelector('#night');
let day = document.querySelector('#morning');
let checkbox = document.getElementsByName('checkbox');

checkbox[0].addEventListener('change',function(){
    if(this.checked){
        night.style.display = 'none';
        day.style.display = 'block';
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }else{
        night.style.display = 'block';
        day.style.display = 'none';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});