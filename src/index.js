/*
 * LightningChartJS example that showcases a line series with 1 Million streamed points with animated transitions.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    DataPatterns
} = lcjs

// Import data-generator from 'xydata'-library.
const {
    createProgressiveTraceGenerator
} = require('@arction/xydata')

// Create a XY Chart.
const chart = lightningChart().ChartXY()
    .setTitle('1 Million Points Line Trace')

// Create progressive line series.
const series = chart.addLineSeries({ dataPattern: DataPatterns.horizontalProgressive })

// Generate traced points stream using 'xydata'-library.
createProgressiveTraceGenerator()
    .setNumberOfPoints(1000 * 1000)
    .generate()
    .toPromise()
    .then(data => {
        setInterval(() => {
            series.add(data.splice(0, 20000))
        }, 50)
    })
