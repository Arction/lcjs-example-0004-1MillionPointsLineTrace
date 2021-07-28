/*
 * LightningChartJS example that showcases a line series with 1 Million streamed points with animated transitions.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    Themes
} = lcjs

// Import data-generator from 'xydata'-library.
const {
    createProgressiveTraceGenerator
} = require('@arction/xydata')

// Create a XY Chart.
const chart = lightningChart().ChartXY({
    // theme: Themes.darkGold
})

// Create line series optimized for regular progressive X data.
const series = chart.addLineSeries({
    dataPattern: {
        // pattern: 'ProgressiveX' => Each consecutive data point has increased X coordinate.
        pattern: 'ProgressiveX',
        // regularProgressiveStep: true => The X step between each consecutive data point is regular (for example, always `1.0`).
        regularProgressiveStep: true,
    }
 })

// Generate traced points stream using 'xydata'-library.
chart.setTitle('Generating test data...')
createProgressiveTraceGenerator()
    .setNumberOfPoints(1 * 1000 * 1000)
    .generate()
    .toPromise()
    .then(data => {
        chart.setTitle('1 Million Points Line Trace')
        setInterval(() => {
            series.add(data.splice(0, 20000))
        }, 50)
    })
