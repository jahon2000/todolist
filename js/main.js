
let summa = 0;

let tables = [];

function buttonCheck() {

    let name = document.getElementById("name").value;
    summa = parseInt(document.getElementById("summa").value);

    let helloName = "";

    if (name.length > 0 && summa != 0){
        helloName =
            "<div class='card'>"+
            "<h4 class='text-center'>Salom"+' ' + name +"</h4>" +
            "<h5 class='my-5 text-center' id='totalSumm'>"+ summa +" so'm</h5>" +
            "<div class='d-flex justify-content-around'>" +
            "<select name='' id='kirmchiqm' class='form-control mt-4'>" +
                "<option value='kirim'>Kirim</option>" +
                "<option value='chiqim'>Chiqim</option>" +
            "</select>" +
            "<button class='btn btn-info mt-4' type='button' onclick='kirimChiqim()'>Boshla</button>" +
            "</div>" +
            "<table class='table mt-4 table-bordered table-hover table-striped'>" +
            "<thead>" +
            "<tr>" +
                "<th>№</th>" +
                "<th>Sababi</th>" +
                "<th>Summa</th>" +
                "<th>Turi</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody id='result2'>" +

            "</tbody>" +
            "</table>" +
        "</div>";

        document.getElementById("yuqol").classList.add("d-none");
    }else {
        alert("Malumotlarni to'ldiring")
    }

    document.getElementById("result").innerHTML = helloName;

}

function kirimChiqim() {

    let kirimVaChiqim = "";

    kirimVaChiqim =
        "<input type='number' class='form-control' id='pul' placeholder='how much money'>"+
        "<input type='text' class='form-control my-4' id='ism' placeholder='pulni qayerdan oldingiz'>" +
        "<button type='button' class='btn btn-info d-block ml-auto' onclick='kirimChiqimTable()'>+Add</button>";

    document.getElementById("kirimChiqim").innerHTML = kirimVaChiqim;
    document.getElementById("kirimChiqim").classList.remove("d-none");

}

function chiqim() {
    let chiqim = "";

    chiqim =
        "<input type='number' class='form-control' id='pul' placeholder='how much money'>"+
        "<input type='text' class='form-control my-4' id='ism' placeholder='pulni qayerga sariflisiz'>" +
        "<button type='button' class='btn btn-info d-block ml-auto' onclick='kirimChiqimTable()'>+Add</button>";

    document.getElementById("kirimChiqim").innerHTML = chiqim;
}

function kirimChiqimTable() {

        let soqqa = document.getElementById("pul").value;
        let sabab = document.getElementById("ism").value;

        let newTable = {
            pullar: soqqa,
            sabablar: sabab,
            type : document.getElementById("kirmchiqm").value
        };

        tables.push(newTable);
        if (newTable.type === 'kirim') summa = summa +  parseInt(newTable.pullar);
        else summa = summa - parseInt(newTable.pullar)


        document.getElementById('totalSumm').innerHTML = "<h5 class='my-5 text-center' id='totalSumm'>"+ summa +" so'm</h5>";
        console.log(summa);
        console.log(tables);

        drowTable();




    document.getElementById("pul").value = "";
    document.getElementById("ism").value = "";

    document.getElementById("kirimChiqim").classList.add("d-none");

    console.log(chiqimsumm);
    console.log(kirimsumm);

}

function drowTable() {
    let result2 = "";

    for (let i = 0;i < tables.length; i++){
        result2 +=
            "<tr>" +
            "<td>"+ (i+1) +"</td>" +
            "<td>"+ tables[i].sabablar +"</td>" +
            "<td>"+ tables[i].pullar +"</td>" +
            "<td>"+ tables[i].type +"</td>" +
            "</tr>"
    }

    document.getElementById("result2").innerHTML = result2;

}