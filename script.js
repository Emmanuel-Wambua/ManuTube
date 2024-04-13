const videoCardContainer = document.querySelector('.video-container')

let api_key = "AIzaSyDeNAVRQ6mdO6lP3hjQUJEHX0XCZs_XlD8";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?"

fetch(video_http + new URLSearchParams({
    key:api_key,
    part:'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))

.then(response => response.json())
.then(data =>{
    // console.log(data)
    data.items.forEach(item =>{
        getChannelIcon(item);
    })
})
.catch(error => console.log(error))

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key:api_key,
        part:'snippet',
        id:video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data =>{
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
        <div class="video" onclick ="location.href = 'https://youtube.com/watch?v=${data.id}'">
            <img src="${data.snippet.thumbnails.high.url}" alt="" class="thumbnail">
            <div class="content">
                <img src="${data.channelThumbnail}" alt="" class="channelicon">
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="classname">${data.snippet.channelTitle}</p>
                </div>
            </div>
        </div>`
}

// search bar

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.searchBtn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

const liverBtn = document.getElementById('livBtn');

liverBtn.addEventListener('click', () => {
    location.href = "https://www.youtube.com/results?search_query=Liverpool"
})
const animBtn = document.getElementById('44Btn');

animBtn.addEventListener('click', () => {
    location.href = "https://www.youtube.com/results?search_query=44200ns"
})
const broBtn = document.getElementById('broBtn');

broBtn.addEventListener('click', () => {
    location.href = "https://www.youtube.com/results?search_query=bro code"
})
const sidBtn = document.getElementById('sidBtn');

sidBtn.addEventListener('click', () => {
    location.href = "https://www.youtube.com/results?search_query=sidemen"
})
// var menuIcon = document.querySelector(".toggle-Btn");
// var sideBar = document.querySelector(".sidebar");

// menuIcon.onclick = function(){
//     sideBar.classList.toggle("small-sidebar")
// }

