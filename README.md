# 💾 Saturns Gift Discord

> Discord vs Discord Conquest Game & Economy Simulator

## Requirements

- npm v7
- node >=16.6.0

## Setup
- Install `npm install -g nodemon`
- Run `npm install`
- Copy `bot-config.js.example` from `/src/config` and remove `.example` and fill in with your details
- Run `npm run dev`

Run `npm start` for production

## Add Bot to Server

https://discord.com/oauth2/authorize?client_id=908157383056961567&scope=bot&permissions=2147998784

## Contribution

If you want to contribute, please go to the [Project Board](https://github.com/Saturns-Gift/sg-discord/projects/1), find a task and create a pull request to the repository.

## Discord Template Features
- [Dynamic event handler](src/core/event-handler)
- [Command handler](src/core/command-handler)
- [Commands cooldown system](src/core/utils)
- [Permissions checking system](src/core/discord-utils)
- [Tip system](src/core/utils/tips)
- [Logger](src/core/utils)
