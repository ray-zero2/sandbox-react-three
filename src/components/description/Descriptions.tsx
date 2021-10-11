import { memo, VFC } from "react";
import "./Descriptions.css";

const DESC_CONTENTS = [
  {
    title: "u",
    description: "camera up",
  },
  {
    title: "d",
    description: "camera down",
  },
  // {
  //   title: "c",
  //   description: "change direction",
  // },
];

interface IProps {
  pressed?: string;
}

const Descriptions: VFC<IProps> = (props) => {
  return (
    <section className="wrapper">
      <h1 className="title">React & Three.js Test</h1>
      <section className="contents">
        <h2 className="howto-title">How To Use</h2>
        <ul className="howto-list">
          {DESC_CONTENTS.map((desc) => (
            <li className="howto-item" key={desc.title}>
              <dl className="description">
                <dt className="description-title">keydown "{desc.title}"</dt>
                <dd className="description-content">{desc.description}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>
      <p className="key-name">keydown: "{props.pressed}"</p>
    </section>
  );
};

export default memo(Descriptions);
