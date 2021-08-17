

function returnNumbers(req,res){

    let palabras = ["TI", "Music", "Musical"];
    let result = [];
    for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        //Validate if only one number(3) is multiple if yes value = 1
        console.log(Number(i % 3 == 0 && i % 5 >= 1));

        //validate if both are multiple if yes val = 1
        console.log(Number(i % 3 == 0 && i % 5 == 0));

        //if i is multiple of 3 but not 5 we multiply val = 1 +(0*2), if i is multiple of 3 and 5 it will sum 1 + (1*2) to get the third word
        //if i is muiltiple of only 5 it will sum 0 + (0*2) and it will get the first one
        result.push(
            palabras[Number(i % 3 == 0 && i % 5 >= 1) + (Number(i % 3 == 0 && i % 5 == 0) * 2)]
            );
        continue;
    }
    //if its not a multiple of 3 or 5 push the number into the array
    result.push(i);
    }
    console.log(result);

    return res.status(200).json({array: result});
}

module.exports = {returnNumbers};