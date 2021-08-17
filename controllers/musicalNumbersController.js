

function returnNumbers(req,res){
    for(let i = 1; i < 101; i++){
        const mult3 = i % 3;
        const mult5 = i % 5;

        if(mult5 == 0 && mult3 ==0){
            console.log('Musical');
            continue
        }

        switch(mult3){
            case 0: console.log('Music'); break;
            default:
                switch(mult5){
                    case 0 : console.log('TI'); break;
                    default: console.log(i);
                }
            break;

        }

    }
    return res.status(200).json('done');
}

module.exports = {returnNumbers};