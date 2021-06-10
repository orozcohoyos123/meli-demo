import React from "react";
import Header from "./Header";

/**
 * Component to structure the app, 
 * it's responsable to add the header in all pages and the router component result.
 * 
 * @component
 * @example
 * return (<Layout items={items} />)
 */
function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}

export default Layout;
