import { Html } from "@react-three/drei";

export default function InfoCard(props) {
  return (
    <Html position={props.position}>
      <div className="InfoCard">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.detail}</p>
        <br></br>
        <p>{props.gravity_cmp}</p>
      </div>
    </Html>
  );
}
