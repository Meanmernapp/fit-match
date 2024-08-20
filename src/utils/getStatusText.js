export const getStatusText = (value) => {
  switch (value) {
    case "Pending":
      return "Pending";
    case "Submitted":
      return "Submitted";
    case "Accepted":
      return "Accepted";
    case "Fulfilled":
      return "Fulfilled";
    case "ClientClosed":
      return "Closed";
    case "Declined":
      return "Declined";
    case "FulFilledbefore48hours":
      return "FulFilled";
    case "FulFilledafter48hours":
      return "FulFilled";
    case "FulfilledAfter48Hours":
      return "FulFilled";
    case "FulfilledWithIn48Hours":
      return "FulFilled";

    default:
      return "";
  }
};
