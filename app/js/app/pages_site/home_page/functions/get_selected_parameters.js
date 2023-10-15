export async function getAllParametersInfo(choice) {

    const arrayParameters = new Map();
    const filterBody = document.querySelectorAll('.filter__options .filter__spoiler');

    for (let i = 0; i < filterBody.length; i++) {
        const filterParametersArray = [];
        const filterName = filterBody[i].getAttribute('id');
        const allFilterParameters = filterBody[i].querySelectorAll('.spoiler__rows');

        if (choice === 'all') {
            for (let j = 0; j < allFilterParameters.length; j++) {
                filterParametersArray.push(allFilterParameters[j].getAttribute('value'));
            }
        }

        else if (choice === 'selected') {

            const selectedFilterParameters = filterBody[i].querySelectorAll('.spoiler__rows.selected');

            if (selectedFilterParameters.length > 0) {
                for (let j = 0; j < selectedFilterParameters.length; j++) {
                    filterParametersArray.push(selectedFilterParameters[j].getAttribute('value'));
                }
            } else {
                for (let j = 0; j < allFilterParameters.length; j++) {
                    filterParametersArray.push(allFilterParameters[j].getAttribute('value'));
                }
            }

        }

        arrayParameters.set(`${filterName}`, `${filterParametersArray}`);
    }

    return arrayParameters;

}
getAllParametersInfo();