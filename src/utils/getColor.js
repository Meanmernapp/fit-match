export const getColor = (value) => {
  switch (value) {
    case "Pending":
      return "orange";
    case "Submitted":
      return "#2b7a7b";
    case "Accepted":
      return "green";
    case "Fulfilled":
      return "green";
    case "FulfilledWithIn48Hours":
      return "#0d6efd";
    case "Fullfilledafter48Hours":
      return "#0d6efd";
    case "Fulfilledbefore48hours":
      return "#0d6efd";
    case "Fulfilledafter48hours":
      return "#0d6efd";
    case "FulfilledAfter48Hours":
      return "#0d6efd";
    case "ClientClosed":
      return "red";
    default:
      return "";
  }
};
