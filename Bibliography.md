---
listing:
  - id: articles
    contents: "publications/*.md"
    template: ./templates/article.ejs
    categories: false
    sort:
      - "year desc"
      - "title"
    page-size: 50
    field-display-names:
      publication: "Publication"
      year: "Year"

format:
  html:
    page-layout: full
title-block-banner: false
---
# Research

I have a strong interest in creativity, design, and innovation. I am particularly interested in the design of **tools** and methods to support **human activities** (creative, design, decision-making).
Over the year my field has shifted from *Human-Computer interaction*, where I studied how computer tools could assist human activities to the broader **Human-System Integration** perspective, where I think of the role of human in complex systems.

# Bibliography

:::{#articles}
:::
