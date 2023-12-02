import { getOptions } from "../../app/pages_site/admin_page/functions/get_options.js";


export async function createAddTable() {

    const url = 'http://localhost/onler_2/api/admin/get_options_product.php';
    const body = document.querySelector('.admin__table-edit');

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw await response.json();
        }
        const options = await response.json();

        body.innerHTML = '';
        body.innerHTML +=
            `
                <div class="admin__name-product">Название</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="name" placeholder="Название" maxlength="50">
                    </div>
                    <div class="admin__name-product">Основная картинка</div>
                    <label class="admin__edit-column">
                        <input type="file" class="admin__file" name="img_1">
                        <div class="admin__input-edit admin__input-edit_file admin__img-input" value="">Картинка 1</div>
                    </label>
                    <div class="admin__name-product">Вторая картинка</div>
                    <label class="admin__edit-column">
                        <input type="file" class="admin__file" name="img_2">
                        <div class="admin__input-edit admin__input-edit_file admin__img-input" value="">Картинка 2</div>
                    </label>
                    <div class="admin__name-product">Третяя картинка</div>
                    <label class="admin__edit-column">
                        <input type="file" class="admin__file" name="img_3">
                        <div class="admin__input-edit admin__input-edit_file admin__img-input" value="">Картинка 3</div>
                    </label>
                    <div class="admin__name-product">Цена</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input admin__number-input" name="price" placeholder="Цена" inputmode="numeric" maxlength="8">
                    </div>
                    <div class="admin__name-product">Описание</div>
                    <div class="admin__edit-column">
                        <textarea type="text" class="admin__textarea-edit admin__text-input" name="description" placeholder="Описание" maxlength="1000"></textarea>
                    </div>
                    <div class="admin__name-product">Вес</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="weight" placeholder="Вес" maxlength="20">
                    </div>
                    <div class="admin__name-product">Водонепроницаемость</div>
                    <div class="admin__edit-column">
                        <textarea type="text" class="admin__textarea-edit admin__text-input" name="watertight" placeholder="Водонепроницаемость" maxlength="50"></textarea>
                    </div>
                    <div class="admin__name-product">Количество штук на складе</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input admin__number-input" name="stock_quantity" placeholder="Количество штук на складе" inputmode="numeric" maxlength="4">
                    </div>
                    <div class="admin__name-product">Стекло корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_glass" placeholder="Стекло корпуса" maxlength="100">
                    </div>
                    <div class="admin__name-product">Ширина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_width" placeholder="Ширина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Длина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_length" placeholder="Длина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Толщина корпуса</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="case_thickness" placeholder="Толщина корпуса" maxlength="20">
                    </div>
                    <div class="admin__name-product">Механизм</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="stones_mechanism" placeholder="Механизм" maxlength="50">
                    </div>
                    <div class="admin__name-product">Диаметр калибра</div>
                    <div class="admin__edit-column">
                        <input type="text" class="admin__input-edit admin__text-input" name="caliber_diametr_mechanism" placeholder="Диаметр калибра" maxlength="20">
                    </div>
                    <div class="admin__name-product">Вид механизма</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_mechanism" value="">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">Вид механизма</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.mechanisms, 'mechanism')}
                        </div>
                    </div>
                    <div class="admin__name-product">Цвет ремешка</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_strap_color" value="">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">Цвет ремешка</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.strapColors, 'color')}
                        </div>
                    </div>
                    <div class="admin__name-product">Материал ремешка</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_strap_material" value="">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">Материал ремешка</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.strapMaterials, 'material')}
                        </div>
                    </div>
                    <div class="admin__name-product">Цвет циферблата</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_face_color" value="">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">Цвет циферблата</div>
                                <div class="admin__arrow spoiler__arrow _icon-arrow"></div>
                            </div>
                            ${getOptions(options.faceColors, 'color')}
                        </div>
                    </div>
                    <div class="admin__name-product">Пол</div>
                    <div class="admin__edit-column">
                        <div class="admin__spoiler-page admin__text-input" name="id_gender" value="">
                            <div class="admin__spoiler-button" data-spoiler>
                                <div class="admin__spoiler-text">Пол</div>
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