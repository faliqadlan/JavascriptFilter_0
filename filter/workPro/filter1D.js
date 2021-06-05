function makeArr(startValue, stopValue, step) {


    while (startValue < stopValue) {
        startValue += step
        // if ((startValue - startValue%5) == 0) {
        //     startValue -= startValue/10
        // }
        arr.push(startValue);
    }
    return arr;
}

function getPeakcount(efunction, dx) {
    deriEF_gp = [],
        peakCount_gp = 0;

    for (let i = 0; i < efunction.length; i++) {
        deri_gp = (efunction[i + 1] - efunction[i]) / dx
        //console.log(deri)
        deriEF_gp.push(deri_gp)
    }
    //console.log(deriEF_gp)

    for (let i = 1; i < deriEF_gp.length - 1; i++) {
        if (Math.abs(deriEF_gp[i] - deriEF_gp[i + 1]) > Math.abs(1e-5)) {
            //console.log(deriEF_gp[i] > -1e-5)
            if (deriEF_gp[i] < 0 && deriEF_gp[i + 1] > 0) {
                //console.log(deriEF_gp[i],deriEF_gp[i + 1],i)
                peakCount_gp += 1
            }

            if (deriEF_gp[i] > 0 && deriEF_gp[i + 1] < 0) {
                //console.log(deriEF_gp[i], deriEF_gp[i + 1],i)
                peakCount_gp += 1
            }
        }
    }
}

function spekEnergyPeri(minE, initE, vpot, argPot, widthPot) {
    let xmin = argPot[0],
        xmax = argPot[1],
        dx = argPot[2],
        v0 = argPot[3],
        ngrid = argPot[4],
        spekEl = []

    ;

    if (minE == initE) {
        singleEigen(argPot, vpot, iter, initE, vtemp)
    } else {
        periX_start = x.indexOf(widthPot)
        periX_end = x.indexOf(2 * widthPot)
        makeArr(minE, initE, de);
        latCount = (xmax - xmin) / widthPot
        //console.log(latCount)
        for (let i = 0; i < arr.length; i++) {
            var ef_miniPeri_0 = [];
            singleEigen(argPot, vpot, iter, arr[i], vtemp)
            //console.log(energy_new)
            spekE.push(energy_new)
            // for (let i = periX_start; i < periX_end; i++) {
            //     ef_miniPeri_0.push(efunction[i])
            // }
            getPeakcount(efunction, dx)
            spekEl.push(peakCount_gp / latCount)
        }
        // console.log(Math.max.apply(null,spekEl))
        //console.log(spekEl)
        //console.log(Math.max.apply(null, spekEl).toFixed(0))

        peakCount = Math.max.apply(null, spekEl).toFixed(0)

        sortSpek = spekE.sort()

        for (let i = 0; i < sortSpek.length - 1; i++) {
            siperi = (sortSpek[i + 1] - spekE[i]);
            siPot.push(siperi)
        }
        siPot = siPot.sort(function (a, b) {
            return a - b;
        })
        siPot = siPot.reverse()
        //console.log(siPot[peakCount], peakCount)

        //console.log(sortSpek[peakCount], peakCount)
        sic = siPot[peakCount - 1]


        bandMin.push((sortSpek[0]).toFixed(8))
        for (let i = 0; i < sortSpek.length - 2; i++) {
            if (sortSpek[i + 1] - sortSpek[i] > sic) {

                bandMax.push((sortSpek[i]).toFixed(8))
                bandMin.push((sortSpek[i + 1]).toFixed(8))
            }
        }
        bandMax.push(sortSpek[sortSpek.length - 1].toFixed(8))
        //console.log(bandMin,bandMax)
        for (let i = 0; i < bandMin.length - 1; i++) {
            // console.log(bandMin[i+1]-bandMax[i])
            gapBand.push((bandMin[i + 1] - bandMax[i]).toFixed(8))

            energyBand.push((bandMax[i] - bandMin[i]).toFixed(8))
        }
        gapBand.push("...")
        energyBand.push((bandMax[bandMin.length - 1] - bandMin[bandMin.length - 1]).toFixed(8))

        //console.log(peakCount)

    }
    bandCount_1 = peakCount
}

function spekEnergy(minE, initE, vpot, argPot) {

    let xmin = argPot[0],
        xmax = argPot[1],
        dx = argPot[2],
        v0 = argPot[3],
        ngrid = argPot[4];

    // minE = minE - v0
    // initE = initE - v0

    if (minE == initE) {
        getEnergy(initE, vpot, argPot)
        eLevel = peakCount_gp
        //console.log(energy_new)
    } else {
        getEnergy(minE, vpot, argPot);
        var energy_new_d = parseFloat(energy_new.toFixed(3))
        //console.log(energy_new_d)
        // energy_new1 = energy_new;
        // collectEf.push(efunction)

        while (energy_new < initE) {
            getEnergy(minE, vpot, argPot);

            // energy_new1 = energy_new;
            //energy_new = energy_new+v0
            spekE.push(energy_new);
            //console.log(energy_new_d)
            sie = energy_new_d / 5

            //console.log(minE)
            minE = energy_new + sie;
            //console.log(energy_new,minE,sie,energy_new_d)
        }
        eLevel = peakCount_gp
        //console.log(eLevel)
    }
    //console.log(energy_new)
}


function getEnergy(initE, vpot, argPot) {
    let xmin = argPot[0],
        xmax = argPot[1],
        dx = argPot[2],
        v0 = argPot[3],
        ngrid = argPot[4],
        efunction_0 = [],
        efunction_1 = [];
    //console.log(argPot)
    singleEigen(argPot, vpot, iter, initE, vtemp)
    let energy_new_dg = parseFloat(energy_new.toFixed(3))

    getPeakcount(efunction, dx)
    peakCount_0 = peakCount_gp
    //console.log(peakCount_0)
    initE0 = initE
    while (initE - energy_new > 0) {
        // var sieg = ((initE - energy_new)/energy_new)
        initE = initE + Math.abs((initE - energy_new) / energy_new)
        singleEigen(argPot, vpot, iter, initE, vtemp)
        // var efunction_1 = efunction

    }
    // console.log(efunction_1)
    //console.log(sieg)
    // console.log(((energy_new - initE)/initE))
    getPeakcount(efunction, dx)
    peakCount_1 = peakCount_gp
    //console.log(peakCount_1)
    // console.log(peakCount_1-peakCount_0)
    //console.log(peakCount_1-peakCount_0 > 1)
    // console.log(sieg)
    if (peakCount_1 - peakCount_0 > 1) {
        //console.log(peakCount_0)
        //console.log(initE0,initE)
        // initE0 = initE0 + energy_new_dg/3
        while (peakCount_1 - peakCount_0 != 1) {
            // for (let index = 0; index < 3; index++) {



            //console.log(initE0)
            singleEigen(argPot, vpot, iter, initE0, vtemp)
            initE0 = initE0 + energy_new_dg / 100
            getPeakcount(efunction, dx)
            peakCount_1 = peakCount_gp
            //initE0 = initE0 + 0.1
            //console.log(initE0, energy_new)
            //console.log(peakCount_1, peakCount_0)
            //console.log(peakCount_1 - peakCount_0 != 1)
        }

    }
    //console.log(energy_new)
}


function singleEigen(argPot, vpot, iter, initE, vtemp) {

    let xmin = argPot[0],
        xmax = argPot[1],
        dx = argPot[2],
        v0 = argPot[3],
        ngrid = argPot[4],
        nloop = argPot[5];

    output = eigenState(x, ngrid, efunction, vpot, initE, nloop, dx, vtemp)
    
    energy_new = output[0]
    efunction = output[1]
    //console.log(efunction)
}

function eigenState(x, ngrid, efunction, vpot, initE, nloop, dx, vtemp) {

    if (initE == 0) {
        initE = initE + 1e-12;
    }

    let x_tart = x[0],
        x_end = x[ngrid - 1];
    if (x_tart < 0) {
        for (let i = 0; i < ngrid; i++) {
            efunction[i] = (Math.sin(x[i]) + Math.cos(x[i]));
        }
    } else {
        for (let i = 0; i < ngrid; i++) {
            efunction[i] = 1 + x[i] / x_end;
        }
    }
    //console.log(efunction)
    let loop = 0,
        iter = 0,
        error = 1e-5,
        output = [],
        estart = initE,
        vharm = vpot[ngrid - 1];
    //console.log(loop,nloop)
    do {
        if (iter == 0) {
            loop = nloop;
        } else {
            loop = 1;
        }
        if (iter < 1) {
            energy = initE
        }

        efunction = getFilter1d(dx, vpot, efunction, initE, ngrid, loop);
        energy_new = getHamilton3p(dx, vpot, efunction, ngrid, vtemp);

        delta = Math.abs((energy_new - energy) / energy);
        //console.log(loop, iter,delta,delta>error,energy_new)
        energyN = energy_new;
        energy = energyN;
        iter += 1
        //console.log(iter, energy, loop, delta > error)
    } while (delta > error);
    //console.log(loop, iter, delta, delta > error, energy_new)
    let rsign = 1;
    //if (x < 1e-8) rsign = (spaceship(efunction[1], 0));
    //console.log(estart)

    ampl_max = 1;
    if (vharm <= 1) {
        if (estart > 0 && initE > 0) {
            ampl_max = 0;
            inode = 0;
            wb = efunction[ngrid - 1];
            //console.log(wb)
            i = ngrid;
            while (inode < 10) {
                i = i - 1;
                wf = efunction[i];
                //console.log(inode)
                if (i < 10) break;
                if (wf * wb < 0) inode = inode + 1;
                abswf = Math.abs(wf);
                //console.log(inode = inode + 1)
                if (abswf > ampl_max) ampl_max = abswf;
                wb = wf;
                //console.log(ampl_max)
            }
            //console.log(inode)
        }
    }
    //console.log(ampl_max)
    //console.log(efunction)
    ampl_max = ampl_max * rsign;
    for (let i = 0; i < ngrid; i++) {
        efunction[i] = efunction[i] / ampl_max;
    }
    
    output = [energy_new, efunction];
    //console.log(output)
    return output;
}


function getFilter1d(dx, vpot, efunction, initE, ngrid, loop) {
    let dx2 = dx * dx,
        a = -0.5 / dx2
    c = a
    odx2 = 1 / dx2
    b = []
    sum = 0;
    efunction = tridag(a, b, c, efunction, ngrid, loop, vpot, initE)
    for (let i = 0; i < ngrid; i++) {
        sum = sum + efunction[i] * efunction[i];
    }

    let fnorm = Math.sqrt(sum * dx);

    for (i = 1; i < ngrid; i++) {
        efunction[i] = efunction[i] / fnorm;
    }

    return efunction
}

function tridag(a, b, c, u, n, loop, vpot, initE) {

    for (let k = 0; k <= loop; k++) {
        for (let i = 0; i < n; i++) {
            b[i] = (odx2 + vpot[i] - initE)
            temp = b[0];
            u[0] = u[0] / temp;
        }
        for (let j = 1; j < n; j++) {
            temp1 = b[j];
            b[j] = c / temp;
            temp = temp1 - a * b[j];
            u[j] = (u[j] - a * u[j - 1]) / temp;
        }
        for (let j = n - 2; j > 1; j--) {
            u[j] = u[j] - b[j + 1] * u[j + 1]
        }

    }
    return u
}

function getHamilton3p(dx, vpot, psi, ngrid, vtemp) {
    let dx2 = dx * dx,
        a = -0.5 / dx2,
        c = a,
        odx = 1 / dx2
    sum = 0;

    vtemp[0] = ((odx + vpot[0]) * psi[0] + c * psi[1])
    for (let i = 1; i < ngrid - 1; i++) {
        vtemp[i] = (a * psi[i - 1] + (odx + vpot[i]) * psi[i] + c * psi[i + 1]);
    }
    vtemp[ngrid] = ((a * psi[ngrid]) + (odx + vpot[ngrid - 1]) * psi[ngrid - 1])

    for (let i = 1; i < ngrid - 1; i++) {
        sum = sum + vtemp[i] * efunction[i];
    }
    energy_new = sum * dx;

    return energy_new
}