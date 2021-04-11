// alert("hey")

function result(country,first_date,second_date){
    if(country.value === "" || first_date.value === "" || second_date.value === ""){
        country.focus();
        alert("You can not submit enpty form")
    }
    else{
        printData(country.value,first_date.value,second_date.value)
            
    }
}


function printData(country,first_date,second_date){
    axios.get(`https://api.covid19api.com/country/${country}?from=${first_date}T00:00:00Z&to=${second_date}T00:00:00Z`)
    .then((res)=>{
        let data = res.data[0]

        const box = document.createElement("DIV")
        box.style.width = "300px"
        box.style.height = "100px"
        box.style.backgroundColor = "blue"
        box.style.color = "white"
        box.style.textAlign = "center"
        box.style.padding = "5px"
        box.style.marginTop = "10px"
        box.style.marginLeft = "15%"
        let op = `<h5>Confirmed Cases :${data.Confirmed}</h5><h5>Active Cases : ${data.Active}</h5><h5>Death Cases : ${data.Deaths}</h5>`
        box.innerHTML = op
        document.getElementById("res").appendChild(box)
    })
}