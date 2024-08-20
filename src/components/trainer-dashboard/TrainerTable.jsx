import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import {
  GetAllTrainerRequest,
  GetCustomerContactDetails,
  ResponseToRequest,
} from "@/services/trainer/trainerSlice";
import moment from "moment-timezone";
import Pagination from "../Pagination";
// import moment from "moment";
import { getColor } from "@/utils/getColor";
import { getLabel } from "@/utils/getLabel";
import { getStatusText } from "@/utils/getStatusText";
import { useRouter } from "next/navigation";
import InfoMessage from "../InfoMessage";
import { formatDateToTimeZone } from "@/utils/formatDateToTimeZone";

export default function TrainerTable() {
  const getCustomerContactDetails = useSelector(
    (state) => state?.trainerSlice?.getCustomerContactDetails
  );
  const getTrainerCredit = useSelector(
    (state) => state?.trainerSlice?.getTrainerCredit
  );
  const responseToRequest = useSelector(
    (state) => state?.trainerSlice?.responseToRequest
  );
  const getTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.getTrainerProfile
  );
  const getAllTrainerRequest = useSelector(
    (state) => state?.trainerSlice?.getAllTrainerRequest
  );
  const getUserById = useSelector((state) => state?.authSlice?.getUserById);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showViewDetails, setViewDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math?.ceil(getAllTrainerRequest?.length / itemsPerPage);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const handleViewDetails = () => setViewDetails(false);

  function MyTable({ data }) {
    // sort the data array in descending order based on dateOfSubmission
    const sortedData = [...data]?.sort((a, b) => {
      const dateA = new Date(a?.dateOfSubmission);
      const dateB = new Date(b?.dateOfSubmission);
      return dateB - dateA; // sort in descending order
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData?.slice(indexOfFirstItem, indexOfLastItem);

    const handleResponse = (reqStatus, reqId) => {
      const params = {
        trainerId: getTrainerProfile?.trainerId,
        requestId: reqId,
        requestStatus: reqStatus,
      };
      dispatch(ResponseToRequest(params));
    };

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date Submitted</th>
            <th className="text-center">Title</th>
            <th className="text-center">Status</th>
            <th className="text-center">Accept or Decline?</th>
          </tr>
        </thead>
        {
          <tbody>
            {currentItems?.length === 0 ? (
              <tr>
                <td colSpan="4">
                  {getTrainerProfile?.trainerId ? (
                    <InfoMessage
                      message={
                        <>
                          {" "}
                          We are currently working to find you your first
                          request! Once we do, the request will be listed here,
                          and you will receive an email notification. After
                          reviewing the request, if you want to accept, you will
                          need at least two credits. For more details on our
                          credit packs, which you can buy now or later, go to{" "}
                          <span className="fw-bold">
                            Credit Information
                          </span>{" "}
                          for more details.
                        </>
                      }
                    />
                  ) : (
                    <InfoMessage
                      message=" In order to accept requests from prospective clients, you must create a
                   profile."
                    />
                  )}
                </td>
              </tr>
            ) : (
              currentItems?.map((row) => {
                return (
                  <tr key={row?.requestId}>
                    <td>
                      {/* {moment(row?.dateOfSubmission)
                        .tz(
                          getUserById?.timeZone
                            ? getUserById?.timeZone
                            : "America/Chicago"
                        )
                        .utc()
                        .format("MMMM Do YYYY, h:mm:ss a")} */}
                         {formatDateToTimeZone(
                        row?.dateOfSubmission,
                        getUserById?.timeZone
                          ? getUserById?.timeZone
                          : "America/Chicago"
                      )}
                    </td>
                    <td className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setSelectedRowData(row);
                          const params = {
                            requestId: row?.requestId,
                            trainerId: getTrainerProfile?.trainerId,
                          };
                          dispatch(GetCustomerContactDetails(params));
                          setViewDetails(true);
                        }}
                      >
                        {row?.title.length > 30
                          ? `${row?.title.slice(0, 30)}...`
                          : row?.title}
                      </a>
                    </td>
                    <td>
                      <div className="status_with_circle">
                        {
                          <FaCircle
                            size={10}
                            color={getColor(row?.customerRequestStatus)}
                          />
                        }
                        {getStatusText(row?.customerRequestStatus)}
                      </div>
                    </td>
                    <td className="text-center">
                      {row?.status === "Submitted" && (
                        <>
                          <Button
                            onClick={() => {
                              if (getTrainerCredit?.credits > 2) {
                                handleResponse("Accepted", row?.requestId);
                              } else {
                                router.push("/account?buyCredits=true");
                              }
                            }}
                            // disabled={
                            //   getTrainerCredit?.credits > 2 ? false : true
                            // }
                            variant="success"
                            className="me-2"
                          >
                            {getTrainerCredit?.credits > 2
                              ? "Accept"
                              : "Insufficient Credits"}
                          </Button>
                          <Button
                            onClick={() =>
                              handleResponse("Declined", row?.requestId)
                            }
                            variant="danger"
                          >
                            Decline
                          </Button>
                        </>
                      )}
                      {[
                        "Fulfilledbefore48hours",
                        "Fulfilledafter48hours",
                      ].includes(row?.status) && (
                        <em>This request has been fulfilled.</em>
                      )}
                      {"ClientClosed" === row?.status && (
                        <em>This request was closed by the customer.</em>
                      )}

                      {row?.status === "Accepted" && (
                        <p className="text-center ">Accepted</p>
                      )}
                      {row?.status === "Declined" && (
                        <p className="text-center ">Declined</p>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        }
      </Table>
    );
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const params = getUserById?.trainerId;
    if (params) {
      dispatch(GetAllTrainerRequest(params));
    }
  }, [dispatch, getUserById?.trainerId, responseToRequest]);

  return (
    <>
      <h3 className="admin-heading bg-offwhite">
        <div className="d-flex">
          <p>Request List</p>
        </div>
      </h3>
      <div className="fit_shadow">
        <MyTable data={getAllTrainerRequest} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>

      {/* view details Modal*/}
      <Modal
        show={showViewDetails}
        onHide={handleViewDetails}
        backdrop="static"
        keyboard={false}
        size="md"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Request Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {/* Request details content */}
            <Modal.Body>
              <div className="container">
                {selectedRowData && (
                  <Table className="request_details" striped bordered hover>
                    <tbody>
                      <tr>
                        <th>Title of Request</th>
                        <td>
                          {selectedRowData.title ? selectedRowData.title : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>
                          <div className="d-flex align-items-center">
                            <FaCircle
                              size={10}
                              color={getColor(selectedRowData.status)}
                            />
                            <span className="ms-1">
                              {" "}
                              {getStatusText(selectedRowData.status)}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>First Name</th>
                        <td
                          className={`${
                            getCustomerContactDetails?.requestStatus ===
                            "Accepted"
                              ? ""
                              : "blur"
                          }`}
                        >
                          {getCustomerContactDetails?.customerName}
                        </td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td
                          className={`${
                            getCustomerContactDetails?.requestStatus ===
                            "Accepted"
                              ? ""
                              : "blur"
                          }`}
                        >
                          {getCustomerContactDetails?.customerPhoneNumber}
                        </td>
                      </tr>
                      <tr>
                        <th>Email Address</th>
                        <td
                          className={`${
                            getCustomerContactDetails?.requestStatus ===
                            "Accepted"
                              ? ""
                              : "blur"
                          }`}
                        >
                          {getCustomerContactDetails?.customerEmail}
                        </td>
                      </tr>
                      <tr>
                        <th>Is this your first time working with a trainer</th>
                        <td>
                          {selectedRowData.firstTimeWithTrainer ? "Yes" : "No"}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          Do you prefer a specific gender for your personal
                          trainer
                        </th>
                        <td>
                          {selectedRowData.preferredGender === "DoesNotMatter"
                            ? "Does Not Matter"
                            : selectedRowData.preferredGender
                            ? selectedRowData.preferredGender
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>Address</th>
                        <td>
                          {selectedRowData.address
                            ? selectedRowData.address
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>What is your budget per session</th>
                        <td>
                          {selectedRowData.estimatedBudget
                            ? selectedRowData.estimatedBudget.map(
                                (value, index) => (
                                  <p key={index} className="m-0">
                                    {getLabel(value)}
                                  </p>
                                )
                              )
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          What are your goals and/type of workout you are
                          looking for
                        </th>
                        <td>
                          {selectedRowData.goal
                            ? selectedRowData.goal.map((value, index) => (
                                <p key={index} className="m-0">
                                  {value}
                                </p>
                              ))
                            : "-"}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          Are there any additional details you'd like the
                          trainer to know?
                        </th>
                        <td>
                          {selectedRowData.description
                            ? selectedRowData.description
                            : "-"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </div>
            </Modal.Body>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
