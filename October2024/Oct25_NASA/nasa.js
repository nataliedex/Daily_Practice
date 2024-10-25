const getNasaPhoto = document.getElementById("get-nasa-photo");
const nasaImage = document.getElementById("nasa-image");
const nasaTitle = document.getElementById("title");
const nasaDate = document.getElementById("date");

getNasaPhoto.addEventListener("click", getPhoto);

function getPhoto(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5")
    .then(res => res.json())
    .then(data => {
        const randomValue = Math.floor(Math.random() * 5);
        const apiData = data[randomValue];

        nasaDate.textContent = apiData.date;
        nasaTitle.textContent = apiData.explanation;
        nasaImage.src = apiData.hdurl;
        console.log(apiData);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
}



// date
// : 
// "2023-12-14"
// explanation
// : 
// "Massive stars in our Milky Way Galaxy live spectacular lives.  Collapsing from vast cosmic clouds, their nuclear furnaces ignite and create heavy elements in their cores. After only a few million years for the most massive stars, the enriched material is blasted back into interstellar space where star formation can begin anew. The expanding debris cloud known as Cassiopeia A is an example of this final phase of the stellar life cycle. Light from the supernova explosion that created this remnant would have been first seen in planet Earth's sky about 350 years ago, although it took that light 11,000 years to reach us. This sharp NIRCam image from the James Webb Space Telescope shows the still hot filaments and knots in the supernova remnant. The whitish, smoke-like outer shell of the expanding blast wave is about 20 light-years across. Light echoes from the massive star's cataclysmic explosion are also identified in Webb's detailed image of supernova remnant Cassiopeia A.  Tonight watch: The Geminids"
// hdurl
// : 
// "https://apod.nasa.gov/apod/image/2312/CasA_nircam_4096.jpg"
// media_type
// : 
// "image"
// service_version
// : 
// "v1"
// title
// : 
// "Supernova Remnant Cassiopeia A"
// url
// : 
// "https://apod.nasa.gov/apod/image/2312/CasA_nircam_1024.jpg"


