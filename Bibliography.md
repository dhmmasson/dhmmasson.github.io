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

# Bibliography

:::{#articles}
:::
