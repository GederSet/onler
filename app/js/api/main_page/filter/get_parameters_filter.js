export async function getParameters() {

    const genderInfo = 'gender, gender, filter-gender';
    const strapMaterialInfo = 'watch_strap_material, material, filter-strap-material';
    const strapColorInfo = 'watch_strap_color, color, filter-strap-color';
    const faceColorInfo = 'watch_face_color, color, filter-face-color';
    const mechanismInfo = 'watch_mechanism, mechanism, filter-mechanism';
    const filterParameters = [genderInfo, strapMaterialInfo, strapColorInfo, faceColorInfo, mechanismInfo];

    for (let i = 0; i < filterParameters.length; i++) {

        const parameters = filterParameters[i].split(', ');
        const url = 'http://localhost/onler_2/api/filter/get_parameters.php';
        const data = {
            table_name: parameters[0],
        }
        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options);
        const faceColors = await response.json();
        const filterBody = document.querySelector(`#${parameters[2]} .spoiler__content`);

        faceColors.forEach(faceColor => {
            filterBody.innerHTML +=
                `
                <label class="spoiler__rows" value="${faceColor.id}">
                    <input class="spoiler__checkbox" type="checkbox">
                    <div class="spoiler__true-checkbox">
                        <span class="spoiler__check _icon-check"></span>
                    </div>
                    <div class="spoiler__property">${faceColor[parameters[1]]}</div>
                </label>
                `
        });

    }

}