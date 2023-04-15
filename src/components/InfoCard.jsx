export default function InfoCard(props) {
  function openForm() {
    document.getElementById("expandedInfoCard").style.display = "inline-block";
    document.getElementById("openCardButton").style.display = "none";
    document.getElementById("infoCard").style.width = "600px";
    return (document.getElementById("closeCardButton").style.display =
      "inline-block");
  }

  function closeForm() {
    document.getElementById("expandedInfoCard").style.display = "none";
    document.getElementById("closeCardButton").style.display = "none";
    document.getElementById("infoCard").style.width = "100px";
    document.getElementById("openCardButton").style.marginLeft = "5px";
    return (document.getElementById("openCardButton").style.display =
      "inline-block");
  }

  return (
    // <Html position={props.position}>
    <div className="InfoCard" id="infoCard">
      <div id="expandedInfoCard">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
        <p>{props.detail}</p>
        <p>{props.gravity_cmp}</p>
        <img src={props.image} alt={props.title} className="planetImage"></img>
        <button
          className="InfoCardMinimize"
          onClick={closeForm}
          id="closeCardButton"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <button
        className="InfoCardMaximize"
        onClick={openForm}
        id="openCardButton"
      >
        <span></span>
        <span></span>
      </button>
    </div>
    // </Html>
  );
}
