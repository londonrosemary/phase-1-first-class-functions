function receivesAFunction(yayFunction) {
    return yayFunction(); 
}

function returnsANamedFunction() {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => {
    return () => console.log('testing');
}