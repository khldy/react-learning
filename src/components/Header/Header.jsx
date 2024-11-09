import reactImg from "/src/assets/react-core-concepts.png";
import './Header.css';

const descriptionGen = ["Core", 'crucial', 'essential', 'key'];
function randomDescription (max) {
  return Math.floor(Math.random() * ( max + 1));
}

export default function Header() {
  const firstWord = descriptionGen[randomDescription(4)];
  return (
    <header>
      <img src= {reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {firstWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
