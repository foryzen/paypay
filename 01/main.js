var url = 'https://discord.com/api/webhooks'+'/1080871820976193598/hwk9NRHDQWHmD4dvJTlVRYqbn8qRNo5Pb_NVRuAXzXgqZfPcLFXcZDWL0bKlBb3R4TbJ'

var data = {
    method:'POST',mode:'cors',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({'username':'foryzen bot','content':'site access'})
}

//fetch(url,data)

function click_link(x){
    var data = {
        method:'POST',mode:'cors',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({'username':'foryzen bot','content':`${x} link click`})
    }
    
    fetch(url,data)
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