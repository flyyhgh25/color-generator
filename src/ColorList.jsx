import SingleColor from "./SingleColor";
import {nanoid} from 'nanoid'; //install npm nanoid
const ColorList = ({ colors }) => {
  console.log(`Single Color : ${colors}`)
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
