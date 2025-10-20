---
title: Ludum Dare
date: 2024-08-26
tags: [Game Jam, Ludum Dare, Software]
description: >
  I enjoy participating in Ludum Dare, a game jam where participants are challenged to create a game from scratch in a single weekend. I have participated in several editions, and I am always amazed by the creativity and innovation of the games developed during the event.
image: ./LudumDare/LudumDareCover.jpg
page-layout: article
listing:
  - id: ld32
    contents: "./LudumDare/LudumDare32.md"
    type: grid
    grid-columns: 1
  - id: ld46
    contents: "./LudumDare/LudumDare46.md"
    type: grid
    grid-columns: 1
  - id: ld48
    contents: "./LudumDare/LudumDare48.md"
    type: grid
    grid-columns: 1
  - id: ld51
    contents: "./LudumDare/LudumDare51.md"
    type: grid
    grid-columns: 1
  - id: ld57
    contents: "./LudumDare/LudumDare57.md"
    type: grid
    grid-columns: 1
  - id: ld58
    contents: "./LudumDare/LudumDare58.md"
    type: grid
    grid-columns: 1
toc: true
toc-depth: 3
---

# My Ludum Dare Journey

**Ludum Dare** is a gam jam competition, that run online since 2002, where you have 48h to fully create a game, from design, to final code, art, music etc. I first discovered it after watching some YouTube videos by Quill18 in 2014. The idea of creating 100% of a game within 48 hours, sharing it with the community, making it [[open source]], and testing other players' games immediately caught my attention. I loved the challenge, but even more, I fell in love with the supportive and creative community. Each time I participated, my passion for game development grew.

## LD32: My First Ludum Dare

My first Ludum Dare was **LD32** in 2015. The theme was "_An Unconventional Weapon._"
I created a variant of the Minesweeper game. Since I love [[hexagons]], I changed the grid to a hexagonal grid. Then instead of just clicking on tiles to reveal them one at a time, you have to explore the island to score points by sweeping across the tiles. More dangerous path earn more points. To help you can rely on an _An Unconventional Weapon_ : your ears ! While you sweep you can hear contextual information about your surroundings (each mine emits a tune). The audio is spatialized, the closer you get from a mine the louder it gets, it is also panned left-right to help guide players. This one done using the recent web audio api at the time. I used various library to help me draw the island (a 3d graphical library called philoGl which was overkill for that 2d game). It was a **pain** to build everything by hand in JavaScript, but I’m proud of what I achieved.

:::{#ld32 .aside}
:::

The hard work paid off as I ranked **#22 in Innovation**!

[Read More about the entry](./LudumDare/LudumDare32.md)

## LD46: The Come back

I have tried a couple more times after LD32 to participate in Ludum Dare, but failed to produce something by the end of the time frame, mostly due to lack of practice, time, and involvement. I return to Ludum Dare with LD46 during the Covid Lockdown. I had just discovered **Unity** through Sebastian Lague's videos and **Blender**, and I was looking for an excuse to use these tools. I returned for **LD46** with a new mindset: balance. I wanted to develop a game over the weekend, but I also wanted to make time for my family.

:::{#ld46 .aside}
:::

The experience was a blast! I created a beautiful 3D world (in my eyes), filled with interactive elements, a relaxing atmosphere, and ambient music. However, it wasn’t much of a game—it was more like a sandbox playground where players could stack elements, interact with bees, watch the rain, and see cactus flowers grow. It was visually appealing, but it lacked core gameplay mechanics. It was a peaceful experiment that resonated with my time in lockdown in the countryside.

[Read more about Keep the bee (Jeez) Alive](./LudumDare/LudumDare46.md)

## LD48: Lessons Learned

For **LD48**, I set a clear goal: **make a game first**, then add the bells and whistles. I focused on creating simple gameplay with a clear start, end, and scoring system. I had been tinkering around the concept of moving autostereogram with a colleague as part of my research work, and I had previously designed a shader that transformed a 3d scene in an autostereogram using the depth information from the camera. So when LD48 came I got the idea of using that mechanism as the key feature of the game. To showcase it, I decided to use a really simple and well-known gameplay of a tunnel runner where you can rotate an object to fit through a series of procedurally generated holes. The paddle stay fix on the screen and the wall get closer and closer to you.

:::{#ld48 .aside}
:::

The theme was _"Deeper and Deeper."_ if you can get to see the 3d effect, you have the impression of falling deeper and deeper through hole. In addition to the visual illusion, I am very proud of the music I composed for the game: using a chromatic run I have been playing for year on the guitar, I created a shepard tone effect to create an auditory illusion of a music always getting deeper.

This approach worked wonders. I finally created something that felt like a complete game, and I was proud of how it turned out!

[Read more about Enter the Deeper Trance](./LudumDare/LudumDare48.md)

## LD51: My Best Entry Yet

I am so happy with my entry for **LD51**. I have made a working game, with a goal and an original scoring system (a first in all my participations). The overall finish of the game is quite clean. The theme for this edition was **Every 10 seconds**, I played on the double meaning of seconds (at least in French) of second as in a "second one" and made a matching game. But instead of searching for an exact match, your search for a "second something", a second numbered tile, a second vowel, a second blue odd numbers... The more specific the pair of elements you find the more points you score. _Every ten second_ appears multiple Time in my entry, every ten _time-seconds_ a random tile disappears, and every ten _pair-seconds_ the board replenishes (based on your score this round).

:::{#ld51 .aside}
:::

The game features customizable settings, hidden easter eggs, and a dynamic (but terrible!) soundtrack (with an option to mute). It was built from scratch using P5.js.

[Read more about Find Ten Seconds](./LudumDare/LudumDare51.md)

## LD57: Depths

For **LD57**, the theme was **Depths**, I had no real idea for a complex game mechanic that would fit the theme, so I decided to make a game for my oldest daughter rather than for the ludum dare audience. She loves search-and-find games, so I decided to create one just for her. She even helped me shape it: she suggested making it about Easter (since it was just around the corner), and together we picked the color palette. But this still inspired me to find my twist! You have to adjust your focal length to uncover the element hidden in the depths of field of the scene.

The result was **Focus Hunt** — a cozy, camera-based find game where you explore a colorful diorama and try to capture just the right details in focus.

:::{#ld57 .aside}
:::

In the scene, my daughter had to find:
📸 the letters of her name,  
🐇 a chocolate rabbit with only one ear,  
🔔 two blue bells,  
🐞 and five ladybugs.

The results were beyond my expectations, especially in **Innovation** and **Theme**, showing that small, personal ideas can resonate widely.

**Final Results: **  
Overall: 197th (3.305 average from 66 ratings)
Fun: 251st (2.841 average from 65 ratings)
Innovation: 83rd (3.625 average from 66 ratings)
Theme: 90th (3.813 average from 66 ratings)
Graphics: 139th (3.477 average from 66 ratings)
Audio: 190th (2.919 average from 64 ratings)
Mood: 212th (3.113 average from 64 ratings)

[Read more about Focus Hunt](./LudumDare/LudumDare57.md)

---

## LD58: Collector

For **LD58**, I finally brought to life an idea that had been sitting in my notebook for **over eight years** — a game about color patterns, adjacency, and mathematical beauty. The theme this time clicked perfectly, and I used it to build something I've wanted to explore for a long time: **Tiles Collector**.

:::{#ld58 .aside}
:::

**Tiles Collector** is a minimalist puzzle game where you collect **unique color pairs** by carefully arranging colored tiles into 1D friezes and 2D grids. The goal is to fill each row and column to maximize distinct adjacent pairs — a little bit like dominoes, a little bit like sudoku, but all about color harmony.

The game starts simple, with just two colors, and gradually grows deeper as you unlock more colors and dimensions — from 2, to 3, and finally 4 colors. Each step reveals new layers of combinatorial beauty and challenge.

For once, I managed to pack in a lot of features within the 48-hour jam:

- **Tutorial Mode** – to gently teach the core mechanic
- **3 Daily Challenges** – new puzzles every day with an online leaderboard
- **Sandbox Mode** – to freely experiment and create your own perfect grids

I went for a **clean aesthetic**, inspired by _The New York Times_ games, and intentionally kept it **silent**, encouraging a calm, reflective play session — or your own background soundtrack. (music would really not have fit the mood of the game, and i didn’t have time to compose something fitting anyway)

The whole project was developed and hosted live using **Quarto**, **p5.js**, and **GitHub Pages**, with regular commits and releases throughout the weekend.

Behind all this lies a deeper mathematical curiosity: the search for a tiling that contains all possible adjacent color pairs and 2x2 color squares simultaneously. For 2 and 3 colors, it’s proven impossible — but the 4-color case remains an open question. Maybe one day, the players of Tiles Collector will help me find out.

[Read more about Tiles Collector](./LudumDare/LudumDare58.md)

# The Joy of Community Feedback

One of the things I love most about Ludum Dare is the review phase. Testing and commenting on other participants' games is a great way to engage with the community. I’ve had some fantastic interactions with fellow developers and discovered creative ideas that I’ve kept in mind for future Ludum Dare.

:::{.aside}
If you want to support me in my game development journey
[![](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B3142FQ1)
:::

You can still interact with my older entries, play the online versions {{< fa gamepad>}}, [**star the repositories** {{< fa star>}}](https://github.com/stars/dhmmasson/lists/ludum-dare), or comments on the individual pages here on my website.

All my entries are **MIT licensed {{< fa scale-balanced >}}**, so feel free to fork, modify or do whatever with them.

If you want to support me in my game development journey, you can buy me also [buy a coffee on {{< fa mug-hot >}}](https://ko-fi.com/B0B3142FQ1)

# My Current Tools

- **P5.js** for game development
- **Blender** for 3D art
- **Krita** for 2D art
- **Musecore** for music composition

Ludum Dare has been an incredible learning experience for me. Every jam brings new lessons, challenges, and joys. If you're considering jumping in—go for it! You’ll grow as a developer and meet some amazing people along the way.
