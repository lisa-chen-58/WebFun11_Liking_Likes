let likes = [9,12,9]
let comment_likes = [
    document.querySelector("#comment-1"),
    document.querySelector("#comment-2"),
    document.querySelector("#comment-3"),
]

var spanText=document.querySelector('comment-1')
function increase(){
    spanText.innerText+=1
}


    // likes[index]++;
    // comment_likes[index].innerHTML = likes[index]+"like(s)"

    // new_count = likes[index]+=1;
    // string=new_count + " likes"
    // id="#comment-"+(index+1)
    // console.log(id)
    // id.innerHTML = string;
// function like(id) {
//     likes[id]++;
//     spans[id].innerHTML = likes[id] + "like(s)";
// }
function login(element){
    element.innerText = "Logout"
}



