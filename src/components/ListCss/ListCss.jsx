import "./ListCss.css";

const ListCss = () => {
  return (
    <div>
      <ul>
        <li style={{ "--clr": "#00ade1" }}>
          <a href="#" data-text="&nbsp;Home">
            &nbsp;Home&nbsp;
          </a>
        </li>
        <li style={{ "--clr": "#ff6492" }}>
          <a href="#" data-text="&nbsp;About">
            &nbsp;About&nbsp;
          </a>
        </li>
        <li style={{ "--clr": "#ffdd1c" }}>
          <a href="#" data-text="&nbsp;Services">
            &nbsp;Services&nbsp;
          </a>
        </li>
        <li style={{ "--clr": "#08dc82" }}>
          <a href="#" data-text="&nbsp;Blog">
            &nbsp;Blog&nbsp;
          </a>
        </li>
        <li style={{ "--clr": "#dc00d4" }}>
          <a href="#" data-text="&nbsp;Contact">
            &nbsp;Contact&nbsp;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ListCss;
