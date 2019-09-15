const getElementByAttribut = attribute => {
    let attributeArr = [];

    let elementsByTag = document.getElementsByTagName('*');

    for (let i = 0; i < elementsByTag.length; i++) {
        let eachTagElement = elementsByTag[i];

        if (eachTagElement.getAttribute(attribute)) {
            attributeArr.push(eachTagElement);
        }
    }
    return attributeArr;
}