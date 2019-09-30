# Project Overview

## Project Description

This app will display word analysis using Indico's Sentiment automation for text processing. The user will enter in a word or a sentence and receive text analysis as well as data visualization using Highchart.js.

## Wireframes

### Mobile Wireframes:

![mobile1](
        article-sentiment/imgs/phone1.png
      )
![mobile2](
        article-sentiment/imgs/phone2.png
      )

### Desktop Wireframes

![desktop1](
        article-sentiment/imgs/regular-screen1.png
      )
![desktop2](
        article-sentiment/imgs/regular-screen2.png
      )

## API Snippet

https://indico.io/blog/docs/indico-api/quickstart/

```
{
  "results": {
    "anger": 0.03221449628472328,
    "fear": 0.09735360741615295,
    "joy": 0.47539448738098145,
    "sadness": 0.24594545364379883,
    "surprise": 0.14909198880195618
  }
}
```

#### MVP

- Find and use external api
- Render data on page
- Mount data to highcharts for charting
- Add Responsiveness for Phone

#### PostMVP

- Use New York times API to analyze articles
- Implement color hash to generate background color

## React Component Hierarchy

/App ||
//Header => SearchBar||
//Body => Graphs | AnalysisText => Text

## Priority Matrix

![matrix](
        article-sentiment/imgs/priority-matrix.png
      )

### Priorities

- A: Grab API Key
- B: Successfully grab JSON and store into reusable data structures
- C: Finish scaffolding HTML/CSS and base Javascript components
- D: Add responsiveness for mobile
- F: Display data using interactive C3.js graphs

| Component                    | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------------- | :------: | :------------: | :------------: | :---------: |
| Scaffolding Project          |    H     |     .5hrs      |                |             |
| Make a working search bar    |    H     |      3hrs      |                |             |
| Apply search to API call     |    H     |      4hrs      |                |             |
| Render Data through Text     |    H     |      2hrs      |                |             |
| Render Data using HighCharts |    H     |      7hrs      |                |             |
| Add styling to page          |    H     |      7hrs      |                |             |
| Total                        |    H     |     23hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Fomatic for utility styling https://fomantic-ui.com/

Highcharts for chart generation https://www.highcharts.com/

## Code Snippet

## Issues and Resolutions

**ERROR**:  
**RESOLUTION**:
