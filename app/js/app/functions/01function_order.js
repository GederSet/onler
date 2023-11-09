import { changeHeader } from "./change_header.js";
import { changeNameTheme } from "./color_theme.js";

async function startOrder() {
    await changeHeader();
    await changeNameTheme();
}

startOrder();