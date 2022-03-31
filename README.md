# odin-rock-paper-scissors
A project for TOP where I make a basic rock, paper, scissors game in Javascript.

## Introduction
This is a repo for the "Project: Rock Paper Scissors" lesson in The Odin Project:

- https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

### Instructions

We’re going to make a simple implementation of grade-school classic “rock paper scissors”. For the moment we’re just going to play the game from the browser console, but we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text, so don’t forget to keep the code on GitHub!

## Todo
1. N/A

## Assignment

1. Start a new Git repo for your project.
2. Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock." Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
5. Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on.
6. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end. Remember loops? This is a great opportunity to use one to play those five rounds.
7. At this point you should be using console.log() to display the results of each round and the winner at the end. Use prompt() to get input from the user. Read the docs here if you need to. Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful. Feel free to create more “helper” functions if you think it would be useful.

## Skills Utilized
This project primarily uses basic Javascript skills such as functions and loops.

## Reflections
N/A
