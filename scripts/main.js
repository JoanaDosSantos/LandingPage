setCronometro()

setInterval(() => {
    setCronometro()
}, 1000);

function setRelogio(){
    nowTime = new Date;
    horaElement = document.getElementById('hora')
    dataElement = document.getElementById('data')

    dia = nowTime.getDate()
    mes = nowTime.getMonth() + 1
    nowTime.getUTCHours() > 3 ? hora = nowTime.getUTCHours()-3 : verificaUTC()
    minuto = nowTime.getUTCMinutes()
    segundo = nowTime.getUTCSeconds()

    dia = addZeroToDateTime(dia)
    mes = addZeroToDateTime(mes)
    hora = addZeroToDateTime(hora)
    minuto = addZeroToDateTime(minuto)
    segundo = addZeroToDateTime(segundo)
    
    horaElement.innerText = `${hora}:${minuto}:${segundo}`
    dataElement.innerText = `${dia}/${mes}/${nowTime.getFullYear()}`
}

function addZeroToDateTime(element){
    var rtrn;
    element < 10 ? rtrn = '0' + element.toString() : rtrn = element

    return rtrn;
}

function verificaUTC(){
    if(nowTime.getUTCHours() == 0){ hora = 21 }
    else if(nowTime.getUTCHours() == 1){ hora = 22 }
    else if(nowTime.getUTCHours() == 2){ hora = 23 }
}

function setCronometro(){
    nowTime = new Date;
    cronometro = document.getElementById('cronometroCounter')

    dia = nowTime.getDate()
    mes = nowTime.getMonth() + 1
    nowTime.getUTCHours() > 3 ? hora = nowTime.getUTCHours()-3 : verificaUTC()
    minuto = nowTime.getUTCMinutes()
    segundo = nowTime.getUTCSeconds()

    dia = addZeroToDateTime(dia)
    mes = addZeroToDateTime(mes)
    hora = addZeroToDateTime(hora)
    minuto = addZeroToDateTime(minuto)
    segundo = addZeroToDateTime(segundo)

    anoTarget = '2021'
    mesTarget = '07'
    diaTarget = '25'
    horaTarget = '23'
    minutoTarget = '59'
    segundoTarget = '00'

    anoLeft = Number(anoTarget) - Number(nowTime.getFullYear())
    mesLeft = Number(mesTarget) - Number(mes)
    diasLeft = Number(diaTarget) - Number(dia)
    horaLeft = Number(horaTarget) - Number(hora)
    minutoLeft = Number(minutoTarget) - Number(minuto)
    segundoLeft = Number(segundoTarget) - Number(segundo)

    segundoLeft < 0 ? segundoLeft = 60 + segundoLeft : null

    mesLeft = addZeroToDateTime(mesLeft)
    diasLeft = addZeroToDateTime(diasLeft)
    horaLeft = addZeroToDateTime(horaLeft)
    minutoLeft = addZeroToDateTime(minutoLeft)
    segundoLeft = addZeroToDateTime(segundoLeft)


    if(anoTarget < nowTime.getFullYear() || (mesTarget < mes && anoTarget >= nowTime.getFullYear()) || 
        (diaTarget < dia && mesTarget >= mes && anoTarget >= nowTime.getFullYear())){
            cronometro.innerHTML = `Data Expirada `
    }

    else if(anoTarget > nowTime.getFullYear()){
        cronometro.innerHTML = `Nossas promoções duram até: <br>${anoLeft} Ano ${mesLeft} Mês ${diasLeft} Dias, ${horaLeft}:${minutoLeft}:${segundoLeft}`
    }

    else if(anoTarget == nowTime.getFullYear()){
        if(mesTarget > mes){
            cronometro.innerHTML = `Nossas promoções duram até: <br>${mesLeft} Mês ${diasLeft} Dias, ${horaLeft}:${minutoLeft}:${segundoLeft}`
        }
        else if(mesTarget == mes){
            if(diaTarget > dia){
                cronometro.innerHTML = `Nossas promoções duram até: <br>${diasLeft} Dias, ${horaLeft}:${minutoLeft}:${segundoLeft}`
            }
            else if(diaTarget == dia){
                cronometro.innerHTML = `Nossas promoções duram até: <br>${horaLeft}:${minutoLeft}:${segundoLeft}`
            }
        }

    }
}

function notify(){
    email = document.getElementById('inpEmail')
    window.alert(`Email enviado para ${email.value}!`)
}