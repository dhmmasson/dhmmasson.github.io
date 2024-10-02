---
title: Enter the Deeper Trance
date: 2021-04-25
author:
  - name:
      given: Dimitri
      family: Masson
    orcid: 0000-0002-7072-3146
    email: dhm.masson@gmail.com
    idhal: dimitri-masson
doi: 10.5281/zenodo.13857251
categories:
  - software
  - Game
  - LudumDare
image: LudumDare48_cover.png
title-block-banner: false
toc: true
citation:
  id: masson2021_DeeperTrance
  citation-key: masson2021_DeeperTrance
  type: software
  license: MIT
  version: v1.2.3
  container-title: Ludum Dare 48
tags:
  - Ludum Dare
  - Game
  - Web
  - Javascript
links:
  - icon: bi bi-github
    name: Source Code
    class: btn-dark
    url: https://github.com/dhmmasson/deeperAndDeeper
  - icon: bi bi-award
    name: Ludum Dare
    url: https://ldjam.com/events/ludum-dare/51/find-ten-seconds
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: https://dhmmasson.github.io/Find-Ten-Seconds/
aliases: [Enter the Deeper Trance]
---

# Abstract

_Enter the deeper trance_ is a tunnel runner brought in 3d with autostereograms (magic images). Try to go deeper and deeper through the levels hypnotised by the musical illusion that descend infinitely until you reach the **deeper trance**!

# Enter the Deeper Trance

I am very happy with my 3rd successful entry in Ludum Dare. **Deeper Trance** is a very simple game with **not one but two illusions** :

- One visual: all the display is an **interactive image magic** ( you may have seen them as kids ) that give you *the illusion of depth*
- One auditory: The theme music is getting deeper and deeper in pitch continuously never stoping akin to a **Shepard Tone**

This game will led you into a deeper and **deeper trance\*** as you descend deeper and deeper through the levels.! Let the music descend infinitely until you reach the **deeper trance**!

You loved magic images when you were a child where you could see 3D images hidden in seemingly random arrangement of dots! You wished that this 3d images could move and lead you into their world ? **This game is made for you!**

\*no guarantee. Some subjects are immune to trance and/or autostereogram!![Cover.png](https://static.jam.host/raw/c6b/3/z/3c30f.png)
You should be able to read Deeper Trance in the above image.

## What is it ?

The game use the [autostereogram](https://en.wikipedia.org/wiki/Autostereogram) effect to make you see a 3d paddle that you can rotate to go through slit shaped holes at it fall *deeper and deeper*.

The game in itself is a classic take on a tunnel runner agility/fall-_deeper-and-deeper_-through-holes game.

The music is a [shepard tone](https://en.wikipedia.org/wiki/Shepard_tone) to continuously go *deeper and deeper in pitch*

## How to play

- Start the game, you should relax your eyes to see at a greater distance than your screen. You should **enter the image** and a 3d horizontal bar should appear.
- Rotate the bar with your left and right arrows.
- Planes will move toward you, there is a slanted slit. Orient the bar to go through
- Press space to take a break

The game starts slows so that you can take your time to see the effect. If you miss the slit, it starts over. You can see your deepest score in the menu (space bar)

## Help I can’t see anything but noise

The game is **hidden** in the noise, you have to let your eyes get lazy. I added two kinds of help

1. squint hint : display to dots that can help you uncross your eyes. You should first see them double, then align the red and blue in the middle to see : red dot, mixed/superposed dots, blue dot.
2. Cheat mode : you see the depth map. Not funny but it might help you see what is hidden

I still can’t see anything: some people can’t see autostereogram. I am deeply sorry, you can play in cheat mode, but it’s not a fun game.

# Post mortem

I was so excited for this ludum dare, this is my once-a-year treat for myself. Last ludum dare was a blast, it was my first time using Unity, that solved many of my issues for developing games, allowing me to implement quickly my ideas and ship something in 48h while taking time for familly . I found that I could code in the early morning while everyone slept, during baby’s naps and after dinner (this year time was even tighter as I was spending time with familly and friends!). My last game had 3d, a very nice mood, music and SFX. It only lacked to be a Game…. There was no goal, no progression. It was just a fun sandbox playground.

My goal for LD48 was **make a game** first. It was to be simple and I should be spending time on the game mechanics. I tend to have crazy ideas, being super creative and ending up far from my goal.

I had one game idea coming in: I have this tile-based puzzle I am exploring as a Research project. I don’t know the solution to the puzzle and I was expecting to make some sort of [foldit](https://en.wikipedia.org/wiki/Foldit) where players explore possible solutions and would help me. Making the idea into a game would require a fitting theme and finding some sort of fun gameplay.

I woke up a 3:40 (40min in). The theme was not fitting for my ideas. I considered dropping out and spend the week end with family. But I had the idea right away in my bed to do a game of falling through levels and use that shader I had developed a year ago for another research project. A colleague was working on autostereogram and I had the idea of a new algorithm to implement it on shader. Apparently reading my entry à 4am I already had the idea of reversing the Shepard tone (which is usually higher and higher). I had this old riff I played on the guitar as a warmup exercise that could work for this idea.

So at 4am after a coffee I draft a plan for the development : Day 1 was mostly free, but I had a barbecue planned with friends for day 2 from 12 to 19. So most of the game should be done on Day 1. Day 2 should only be making it better.

## Day 1

- 4:30 - 5:00 - Github + VSstudio + Unity
- 5:00 - 7:00 - Have a prototype falling game
- 7:00 - 8:00 - Read old code about autostereogram and shader
- 8:00 - 10:00 - morning with the family and the baby
- 10:00 - 12:00 - Shader code
- afternoon - Family time and maybe some music
- 21:00 - 23:00 - first release

## Day 2

- 7:00 - 11:30 - Menu, colors
- 20:00 - 23:00 - Play testing and improvement in particular
- 23:00 - 00:00 - Releasing

Everything went according to plan, which is nice and unheard of!

I knew the shader worked for me, it was nice to validate at the end of day 1 with family and other people that they could see/play !

The music idea worked right away. The most fiddly thing was that I invented the riff on a guitar for which I now how to read tabs but not sheet music. But for composition and in particular harmony arrangement I know sheet music. Going from one to another was troublesome. I need to learn sheet music for guitar.

[I commited regularly on github](https://github.com/dhmmasson/deeperAndDeeper/commits/main) so I can tell :

- I Had a game at 07:51:47 CEST without the shader. **Three hours** in !
- I had the first prototype 23:34! Exactly on schedule. It allowed me to test it with family
- Compo was released at 23:00 CEST (4h before the deadline) Fixing the hosted version on github.io and writing the post

# Tools and Acknowledgement

The idea of using autostereogram comes from some work I did a year ago with a my colleague William. All code was done on Unity, the game play is in C#. I used visual studio this year. the shader part is rewritten in HLSL from the things I did a year ago, inspired by some of the youtube tutorial from [The Art of Code](https://www.youtube.com/channel/UCcAlTqd9zID6aNX3TzwxJXg) and its work on [shadertoy](https://www.shadertoy.com/user/BigWIngs). In particular the hash function is probably taken directly from there. The music theme is an old guitar riff I played for year to warm up. It was arranged on [noteflight](http://noteflight.com/) the [score is on the github page](https://github.com/dhmmasson/deeperAndDeeper/blob/main/ressources/Deeper%20Trance%20Sheet%20Music.pdf)

# Ratings

:::{.aside}
![Ratings](https://badges.jaxs.onl/48/deeper-trance/badge.svg)
:::

- Overall: 382nd (3.549 average from 73 ratings)
- Fun: 692nd (2.92 average from 71 ratings)
- **Innovation: 15th (4.432 average from 75 ratings)**
- Theme: 236th (3.903 average from 74 ratings)
- Graphics: 479th (3.397 average from 70 ratings)
- Audio: 344th (3.333 average from 74 ratings)
- Humor: 553rd (2.148 average from 56 ratings)
- Mood: 204th (3.669 average from 70 ratings)
