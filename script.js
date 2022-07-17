console.log("page loading...");

// index     0  1   2
var likes = [9, 12, 9];
var comment_likes = [
    document.querySelector("#comment-1"),
    document.querySelector("#comment-2"),
    document.querySelector("#comment-3")
];

function increase(id) {
    console.log(comment_likes[id])
    likes[id]++;
    comment_likes[id].innerHTML = likes[id] + " like(s)";
}