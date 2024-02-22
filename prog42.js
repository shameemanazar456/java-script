function parent(){
    const parent='parent'
    console.log(`variable inside parent function is :${parent}`);
    console.log(`varible inside child is :${childvar}`);

    function child(){
        const childvar='child'
        console.log(`varible inside child is :${childvar}`);
        console.log(`variable inside parent function is :${parent}`);
    }
    child()
}

parent();