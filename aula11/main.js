document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
});

//localStorage.clear();
/*
function checkLogin(){
    sessionStorage.setItem('login', 'admin');
    sessionStorage.setItem('password', '123');

}

function ler(){
    var login = sessionStorage.getItem('login');
    var password = sessionStorage.getItem('password');

    console.log(login, password);
}
*/
if(localStorage.getItem('login') && localStorage.getItem('password')){
    document.querySelector('#login').value = localStorage.getItem('login');
    document.querySelector('#password').value = localStorage.getItem('password');
}

function checkLogin(){
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;

    if(login == 'admin' && password == '123456'){
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);

        window.location.href = 'home.html';
    }else{
        document.querySelector('#mensagem').innerHTML = 'Login ou senha inválidos';
    }
}