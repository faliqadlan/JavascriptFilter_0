function runOutput(selectedValue,selectedValue2,minE,initE,argPot) {
    selectedValue = selectedValue
    selectedValue2 = selectedValue2


        //console.log(selectedValue, selectedValue2, argPot)

    if (selectedValue == "") {
        //console.log(selectedValue, "nothing")
    } else if (selectedValue == "0") {
        om = parseFloat(document.getElementById('omega').value)
        spekE = []
        argHar = [om]
        //console.log(om)
        potHarm = new Vpot
        potHarm = potHarm.harmonik(argHar, argPot)

        //getEnergy(initE,potHarm,argPot);
        spekEnergy(minE, initE, potHarm, argPot)
        //Elevel(initE,potHarm,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Level Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;
        //console.log(energy_new,efunction,eLevel)

    } else if (selectedValue == "1") {
        // load("./potential/tringale.js")
        tgi = parseFloat(document.getElementById('tinggi').value);
        tt = parseFloat(document.getElementById('titik_tengah').value)
        spekE = []
        argTri = [tgi, tt]

        potTri = new Vpot
        potTri = potTri.triangle(argTri, argPot)

        //getEnergy(initE,potTri,argPot);
        spekEnergy(minE, initE, potTri, argPot)
        //Elevel(initE,potTri,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Level Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;

    } else if (selectedValue == "2") {
        // load("./potential/tringale.js")
        tgi = parseFloat(document.getElementById('tinggi').value);
        tt = parseFloat(document.getElementById('titik_tengah').value)
        spekE = []

        argTri = [tgi, tt]

        potTri = new Vpot
        potTri = potTri.heavySide(argTri, argPot)

        //getEnergy(initE,potTri,argPot);
        spekEnergy(minE, initE, potTri, argPot)
        //Elevel(initE,potTri,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Level Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;

    } else if (selectedValue == "3") {
        om = parseFloat(document.getElementById('omega').value)
        spekE = []
        argHar = [om]

        potHarm = new Vpot
        potHarm = potHarm.coulumb(argHar, argPot)

        //getEnergy(initE,potHarm,argPot);
        spekEnergy(minE, initE, potHarm, argPot)
        //Elevel(initE,potHarm,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Level Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = eLevel;

    }

    if (selectedValue2 == "") {
        //console.log(selectedValue, "nothing")
    } else if (selectedValue2 == "0") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lks = parseFloat(document.getElementById('lks').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de = parseFloat(document.getElementById('de').value)

        spekE = []
        peakCount = 0,
            bandMin = []
        bandMax = []
        gapBand = []
        energyBand = []
        deriEf = []
        peakEf = []
        ef_miniPeri = []
        siPot = []

        argKro = [vmax, lks, lpt, de]

        potKro = new Vpot2
        potKro = potKro.kronigPenney(argKro, argPot)

        indexMiniX_start = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) - lpt))
        indexMiniX_end = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) + lpt))

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potKro,argPot);
        spekEnergyPeri(minE, initE, potKro, argPot, lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)


        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;

    } else if (selectedValue2 == "1") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lks = parseFloat(document.getElementById('lks').value)
        de = parseFloat(document.getElementById('de').value)

        spekE = []
        peakCount = 0,
            bandMin = []
        bandMax = []
        gapBand = []
        energyBand = []
        deriEf = []
        peakEf = []
        ef_miniPeri = []
        siPot = []

        argPeriPot = [vmax, lks, de]

        potPeri = new Vpot2
        potPeri = potPeri.harmonic(argPeriPot, argPot)

        indexMiniX_start = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) - lks))
        indexMiniX_end = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) + lks))

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE, initE, potPeri, argPot, lks)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)


        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = peakCount;

    } else if (selectedValue2 == "2") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de = parseFloat(document.getElementById('de').value)

        spekE = []
        peakCount = 0,
            bandMin = []
        bandMax = []
        gapBand = []
        energyBand = []
        deriEf = []
        peakEf = []
        ef_miniPeri = []
        siPot = []

        argPeriPot = [vmax, lpt, de]

        potPeri = new Vpot2
        potPeri = potPeri.triangular(argPeriPot, argPot)

        indexMiniX_start = x.indexOf((xmax - (xmax - xmin) / 2) - 2 * lpt)
        indexMiniX_end = x.indexOf((xmax - (xmax - xmin) / 2) + 2 * lpt)

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE, initE, potPeri, argPot, lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;

    } else if (selectedValue2 == "3") {
        vmax = parseFloat(document.getElementById('vmax').value)
        lpt = parseFloat(document.getElementById('lpt').value)
        de = parseFloat(document.getElementById('de').value)

        spekE = []
        peakCount = 0,
            bandMin = []
        bandMax = []
        gapBand = []
        energyBand = []
        deriEf = []
        peakEf = []
        ef_miniPeri = []
        siPot = []

        argPeriPot = [vmax, lpt, de]

        potPeri = new Vpot2
        potPeri = potPeri.sinusoidal(argPeriPot, argPot)

        indexMiniX_start = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) - lpt))
        indexMiniX_end = x.indexOf(2 * ((xmax - ((xmax - xmin) / 2)) + lpt))

        //getDeltaSpekE(minE,vpot,argPot)
        //getEnergy(initE,potPeri,argPot);
        spekEnergyPeri(minE, initE, potPeri, argPot, lpt)
        //getBandgapCount(spekE,deltaSpekE)
        //print2Smallest(spekE,spekE.length)
        // spekEnergy(minE,initE,potKro,argPot)
        // Elevel(initE,potKro,argPot)

        elevPlaceholder.innerHTML = `
        <h1 class="text-light">Energy Band Count: <span id="Elev"></span> </h1>
        `
        Elev.innerHTML = bandCount_1;

    }
}