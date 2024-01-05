const highestAverageBMI = (bmiObject) => {

    let result = {};
    let countIndex = {};
    var i = 0;
    let ageGroupList = Array(20).fill().map((e, idx) => {
        return idx == 0 ? {
            fromRange: i,
            toRange: i += 4.9
        } : {
            fromRange: i += 0.1,
            toRange: i += 4.9
        };
    });
    bmiObject.forEach(({
        height,
        weight,
        age
    }) => {
        let bmi = parseFloat((weight / Math.pow((height / 100), 2)).toFixed(2));
        ageGroupList.forEach(({
            fromRange,
            toRange
        }) => {
            if (fromRange <= age && toRange >= age) {
                if (25 < bmi) {
                    if (result[`${fromRange}-${toRange}`] == undefined) {
                        result[`${fromRange}-${toRange}`] = 0;
                        countIndex[`${fromRange}-${toRange}`] = 1

                    } else if (result[`${fromRange}-${toRange}`] != undefined) {
                        countIndex[`${fromRange}-${toRange}`]++;

                    }
                    result[`${fromRange}-${toRange}`] += bmi;

                }

            }

        })

    })
    let highestBmi = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
    return {
        ageGroup: highestBmi,
        averageBmi: parseFloat((result[highestBmi] / countIndex[highestBmi]).toFixed(2))
    }
}


console.log(highestAverageBMI([{
    height: 175,
    weight: 50,
    age: 21
}, {
    height: 170,
    weight: 77,
    age: 22
}, {
    height: 175,
    weight: 70,
    age: 24
}, {
    height: 175,
    weight: 75,
    age: 26
}, {
    height: 175,
    weight: 50,
    age: 29
}, {
    height: 170,
    weight: 77,
    age: 34
}]));



console.log(highestAverageBMI([{
    height: 175,
    weight: 50,
    age: 24.9
}, {
    height: 170,
    weight: 80,
    age: 25
}, {
    height: 170,
    weight: 90,
    age: 29.9
}, {
    height: 175,
    weight: 90,
    age: 32
}, {
    height: 175,
    weight: 50,
    age: 39
}, {
    height: 170,
    weight: 77,
    age: 44
}]));


/* --- This is all kind of age group averge bmi
const highestAverageBMI = (bmiObject) => {

    let result = {};
    let countIndex = {}
    var i = 0,
        j = 4.9;
    let ageGroupList = Array(20).fill().map((ele = 5, idx) => {
        return idx == 0 ? `${i}-${j}` : `${(i+=ele)}-${(j+=ele)}`;

    });
    bmiObject.filter(({
        height,
        weight,
        age
    }) => {
        ageGroupList.filter((ageRange) => {
            const [fromRange, toRange] = ageRange.split("-")
            if (Number(fromRange) <= age && parseFloat(toRange) >= age) {
                let bmi = parseFloat((weight / Math.pow((height / 100), 2)).toFixed(2));
                if (result[`${fromRange}-${toRange}`] == undefined) {
                    result[`${fromRange}-${toRange}`] = 0;
                    countIndex[`${fromRange}-${toRange}`] = 1

                } else if (result[`${fromRange}-${toRange}`] != undefined) {
                    countIndex[`${fromRange}-${toRange}`]++;

                }
                result[`${fromRange}-${toRange}`] += bmi;

                }

        })
    })
    let highestBmi = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
    return {
        ageGroup: highestBmi,
        averageBmi: parseFloat((result[highestBmi] / countIndex[highestBmi]).toFixed(2))
    }
}

*/