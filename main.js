
var json = get.json('https://raw.githubusercontent.com/Toolade/JSTikTok/main/videos.json')

//for(i=0;i<json.length;i++) {
//    title += "<video src='"+json[i].url + "'></video><br>";
//}
let video = document.querySelector('video');
const random = Math.floor(Math.random() * json.length) ;
console.log(random)
//
let vid = json[random].url;
video.src = vid ;

