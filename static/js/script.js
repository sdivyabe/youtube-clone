let menuIcon = document.querySelector('.menu-icon')
let sideBar = document.querySelector('.sidebar')
let container = document.querySelector('.container')

menuIcon.onclick = function(){
    sideBar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
}

// const inputUrl = document.getElementById('nextpage');
// let preview = document.querySelector('.vid-list');
// let thumb = preview.querySelector('.thumbnail');

// inputUrl.onkeyup = () => {
//     let url = inputUrl.value;
//     preview.classList.add('current')
//     console.log(url);

//     const p1 = `https://www.youtube.com/watch?v=BZD5z0sr4Aw&t=1061s`
//     const p2 = `https://youtube.com/watch?v=`
//     const p3 = 'https://youtube.com/'
//     const p4 = 'https://www.youtube.com/'

//     //if ((url && url.indexOf(p1) != -1) ||(url && url.indexOf(p2) != -1))
//     //Condition to check if the entered url matches the pattern
//     if (url.indexOf(p1) != -1 || url.indexOf(p2) != -1) {
//         console.log('hi');
//         //get the unique youtube id
//         let valid = url.split('watch?v=')[1].substring(0, 11);
//         //get the image
//         var imageThumb = `httpa://img.youtube.com/vi/${valid}/hqdefault.jpg`
//         console.log(imageThumb);
//         //set the image in the image tag
//         thumb.src = imageThumb
//     } else if ( url.indexOf(p3) != -1 || url.indexOf(p4) != -1) {
//         let valid = url.split('be/')[1].substring(0,11);
//         var imageThumb = `httpa://img.youtube.com/vi/${valid}/hqdefault.jpg`
//         thumb.src = imageThumb
//     }else {
//         thumb.src = '';
//         preview.classList.add('current')
//     }
// }

const inputUrl = document.getElementById("link");
    let thumb = document.querySelector("img");
    let videoid=document.getElementById("videoid")

    inputUrl.oninput = () => {
      let url = inputUrl.value;

      const param1 = "https://www.youtube.com/watch?v=";
      const param2 = "https://youtube.com/watch?v=";
      const param3 = "https://youtu.be/";
      const param4 = "https://www.youtu.be/";

      if (url.indexOf(param1) != -1 || url.indexOf(param2) != -1) {
        let valid = url.split("watch?v=")[1].substring(0, 11);
        var imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`;
        videoid.value=valid
        thumb.src = imageThumb;
      } else if (url.indexOf(param3) != -1 || url.indexOf(param4) != -1) {
        let valid = url.split("be/")[1].substring(0, 11);
        var imageThumb = `https://img.youtube.com/vi/${valid}/hqdefault.jpg`;
        videoid.value=valid
        thumb.src = `${imageThumb}`;
      } else {
        console.log("error");
      }
      
    };