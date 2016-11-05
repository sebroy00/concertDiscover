var localProxyApi = function (serverPath) {
    
  var getAlbum = function(albumID){
    var url = 'https://api.spotify.com/v1/albums/' + albumID;
    return $.ajax({
        url: url
    })
  }   
  
  var getArtistRelatedArtists = function(artistId) {
    var url = serverPath + '/spotify/artists/' + artistId + '/related-artists';
    return $.ajax({
        url: url
    })
  };

  var getArtistTopTracks = function(artistId, country) {
    var url = serverPath + '/spotify/artists/' + artistId + '/top-tracks';
    return $.ajax({
        url: url,
        data: {
            country: country
        }
    })
  };

  var getArtist = function(artistId) {
    var url = serverPath + '/spotify/artists/' + artistId;
    return $.ajax({
        url: url
    })
  };

  var getArtists = function(artistIds) {
    var url = serverPath + '/spotify/artists?ids=' + artistIds;
    return $.ajax({
        url: url
    })
  };

  var searchArtists = function(q, params) {
    var url = serverPath + '/spotify/search';
    var data = params
    data['q'] = q
    data['type'] = 'artist'

    return $.ajax({
        url: url,
        data: data
    })
  };

  return {
    getArtistRelatedArtists: getArtistRelatedArtists,
    getArtist: getArtist,
    getArtists: getArtists,
    searchArtists: searchArtists,
    getArtistTopTracks: getArtistTopTracks
  }

};
