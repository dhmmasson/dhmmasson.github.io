---
title: A MineSweepEars Island
aliases:
  - Abstract
  - ld32
  - ludumDare32
  - MineSweepEars
categories:
  - software
  - Game
  - LudumDare
tags:
  - Game
  - Js
url: github.com/dhmmasson/MineSweepEars
image: ./LudumDare32_cover.jpg
date: 2015-04-20
author:
  - name:
      given: Dimitri
      family: Masson
    orcid: 0000-0002-7072-3146
    email: dhm.masson@gmail.com
    idhal: dimitri-masson
doi: 10.5281/zenodo.13743147
citation:
  id: masson2015_ld32MineSweepEars
  citation-key: masson2015_ld32MineSweepEars
  type: software
  container-title: Ludum Dare 32
links:
  - icon: bi bi-github
    name: Source Code
    url: https://github.com/dhmmasson/MineSweepEars
    class: btn-dark
  - icon: bi bi-award
    name: LD32 Entry
    url: https://web.archive.org/web/20201030142206/http://ludumdare.com/compo/ludum-dare-32/?action=preview&uid=51097
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: http://dhmmasson.github.io/MineSweepEars/
toc: true
toc-depth: 3
---

# Abstract

_MineSweepears Island_ is a Minesweeper-inspired puzzle game developed for **Ludum Dare 32**, where the theme was "An Unconventional Weapon." Set on a hexagonal grid, players must create sweep paths to score points while avoiding hidden mines. Each tile displays the number of adjacent mines and its point value, adding a strategic layer to path creation. The unique twist comes from the game's use of spatialized audio cues—players use their ears to detect nearby mines, introducing an innovative audio-based gameplay mechanic. This article explores the design process, technical challenges, and creative solutions that went into building _MineSweepears Island_.

# MineSweepears Island:

## Theme and Game Idea

For **Ludum Dare 32**, I set out to create something unique with a familiar foundation. The theme was "An Unconventional Weapon," and I combined the classic mechanics of Minesweeper with innovative twists to make it more interactive and immersive. The result? **MineSweepears Island**, a hex-based puzzle game where your ears become the key to survival.

**MineSweepears Island** is inspired by the traditional Minesweeper, but with a fresh perspective. Here’s how it works:

- The game takes place on an island made up of **hexagonal cells**. Around **20% of these cells are trapped** with hidden mines.
- Unlike classic Minesweeper, your goal isn’t just to avoid the mines but to create **sweep paths** across the island. The number displayed on each cell indicates two things: the number of adjacent trapped cells and the number of points the cell is worth.
- To score higher, you need to create longer paths. The catch? **Each cell can only be used once** in a path, except when it’s used as the starting point for a new path. You have only **60 seconds** to make as many paths and score as many points as possible.

## The Unconventional Weapon: Your Ears

In keeping with the theme of Ludum Dare 32, I gave players an unconventional tool to navigate the mines: **sound**. Instead of relying solely on visual clues, players use spatial audio to detect nearby mines.
Here’s how it works:

- When you enter a tile, if there are mines in the surrounding cells, the game plays a **tune**.
- The sound is **spatialized**, meaning you can determine which direction the sound is coming from, helping you guess which adjacent tiles are dangerous. You can probe if a tile is dangerous by getting closer to it. This introduces an extra layer of strategy, requiring players to not only focus on the numbers but also listen to the world around them.

The strategic depth in **MineSweepears Island** lies in balancing risk and reward. The **longer the path** and the **closer** you come to mines as you sweep across the island, the more points you earn. But, with only 60 seconds and a limited number of tiles that can be used in any path, you’ll need to plan carefully.

# Post Mortem Ludum Dare 32

Developing **MineSweepears Island** for Ludum Dare 32 was a challenging yet rewarding experience. Crafting the spatialized audio and building the hex-based map from scratch was no small feat, but the end result was a game that felt innovative and immersive. Ranking **#22 in Innovation** was a huge highlight for me, but more importantly, the process taught me a lot about game design, especially in balancing gameplay mechanics with new ideas like audio-driven feedback.

If you’re curious, you can still check out the entry on the Ludum Dare website: [MineSweepears Island - LD32](http://ludumdare.com/compo/ludum-dare-32/?action=preview&uid=51097).

Creating a game in just 48 hours is always a challenge, but Ludum Dare pushes you to think creatively and embrace the constraints. **MineSweepears Island** is proof of how much can be accomplished in a short time when you mix familiar mechanics with fresh, unconventional ideas.

## Behind the Scenes: Building MineSweepears Island

I coded the game in **JavaScript** and relied on a PhiloGL for the drawing and a spatialHash library. Originally the game was deployed on heroku, and the game was served by an express app that simply renders some .ejs template to dynamically generate the webpages.

In the **views** folder, I used **EJS** (Embedded JavaScript) to dynamically generate the webpages and connect the user interface with the game’s logic. The **res** folder contains code snippets I frequently use, including shaders and musical note frequencies like A = 440Hz, which helped fine-tune the audio cues in the game.

# Tools

- **PhiloGL** for 3D rendering
- **WebAudio** for spatial sound effects
- **Bootstrap** for the basic UI
- **EJS** for webpage generation
- **JavaScript** for game logic

# Ratings

| Rank    | Categorie      | Score    |
| ------- | -------------- | -------- |
| **#22** | **Innovation** | **4.17** |
| #471    | Graphics       | 3.17     |
| #504    | Overall        | 3.22     |
| #572    | Mood           | 2.91     |
| #580    | Fun            | 3.00     |
| #880    | Theme          | 2.87     |

| #1634 | Coolness | 41% |
the ludum dare website for version 32 is no longer available but you can find the page on [webarchive](https://web.archive.org/web/20201030142206/http://ludumdare.com/compo/ludum-dare-32/?action=preview&uid=51097)
