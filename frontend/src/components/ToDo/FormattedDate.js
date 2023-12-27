import React from "react";

const FormattedDate = ({ model }) => {
  const date = new Date(model);

  if (isNaN(date.getTime())) {
    return <div>Invalid Date</div>;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const formattedDate = `${day}-${month}-${year}`;

  return <div>{`${formattedTime} | ${formattedDate}`}</div>;
};

export default FormattedDate;
