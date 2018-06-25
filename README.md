# Project Title
SearchGit
This project was generated with Angular CLI version 6.0.8.
GitHub Repositoey search

## Getting Started


### Installing

download the src code and run npm install

There are 2 main modules

First :search module
search module: there are 3 components
2 basic (input , gridtable) 
The input component send a generic text search term.
The gridtable gets a generic any[] any show in a table.
The Main module is handle the request (team search) and sets the response the gridtable as output 

second :bookmarks modules
2 components 
bookmarks table the show the any []
component that handle the request to the storage service 

2 services 
First repo service 
simple generics crud service upon a URL from the method params 
Second storage service 
wrap crud over session storage 

third party - jQuery datatable

## Running the tests

run #ng test
