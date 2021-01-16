getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/style.css')
    request.onreadystatechange = ()=>{    
        if(request.readyState === 4){
            
            if(request.status>=200 && request.status<300){
               
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                console.log('请求失败')
            }
        }
    }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/demo.js')
    request.onreadystatechange = ()=> {
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script) 
            }else{
                console.log('请求失败')
            }
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/demo')
    request.onreadystatechange = () => {
        if(request.readyState ===4){
            if(request.status>=200 && request.status<300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                console.log('请求失败了')
            }
        }
    }
    request.send()
}
getXML.onclick = ()=> {
    const request = new XMLHttpRequest()
    request.open('GET','/demo.xml')
    request.onreadystatechange = () => {
        if(request.readyState ===4){
            if(request.status>=200 && request.status<300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET','/demo.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status>=200 && request.status<300){
                const object = JSON.parse(request.response)
                myName.textContent = object.name
                age.textContent = object.age
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState ===4){
            if(request.status>=200 && request.status<300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
            
        }
    }
    request.send()

}