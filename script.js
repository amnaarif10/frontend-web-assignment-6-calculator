function number(num)
{
    document.getElementById('show').innerHTML+=num
}

function cleared(){
    document.getElementById('show').innerHTML=''
}

function action(_b){
     document.getElementById('show').innerHTML+=_b

}

function equal() {
    let display = document.getElementById('show')
    display.innerHTML = eval(display.innerHTML);
}

function clearone(){
    let remove = document.getElementById('show')
    remove.innerHTML = remove.innerHTML.slice(0, -1)
}