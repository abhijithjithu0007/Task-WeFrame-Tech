import { items } from "../utils/naviItems";
export default function Itemsrow() {
  return (
    <div>
      <div className="flex justify-between p-5 bg-white">
        {items.map((item, index) => (
          <p
            className="uppercase text-sm text-gray-500 font-semibold"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <hr />
    </div>
  );
}
