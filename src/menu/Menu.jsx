import { getMenu } from "../services/apiRestaurant";

function Menu() {
  return <h1>Menu</h1>;
}

export function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;
