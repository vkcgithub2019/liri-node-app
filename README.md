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
-------------------------------------------------------------------------------------------------------------------------------
Screen shots from running the liri-bot (Victor Chung)

vkc88@LAPTOP-JFQ79OFP MINGW64 ~/Desktop/liri-node-app (master)
$ node liri.js spotify-this-song
this is loaded
___________________________________________________________________________________
 SPOTIFY SEARCH RESULTS
Artist(s): Ace of Base
Song Title: The Sign
URL Preview: https://p.scdn.co/mp3-preview/4c463359f67dd3546db7294d236dd0ae991882ff?cid=2363db9ef2664c75b33788a495ce2e32 
Album: The Sign (US Album) [Remastered]


vkc88@LAPTOP-JFQ79OFP MINGW64 ~/Desktop/liri-node-app (master)
$ node liri.js do-what-it-says
this is loaded
random.txt was updated!

 SPOTIFY SEARCH RESULTS

Artist(s): Backstreet Boys
Song Title: I Want It That Way
URL Preview: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=2363db9ef2664c75b33788a495ce2e32 
Album: The Hits--Chapter One




vkc88@LAPTOP-JFQ79OFP MINGW64 ~/Desktop/liri-node-app (master)
$ node liri.js movie-this avenger
this is loaded

 OMDB search results

Title of Movie: Avenger
Release Year: 2006
IMDB Rating: 5.7
Rotten Tomatoes Rating: 5.7/10
Country where the movie was produced: USA
Language: English
Plot: A C.I.A. Agent steps in to stop a former Special Forces Operative on a for-hire mission that poses a global threat.Actors: Sam Elliott, Timothy Hutton, James Cromwell, William Hope


vkc88@LAPTOP-JFQ79OFP MINGW64 ~/Desktop/liri-node-app (master)
$ node liri.js concert-this snoop dogg
this is loaded
Lineup: Snoop Dogg
Name of Venue: Cabana Pool Bar
Venue Location: Toronto, Canada
Date of Event: 08/26/2019

****************************************************

Here are the link to my portfolio. 
https://vkcgithub2019.github.io/Responsive-Portfolio/

Here is the link to the deployed version 
https://vkcgithub2019.github.io/liri-node-app/



Version: 01 8-26-2019 
Author: Victor Chung, UW Coding Bootcamp
