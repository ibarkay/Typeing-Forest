# typing-forest

## Table of Contents

- [About](#about)
- [pages and components](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

![alt text](https://github.com/ibarkay/Typeing-Forest/blob/master/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202021-04-01%20%D7%91-14.53.18.png)

typing game for ALL family , improve your typing skills with fun games like :

flash-time: user will be present with a word for a short period of time , then he will need to type it fast as he can (time will be capture).

secret-word : user will be present to only the number of chars of the secret word, he then will have to guess and type.

training-mode : user will present with the word and try to type it as fast as he can .

## pages and components <a name = "getting_started"></a>

# pages

wellcome-page : user have to type "Forest" to enter (move to training page).
training-page : user can train or he could click on headers btns (only visible now).
play-page : main app feature .
secret-word-page : optinal game page.
profile-page : localStorage integrate personal scores (best speed ,best score , longest word).

# components

header - need to show up in all pages except wellcome-page. typingArea - will need to show and listen to keys/words speedWPM - will need to show the word per minute state complete - display user progression on typing the word profile - will summary player scores \*timer - add a timer component

## must have feature

english word integration
WPM - words per minute display
complete - display user progerssion
profile - score board

## desired features

hebrew integration
count down - play against time
prizes - give some "stickers" when accomplished word.

speak then type - capture audio with a click and type it !

score logic: word will get points by its length , user will get points when finish typing minus the time passed. no score on training / secret.

## Usage <a name = "usage"></a>

https://forest-type.netlify.app
