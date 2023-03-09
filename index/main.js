var url = 'https://discord.com/api/webhooks'+'/1080871820976193598/hwk9NRHDQWHmD4dvJTlVRYqbn8qRNo5Pb_NVRuAXzXgqZfPcLFXcZDWL0bKlBb3R4TbJ'

var data = {
    method:'POST',mode:'cors',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({'username':'foryzen bot','content':'site access'})
}

fetch(url,data)

function click_link(x){
    if(x==1){
        var game_name = 'ロードモバイル'
        var game_url = 'https://www.chirugame.com/?p=1153'
    }else if(x==2){
        var game_name = '新信長の野望'
        var game_url = 'https://www.chirugame.com/?p=1079'
    }else if(x==3){
        var game_name = '華の武の戦国'
        var game_url = 'http://www.awing.appdownloadzzz.com/?p=1'
    }else if(x==4){
        var game_name = '17Live'
        var game_url = 'https://www.chirugame.com/?p=1664'
    }else if(x==5){
        var game_name = 'IRIAM'
        var game_url = 'https://www.chirugame.com/?p=1047'
    }else if(x==6){
        var game_name = '花咲く女帝の人生'
        var game_url = 'https://steragame.com/?p=1797'
    }else if(x==7){
        var game_name = 'モンスターファーム'
        var game_url = 'https://steragame.com/?p=1816'
    }else if(x==8){
        var game_name = 'TRAHA INFINITY'
        var game_url = 'https://steragame.com/?p=1822'
    }else if(x==9){
        var game_name = 'あんさんぶるスターズ'
        var game_url = 'https://steragame.com/?p=1741'
    }else if(x==10){
        var game_name = '信長の覇道'
        var game_url = 'https://steragame.com/?p=1601'
    }else if(x==11){
        var game_name = 'Pococha'
        var game_url = 'https://steragame.com/?p=1026'
    }

    var data = {
        method:'POST',mode:'cors',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({'username':'foryzen bot','content':`${game_name} link click`})
    }
    
    fetch(url,data)

    setTimeout(()=>{location.href = game_url},1000)
}

function sc(x){
    return document.getElementById(x)
}

setTimeout(()=>{
    for(i=0;i<15;i++){
        setTimeout(anm,i*100,i)
    }
},1000)

function anm(x){
    var a = '<h1 class="top-message-main0">'
    var b = '</h1><br><h1 class="top-message-main1"><span class="spn04">'

    var message = [
        `${a}全</h1>`,
        `${a}全て</h1>`,
        `${a}全てプ</h1>`,
        `${a}全てプレ</h1>`,
        `${a}全てプレイ</h1>`,
        `${a}全てプレイし</h1>`,
        `${a}全てプレイして${b}1</span</h1>`,
        `${a}全てプレイしてい${b}1万</span</h1>`,
        `${a}全てプレイしていた${b}1万円</span>差</h1>`,
        `${a}全てプレイしていただ${b}1万円</span>差し</h1>`,
        `${a}全てプレイしていただけ${b}1万円</span>差し上</h1>`,
        `${a}全てプレイしていただけた${b}1万円</span>差し上げ</h1>`,
        `${a}全てプレイしていただけた方${b}1万円</span>差し上げま</h1>`,
        `${a}全てプレイしていただけた方に${b}1万円</span>差し上げます</h1>`,
        `${a}全てプレイしていただけた方には${b}1万円</span>差し上げます！</h1>`
    ]

    sc('animation').innerHTML = message[x]
}
