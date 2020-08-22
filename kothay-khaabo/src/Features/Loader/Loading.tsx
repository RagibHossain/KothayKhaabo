import React from "react";
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Loading = () => {
  return (
    <div>
      <Spinner className="mx-auto" animation="border" />
      <br />
      <span>Loading....</span>
    </div>
  );
};

export default observer(Loading);
