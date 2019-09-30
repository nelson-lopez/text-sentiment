# Project Overview


## Project Description

This app will display word analysis using Indico's Sentiment automation for text processing. The user will enter in a word or a sentence and receive text analysis as well as data visualization using Highchart.js.   
## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

## API Snippet

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

### MVP/PostMVP - 5min
 

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Mount data to highcharts for charting
- Add Responsiveness for Phone

#### PostMVP EXAMPLE

- Use New York times API to analyze articles
- Implement color hash to generate background color

## React Component Hierarchy

/App
//Header => SearchBar
//Body => Graphs | AnalysisText


## Priority Matrix

Add in a picture of your Priority Matrix


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Scaffolding Project | H | .5hrs|  |  |
| Make a working search bar | H | 3hrs|  |  |
| Apply search to API call | H | 4hrs|  |  |
| Render Data through Text | H | 2hrs|  |  |
| Render Data using HighCharts | H | 7hrs|  |  |
| Add styling to page | H | 7hrs|  |  |
| Total | H | 23hrs| 5hrs | 5hrs |


## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet


## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
