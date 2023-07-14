import React from "react";

function Error(props: { error: string }) {
  const { error } = props;
  return <span style={{ color: "red", fontFamily: "Copyright Klim Type Foundry soehne buch", fontSize:"12px" }}>{error}</span>;
}

export default Error;