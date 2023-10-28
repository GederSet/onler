import { getAllProducts } from "./change_word.js";
import { showProducts } from "../../../../api/delivery/get_delivery_products.js";

async function startPage() {
    await showProducts();
    await getAllProducts();
}

startPage();