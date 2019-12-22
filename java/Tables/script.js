function GenTable() {
    let rows = document.getElementById('form').children[0].value;
    let columns = document.getElementById('form').children[1].value;
    document.getElementById('tab').innerHTML += '<table id="table"><tbody id="tbody"></tbody></table>';
    for (let i = 0; i < rows; i++){
        document.getElementById('tbody').innerHTML += '<tr></tr>';
        for (let j = 0; j < columns; j++){
            document.getElementById('tbody').children[i].innerHTML += '<td><form><input type="text" placeholder="Введите текст"><input type="button" value="Сохранить" onclick="WriteSmth(' + i + ', ' + j + ')"><form></td>';
        }
    }
    document.getElementById('Def').removeChild(document.getElementById('form'));
    for (let k = 0; k < 5; k++){
        document.getElementById('Def').innerHTML += '<div class="funcs"></div>';
    }
    localStorage.setItem('rows', rows);
    localStorage.setItem('columns', columns);
}

function GenDefs(){
    document.getElementById('Def').children[1].innerHTML += '<form id="CF"><input type="text" id="CT" placeholder="Введите ширину" oninput="SwitchButtonText()"><select oninput="SwitchButtonText()"><option disabled selected>стандартный</option><option>hidden</option><option>dotted</option><option>dashed</option><option>solid</option></select><input id="CB" type="button" onclick="SwitchTableWidth()" value="Поменять ширину и стиль рамки!"></form><br>';  
    document.getElementById('Def').children[2].innerHTML += '<input type="button" onclick="Gen_Header()" value="Создать заголовок"><br><br>';
    document.getElementById('Def').children[3].innerHTML += '<input type="button" onclick="Del_Table()" value="Удалить таблицу">';
	document.getElementById('Def').children[0].innerHTML += '<input type="button" onclick="RandTheTable()" value="Magic"><br><br>';
}

function WriteSmth(row, column) {
    let I_Cell = document.getElementById('tbody').children[row].children[column];
    let Remove = I_Cell.children[0];
    let S_Input = Remove.children[0].value;
    I_Cell.removeChild(Remove);
    I_Cell.innerHTML += '<p>' + S_Input + '</p>';
}

function RandTheTable(){
    let R_Int = Random_Int(5);
    let Rand_Row = Random_Int(localStorage.getItem('rows'));
    let Rand_Col = Random_Int(localStorage.getItem('columns'));
    let Rand_Cell = document.getElementById('tbody').children[Rand_Row].children[Rand_Col].firstChild;
    switch (R_Int){
        case 1:
            let BGC1 = Random_RGB(), BGC2 = Random_RGB(), BGC3 = Random_RGB();
            Rand_Cell.style = 'background-color: rgb('+BGC1+','+BGC2+','+BGC3+');';
        break;
        case 2:
            let RGB1 = Random_RGB(), RGB2 = Random_RGB(), RGB3 = Random_RGB();
            Rand_Cell.style = 'color: rgb('+RGB1+','+RGB2+','+RGB3+');';
        break;
        case 3:
            let Font_Size = Math.floor(Math.random() * 11) + 15;
            Rand_Cell.style = 'font-size: '+Font_Size+'px;';
        break;
        case 4:
            Rand_Cell.parentNode.innerHTML += '<form><input type="text" placeholder="Введите текст" value="Поставьте 4, пожалуйста"><input type="button" ///value="Сохранить" onclick="WriteSmth(' + Rand_Row + ', ' + Rand_Col + ')"><form>';
            document.getElementById('tbody').children[Rand_Row].children[Rand_Col].firstChild.remove();
        break;
    }
}

function SwitchTableWidth() {
    document.getElementById('table').style = 'width: ' + document.getElementsByTagName('select')[0].previousSibling.value + 'px; border: 2px ' + document.getElementsByTagName('select')[0].value + ' black;';
}

function Gen_Header() {
    document.getElementById('table').innerHTML = '<caption>Вы создали заголовок!<caption>' + document.getElementById('tbody').innerHTML;
}

function Del_Table(){
    document.getElementById('Def').innerHTML = '<form id="form"><input name="rows" type="text" placeholder="Количество строк"><input name="columns" type="text" placeholder="Количество колонок"><input type="submit" onclick="GenTable(),GenDefs()" value="Создать еще одну таблицу!"></form>';
    document.getElementById('tab').innerHTML = '';
}


function Random_Int(max_int) {
    return Math.floor(Math.random() * Math.floor(max_int));
}

function Random_RGB() {
    return Math.floor(Math.random() * 255);
}

function SwitchButtonText() {
    let val1 = document.getElementById("CT").value;
    let val2 = document.getElementsByTagName("select")[0].value;
    document.querySelector('#CF [type="button"]').value = "Применить ширину: " + val1 + " и применить стиль: " + val2 + "!";
}