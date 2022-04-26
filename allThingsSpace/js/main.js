// API Key: Fc2mQ9ioXkmwF7crjOxtNp1AysseSpc3GpQOi5gx
document.querySelector('.apodButton').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://api.nasa.gov/planetary/apod?api_key=Fc2mQ9ioXkmwF7crjOxtNp1AysseSpc3GpQOi5gx`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if ( data.media_type === "image") {
            document.querySelector('img').src = data.hdurl

        } else if (data.media_type === "video"){
            document.querySelector('apodIframe').src = data.url
        }
        document.querySelector(".apodCopy").innerHTML = `&copy; ${data.copyright}`
        document.querySelector(".apodTitle").innerText = data.title
        document.querySelector('.apodText').innerText = data.explanation
        document.querySelector('.apodLink').href = data.url

        document.querySelector('#apod').removeAttribute('hidden')
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}