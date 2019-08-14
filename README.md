# 1 Million Points Line Trace

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.

### Description 

This example plots a million data points using progressive line series.

#### Progressive series

Progressive series are highly optimized series for the rendering of high-volume and high-density data while keeping full interactivity.
These optimizations are enabled by selecting a ***DataPattern***, which needs to be specified during the creation of the series instance and cannot be changed further for performance related reasons.

The ***DataPatterns***-collections object contains all different directions for progressive data patterns:
- Select ***DataPatterns.horizontalProgressive*** to handle horizontal progressive datasets efficiently.
- Select ***DataPatterns.horizontalRegressive*** to handle horizontal regressive datasets efficiently.
- Select ***DataPatterns.verticalProgressive*** to handle vertical progressive datasets efficiently.
- Select ***DataPatterns.verticalRegressive*** to handle vertical regressive datasets efficiently.

```javascript
// Create line series optimized for horizontally progressive data.
const series = chart.addLineSeries(
    // Using the DataPatterns ojbect to select the certain pattern for the line series.
    {  dataPattern: DataPatterns.horizontalProgressive  }
)
```

##### NOTE #1:

The series created based on specified ***DataPattern*** is highly optimized **only** for the selected pattern. We do not recommend to provide data that contradict with specified ***DataPattern***.

##### NOTE #2:

The scrolling of data in progressive series can also be automated and optimized by specifying ***ScrollStrategy*** for both x-axis & y-axis to perform the scrolling efficiently.

- Select ***AxisScrollStrategies.expansion***. Automatically increases a scale if some points are out of scale. Retains progressivity/regressivity of used scale.
- Select ***AxisScrollStrategies.fitting***. Automatically increases a scale if some points are out of scale and reduces it if there is too much empty space. Retains progressivity/regressivity of used scale.
- Select ***AxisScrollStrategies.progressive***. Automatically scrolls a scale in a positive direction.
- Select ***AxisScrollStrategies.regressive***. Automatically scrolls a scale to a negative direction.
- Pass ***undefined*** to disable automatic scrolling. Scale can then be manually set using *setInterval* method of ***Axis***

For this particular example and based on the selected ***DataPatterns***, the configuration of the axis can be either ***AxisScrollStrategies.progressive*** or ***AxisScrollStrategies.regressive***.

For example
- ***DataPatterns.horizontalProgressive*** series is created. X-axis scrolling should be configured with ***AxisScrollStrategies.progressive***. Y-scrolling can be any.

    ```javascript
    // Configure axis to have progressive scrolling.
    axisX.setScrollStrategy( AxisScrollStrategies.progressive )
    ```

- ***DataPatterns.horizontalRegressive*** series is created. X-axis scrolling should be configured with ***AxisScrollStrategies.regressive***. Y-scrolling can be any.
    
    ```javascript
    // Configure axis to have regressive scrolling.
    axisX.setScrollStrategy( AxisScrollStrategies.regressive )
    ```

- ***DataPatterns.verticalProgressive*** series is created. Y-axis scrolling should be configured with ***AxisScrollStrategies.progressive***. X-scrolling can be any.
    
    ```javascript
    // Configure axis to have progressive scrolling.
    axisY.setScrollStrategy( AxisScrollStrategies.progressive )
    ```

- ***DataPatterns.verticalRegressive*** series is created. Y-axis scrolling should be configured with ***AxisScrollStrategies.regressive***. X-scrolling can be any.
    
    ```javascript
    // Configure axis to have regressive scrolling.
    axisY.setScrollStrategy( AxisScrollStrategies.regressive )
    ```


### API links

* XY cartesian chart: [ChartXY][]
* Scroll strategies: [AxisScrollStrategies][]
* Progressive line series: [ProgressiveLineSeries][]
* Data patterns: [DataPatterns][]
* Progressive trace data generator: [ProgressiveTraceGenerator][]


### Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

© Arction Ltd 2009-2019. All rights reserved.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

[AxisScrollStrategies]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.1/globals.html#axisscrollstrategies
[ChartXY]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.1/classes/chartxy.html
[DataPatterns]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.1/globals.html#datapatterns
[ProgressiveLineSeries]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.1/classes/progressivelineseries.html
[ProgressiveTraceGenerator]: https://arction.github.io/xydata/classes/progressivetracegenerator.html