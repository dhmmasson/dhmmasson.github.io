---
title: Ludum Dare
date: 2024-08-26
tags: [Game Jam, Ludum Dare, Software]
description: >
  I enjoy participating in Ludum Dare, a game jam where participants are challenged to create a game from scratch in a single weekend. I have participated in several editions, and I am always amazed by the creativity and innovation of the games developed during the event.
image: ./LudumDare/ludumDareCover.jpg
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
