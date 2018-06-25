# Project Title
SearchGit
This project was generated with Angular CLI version 6.0.8.
GitHub Repositoey search

## Getting Started


### Installing

download the src code and run npm install

There are 2 main modules

first:search module
search moudle: there are 3 components
2 basic (input , gridtable) 
The input component send a generic text search term.
The gridtable gets a generic any[] any show in a table.
The Mainmodle is handle the reqests (team search) and sets the response the the gridtable as output 

second :bookmarks modules
2 components 
bookmarks table the show the any []
componenet that handle the reqest to the storage servie 

2 services 
First repo service 
simple generics crud service upon a url from the mwthod params 
Second storage service 
wrap crud over session storage 

third party - jquery datatable

## Running the tests

run #ng test
