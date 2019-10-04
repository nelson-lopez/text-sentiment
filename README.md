# Article Sentiment

## Project Description

This app will display word analysis using Indico's Sentiment automation for text processing. The user will enter in a word or a sentence and receive articles based on the News API as well as data visualization.

## Wireframes

### Mobile Wireframes:

![mobile1](src/imgs/phone1.png)
![mobile2](src/imgs/phone2.png)

### Desktop Wireframes

![desktop1](src/imgs/regular-screen1.png)
![desktop2](src/imgs/regular-screen2.png)

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

https://newsapi.org/

```
{
"status": "ok",
"totalResults": 4092,
-"articles": [
-{
-"source": {
"id": "vice-news",
"name": "Vice News"
},
"author": "David Gilbert, Michael Learmonth",
"title": "5 Reasons Trump Should Be Way More Concerned About North Korea's Submarine Missile Launch",
"description": "Successfully launching a missile from a sub takes North Korea a step closer to a solid-fuel ICBM that can strike the United States.",
"url": "https://www.vice.com/en_us/article/bjwy9q/5-reasons-trump-should-be-way-more-concerned-about-north-koreas-submarine-missile-launch",
"urlToImage": "https://video-images.vice.com/articles/5d971a2316b5ad00099fb1c4/lede/1570192846325-north-korea-submarine-missile.jpeg?crop=1xw:0.8436xh;0xw,0.0344xh&resize=1200:*",
"publishedAt": "2019-10-04T12:42:25Z",
"content": "North Korea warned the world on Friday that its latest missile test was a powerful blow to its enemies, calling the weapon a time bomb and the \"most fearful dagger.\r\n Wednesdays missile test of the Pukguksong-3 rocket, the 11th test North Korea has conducted … [+6202 chars]"
},
-{
-"source": {
"id": "cnbc",
"name": "CNBC"
},
"author": "Tyler Bailey",
"title": "Your first trade for Friday, October 4",
"description": "The \"Fast Money\" traders share their first moves for the market open.",
"url": "https://www.cnbc.com/2019/10/04/your-first-trade-for-friday-october-4.html",
"urlToImage": "https://image.cnbcfm.com/api/v1/image/104245575-final-trade-logo.jpg?v=1485535955",
"publishedAt": "2019-10-04T12:37:00Z",
"content": "The \"Fast Money\" traders shared their first moves for the market open.\r\nCarter Worth was a buyer of the Silver ETF.\r\nKaren Finerman was a buyer of Disney.\r\nBrian Kelly was a buyer of the 1-3 Year Treasury Bond ETF.\r\nTim Seymour was a buyer of Constellation Br… [+1804 chars]"
},
-{
-"source": {
"id": null,
"name": "Nationalcybersecurity.com"
},
"author": null,
"title": "#computersecurity | Hacker’s parents sentenced for selling his cryptocurrency – Naked Security",
"description": "That’s what happened to TalkTalk and (alleged) EtherDelta hacker Elliott Gunton, whose parents have both been handed suspended sentences after admitting to having removed some of his ill-gotten cryptocurrency from a hardware wallet. It was a “misguided” attem…",
"url": "https://nationalcybersecurity.com/computersecurity-hackers-parents-sentenced-for-selling-his-cryptocurrency-naked-security/",
"urlToImage": "https://i2.wp.com/nationalcybersecurity.com/wp-content/uploads/shutterstock_1036293094-compressor.jpg?fit=775%2C405&ssl=1",
"publishedAt": "2019-10-04T12:23:00Z",
"content": "All you brilliant kids who use your fine brains to do idiotic things like, say, hack TalkTalk and the EtherDelta exchange, do yourself a favor: when you wind up in jail, warn your parents not  to help you by transferring your stolen cryptocurrency.\r\nThats wha… [+5243 chars]"
},
-{
-"source": {
"id": "the-next-web",
"name": "The Next Web"
},
"author": "David Canellis",
"title": "$1.2M seized from Bitcoin Ponzi stuck in frozen Indian bank account",
"description": "Authorities in India have found themselves in a crypto-conundrum: they can’t access cryptocurrency seized from a Ponzi scheme because such transfers have been prohibited, reports Times of India. To make matters worse, police had hired the now-defunct cryptocu…",
"url": "https://thenextweb.com/hardfork/2019/10/04/india-ponzi-bitcoin-frozen-bank-account-koinex-cryptocurrency/",
"urlToImage": "https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2018%2F10%2Fblockchain-committee-india-2-bitcoin-cryptocurrency-regulation.jpg&signature=6d0a0ff213b2a5160e35f22384042bf3",
"publishedAt": "2019-10-04T12:12:17Z",
"content": "Authorities in India have found themselves in a crypto-conundrum: they cant access cryptocurrency seized from a Ponzi scheme because such transfers have been prohibited, reports Times of India.\r\nTo make matters worse, police had hired the now-defunct cryptocu… [+1111 chars]"
},
-{
-"source": {
"id": null,
"name": "Newsbtc.com"
},
"author": "jessicasmith",
"title": "Morpheus.Network Adds Binance BNB Payment Option to its Supply Chain Management Platform",
"description": "Morpheus.Network, the leading blockchain-based supply chain management platform has joined forces with another global cryptocurrency heavyweight to further simplify the entire process of cross-border shipments across the globe. The latest integration comes in…",
"url": "https://www.newsbtc.com/2019/10/04/morpheus-network-adds-binance-bnb-payment-option-to-its-supply-chain-management-platform/",
"urlToImage": "https://www.newsbtc.com/wp-content/uploads/2019/10/port-1569694_1920-1200x780.jpg",
"publishedAt": "2019-10-04T12:11:10Z",
"content": "Morpheus.Network, the leading blockchain-based supply chain management platform has joined forces with another global cryptocurrency heavyweight to further simplify the entire process of cross-border shipments across the globe. The latest integration comes in… [+5153 chars]"
},
-{
-"source": {
"id": null,
"name": "Coindesk.com"
},
"author": "Leigh Cuen",
"title": "‘Gold-Backed’ Crypto Token’s Promoter Investigated by Florida Regulators",
"description": "Karatbars, issuer of a purportedly gold-backed crypto token, is under investigation by Florida regulators over links to a Miami “crypto bank.”",
"url": "https://www.coindesk.com/gold-backed-crypto-tokens-promoter-investigated-by-florida-regulators",
"urlToImage": "https://static.coindesk.com/wp-content/uploads/2016/07/gold-nugget-e1469211611156.jpg",
"publishedAt": "2019-10-04T12:00:42Z",
"content": "The Takeaway\r\n<ul><li>Florida regulators are investigating Karatbars, a German company thats been promoting a token tied to a Miami crypto bank without any banking license in the state.</li><li>Karatbars previously issued a cryptocurrency purportedly backed b… [+7930 chars]"
},
-{
-"source": {
"id": null,
"name": "Yahoo.com"
},
"author": "Leigh Cuen",
"title": "‘Gold-Backed’ Crypto Token’s Promoter Investigated by Florida Regulators",
"description": "Karatbars, issuer of a purportedly gold-backed crypto token, is under investigation by Florida regulators over links to a Miami “crypto bank.”",
"url": "https://finance.yahoo.com/news/gold-backed-crypto-token-promoter-120042883.html",
"urlToImage": "https://s.yimg.com/ny/api/res/1.2/6Z4KvcjNV16EqUudlc9YFg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD04NTMuMzMzMzMzMzMzMzMzNA--/https://s.yimg.com/uu/api/res/1.2/_1DTNSTTgqIhCWvpfFQ0uQ--~B/aD0xMDAwO3c9MTUwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-US/coindesk_75/6e81c2e00dc5848801bebf383fca8239",
"publishedAt": "2019-10-04T12:00:42Z",
"content": "The Takeaway\r\n<ul><li>Florida regulators are investigating Karatbars, a German company thats been promoting a token tied to a Miami crypto bank without any banking license in the state.\r\n</li><li>Karatbars previously issued a cryptocurrency purportedly backed… [+8107 chars]"
},
-{
}
```

#### MVP

- Use News API to analyze articles
- Render data on page
- Add Responsiveness for Phone
- Mount data to Highcharts

#### PostMVP

- Add animations while rendering using React.Spring
- Implement color hash to generate background color

## React Component Hierarchy

![matrix](src/imgs/component-heirarchy.png)

## Priority Matrix

![matrix](src/imgs/priority-matrix.png)

### Priorities

- A: Working search bar
- B: Successfully grab JSON and store into reusable data structures
- C: Apply searches to INDICO API & NYT API
- D: Render data using text
- E: Render data through Highcharts
- F: Add styling

| Day      | Deliverable                                          | Status     |
| -------- | ---------------------------------------------------- | ---------- |
| Sep 30th | Scaffolding Project/Routes/Make a working Search Bar | Finished   |
| Oct 1st  | Apply search input to Api/Render Data through text   | Finished   |
| Oct 2nd  | Render data using HighCharts                         | Finished   |
| Oct 3th  | Styling with breakpoints                             | Finished   |
| Oct 4th  | Present                                              | Unfinished |

| Component                    | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------------------- | :------: | :------------: | :------------: | :---------: |
| Scaffolding Project/Routes   |    H     |      3hrs      |      1hr       |     1hr     |
| Make a working search bar    |    H     |      3hrs      |      2hrs      |    2hrs     |
| Apply search to API call     |    H     |      4hrs      |      1hrs      |    2hrs     |
| Render Data through Text     |    H     |      4hrs      |      1hrs      |    1hrs     |
| Render Data using HighCharts |    H     |      8hrs      |      8hrs      |    8hrs     |
| Add styling to page          |    H     |      8hrs      |     14hrs      |    14hrs    |
| Total                        |    H     |     30hrs      |     27hrs      |    27hrs    |

## Additional Libraries

Fomatic for utility styling https://fomantic-ui.com/

Highcharts for chart generation https://www.highcharts.com/

## Code Snippet

```
const setChartData = useMemo(() => {
    const chartData = [];
    if (data) {
      for (let key in data) {
        chartData.push({
          name: key,
          y: data[key]
        });
      }
    }
    return chartData;
  }, [data]);

    const options = {
    borderColor: '#B72D2D',
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Sentimental Values specific to this article'
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: setChartData
      }
    ]
  };
```

## Issues and Resolutions

**ERROR**:  
**RESOLUTION**:
