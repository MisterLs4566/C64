class Controller {
    constructor() {
        
    }
    updateOutput() {
        var input0 = document.getElementById("input0");
        if(input0 != null) {
            input0.value = document.getElementById("input1").value;
        }
    }
}

controller = new Controller();