function getGeneralVisual(x, vpot, efunction, spekE, energy_new, selectedValue, selectedValue2) {

    console.log(x, vpot, efunction, spekE, energy_new, selectedValue, selectedValue2)
    selectedValue = selectedValue
    selectedValue2 = selectedValue2

    enewPlaceholder.innerHTML = `
    <h1 class="text-light">Eigen energy: <span id="Enew"></span> </h1>
    `


    imPlotPlaceholder.innerHTML = ''

    Enew.innerHTML = energy_new;


    chartPlaceholder1.innerHTML = `
    <br>
	<div id="chartContainer1" style="height: 1000px; width: 1250px;"></div>
	<br>
    `
    chartPlaceholder2.innerHTML = `
    <br>
    <div id="chartContainer2" style="height: 1000px; width: 1250px;"></div>
	<br>
    `
    chartPlaceholder3.innerHTML = `
    <br>
    <div id="chartContainer3" style="height: 1000px; width: 1250px;"></div>
	<br>
    `
    probPlaceholder.innerHTML = `
    <br>
    <div id="probContainer" style="height: 1000px; width: 1250px;"></div>
	<br>
    `

    tablePlaceholder.innerHTML = `
    <br>
    <div id="tableContainer" style="height: 1000px; width: 1250px;"></div>
	<br>
    `

    var xt = [],
        xt1 = [];

    for (let index = 0; index < spekE.length; index++) {
        xt.push((xmax - (xmax - xmin) / 2))
        xt1.push(100)
    }
    // console.log(xt,xt1)


    //console.log(x_mini)

    var vpot_plot = {
        x: x,
        y: vpot,
        type: 'scatter',
        name: 'potential'
    };

    var efunction_plot = {
        x: x,
        y: efunction,
        type: 'scatter',
        name: 'psi'
    };

    var spekE_plot = {
        type: "scatter",
        mode: "markers",
        marker: {
            // sizemin: 100,
            size: 30,
            // arearatio: 100,
        },
        x: xt,
        y: spekE,
        name: "spectrum energy"
    }

    var vpot_layout = {
        title: {
            text: "Potential Function",
            font: {
                family: 'Courier New, monospace',
                size: 30
            }
        },
        annotations: [{
                x: xmin,
                y: Math.min.apply(null, vpot),
                xref: 'x',
                yref: 'y',
                text: 'xmin',
                showarrow: true,
                ax: 0,
                ay: -40,
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            {
                x: xmax,
                y: Math.min.apply(null, vpot),
                xref: 'x',
                yref: 'y',
                text: 'xmax',
                showarrow: true,
                ax: 0,
                ay: -40,
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            {
                x: (xmax - xmin) / 2,
                y: Math.max.apply(null, vpot),
                xref: 'x',
                yref: 'y',
                text: 'vmax',
                showarrow: true,
                ax: 0,
                ay: -40,
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            }
        ],
        xaxis: {
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth: 4,
            ticks: 'outside',
            title: {
                text: "position(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
        },
        yaxis: {
            title: {
                text: "potential(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: "black"
            }
        }
    }

    var efunction_layout = {
        title: {
            text: "Wave Function",
            font: {
                family: 'Courier New, monospace',
                size: 30
            }
        },
        xaxis: {
            title: {
                text: "position(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth: 4,
            ticks: 'outside'
        },
        yaxis: {
            title: {
                text: "psi(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: "black"
            }
        }
    }

    var prob_layout = {
        title: {
            text: "probability",
            font: {
                family: 'Courier New, monospace',
                size: 30
            }
        },
        xaxis: {
            title: {
                text: "position(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth: 4,
            ticks: 'outside'
        },
        yaxis: {
            title: {
                text: "probability(x)",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: "black"
            }
        }
    }

    var spekE_layout = {
        title: {
            text: "Spectrum Energy",
            font: {
                family: 'Courier New, monospace',
                size: 30
            }
        },
        xaxis: {
            title: {
                text: "x",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth: 4,
            ticks: 'outside'
        },
        yaxis: {
            title: {
                text: "Energy Level",
                font: {
                    family: 'Courier New, monospace',
                    size: 24
                }
            },
            autorange: true,
            automargin: true,
            autotick: true,
            showticklabels: true,
            showgrid: true,
            showline: true,
            ticklen: 4,
            tickwidth: 4,
            ticks: 'outside',
            tickfont: {
                family: 'Old Standard TT, serif',
                size: 14,
                color: "black"
            }

        },
        hovermode: 'closest'
    }

    Plotly.newPlot('chartContainer1', [vpot_plot], vpot_layout)
    
    getSpecificVisual(x, vpot, efunction, spekE, selectedValue, selectedValue2, efunction_plot, spekE_plot, efunction_layout, prob_layout, spekE_layout)
}