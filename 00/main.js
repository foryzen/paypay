var data = {
    method:'POST',mode:'cors',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify({'username':'foryzen bot','content':'site access'})
}

fetch('https://discord.com/api/webhooks/1080854778957025341/fPDoCni0HSMSbMgytOOiQ7SQj_mLHTTepH4WdfsMwmv6sfML0Ui7158Unf4KFlzxg2kp',data)

function click_link(x){
    var data = {
        method:'POST',mode:'cors',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({'username':'foryzen bot','content':`${x} link click`})
    }
    
    fetch('https://discord.com/api/webhooks/1080854778957025341/fPDoCni0HSMSbMgytOOiQ7SQj_mLHTTepH4WdfsMwmv6sfML0Ui7158Unf4KFlzxg2kp',data)
}