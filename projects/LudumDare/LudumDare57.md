---
title: Focus Hunt
date: 2025-04-06
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
doi: 10.5281/zenodo.15181101
image: LudumDare57_cover.png
title-block-banner: false
toc: true
citation:
  id: Masson2025_FocusHunt
  citation-key: Masson2025_FocusHunt
  type: software
  license: MIT
  version: v1.0.1
  container-title: Ludum Dare 57
tags:
  - Ludum Dare
  - Game
  - Web
  - Javascript
links:
  - icon: bi bi-github
    name: Source Code
    class: btn-dark
    url: https://github.com/dhmmasson/focusHunt
  - icon: bi bi-award
    name: Ludum Dare
    url: https://ldjam.com/events/ludum-dare/57/focus-hunt
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: https://dhmmasson.github.io/focusHunt
aliases: ["Focus Hunt"]
google-scholar: true
---

# Abstract

Focus Hunt is a look and find game
with a very shallow depth of field,
Focus to find the easter elements
in the scene.

# Focus Hunt

## Theme and main Idea

For **LD57**, the theme was **Depths**, I had no real idea for a complex game mechanic that would fit the theme, so I decided to make a game for my oldest daughter rather than for the ludum dare audience. She loves search-and-find games, so I decided to create one just for her. She even helped me shape it: she suggested making it about Easter (since it was just around the corner), and together we picked the color palette. But this still inspired me to find my twist! You have to adjust your focal length to uncover the element hidden in the depths of field of the scene.

# Technical stuff

no 3d engine (You can check the code and star the repository if you like the idea on github :D) behind the scene it’s just 4 images :

The clean and the blurred one are merged according to a depth map. Terrible performance since I generate the resulting image everytime the depth of field change…
Which element you click on is determined by a index image :
![Technical details](ludumDare58_details)

. I flood fill the index image with black when you click on an element. I could have use that to implement a glow by flooding white for ex. Or actually take a picture to add to the top of the screen (so much empty space in that tree line)

## Pixel density

I am guessing that the issue is that I have a different pixel density that you have. It was troubling me while copying that my image where scale, so I had to include a strange x2. I have replaced the x2 multiplication by x pixelDensity() in the chunk copying. Could one of you check if the issue is still there ?
