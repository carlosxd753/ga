import React from "react";
import MaterialTable from "material-table";
import { useHistory } from "react-router-dom";

export default function SimpleAction() {
  const history = useHistory();
  return (
    <MaterialTable
      title="Simple Action Preview"
      columns={[
        { title: "Name", field: "name" },
        { title: "Infected", field: "infected" }
      ]}
      data={[
        {
          name: "USA",
          infected: 300
        },
        {
          name: "French",
          infected: 100
        }
      ]}
      actions={[
        {
          icon: "info",
          tooltip: "More info",
          onClick: (event, rowData) => {
            history.push(`/details/${rowData.name}`);
          }
        }
      ]}
    />
  );
}
