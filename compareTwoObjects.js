const compareObjFunc = (a, b) => {
    let aObjProp = Object.getOwnPropertyNames(a);
    let bObjProp = Object.getOwnPropertyNames(b);

    if (aObjProp.length !== bObjProp.length) {
        return false;
    }

    for (let i = 0; i < aObjProp.length; i++) {
        let keyNames = aObjProp[i]
        if (a[keyNames] !== b[keyNames]) {
            return false;
        }
    }
    return true;
};