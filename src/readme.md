# Readme

The Evenir Case Files is a text-based game developed in React.js. The game is hosted online and can be played at http://evenircasefiles.surge.sh/. This webpage may take a few minutes to load.

As the player, you take on the role of a Keeper of Records serving the Mage Council of the fantasy kingdom of Evenir. The first screen of the game will introduce you to the fantasy world of the game and explain your task. After that introduction, the game is played by navigating to different screens, representing locations in the world, which contain documents to be read. There is a timeline, initially set at thirty days, and navigating to locations as well as reading documents reduces your available days. Once you have no more days to act with, you will be taken to the Case page. There, you must drag individual sentences from the documents you have read into three sections which require you to think about what that sentence contributes to your overall argument. Once you present your case, you will be taken to a final screen where the Council makes a statement on the quality of your case.

The game can be played fully in 20 to 30 minutes, depending on reading speed.

## technical notes

### if you encounter bugs

The game utilises the local storage of the browser to store data critical to the functioning of the game. If your timeline is not updating as you play, or documents are not being stored anywhere, then it may be because certain browser plugins, particularly privacy-oriented plugins which disable JavaScript or cookies, are preventing the game from storing data locally. Try disabling them and then launching the game again in a new browser session.

If that does not work, then try playing the game with a different browser. The author of this research project tested the game with Firefox version 87.0, on macOS Big Sur version 11.2.3. User experience evaluations have shown that bugs most often appear on Firefox and Brave browser with Windows 10.

If you have any browser plugins which disable certain colours from appearing on your screen, you may also wish to disable those, or certain user experience features such as text highlighting may not be visible.

### implementation and architecture overview

App.js is the main component, responsible for routing. Routing was implemented with react-router.

All other components are children of App.js. They are stored in \components.

Drag and drop functionality was implemented with the react-dnd library. In particular, the code for rearranging document headers was copied and pasted from the documentation.

\utils contains shared functions and constants.

\images contains images used in the game.

## Local Build instructions

### Requirements

- node.js version v14.15.1
- the game was tested with Firefox version 87.0, on macOS Big Sur version 11.2.3.

### Build steps

- cd into the project folder (ie after having opened the submitted 2310555D.zip file)
- cd into src
- run npm i
- run npm start
