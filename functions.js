function checkSIfun(x){
    var divcheck = document.getElementById("onetwo")
    if(x==0) {
        divcheck.innerHTML = `
        <div class="form-check">
            <input type="checkbox" id="first">
            <label class="form-check-label" for="first" id="one">1</label>
        </div>
        <div class="form-check">
            <input type="checkbox" id="second">
            <label class="form-check-label" for="second" id="two">2</label>
        </div>`
    }else{
        divcheck.innerHTML = ""
    }
}
function focusfun(){
    alert(document.getElementById("InputName").value.toUpperCase())
}
function enablebutton(){
    let input = document.getElementById("InputMail");
    let button = document.getElementById("button1");

    button.disabled = true; //setting button state to disabled

    input.addEventListener("change", stateHandle);

    function stateHandle() {
        if (document.getElementById("InputMail").value === "") {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}
function verificarPasswords(){
    pass1 = document.getElementById('InputPassword1');
    pass2 = document.getElementById('InputPassword2');
    if (pass1.value!=pass2.value){
        pass1.classList.add("error");
        pass2.classList.add("error");
    }
    if (pass1.value==pass2.value ) {
        pass1.classList.remove("error");
        pass2.classList.remove("error");
    }
}
