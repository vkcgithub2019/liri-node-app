# liri-node-app
LIRI: language interpretation and recognition interface.This is a command line node app that takes in paramaters and return requested data. LIRI will search using commands like Spotify for songs, Bands in Town for concerts, and OMDB for movies. Axios package is used to retreive data from the OMDB API. In the terminal, at the command line, the user has to input what they want to search, such as: liri.js concert-this artist/band name, liri.js spotify-this-song , liri.js movie-this , and liri.js do-what-it-says. The search items does not have to be in quotation marks.

If the user just put in liri.js spotify-this-song and no name of the song was given, the program will default to "The Sign" by Ace of the Base. If the user just input liri.js movie-this and no movie name is provided, the program will output data for the movie 'Mr. Nobody'.

The search for concert-this will output the name of the venue, venue location, and date of the event. Moment is used for the date format.

The search for spotify-this-songs will output the artist's name, the name of the song, a preview link of the song from spotify, and the album that the song is from.

The search for movie-this will output the title of the movie, year the movie came out, the IMDB rating of the movie, Rotten Tomatoes rating of the movie, the country where the movie was produced, language of the movie, plot of the movie, and actors in the movie.

In addition to logging the data to the terminal, the data will output to a .txt file call log.txt.

This program demonstrates the use of node.js for back-end server use.   

Technology:
jsNode, javascript, NPMs and APIs
----------------------------------------------------------------------------------------------------
Screen shots from running the liri-bot (Victor Chung)

![images](https://github.com/vkcgithub2019/liri-node-app/blob/master/images/concert-this.png?raw=true)
![images](https://github.com/vkcgithub2019/liri-node-app/blob/master/images/do-what-it-says.png?raw=true)
![images](https://github.com/vkcgithub2019/liri-node-app/blob/master/images/movie-this.png?raw=true)
![images](https://github.com/vkcgithub2019/liri-node-app/blob/master/images/movie-this.png?raw=true)


Version: 01 8-26-2019 
Author: Victor Chung, UW Coding Bootcamp

Here is the link to the deployed project
https://vkcgithub2019.github.io/liri-node-app/

Here is the link to the deployed Portfolio project
https://vkcgithub2019.github.io/Responsive-Portfolio/