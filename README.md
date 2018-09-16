# LIRI-node-app
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

This is a console command that utilizes GIT and Node.

How To Start:
  - Clone to your repository
  - Do a "npm i" to download all required modules.
  - Create file named .env and the following:
  ---------------------------------------------
    #Spotify API keys
    
    SPOTIFY_ID=<your-spotify-id>
    SPOTIFY_SECRET=<your-spotify-secret>
  ---------------------------------------------
  - In the <> supply your specific keys from spotify
  - You are prepared!

How to Use:
  - Type "node liri <command> <SearchTerm>"
    - In the <commmand> use one of the following based on what you are looking for:
       - concert-this = Find next 10 concerts for a band supplied after where <SearchTerm> is.
          - i.e. "node liri concert-this twenty-one pilots
        - spotify-this-song = Find the Spotify data for a song supplied after where <SearchTerm> is
          - i.e "node liri spotify-this-song Hit me baby one more time"
        - movie-this = Find IMDB Data about a movie title supplied after where <SearchTerm> is
          - i.e. "node liri movie-this titanic"
        - do-what-it-says = Do a random search of one of the above supplied after where <SearchTerm> is
          - i.e. "node do-what-it-says" (Note: you do not enter a search term for this function)
          
