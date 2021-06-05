function makeArr(startValue, stopValue, step) {
        
        
  while (startValue < stopValue) {
    startValue += step
    // if ((startValue - startValue%5) == 0) {
    //     startValue -= startValue/10
    // }
    arr.push(startValue)
    ;
  }
  return arr;
}

function getPeakcount(efunction,dx) {
    deriEF_gp =[],
    peakCount_gp = 0
    ;

    for (let i = 0; i < efunction.length; i++) {
            deri_gp = (efunction[i+1] - efunction[i])/dx
            //console.log(deri)
            deriEF_gp.push(deri_gp)
        }

    for (let i = 1; i < deriEF_gp.length-1; i++) {
        if (deriEF_gp[i] < 0 && deriEF_gp[i + 1] > 0) {
            // console.log(deriEF_gp[i],deriEF_gp[i + 1])
            peakCount_gp += 1
        }
        if (deriEF_gp[i] > 0 && deriEF_gp[i + 1] < 0) {
            // console.log(deriEF_gp[i], deriEF_gp[i + 1])
            peakCount_gp += 1
        }
    }
}

function spekEnergyPeri(minE,initE,vpot,argPot,widthPot) {
let     xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        spekEl = []
        
        ;

    if (minE == initE) {
        singleEigen(argPot, vpot,iter,initE,vtemp)
    } else {
    periX_start = x.indexOf(widthPot)
    periX_end = x.indexOf(2 * widthPot)
    makeArr(minE, initE, de);
    latCount = (xmax -xmin)/widthPot
    //console.log(latCount)
    for (let i = 0; i < arr.length; i++) {
        var ef_miniPeri_0 = [];
        singleEigen(argPot, vpot,iter,arr[i],vtemp)
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
    
    for (let i = 0; i < sortSpek.length-1; i++) {
        siperi = (sortSpek[i+1] - spekE[i]);
        siPot.push(siperi)
    }
    siPot = siPot.sort(function(a, b) {
        return a - b;
    })
    siPot = siPot.reverse()
    //console.log(siPot[peakCount], peakCount)

    //console.log(sortSpek[peakCount], peakCount)
    sic = siPot[peakCount-1]
    

    bandMin.push((sortSpek[0]).toFixed(8))
    for (let i = 0; i < sortSpek.length-2; i++) {
        if (sortSpek[i+1] - sortSpek[i] > sic) {
            
            bandMax.push((sortSpek[i]).toFixed(8))
            bandMin.push((sortSpek[i+1]).toFixed(8))
        }
    }
    bandMax.push(sortSpek[sortSpek.length-1].toFixed(8))
    //console.log(bandMin,bandMax)
    for (let i = 0; i < bandMin.length-1; i++) {
        // console.log(bandMin[i+1]-bandMax[i])
        gapBand.push((bandMin[i+1]-bandMax[i]).toFixed(8))

        energyBand.push((bandMax[i]-bandMin[i]).toFixed(8))
    }
    gapBand.push("...")
    energyBand.push((bandMax[bandMin.length - 1] - bandMin[bandMin.length - 1]).toFixed(8))

    //console.log(peakCount)
    
}
bandCount_1 = peakCount
}

function spekEnergy(minE,initE,vpot,argPot) {

    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4];

    // minE = minE - v0
    // initE = initE - v0

    if (minE == initE) {
        getEnergy(initE,vpot,argPot)
        eLevel = peakCount_gp
    } else {
    getEnergy(minE,vpot,argPot);
    var energy_new_d = parseFloat(energy_new.toFixed(3))
    //console.log(energy_new_d)
    // energy_new1 = energy_new;
    // collectEf.push(efunction)
    
    while (energy_new < initE) {
        getEnergy(minE,vpot,argPot);
        
        // energy_new1 = energy_new;
        //energy_new = energy_new+v0
        spekE.push(energy_new);
        //console.log(energy_new_d)
        sie = energy_new_d/5
        
        //console.log(minE)
        minE = energy_new + sie;
        //console.log(energy_new,minE,sie,energy_new_d)
    }
    eLevel = peakCount_gp
    //console.log(eLevel)
}
}


function getEnergy(initE,vpot,argPot) {
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        efunction_0 = [],
        efunction_1 = []
        ;
    //console.log(argPot)
    singleEigen(argPot, vpot,iter,initE,vtemp)
    let energy_new_dg = parseFloat(energy_new.toFixed(3))
    
    getPeakcount(efunction,dx)
    peakCount_0 = peakCount_gp
    //console.log(peakCount_0)
    initE0 = initE
    while (initE - energy_new > 0) {
        // var sieg = ((initE - energy_new)/energy_new)
        initE = initE + Math.abs((initE - energy_new)/energy_new)
        singleEigen(argPot, vpot,iter,initE,vtemp)
        // var efunction_1 = efunction
        
    }
    // console.log(efunction_1)
    //console.log(sieg)
    // console.log(((energy_new - initE)/initE))
    getPeakcount(efunction,dx)
    peakCount_1 = peakCount_gp
    //console.log(peakCount_1)
    // console.log(peakCount_1-peakCount_0)
    //console.log(peakCount_1-peakCount_0 > 1)
    // console.log(sieg)
    if(peakCount_1 - peakCount_0 > 1){
        //console.log(peakCount_0)
        //console.log(initE0,initE)
        // initE0 = initE0 + energy_new_dg/3
        while(peakCount_1 - peakCount_0 != 1){
        // for (let index = 0; index < 3; index++) {
        
        
        
        //console.log(initE0)
        singleEigen(argPot, vpot,iter,initE0,vtemp)
        initE0 = initE0 + energy_new_dg/10
        getPeakcount(efunction,dx)
        peakCount_1 = peakCount_gp
        //initE0 = initE0 + 0.1
        // console.log(initE0,energy_new)
        // console.log(peakCount_1,peakCount_0)
        // console.log(peakCount_1 - peakCount_0 > 1)
        }
        
    }
}



function singleEigen(argPot, vpot,iter,initE,vtemp)
{
    let xmin  = argPot[0],
        xmax  = argPot[1],
        dx    = argPot[2],
        v0    = argPot[3],
        ngrid = argPot[4],
        nloop = argPot[5];

    eigenState(x,ngrid,efunction,vpot,initE,iter,nloop,dx,vtemp);

}

function spaceship(val1, val2) {
    if ((val1 === null || val2 === null) || (typeof val1 != typeof val2)) {
        return null;
    }
    if (typeof val1 === 'string') {
        return (val1).localeCompare(val2);
    }
    else {
        if (val1 > val2) { return 1 }
        else if (val1 < val2) { return -1 }
        return 0;
    }
}

function getSum(total, num) {
  return total + num;
}

function eigenState(x,ngrid,efunction,vpot,initE,iter,nloop,dx,vtemp)
{
    //initE = initE
    //console.log(dx,ngrid,iter,nloop,initE)
    //console.log(vpot[0],vpot[ngrid-1])
    initE = initE + 1e-16;
    
    //console.log(initE)
    x_tart = x[0];
    x_end  = x[ngrid - 1];
    if (x_tart < 0) {
        for (let i = 0; i < ngrid; i++) {
            efunction[i] = (Math.sin(x[i]) + Math.cos(x[i]));
           
        }

    } else {
        for (let i = 0; i < ngrid;i++) {
            efunction[i] = 1 + x[i] / x_end;
        }
    }
    //console.table(efunction)
    //Object.entries(efunction)
    vharm = vpot[ngrid - 1];
    //console.table(vpot)
    estart = initE;
    // console.table(estart)
    eps = 1e-12;
    if (estart > 0) eps = 1e-12;
    if (vharm > 1) eps = 1e-12;
    energy = initE;
    isig = 1;
    if (initE < 0) isig = -1;
    //console.table(isig)
    do {
        //console.log(initE);
        if (iter == 0) {
            nloop = nloop
        } else {
            nloop = 1
        }
        iter += iter;
        // console.log(efunction)
        invers(dx,vtemp,vpot,efunction,ngrid,nloop);

        sum = 0;
        for (let i = 0; i < ngrid; i++) {
            sum = sum + efunction[i] * efunction[i];
            //console.log(sum)
        }
        
        sum = Math.sqrt(sum * dx);
        //console.log(sum)
        for (i = 1; i < ngrid; i++) {
            efunction[i] = efunction[i] / sum;
            
        }
        //console.table(efunction)
        //console.log(x_tart)
        if (x_tart > 0) hamilton(dx,vtemp,vpot,efunction,ngrid);
        else hamilton5p(dx,vtemp,vpot,efunction,ngrid);
        //var_dump(global vtemp);
        //console.log(sum)
        sum = 0;
        //console.log(vtemp);
        for (let i = 1; i < ngrid - 1; i++) {
            sum = sum + vtemp[i] * efunction[i];
        }
        //console.log(sum)
        energy_new = sum * dx;
        //console.log(energy_new)
        delta = Math.abs((energy_new - energy));
        //console.log(energy,energy_new,eps,delta,delta<=eps)
        energyN = energy_new;
        //console.log(iter)
        //console.log(energyN,initE)
        if (iter < 1) energyN = initE;
        energy = energyN;
        //console.log(energy,energyN)
    } while (delta <= eps);
    //console.log(energy,energy_new,eps, delta, delta <= eps)
    //console.log(initE, energy_new)
    initE = energy_new;

    // vtemp = [];
    let rsign = 1;
    if (x < 1e-8) rsign = (spaceship(efunction[1],0));
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
}

function hamilton(dx,vtemp,vpot,efunction,ngrid)
{
    let dtr = 1 / (dx * dx) / 2;
    let a = -dtr;
    let b = 2 * dtr;
    let c = -dtr;
    vtemp[0] = (b + vpot[0]) * efunction[0] + c * efunction[1];
    for (let i = 1; i < ngrid; i++) {
        vtemp[i] = (b + vpot[i]) * efunction[i] + c * (efunction[i - 1] + efunction[i + 1]);
    }
    vtemp[ngrid] = (b + vpot[ngrid]) * efunction[ngrid] + a * efunction[ngrid - 1];
    //console.log(vtemp);
}
function hamilton5p(dx,vtemp,vpot,efunction,ngrid)
{
    let dtr = 1 / (dx * dx) / 24;
    let a = dtr;
    let b = 30 * dtr;
    let c = -16 * dtr;
    let i = 0;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * efunction[i + 1]
        + a * efunction[i + 2];
    i = 1;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * (efunction[i - 1] + efunction[i + 1])
        + a * efunction[i + 2];
    for (let i = 2; i < ngrid - 3; i++) {
        vtemp[i] = (b + vpot[i]) * efunction[i]
            + c * (efunction[i - 1] + efunction[i + 1])
            + a * (efunction[i - 2] + efunction[i + 2]);
    }
    i = ngrid - 3;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * (efunction[i - 1] + efunction[i + 1])
        + a * efunction[i - 2];
    i = ngrid - 2;
    vtemp[i] = (b + vpot[i]) * efunction[i]
        + c * efunction[i + 1]
        + a * efunction[i - 2];
    //console.table(efunction);
}

function invers(dx,vtemp,vpot,efunction,ngrid,nloop)
{
    //console.table(ngrid)
    let dtr = 1 / (dx * dx) / 2;
    let a = -dtr;
    let b = [];
    let bb = 2 * dtr;
    let c = -dtr;
    for (let k = 0; k < nloop; k++) {
        for (i = 0; i < ngrid; i++) {
            b[i] = (bb + vpot[i] - energy);
            // console.log(b[i])
        }
        //console.table(b)
        temp = b[0];
        //console.log(temp)
        efunction[0] = efunction[0] / temp;
        //console.table(efunction[0])
        //console.table(efunction[1])
        for (let j = 1; j < ngrid; j++) {
            temp1 = b[j];
            //console.table(temp1)
            b[j] = c / temp;
            // console.log(b[1])
            temp = temp1 - a * b[j];
            //console.log(temp)
            //console.table((efunction[j] - a * efunction[j - 1]) / temp)
            //console.log(efunction[1-1])
            efunction[j] = (efunction[j] - a * efunction[j - 1]) / temp;
            //console.log(efunction[1])
        }
        for (j = ngrid - 2; j > 1; j--) {
            
            efunction[j] = efunction[j] - b[j + 1] * efunction[j + 1];
            
        }
       // console.table(efunction)
    }
    // console.table(b)
}

// function getEnergy()
// {
//     return initE;
// }

// console.log(initE);