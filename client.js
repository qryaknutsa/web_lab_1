let input = document.getElementById("y")
let x = 0;
let y = 0;
let r = 0;
let flag = true;
let button = document.getElementById("send");
let cookies_data="";

function put_r(id){
    r = document.getElementById(id).value;
	if(r == 1) {
        document.getElementById("r1").classList.add('active')
        document.getElementById('r2').classList.remove('active')
        document.getElementById('r3').classList.remove('active')
        document.getElementById('r4').classList.remove('active')
        document.getElementById('r5').classList.remove('active')
    }
    if(r == 2) {
        document.getElementById("r1").classList.remove('active')
        document.getElementById('r2').classList.add('active')
        document.getElementById('r3').classList.remove('active')
        document.getElementById('r4').classList.remove('active')
        document.getElementById('r5').classList.remove('active')
    }
    if(r == 3) {
        document.getElementById("r1").classList.remove('active')
        document.getElementById('r2').classList.remove('active')
        document.getElementById('r3').classList.add('active')
        document.getElementById('r4').classList.remove('active')
        document.getElementById('r5').classList.remove('active')
    }
    if(r == 4) {
        document.getElementById("r1").classList.remove('active')
        document.getElementById('r2').classList.remove('active')
        document.getElementById('r3').classList.remove('active')
        document.getElementById('r4').classList.add('active')
        document.getElementById('r5').classList.remove('active')
    }
    if(r == 5) {
        document.getElementById("r1").classList.remove('active')
        document.getElementById('r2').classList.remove('active')
        document.getElementById('r3').classList.remove('active')
        document.getElementById('r4').classList.remove('active')
        document.getElementById('r5').classList.add('active')
    }
}


function put_x(id){
	x = document.getElementById(id).value;
	if(x == -4) {
        document.getElementById("xn4").checked = true;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == -3) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = true;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == -2) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = true;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == -1) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = true;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == 0) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = true;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == 1) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = true;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == 2) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = true;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = false;
    }
	if(x == 3) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = true;
        document.getElementById("x4").checked = false;
    }
	if(x == 4) {
        document.getElementById("xn4").checked = false;
		document.getElementById("xn3").checked = false;
        document.getElementById("xn2").checked = false;
        document.getElementById("xn1").checked = false;
		document.getElementById("x0").checked = false;
		document.getElementById("x1").checked = false;
        document.getElementById("x2").checked = false;
        document.getElementById("x3").checked = false;
        document.getElementById("x4").checked = true;
    }
}

function put_y(){
	if(!/^-?\d+([.,])?\d*$/i.test(input.value)){
		alert("Некорректные данные.");
		input.value = "";
		flag = false;
	}else if(input.value.replace(/[,]/,".") >= -3 && input.value.replace(/[,]/,".") <= 3){
		if(/([.,])$/i.test(input.value)){
			alert("Некорректные данные.");
			input.value = "";
			flag = false;
		}else{
			y = input.value.replace(/[,]/,".");
			flag = true;
		}
	}else if(/([.,])$/i.test(input.value)) {
		alert("Некорректные данные.");
		input.value = "";
		flag = false;
	}else{
		alert("Введите Y в пределах [-3;3]");
		flag = false;
	}
}

function add_result() {
    let table = document.getElementById("result");
    let data = Cookies.get("data");
    let input = "";
    if(data !== undefined && data !== "") {
        let arr_data = data.split("/");
        for (let i = 0; i < arr_data.length - 1; i++) {
            let mass_value = arr_data[i].split(";");
            input += "<tr>"
            for (let j = 1; j < mass_value.length; j++) {
                input += "<td>"
                input += mass_value[j];
                input += "</td>"
            }
            input += "</tr>"
        }
        table.innerHTML = input;
    }
}


const textY = document.querySelector('#y');
textY.addEventListener('keydown', function(event) {
    if (event.code === 'Enter')
    {
        event.preventDefault();
        put_y();
        if(flag) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if(Cookies.get('data') !== undefined) {
                        cookies_data = Cookies.get('data');
                    }
                    if(xhr.responseText.split("/")[0].split(";")[0] === ""){
                        alert("Некорректные данные.")
                    }
                    else{
                        cookies_data += xhr.responseText;
                    }
                    Cookies.set("data", cookies_data);
                    add_result();
                }
            }

            var data = {x_coor: x, y_coor: y, r_coor: r};
            console.log(JSON.stringify(data));
            xhr.open('POST', 'server.php', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }
});

button.onclick = function() {
	put_y();
	if(flag) {
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if(Cookies.get('data') !== undefined) {
					cookies_data = Cookies.get('data');
				}
				if(xhr.responseText.split("/")[0].split(";")[0] === ""){
					alert("Некорректные данные. 4")
				}
				else{
					cookies_data += xhr.responseText;
				}
				Cookies.set("data", cookies_data);
				add_result();
			}
		}

		var data = {x_coor: x, y_coor: y, r_coor: r};
		console.log(JSON.stringify(data));
		xhr.open('POST', 'server.php', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(data));
	}
}



	