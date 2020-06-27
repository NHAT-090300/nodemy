document.getElementById('btn').addEventListener('click', ()=> {
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    
    if(!userName) {
        alert('userName khong co gia tri');
        return;
    } 
    if(password.length < 8) {
        alert('password phai co nhieu hon 8 ki tu');
        return;
    }
    alert('ban da dang nhap thanh cong');
});

let user = document.getElementById('user')
let typing;
user.addEventListener('keyup', () => {
    clearTimeout(typing);
    typing = setTimeout(()=> {
        console.log(user.value);
    }, 1000);
});