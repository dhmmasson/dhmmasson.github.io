---
title: Tiles Collector
date: 2025-10-06
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
doi: 10.5281/zenodo.17289917
image: LudumDare58_cover.jpg
title-block-banner: false
toc: true
citation:
  id: Masson2025_TilesCollector
  citation-key: Masson2025_TilesCollector
  type: software
  license: MIT
  version: v1.0.1
  container-title: Ludum Dare 58
tags:
  - Ludum Dare
  - Game
  - Web
  - Javascript
links:
  - icon: bi bi-github
    name: Source Code
    class: btn-dark
    url: https://github.com/dhmmasson/tilesCollector
  - icon: bi bi-award
    name: Ludum Dare
    url: https://ldjam.com/events/ludum-dare/58/tiles-collector
  - icon: bi bi-controller
    name: Play!
    class: btn-success
    url: https://dhmmasson.github.io/tilesCollector
aliases: ["Tiles Collector"]
google-scholar: true
---

# Abstract

Tiles Collector is a minimalist puzzle game where you collect unique color pairs by carefully arranging colored tiles in 1D friezes and 2D grids.
Your goal: fill each row and column to maximize the number of distinct adjacent color pairs — a bit like dominoes, a bit like sudoku, but with a colorful twist.

# Behind the Design

This idea has been in my mind for at least eight years, an idea that never quite fit previous Ludum Dare themes until now. Tiles Collector stems from an ongoing mathematical obsession: finding a tiling that simultaneously contains all possible color pairs in rows and columns and all possible 2x2 color squares. While proven impossible for 2 and 3 colors, the 4-color case remains an open question. I wanted to create a game where player would help me explore that possibility, but I could not manage to add the 2x2 color squares visualisation and scoring during the jam so part of the mystery is still there.
