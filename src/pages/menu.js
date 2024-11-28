import satay from "../assets/sate-ayam.jpg"
import rendang from "../assets/rendang.jpg";
import nasgor from "../assets/nasi-goreng.jpg";

const foodsData = [
  {
    title: "Sate Ayam (Chicken Satay)",
    desc: "Marinated and grilled chicken skewers served with peanut sauce.",
    imgUrl: satay,
  },
  {
    title: "Rendang",
    desc: "Slow-cooked beef in a rich and spicy coconut curry.",
    imgUrl: rendang,
  },
  {
    title: "Nasi Goreng",
    desc: "Indonesian fried rice with shrimp, chicken, and vegetables.",
    imgUrl: nasgor,
  },
];

const menu = () => {
  return (`
  <div class="row menu">
    <h2>Explore our curated menu.</h2>

    <div class="cards-wrapper">
      ${foodsData.map((food) => {
        return (`
          <div class="card">
            <img src=${food.imgUrl} />

            <h4>${food.title}</h4>
            <p>${food.desc}</p>
          </div>
        `);
      })}
    </div>
  </div>
  `);
};

export default menu;
