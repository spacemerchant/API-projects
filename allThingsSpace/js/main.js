// API Key: Fc2mQ9ioXkmwF7crjOxtNp1AysseSpc3GpQOi5gx
document.querySelector('.apodButton').addEventListener('click', getFetch)

function getFetch(){
    if (!document.querySelector('#pApod').hasAttribute('hidden')){
        document.querySelector('#pApod').setAttribute('hidden', true)
    }
  const url = `https://api.nasa.gov/planetary/apod?api_key=Fc2mQ9ioXkmwF7crjOxtNp1AysseSpc3GpQOi5gx`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if ( data.media_type === "image") {
            document.querySelector('.apodImg').src = data.hdurl

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



document.querySelector('.pApodButton').addEventListener('click', unvail)

function unvail(){
    if (!document.querySelector('#apod').hasAttribute('hidden')){
        document.querySelector('#apod').setAttribute('hidden', true)
    }
    document.querySelector('#pApod').removeAttribute('hidden')
}

document.querySelector('.inputFetch').addEventListener('click', getPastFetch)

function getPastFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=pUb52Tcj060ly0dXAeo7ipKHAp4fjANl50nekdJa&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if ( data.media_type === "image") {
            document.querySelector('.pApodImg').src = data.hdurl
            document.querySelector('.pApodIframe').setAttribute('hidden', true)
        } else if (data.media_type === "video"){
            document.querySelector('.pApodIframe').src = data.url
        }
       
        document.querySelector(".pApodCopy").innerHTML = `&copy; ${data.copyright}`
        document.querySelector(".pApodTitle").innerText = data.title
        document.querySelector('.pApodText').innerText = data.explanation
        document.querySelector('.pApodLink').href = data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
