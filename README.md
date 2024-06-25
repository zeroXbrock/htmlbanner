# htmlbanner

A simple scrolling banner written in pure HTML+CSS+JS. Used as an overlay in
OBS for live streaming.

## usage

The page is hosted in github pages: [zeroXbrock.github.io/htmlbanner](https://zeroXbrock.github.io/htmlbanner).

You can use the banner to display custom content without modifying any source code.
The content that populates the banner is downloaded from the URL given by the query param `contentUrl`.

```txt
https://zeroXbrock.github.io/htmlbanner?contentUrl=<YOUR_URL>
```

## example

I created a repo in github to host my text content:
[zeroXbrock/banner-content](https://github.com/zeroXbrock/banner-content/blob/main/content.txt)

The raw contents of the file are at this URL:
`https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt`

Provide that content URL to the `contentUri` param in our htmlbanner URL, and the banner will automatically load the content and display it.

Click this link to see this example in your browser:

[https://zeroXbrock.github.io/htmlbanner?contentUrl=https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt](https://zeroXbrock.github.io/htmlbanner?contentUrl=https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt)

## params

The following can be provided as query params to modify the banner:

| param | description | example |
| ----- | ----------- | ------- |
| `contentUrl` | url to text content | `?contentUrl=https://raw.githubusercontent.com/zeroXbrock/banner-content/main/content.txt` |
| `_period` | override animation duration | `?_period=60` |
| `_content` | override banner content (should be URL-escaped) | `?_content=hello%20world!` |

remember to use `&` to combine multiple params:

`?_period=60&content=hello%20world!`
