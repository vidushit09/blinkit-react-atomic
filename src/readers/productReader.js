import data from "../data/data.json"
import _property from 'lodash/property';

const id = _property.data.products.id;
const discount=_property.data.products.discount;
const thumbnail=_property.data.products.thumbnail;
const name=_property.data.products.name;
const sourcedAt=_property.data.products.sourcedAt;
const quantity=_property.data.products.quantity;
const price=_property.data.products.price;
const category=_property.data.products.category;
const subCategory=_property.data.products.subCategory;

export default{
    id,
    discount,
    thumbnail,
    name,
    sourcedAt,
    quantity,
    price,
    category,
    subCategory
};