const toalTrappedWater = (bars) => {
    let trappedWater = 0;
    for (var i = 1; i < bars.length - 1; i++) {
        let left = bars[i];
        for (var j = 0; j < i; j++) {
           // console.log(left,bars[j],'i-'+i,'j-'+j)
            left = Math.max(left, bars[j]);
        }
        let right = bars[i]
        for (var j = i + 1; j < bars.length; j++) {

            right = Math.max(right, bars[j]);
        }
        console.log(left, right);

        trappedWater += Math.min(left, right) - bars[i]
    }
    return trappedWater;

    for (var i = 1; i < bars.length - 1; i++) {
        let left = Math.max(...bars.slice(0, i));
        let right = Math.max(...bars.slice(i + 1, bars.length));
        if (left > bars[i]) {
            trappedWater += Math.min(left, right) - bars[i];
        }
    }

    return trappedWater;
}

const bars = [3,0,0,2,0,4,0,5,0,1];
console.log(toalTrappedWater(bars));