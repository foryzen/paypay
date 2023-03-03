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
    
    //fetch(url,data)
}