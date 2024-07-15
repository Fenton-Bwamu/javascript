for (let i = 0; i < 10; i ++){
    if(i%2 !== 0){
        continue; // skip next
    }

    console.log("loop with continue:" +i);
}