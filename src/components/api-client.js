const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=2978bf8c65e356b72c4c9ad8114ddb47&format=json';

function getArtists(){
    return fetch(URL).then(response => response.json())
                    .then(data => data.topartists.artist)
                    .then( artists => artists.map(artist =>{
                        return {
                            name: artist.name,
                            image: artist.image[3]['#text'],
                            likes: 20,
                            comments: 30
                        }
                    }))
}
//getvals().then(response => console.log(response));

export { getArtists }