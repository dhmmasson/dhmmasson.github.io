---
listing: 
  - id: articles
    contents: "publications/*.md"
    template: ./templates/article.ejs
    categories: true
    sort:
      - "year desc"
      - "title"
    sort-ui: [title,author,publication,year,categories]
    filter-ui: [title,author,publication,year,categories]
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

My current research is in Human System Integration. I focus on the design on complex systems, the roles of humans in these systems, and the interactions between humans and machines. 

I have a strong interest in creativity, design, and innovation. I am particularly interested in the design of tools and methods to support human activities (creative, design, decision making). 
I am also interested in the study of the creative process and the development of creativity in individuals and teams.


# Bibliography

:::{#articles}
:::