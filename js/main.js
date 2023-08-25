let button=document.querySelector("button.get")
let fetchComments=()=>{
    return new Promise((resolve,reject)=>{
        let xml= new XMLHttpRequest()
        xml.open("get","https://jsonplaceholder.typicode.com/comments")
        xml.responseType="json"
        xml.onload=()=>{
            resolve(xml.response)
        }
        xml.onerror=()=>{
            reject(document.querySelector("div.wrapper").innerText="Error From Server")
        }
        xml.send(null)
    })
}
let showComments=async()=>{
    let html=""
    let res=await fetchComments()
    res.forEach((elem)=>{
        html+=`<div class="comment">
                    <h2 class="postId">postId: ${elem.postId}</h2>
                    <h2 class="id">ID: ${elem.id}</h2>
                    <h2 class="name">Name: ${elem.name}</h2>
                    <p class="email">Email: ${elem.email}</p>
                    <p class="body">Comment: ${elem.body}</p>
               </div>`;
    })
    document.querySelector("div.wrapper").innerHTML=html
}
button.addEventListener("click",showComments)