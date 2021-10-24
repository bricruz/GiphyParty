async function getGif(token, search) {
    const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${token}&q=${search}`);

    let rLength = result.data.data.length;
    let rIdx = Math.floor(Math.random() * rLength);
    const url = result.data.data[`${rIdx}`].embed_url;
    appendGif(url);
}




const div = $('div');
const btn = document.querySelector('#submit');
const remove = $('#remove');
const key = 'B7DIOofTmUxLWAOOcU9MGd0A1354aDSD';

btn.addEventListener('click', function (e) {

    e.preventDefault();
    let query = $('#query').val();
    getGif(key, query)
});

function appendGif(url) {
    div.append(`<iframe style="border:0px;" src=${url}/></iframe>`)
}

remove.on('click', function () {
    div.children().remove();
})
