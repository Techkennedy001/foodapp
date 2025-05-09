import Item from "./Item";

export default function ItemList({ food, isloading }) {
  return (
    <div>
      {isloading ? (
        <p>loading...</p>
      ) : (
        food.extendedIngredients?.map((item, index) => (
          <Item key={index} item={item} />
        ))
      )}
    </div>
  );
}
