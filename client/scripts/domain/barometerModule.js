const barometerLow = document.querySelectorAll('#barometer .barometer-low')[0];
const barometerMid = document.querySelectorAll('#barometer .barometer-mid')[0];
const barometerHigh = document.querySelectorAll('#barometer .barometer-high')[0];

document.addEventListener('gizmoSleep', function (e) {
    barometerMinus(e.detail.material);
});

document.addEventListener('gizmoWake', function (e) {
    barometerPlus(e.detail.material);
});


const barometerCount = {
    low: 3,
    mid: 2,
    high: 3
};

function barometerPlus(gizmoType) {
    let value = 100 / 4;
    switch (gizmoType) {
        case "low":
            barometerCount.low++;
            barometerLow.style.height = value * barometerCount.low + "%";
            break;
        case "mid":
            barometerCount.mid++;
            barometerMid.style.height = value * barometerCount.mid + "%";
            break;
        case "high":
            value = 100 / 3;
            barometerCount.high++;
            barometerHigh.style.height = value * barometerCount.high + "%";
            break;
    }
}

function barometerMinus(gizmoType) {
    let value = 100 / 4;
    switch (gizmoType) {
        case "low":
            barometerCount.low--;
            barometerLow.style.height = value * barometerCount.low + "%";
            break;
        case "mid":
            barometerCount.mid--;
            barometerMid.style.height = value * barometerCount.mid + "%";
            break;
        case "high":
            barometerCount.high--;
            value = 100 / 3;
            barometerHigh.style.height = value * barometerCount.high + "%";
            break;
    }
}