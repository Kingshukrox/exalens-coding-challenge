const blocks = [
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: true,
        school: false,
        store: false,
    },
    {
        gym: true,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: false,
    },
    {
        gym: false,
        school: true,
        store: true,
    },
];
function apartmentHunting(blocks, reqs) {
    const distance = [];

    for (let i = 0; i < blocks.length; i++) {
        let d = 0;
        let gmin = Infinity,
            tdist = 0,
            smin = Infinity,
            stmin = Infinity;
        // console.log("block-------------------------", i + 1);
        for (let j = 0; j < blocks.length; j++) {
            if (i == j) continue;
            if (reqs.includes("gym")) {
                if (blocks[i].gym != true && blocks[j].gym == true) {
                    // console.log("gym distance", Math.abs(i - j));
                    if (Math.abs(i - j) < gmin) gmin = Math.abs(i - j);
                }
            }
            if (reqs.includes("school")) {
                if (blocks[i].school != true && blocks[j].school == true) {
                    // console.log("school distance", Math.abs(i - j));
                    if (Math.abs(i - j) < smin) smin = Math.abs(i - j);
                }
            }
            if (reqs.includes("store")) {
                if (blocks[i].store != true && blocks[j].store == true) {
                    // console.log("store distance", Math.abs(i - j));
                    if (Math.abs(i - j) < stmin) stmin = Math.abs(i - j);
                }
            } else continue;
        }
        // console.log("min gym dist=", gmin);
        // console.log("min school dist=", smin);
        // console.log("min store dist=", stmin);
        if (gmin == Infinity) gmin = 0;
        if (smin == Infinity) smin = 0;
        if (stmin == Infinity) stmin = 0;
        d = gmin + smin + stmin;
        distance.push(d);
        // console.log("total min distance=", d);
    }
    let mindist = Infinity;
    let index;
    for (let i = 0; i < distance.length; i++) {
        if (distance[i] < mindist) {
            mindist = distance[i];
            index = i;
        }
    }
    return index;
}
let x=apartmentHunting(blocks, ["gym", "school", "store"]);

console.log("RESULT : at block ", x + 1, " you will walk min distance");

exports.apartmentHunting = apartmentHunting;
