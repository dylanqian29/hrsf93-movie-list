var searchMovies = function(moviename, callback) {
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/550?api_key=17b834e74ca4466599e2d94b11d482ab&query=' + moviename,
        dataType: 'jsonp',
        success: function(data){
            console.log(data)
        },
        error: function(error){
            console.error("Sorry")
        }
    })
}

export default searchMovies