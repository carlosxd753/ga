import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function Details() {
  const match = useRouteMatch();
  return <div>{match.params.name}</div>;
}
