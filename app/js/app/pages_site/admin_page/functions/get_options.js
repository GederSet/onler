export function getOptions(optionsArray, option) {

    let arrayStars = [];
    optionsArray.forEach(element => {
        arrayStars += `<div class="admin__filter-item" value="${element.id}">${element[option]}</div>`;
    });
    return `<div class="admin__page">${arrayStars}</div>`;

}