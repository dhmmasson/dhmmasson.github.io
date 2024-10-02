---
title: Keep the bee (Jeez) Alive
date: 2020-04-20
image: LudumDare46_cover.png
author:
  - name:
      given: Dimitri
      family: Masson
    orcid: 0000-0002-7072-3146
    email: d.masson@estia.fr
    idhal: dimitri-masson
doi: 10.5281/zenodo.13377937
url: dhmmasson.github.io/KeepTheBeesAlive/
citation:
  id: masson2020_ld46KeepBee
  citation-key: masson2020_ld46KeepBee
  type: software
  license: MIT
  container-title: Ludum Dare 46
aliases:
  - Abstract
  - ld46
categories:
  - software
  - Game
  - LudumDare
tags:
  - Unity
  - Game
links:
  - icon: bi bi-github
    name: Source Code
    class: btn-dark
    url: https://github.com/dhmmasson/KeepTheBeesAlive
  - icon: bi bi-award
    name: LD46 Entry
    url: https://ldjam.com/events/ludum-dare/46/keep-the-bee-jeez-alive
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: https://dhmmasson.github.io/KeepTheBeesAlive/keepTheBeeAlive-PostMortem
toc: true
toc-depth: 3
---

# Abstract

Keep the bees alive by building a shelter for their hive in this physics-based balancing game. Stack construction elements carefully to protect the bees from the rain. Inspired by the iconic Bee Gees hit _Staying Alive_, this game blends strategic thinking with a groovy soundtrack. Can you keep the hive safe and buzzing?

# Keep the bee (Jeez) Alive

Keep the Bees Alive is my entry to Ludum Dare 46

## Theme and Game Idea

The idea of the game was to keep the bees alive by constructing a shelter with some random blocks. And also protect cactus from the rains so that they would flower… The bee hive is there, the cactus, the rain, the flower, the bees, the moving of the bits and things to build. The score board is there, the music is there, some sounds were there but I think i disabled them by accident… Everything is there but a real game… not much game testing, you can build you dont have to protect the bee hive so much as not destroing it. the cactuses need some water, but not to much. I forgot to do the dry part during the sunny part of the game.

## Game mechanics

### the flower and the bees

the bees are particles, At some point late in the development ( maybe on sunday, I should check the git log ) I had to add the bees ( they were in the title ) I didn,t had the time to program any kind of flight management ( nor the energy or a clue on how to do something believable) I had just finish messing about with the rain, so handling them as particles was kind of obvious. There are three kind of bees :

- **the ambient bees** small that just buzz around the bee hive so it look more like a bee hive.
- **The angry bees** that emit a bzzzz and buzz widly around the bee hive.
- **the wandering bees** few and large, they circle around the main area ( with some speed over time in the particle management ). The cactuses have an attractor to help them “find” the flowers. On hitting a cactuses the score some points depending on the flower levels of the cactus. In the post mortem version I added some nice trail :)

### the cactus

the cactus are Plants, meaning they have water level associated with a number of flowers and a mesh. This allowed me to quickly manage the growing state. I just did multiple meshes in blender and link them to the same gameObject in unity. No need to fuss around where the flower should attach to the mesh and so on. I had plan on multiple cactus variants and other kind of flower with different water requirement ( the cactus in my original idea, needing no water and withering under the rain ) and the flower doing the contrary. In the LD version I have only one cactus with three states dry - flowering - too wet. In the post mortem version the cactus have more flowering states so that you see them growing. I should have added some instructions and some UI help to see more clearly the water requirement and actual level if I ever wanted to implement a better/richier version of this idea.

### Moving the blocks

that was the fun part. From the beginning I wanted you to build a shelter from random junk as the set of the music video for staying alive is some sort of abandoned ruin of a village. Doors and windows are in shambles and that gave me the idea.

Moving the pieces around in a direct way in 3d is tricky, I struggle to design in 3d in blender and in unity, both of them have different camera management and keyboard shortcut and this is a pain in the… In both software this is my biggest struggle. Being able to orbit around the correct point is something I experienced in my human computer interaction research lab years ago through the work a a phd student. Ever since I feel like a piece of me is missing… anyway I wasn’t going to invent something brilliant in a matter of 2 days. I sketched something I must have done in previous projects, using a spring joint to loosely connect object to the mouse.

The elasticity of the spring allows in some sense to compensate for the fact that the user is not part of the physical engine. Finding the right strength for the spring is the key. I opted for something quite hard and with a lot of damping so that the object don’t wiggle to much around. I also used quite heavy objects to stabilize everything.

To project where the user was pointing on the screen to a 3d position I used the native raycasting implementation. I opted for a two step process, if no object was selected the ray casting would intersect with the objects, left click sets the first anchor point. I like that the moving object anchor is set where you click on the object, rather than the center of mass. To highlight that a small sphere is visible on the object when you hover over it. ( The idea come from blender sculpt mode ). Once selected the object glow orange and the ray now intersect with a target plane.

The sphere, and the selected object are highlighted through the emission attribute from the shader. I discovered the emission parameter in some blender videos recently : I love the effect a bit to much. I am glad it worked well in the final version.

### PostProcessing

It was there in the template project, I just built upon to have 3 ambiances, one for the rain ( the one I used from the beginning ) a sunny, more yellow, less grain version, and a splash ( blurry ) version.

### More Interaction ideas :

- **Target plane motion** : moving the plane from front to back was plan but not implemented for LD ( it was heavily commented on ). I implemented that in the postmortem version
- **Push mode** : At first the target sphere had a collider and you could also push object around with it. I disabled it to finalize my spring action.
- **Ghost mode** : the object is transparent to collision with the other will pressing ctrl and moving

### What I wanted more :

- there is a lot of brutal change of values. I’d love to have a easy to use continuous change of properties. gameObject.position.transition( vector3(0,0,0), 0.1f ) ;
- I made a lot of “state machine” : for the targetSphere, for the flowers, for the weather… I wish I had something more generic : Maybe something like the Animator in unity ?

Big mistake : I had a memory leak in the cactus mesh update, where I was instantiating the mesh again and again. Not such a big deal in the LD version as there was only two variants. In the post mortem version, I added 3 new flowering states, and the ability for the cactus to dry. It got pretty bad pretty quickly.

# Post Mortem

It was fun to do!! Enjoy this [thing](https://dhmmasson.github.io/KeepTheBeesAlive/keepTheBeeAlive-PostMortem).

his game was my come back to ludum dare after a long break ( last time succesful compo was LD32). I went a completely different route from usual (from scratch html/javascript game) to using Unity3d and blender to produce models. Before the long ~in details~ rambling about the tools and choices I made for this game, lets recap the highs and lows of this edition :

## inB4 TL;DR

- Unity3d is a great tool to quickly produce a game, the mix UI/editor and code is very nice. The general UI of unity is somewhat lacking ( keyboard shortcuts ( why can’t a delete stuff without right clicking ), the shadergraph ui is clunky )
- I love that I was easy to have a physique systems, particles, shaders, sound and music without to much trouble.
- I did the game across the weekend, with time for the family. I mostly worked early in the morning during baby’s nap and until late at night. The last push was a blast.
- I spent way too long on small details and as always not enough on having a *game*. It lacks clear objectives or a compeling reward systems.
- The game idea come from :
  - One of my first blender render, is an animation of a cactus characters in a desert.
  - Keep it Alive, had me thinking about staying alive, the bee gees about bees and voila. The set is model to look like the set of the music video from the beegees.
- I hate the HoweverYouNameItCase where Methods/Properties start with a Capital letter! Using Atom without a good autocompletion/autofixing feature hinder me a lot.
- Compiling the web version took a lot of time, and resulted in botched shadows :(

# Tools

## Unity

I learned about Unity watching a Quill18 LudumDare livestream a long time ago. I was puzzled by how he just seemed to create a bunch of unrelated scripts. Sebastien Lague youtube series on procedural game generation on unity hooked me. I loved how you could program the editor as well as the game. His videos taught me a lot on how to organize my code using scriptable object to store some game logic :

- the “levels” are a collection of building blocks that drop from certain points. I had plan on having a succession of levels, where you had less and less blocks or smaller or harder block to place. You would start with the large stones, and planks and end up with the brick and branches In the end there is only one playable level with a collections of all the available blocks ( to show off the assets I had designed ).
- the weather scenarios : are a collections of particles effects + post processing. Same idea than before. I planned to start with a succession of sun/rain where you would have a minute of sunshine to prepare ( one of the not selected theme ) before the rain. Harder level would have different weather effects ( thunder, hail ). I only manage one, I had fun playing with the particle effects and the collision with the cactus to actually simulate them being water by the rain. The splashing effect is lost on the resolution I think.

## Shadergraph

I started unity this year to implement some shaders I made on shadertoy for a research project. So I knew the HGSL and I can spend HOURS playing in shaders… not good for a compo. On the other hand I love graph programming ( grasshopper for Rhino is amazing for procedural 3d design ) and the shading graph in blender is very well made. It was a first for me to use Unity shader graph. I had seen some promising video online ( some force field, and a waterfall ). But man is the editor a pain in the butt… Moving around is a pain, Disconnecting a socket is a pain, adding a node is a pain. Why does unity hate keyboard shortcut (delete ??). It slow, clunky, berk! but you can plug and play some nice stuff. In the LD I finally didn’t do much. I used Imphenzia texture mapping technique in blender and in unity.

- I did something super cool but invisible : the wing of the bee bat through the shader. I mapped the x coordinate of the texture to a sinusoidal vertex displacement. In blender most of the bee vertex are mapped to some (0, Vc ) coordinate ( where Vc is the position of the color in the texture ). The wing vertex are map ( u, Vc ) where u is propotional to the position on the wing ( 0 close to the body, 1 at the tip ). Meaning that the vertex move more at the tip.

## 3D models - Blender

In the past I have used sketchup, fusion360 and Rhino + grasshopper to do 3d modeling. I very recently learn to use blender. Imphenzia on youtube made it sound so simple to quickly model low poly models that I wanted to try for myself. The four softwares have a completely different take on how 3d modeling is done but this post mortem is already long enough so I won’t expand there too much. For some repetitive task like the stone around the door I would have done a better job on fusion or grasshopper. However Imphenzia UV mapping technique (mentioned in the Shadergraph section) allowed me to quickly color and texture the elements. It is very limited in what you can do, so no tweaking make for a speedy process. Blender on the mac tend to crash every so often, not on this weekend. Pray the software gods!

## Sounds and music - Noteflight

I composed the music on sunday, 6 hours before the deadline, having done most of the programming ( well it was not a game, but you could move stuff around and bees, and rain ). It was done online on a web app called Noteflight. I have composed on and off on it for some time now. The music was heavily inspired by staying alive ( I started with the chords and some of the notes from parts harvested from google ). Then I just copy paste and tried some contrapunctal stuff… Anyway I badly copied the theme at some point… I can’t even hear it. In the end I slapped some trumpet, it always adds something that I like. I am quite proud of the music.

The sounds where created even latter, with even more stress about the remaining time. As it was super late, baby was sleeping; No noise allowed so I reverted to use Bfxr. I used it a long time ago, with no real or current experience of it creating *realistic* bump noise was a nightmare. Implementing the sound was terrible too. I wanted to cycle around some bump noises to avoid repetitiveness. In the end for the LD the blocks reference the same 4 audiosource, and stimulates some of them on collision. This result in a mess on init, and

## Atom

I love atom to the bits, but as a complete unity noob it was lacking a bit in term of exploring the api. I used a package autocomplete-unity that helped a lot. I am considering installing visual studio to ease the development of future unity projects and games.

# Ratings

- Overall: **990**th (2.813 average from 34 ratings)
- Fun: **948**th (2.656 average from 34 ratings)
- Innovation: **421**st (3.422 average from 34 ratings)
- Theme: **615**th (3.578 average from 34 ratings)
- Graphics: **373**rd (3.656 average from 34 ratings)
- Audio: **349**th (3.313 average from 34 ratings)
- Humor: **665**th (2.429 average from 30 ratings)
- Mood: **508**th (3.226 average from 33 ratings)
