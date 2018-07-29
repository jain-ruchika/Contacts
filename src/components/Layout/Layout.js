import React from "react";
import Aux from "../../hoc/Auxi";
const layout = props => (
  <Aux>
    {/* <div>sidemenu, toolbar</div> */}
    <main>{props.children}</main>
  </Aux>
);

export default layout;
