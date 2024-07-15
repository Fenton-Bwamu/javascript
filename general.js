for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        if(j ===1){
            continue; //skip the rest of the code in this block
        }
        console.log(`i = ${i}: j = ${j}`);
    }
}
