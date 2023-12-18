import { getOptions } from "../../app/pages_site/admin_page/functions/get_options.js";


export async function createEditTable(idProduct) {

    const url = 'http://localhost/onler_2/api/admin/create_edit_table.php';
    const data = {
        id_product: idProduct,
    }
    const parameters = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }
    const body = document.querySelector('.admin__table-edit');

    try {
        const response = await fetch(url, parameters);
        if (!response.ok) {
            throw await response.json();
        }
        const options = await response.json();

        body.innerHTML = '';
        body.innerHTML +=
            `
                <div class="admin__name-product" name="id" value="${options.parameters.id}">Название</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" value="${options.parameters.name}" name="name" placeholder="Название" maxlength="50">
                    </div>
                    <div class="admin__name-product">Основная картинка</div>
                    <label class="admin__edit-column">
                        ${getImageFile(options.images[0], 1)}
                        ${getImage(options.images[0], 1)}
                    </label>
                    <div class="admin__name-product">Вторая картинка</div>
                    <label class="admin__edit-column">
                        ${getImageFile(options.images[1], 2)}
                        ${getImage(options.images[1], 2)}
                    </label>
                    <div class="admin__name-product">Третяя картинка</div>
                    <label class="admin__edit-column">
                        ${getImageFile(options.images[2], 3)}
                        ${getImage(options.images[2], 3)}
                    </label>
                    <div class="admin__name-product">Цена</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input admin__number-input" value="${options.parameters.price}" name="price" placeholder="Цена" inputmode="numeric" maxlength="8">
                    </div>
                    <div class="admin__name-product">Описание</div>
                    <div class="admin__edit-column">
                        <textarea type="text" class="admin__textarea-edit admin__text-input" name="description" placeholder="Описание" maxlength="1000">${options.parameters.description}</textarea>
                    </div>
                    <div class="admin__name-product">Вес</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="weight" value="${options.parameters.weight}" placeholder="Вес" maxlength="20">
                    </div>
                    <div class="admin__name-product">Водонепроницаемость</div>
                    <div class="admin__edit-column">
                        <textarea type="text" class="admin__textarea-edit admin__text-input" name="watertight" placeholder="Водонепроницаемость" maxlength="50">${options.parameters.watertight}</textarea>
                    </div>
                    <div class="admin__name-product">Количество штук на складе</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input admin__number-input" value="${options.parameters.stock_quantity}" name="stock_quantity" placeholder="Количество штук на складе" inputmode="numeric" maxlength="4">
                    </div>
                    <div class="admin__name-product">Стекло корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_glass" value="${options.parameters.case_glass}" placeholder="Стекло корпуса" maxlength="100">
                    </div>
                    <div class="admin__name-product">Ширина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_width" value="${options.parameters.case_width}" placeholder="Ширина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Длина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_length" value="${options.parameters.case_length}" placeholder="Длина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Толщина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_thickness" value="${options.parameters.case_thickness}" placeholder="Толщина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Механизм</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="stones_mechanism" value="${options.parameters.stones_mechanism}" placeholder="Механизм" maxlength="50">
                    </div>
                    <div class="admin__name-product">Диаметр калибра</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="caliber_diametr_mechanism" value="${options.parameters.caliber_diametr_mechanism}" placeholder="Диаметр калибра" maxlength="20">
                    </div>
                    <div class="admin__name-product">Вид механизма</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_mechanism" value="${options.parameters.id_mechanism}">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">${options.parameters.mechanism}</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.mechanisms, 'mechanism')}
                        </div>
                    </div>
                    <div class="admin__name-product">Цвет ремешка</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_strap_color" value="${options.parameters.id_strap_color}">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">${options.parameters.strap_color}</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.strapColors, 'color')}
                        </div>
                    </div>
                    <div class="admin__name-product">Материал ремешка</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_strap_material" value="${options.parameters.id_strap_material}">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">${options.parameters.material}</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.strapMaterials, 'material')}
                        </div>
                    </div>
                    <div class="admin__name-product">Цвет циферблата</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_face_color" value="${options.parameters.id_face_color}">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">${options.parameters.face_color}</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.faceColors, 'color')}
                        </div>
                    </div>
                    <div class="admin__name-product">Пол</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_gender" value="${options.parameters.id_gender}">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">${options.parameters.gender}</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.genders, 'gender')}
                        </div>
                    </div>
                `
    }
    catch (error) {
        body.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
        console.log(url);
    }

}


function getImage(image, order) {

    if (image) {
        return `<div class="admin__input-edit admin__input-edit_file admin__img-input add admin__img-input_validate" id="img_text_${order}" value="${image.url}">${image.url}</div>`
    } else {
        return `<div class="admin__input-edit admin__input-edit_file admin__img-input" value="">Картинка ${order}</div>`
    }

}

function getImageFile(image, order) {

    if (image) {
        return `<input type="file" class="admin__file" name="img_${order}" value="${image.url}">`
    } else {
        return `<input type="file" class="admin__file" name="img_${order}" value="">`
    }

}