---
title: Find Ten Seconds
date: 2022-10-03
categories:
  - software
  - Game
  - LudumDare
author:
  - name:
      given: Dimitri
      family: Masson
    orcid: 0000-0002-7072-3146
    email: dhm.masson@gmail.com
    idhal: dimitri-masson
doi: 10.5281/zenodo.13366421
image: LudumDare51_cover.png
title-block-banner: false
toc: true
citation:
  id: Masson2022_FindTenSeconds
  citation-key: Masson2022_FindTenSeconds
  type: software
  license: MIT
  version: v1.0.1
  container-title: Ludum Dare 51
tags:
  - Ludum Dare
  - Game
  - Web
  - Javascript
links:
  - icon: bi bi-github
    name: Source Code
    class: btn-dark
    url: https://github.com/dhmmasson/ludumDare51
  - icon: bi bi-award
    name: Ludum Dare
    url: https://ldjam.com/events/ludum-dare/51/find-ten-seconds
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: https://dhmmasson.github.io/ludumDare51/
aliases: ["Find Ten Seconds"]
---

# Abstract

"Find Ten Seconds" is a fast-paced tile-matching game where the goal is to pair similar tiles based on matching characteristics. Players select a tile and then search for a second one that closely matches it, earning points based on the similarities between the two tiles. Each round requires finding ten pairs before the board refreshes, and every ten seconds, a tile disappears from the board, adding urgency to the gameplay. The game features customizable settings, hidden easter eggs, and a dynamic soundtrack with an option to mute. Built from scratch using P5.js, "Find Ten Seconds" offers a quick and engaging challenge that rewards sharp observation and quick decision-making.

# Find Ten Seconds

## Theme and main Idea

The theme for Ludum Dare was **Every 10 seconds**.

The aim of the game is to make pairs of similar tiles. You select a tile and then **find a second one** that match as closely as possible. Each round you have to find ten pairs before the board replenishes! (hence find **ten seconds**…)

![Board of the game](https://static.jam.host/raw/c6b/3/z/4f8c8.png)

## Post Mortem

I am so happy with this entry: I have a working game, with a goal and a original scoring system (a first in all my participations). The look is Ok (color palette is nice, but the scoring UI could be nicer). There is a placeholder soundtrack, but I have enough time to try things in the evening.

# How to play

1. **Select one first tile:** Pick a tile from the board by clicking it. It will appear selected on the right.

   _Click it again to deselect it._

2. **Find a second tile:** Hover on another tile from the board to see how many points the pair will get you. The more common characteristics the two tiles have, the more points you’ll get.

   - An exact match of the symbol (same letter, or same number) will get you the most points
   - A match of color will get you points too
   - If you can’t find an exact match, you can make a pair of vowels or odd numbers. Try to find what brings the most points
   - ![Scoring information](https://static.jam.host/raw/c6b/3/z/51e98.png)
   - Some combinations are worth more ( pair of vowels > pair of consonants, prime > odd ) there are even easter egg combination that are worth a lot!

   _Click on the tile to confirm the selection_

3. Repeat until you find ten pairs
4. **When you have formed 10 pairs:** the board will replenish. You get a new tile for every 20 points you got this round.
5. The game ends when there are no more tiles

Every Ten Seconds a tile disappears from the board

# Configuration

You can configure :

- size,
- toggle easy mode (tiles don’t disappear every ten seconds)
- restart the game
- mute the music from the controls on the top right
- mute the sfx

_There are some hidden easter eggs_

# Behind the scene

I decided to make a game at the last minute so no prep beforehand at all, I hadn’t even seen any themes.

## Knownbug

- If you select a tile you will never lose as the game will wait for you to release it before removing it… I’d rather have that than the game still one of the selected tiles from you…

## EASTER EGGS

There is 5 easter eggs in the matching! GO find them all !

# Tools

Everything was made from scratch, but the drum sounds cause I don’t own a drum kit. The originality of the soundtrack is rather on the odd time signature and mixing. I went for something in the vein of the movie Birdman of a never stopping drum kit… you can shut it down in the controls on the top right. You can skip voting on that category if you think I should have made an even worse soundtrack by banging on some kitchen pots.

I used VS Code and GitHub Copilot, it was a formidable tool to quickly prototype things. The way the tool works is creepy: it even helped me add some of the easter eggs. At some point, the idea was to have images instead of letters and numbers and have that also created by AI as well as the sound Design. It would have been possible if I had prepped for the event. If I can I’ll make a Fully AI-assisted game for ld52

Game “engine” is [P5.js](https://p5js.org/), the meta UI is [dat.gui](https://github.com/dataarts/dat.gui)

The [color palette](https://coolors.co/00778f-06829d-0a9396-3b8c7f-e99700-e47507-dd6713-b51212-9d1b12-7a1815) was done on [coolors.co](https://coolors.co/) I started from [this one](https://coolors.co/palette/001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226) on the main page but tinkered a lot with it. All colors should be different across all color blindness that I could check. The three main color groups have different luminosity ranges, However, it doesn’t make it colorblind-friendly per se as colors are important…

# Ratings

Final results

- Overall: **142**nd (3.659 average from 43 ratings)
- Fun: **215**th (3.39 average from 43 ratings)
- Innovation: **81**st (3.78 average from 43 ratings)
- Theme: **137**th (3.829 average from 43 ratings)
- Graphics: **237**th (3.451 average from 43 ratings)
- Audio: **271**st (3 average from 43 ratings)

:::{.aside}
![Ratings](https://badges.jaxs.onl/51/find-ten-seconds/badge.svg)
:::
