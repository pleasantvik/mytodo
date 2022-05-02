import React, { useState } from "react";

const Header = (props) => {
  const [theme, setTheme] = useState(false);

  const sun = (
    <img
      src="images/icon-sun.svg"
      alt="sun"
      style={{ height: "2rem", width: "2rem" }}
    />
  );
  //   console.log(sun);
  const moon = (
    <img
      src="images/icon-moon.svg"
      alt="moon"
      style={{ height: "2rem", width: "2rem" }}
    />
  );

  // const ref = useRef();

  const onButtonClick = () => {
    setTheme(!theme);
    props.changeTheme();
    // console.log(ref.current);
  };
  return (
    <section className="header">
      <h1 className="heading">Todo</h1>
      <button onClick={onButtonClick} className="icon">
        {theme ? moon : sun}
      </button>
    </section>
  );
};

export default Header;
