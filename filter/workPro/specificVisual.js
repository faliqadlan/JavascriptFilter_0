function getSpecificVisual(x, vpot, efunction, spekE, selectedValue, selectedValue2, efunction_plot, prob_plot,spekE_plot, efunction_layout,prob_layout , spekE_layout) {
    selectedValue = selectedValue
    selectedValue2 = selectedValue2

    if (selectedValue2 == "") {
        let probSi = [],
            count = [];

        for (let i = 0; i < efunction.length; i++) {
            probSi.push(Math.pow(efunction[i], 2))
        }

        var prob_plot = {
            x: x,
            y: probSi,
            type: 'scatter',
            name: 'probability'
        };

        for (let i = 1; i < spekE.length + 1; i++) {
            count.push(i)
        }

        var spek_values = [
            count, spekE
        ]

        var spek_data = [{
            type: 'table',
            header: {
                values: [
                    ["<b>No</b>"],
                    ["<b>Spectrum Energy</b>"]
                ],
                align: "center",
                height: 30,
                line: {
                    color: 'black'
                },
                fill: {
                    color: "grey"
                },
                font: {
                    family: "Arial",
                    size: 24,
                    color: "white"
                }
            },
            cells: {
                values: spek_values,
                align: "center",
                height: 35,
                line: {
                    color: "black"
                },
                font: {
                    family: "Arial",
                    size: 24,
                    color: ["black"]
                }
            }
        }]

        var table_layout = {
            title: {
                text: "Spectrum Energy Table",
                font: {
                    family: "Arial",
                    size: 24,
                    color: ["black"]
                }
            }
        }


        Plotly.newPlot('chartContainer2', [efunction_plot], efunction_layout)
        Plotly.newPlot('probContainer', [prob_plot], prob_layout)
        Plotly.newPlot('chartContainer3', [spekE_plot], spekE_layout)
        Plotly.newPlot('tablePlaceholder', spek_data, table_layout)
    } else if (selectedValue == "") {

        let x_mini = [],
            ef_mini = [],
            vpot_mini = [],
            xBand = []
        probPer = [],
            count = [];;
        //console.log(indexMiniX_start, indexMiniX_end)
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            x_mini.push(x[i])
        }
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            ef_mini.push(efunction[i])
        }
        for (let i = indexMiniX_start; i < indexMiniX_end; i++) {
            vpot_mini.push(vpot[i])
        }

        // for (let index = 0; index < bandLabel.length; index++) {
        //     xBand.push(x[indexMiniX_end]/4)
        // }

        for (let i = 0; i < ef_mini.length; i++) {
            probPer.push(Math.pow(ef_mini[i], 2))
        }

        var vpot_miniPlot = {
            x: x_mini,
            y: vpot_mini,
            type: 'scatter',
            name: 'potential'
        };

        var ef_miniPlot = {
            x: x_mini,
            y: ef_mini,
            type: 'scatter',
            name: 'psi'
        };

        var prob_miniplot = {
            x: x_mini,
            y: probPer,
            type: 'scatter',
            name: 'probability'
        };

        // var bandLabel_plot = {
        //     x : xBand,
        //     y : bandLabel,
        //     type: 'scatter',
        //     mode: "markers",
        //     marker: {
        //         // sizemin: 100,
        //         size: 30,
        //         // arearatio: 100,
        //         symbol: "arrow-left"
        //     },
        //     name : 'band border'
        // }

        for (let i = 1; i < bandMin.length + 1; i++) {
            count.push(i)
        }

        var band_values = [
            count, bandMin, bandMax, gapBand, energyBand
        ]

        var band_data = [{
            type: 'table',
            columnorder: [1, 2, 3, 4, 5],
            columnwidth: [80, 400, 400, 400, 400],
            header: {
                values: [
                    ["<b>No</b>"],
                    ["<b>Energy Minimum</b>"],
                    ["<b>Energy Maximum</b>"],
                    ["<b>Band Gap</b>"],
                    ["<b>Band Width</b>"]
                ],
                align: "center",
                height: 30,
                line: {
                    color: 'black'
                },
                fill: {
                    color: "grey"
                },
                font: {
                    family: "Arial",
                    size: 24,
                    color: "white"
                }
            },
            cells: {
                values: band_values,
                align: "center",
                height: 35,
                width: 100,
                line: {
                    color: "black"
                },
                font: {
                    family: "Arial",
                    size: 24,
                    color: ["black"]
                }
            }
        }]

        // var table_layout = {
        //     title: {
        //         text : "Spectrum Energy Table",
        //         font: {family: "Arial", size: 24, color: ["black"]}
        //     }
        // }

        Plotly.newPlot('chartContainer2', [ef_miniPlot, vpot_miniPlot], efunction_layout)
        Plotly.newPlot('chartContainer3', [spekE_plot, vpot_miniPlot], spekE_layout)
        Plotly.newPlot('probContainer', [prob_miniplot, vpot_miniPlot], prob_layout)
        Plotly.newPlot('tablePlaceholder', band_data)
    }
}