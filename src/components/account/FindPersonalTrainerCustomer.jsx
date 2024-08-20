"use client";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FirstStep from "../../components/account/FirstStep";
import SecondStep from "../../components/account/SecondStep";

import {
  DeleteRequest,
  GetAllUserRequest,
  GetMatchedTrainersForRequest,
  resetCreateRequest,
  resetGetMatchedTrainersForRequest,
  resetUpdateRequest,
  UpdateCustomerRequestStatus,
} from "@/services/client/clientSlice";
import { getColor } from "@/utils/getColor";
import { getLabel } from "@/utils/getLabel";
import { getStatusText } from "@/utils/getStatusText";
import { Formik } from "formik";
import { FaCircle, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

import { stopLoading } from "@/services/common/commonSlice";
import { GetTrainerProfile } from "@/services/trainer/trainerSlice";
import moment from "moment-timezone";
import * as yup from "yup";
import Pagination from "../Pagination";
import TrainerProfileRead from "../trainer-dashboard/TrainerProfileRead";
import { MdOutlineWifiTethering } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import { PiUsersFour } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { formatDateToTimeZone } from "@/utils/formatDateToTimeZone";

export default function FindPersonalTrainerCustomer() {
  const sendRequestToTrainers = useSelector(
    (state) => state?.clientSlice?.sendRequestToTrainers
  );
  const getMatchedTrainersForRequest = useSelector(
    (state) => state?.clientSlice?.getMatchedTrainersForRequest
  );
  const updateRequest = useSelector(
    (state) => state?.clientSlice?.updateRequest
  );
  const createRequest = useSelector(
    (state) => state?.clientSlice?.createRequest
  );
  const deleteRequest = useSelector(
    (state) => state?.clientSlice?.deleteRequest
  );
  const updateCustomerRequestStatus = useSelector(
    (state) => state?.clientSlice?.updateCustomerRequestStatus
  );
  const getAllUserRequest = useSelector(
    (state) => state?.clientSlice?.getAllUserRequest
  );

  const getUserById = useSelector((state) => state?.authSlice?.getUserById);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showUpdateData, setShowUpdateData] = useState({});
  const [showCloseRequest, setCloseRequest] = useState(false);
  const [showDeleteRequest, setDeleteRequest] = useState(false);
  const [showViewDetails, setViewDetails] = useState(false);
  const [resultModal, setResultModal] = useState(false);
  const [firstStep, setFirstStep] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const [confirmCloseModal, setConfirmCloseModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isMatchedTrainer, setIsMatchedTrainer] = useState(false);
  const [reqId, setReqId] = useState("");
  const [trainerProfileView, setTrainerProfileView] = useState(false);
  const [acceptedByList, setAcceptedByList] = useState(false);
  const [acceptedByListData, setAcceptedByListData] = useState(false);

  // pagination item
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math?.ceil(getAllUserRequest?.length / itemsPerPage);

  const setShowCloseRequest = (userId) => {
    setShowOther("");
    setCloseRequest(true);
    setSelectedUserId(userId);
  };
  const setShowViewDetails = (row) => {
    setViewDetails(true);
    setSelectedRowData(row);
  };
  const setShowDeleteRequest = (requestId) => {
    setDeleteRequest(true);
    setSelectedUserId(requestId);
  };
  // this is to open and close create request modal
  const handleShow = () => {
    setFirstStep(true);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  // this is to open and close update/edit request modal
  const handleShowUpdate = () => {
    setFirstStep(true);
    setShowUpdate(true);
  };
  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setShowUpdateData({});
  };

  const handleConfirmClose = () => {
    setConfirmCloseModal(false);
  };

  const handleCloseRequest = () => setCloseRequest(false);
  const handleDeleteRequest = () => setDeleteRequest(false);
  const handleViewDetails = () => setViewDetails(false);
  const handleSuccessModal = () => setResultModal(false);
  const handleConfimationModal = () => setConfirmCloseModal(false);
  const handleTrainerProfileModal = () => setTrainerProfileView(false);
  const handleModalConfrim = () => {
    setConfirmCloseModal(false);
    setShow(false);
    setShowUpdate(false);
  };
  const handleCloseCreate = () => {
    if (
      createRequest?.trainers?.length > 0 ||
      getMatchedTrainersForRequest?.length > 0
    ) {
      setConfirmCloseModal(true);
    } else {
      handleClose();
      setIsMatchedTrainer(false);
      dispatch(stopLoading());
      dispatch(resetGetMatchedTrainersForRequest());
      dispatch(resetUpdateRequest());
      dispatch(resetCreateRequest());
    }
  };

  const handleReasonChange = (event, handleChange) => {
    const value = event.target.value;
    setShowOther(value === "Other");
    handleChange(event);
  };

  const submitForm = (values) => {
    handleCloseRequest();
    const updatedReason =
      values.reason !== "Other" ? values.reason : values.other;
    const params = {
      requestId: selectedUserId,
      status: "ClientClosed",
      closedReason: updatedReason,
    };
    dispatch(UpdateCustomerRequestStatus({ params }));
  };

  const initialValues = {
    reason: "",
    other: "",
  };

  const validate = async (values) => {
    try {
      await validationSchema.validate(values, { abortEarly: false });
      return {};
    } catch (validationErrors) {
      let errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      return errors;
    }
  };

  const validationSchema = yup.object().shape({
    reason: yup.string().required("Reason is required to close the request"),

    other: yup.string().when("reason", {
      is: (val) => val?.includes("Other"),
      then: () =>
        yup
          .string()
          .required("Please provide a reason")
          .min(4, "Reason is must be at least four characters."),
      otherwise: () => yup.string(),
    }),
  });

  const DeleteRequestFn = (event) => {
    event.preventDefault();
    handleDeleteRequest();
    const params = {
      id: selectedUserId,
    };

    dispatch(DeleteRequest({ params }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const sortedData = [...getAllUserRequest].sort(
    (a, b) => new Date(b.dateOfSubmission) - new Date(a.dateOfSubmission)
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h3 className="admin-heading bg-offwhite">
        <div className="d-flex">
          <p>Find Personal Trainer</p>
        </div>
        <Button onClick={handleShow} className="sml_btn ms-0">
          Create Request
        </Button>
      </h3>
      <div className="fit_shadow">
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th>Status</th>
                <th>Accepted By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No Data Available
                  </td>
                </tr>
              ) : (
                currentItems.map((row, rowIndex) => (
                  <tr key={rowIndex}>
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
                    <td>
                      {row.title.length > 30
                        ? `${row.title.slice(0, 30)}...`
                        : row.title}
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <FaCircle size={10} color={getColor(row.status)} />
                        <span className="ms-1">
                          {getStatusText(row.status)}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="view_accepted_by_profile">
                          {row?.acceptedBy?.length > 0 ? (
                            row?.acceptedBy?.length > 1 ? (
                              <div
                                className="trainers_accepted"
                                onClick={() => {
                                  setAcceptedByListData(row);
                                  setAcceptedByList(true);
                                }}
                              >
                                <PiUsersFour
                                  size={25}
                                  className="text_primary"
                                />
                              </div>
                            ) : (
                              row?.acceptedBy?.map((item) => (
                                <p
                                  key={item?.trainerId}
                                  onClick={() => {
                                    setTrainerProfileView(true);
                                    dispatch(GetTrainerProfile(item.trainerId));
                                  }}
                                >
                                  {item?.trainerName}
                                </p>
                              ))
                            )
                          ) : (
                            "None"
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="action_button_customer">
                        {row.status !== "Pending" && (
                          <button
                            data-tooltip-id="view"
                            data-tooltip-content="View"
                            className="xs_btn_icon"
                            onClick={() => setShowViewDetails(row)}
                          >
                            <FaEye />
                          </button>
                        )}
                        {row.status === "Submitted" && (
                          <button
                            className="xs_btn_icon text_red"
                            data-tooltip-id="close"
                            data-tooltip-content="Close"
                            onClick={() => setShowCloseRequest(row.requestId)}
                          >
                            <TiDelete size={16} className="text_danger" />
                          </button>
                        )}
                        {row.status === "Pending" && (
                          <>
                            <button
                              className="xs_btn_icon"
                              data-tooltip-id="view_match"
                              data-tooltip-content="View Match"
                              onClick={() => {
                                setShow(true);
                                setFirstStep(false);
                                setIsMatchedTrainer(true);
                                setReqId(row?.requestId);
                                // setShowUpdateData(row);
                                const params = {
                                  reqId: row?.requestId,
                                };
                                dispatch(GetMatchedTrainersForRequest(params));
                              }}
                            >
                              <MdOutlineWifiTethering
                                size={16}
                                className="text_green"
                              />
                            </button>
                            <button
                              className="xs_btn_icon"
                              data-tooltip-id="delete"
                              data-tooltip-content="Delete"
                              onClick={() =>
                                setShowDeleteRequest(row.requestId)
                              }
                            >
                              <MdDeleteForever size={16} className="text_red" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
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
                    <th>Is this your first time working with a trainer</th>
                    <td>
                      {selectedRowData.firstTimeWithTrainer ? "Yes" : "No"}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      Do you prefer a specific gender for your personal trainer
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
                      {selectedRowData.address ? selectedRowData.address : "-"}
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
                      What are your goals and/type of workout you are looking
                      for
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
                      Are there any additional details you'd like the trainer to
                      know?
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleViewDetails}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* close request Modal*/}
      <Modal
        show={showCloseRequest}
        onHide={handleCloseRequest}
        backdrop="static"
        keyboard={false}
        size="md"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Close Request </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}
            validationSchema={validationSchema}
          >
            {(formik) => {
              const {
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isValid,
                dirty,
              } = formik;
              return (
                <form onSubmit={handleSubmit}>
                  <div className="container">
                    <div className="input-group d-block">
                      <label htmlFor="reason" className="mb-0">
                        Reason for Closing?
                      </label>
                      <div className="d-block">
                        <Form.Select
                          id="reason"
                          name="reason"
                          placeholder="reason"
                          value={values.reason}
                          onBlur={handleBlur}
                          aria-label="Default select example"
                          onChange={(event) =>
                            handleReasonChange(event, handleChange)
                          }
                        >
                          <option value="">Choose...</option>
                          <option value="Due to medical reasons or a recent injury, I need to postpone training.">
                            Due to medical reasons or a recent injury, I need to
                            postpone training.
                          </option>
                          <option value="I am changing my workout approach (e.g. switching to a class instead of personal training sessions).">
                            I am changing my workout approach (e.g. switching to
                            a class instead of personal training sessions).
                          </option>
                          <option value="I can no longer afford a personal trainer.">
                            I can no longer afford a personal trainer.
                          </option>
                          <option value="I found a personal trainer outside the app (e.g. via a referral, social media, etc.).">
                            I found a personal trainer outside the app (e.g. via
                            a referral, social media, etc.).
                          </option>
                          <option value="I need to create a new request; the incorrect details were added to this one.">
                            I need to create a new request; the incorrect
                            details were added to this one.
                          </option>
                          <option value="I no longer have time for a personal trainer.">
                            I no longer have time for a personal trainer.
                          </option>
                          <option value="The app is taking too long to find me a personal trainer.">
                            The app is taking too long to find me a personal
                            trainer.
                          </option>
                          <option value="Other">Other</option>
                        </Form.Select>
                        {errors.reason && touched.reason && (
                          <p className="error">{errors.reason}</p>
                        )}
                      </div>
                    </div>
                    {showOther && (
                      <Form.Group className="mt-4">
                        <label className="mb-0">write down your reason</label>
                        <Form.Control
                          id="other"
                          name="other"
                          value={values.other}
                          checked={values.other}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          as="textarea"
                          rows={3}
                        />
                      </Form.Group>
                    )}
                    {errors.other && touched.other && (
                      <p className="error">{errors.other}</p>
                    )}

                    <div className="btn_block mt-4">
                      <button
                        type="submit"
                        className={`btn puprple_btn ms-0 ${
                          !(dirty && isValid) && "disabledBtn"
                        }`}
                        disabled={!(dirty && isValid)}
                      >
                        Submit
                      </button>
                      <div className="btn_bottom"></div>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRequest}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* create and update request Modal*/}
      <Modal
        show={show ? show : showUpdate}
        onHide={handleCloseCreate}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Find Personal Trainer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {firstStep ? (
              <FirstStep
                setFirstStep={() => setFirstStep(false)}
                editData={showUpdateData}
              />
            ) : (
              <SecondStep
                isMatchedTrainer={isMatchedTrainer}
                reqId={reqId}
                confirmCloseModal={confirmCloseModal}
                trainers={showUpdate ? updateRequest : createRequest}
                handleClose={handleClose}
                setResultModal={setResultModal}
                handleCloseUpdate={handleCloseUpdate}
                handleConfirmClose={handleConfirmClose}
              />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {showUpdate ? (
            <Button
              variant="secondary"
              onClick={() => {
                if (updateRequest?.trainers?.length > 0) {
                  setConfirmCloseModal(true);
                } else {
                  handleCloseUpdate();
                }
              }}
            >
              Close
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleCloseCreate}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* delete request Modal*/}
      <Modal
        show={showDeleteRequest}
        onHide={handleDeleteRequest}
        backdrop="static"
        keyboard={false}
        size="md"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Request </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="text-center py-4">
            <label className="h6">
              Are you sure you want to delete this request?
            </label>
            <div className="d-flex justify-content-center mt-4">
              <div className="btn_block me-3">
                <button
                  type="submit"
                  className="btn puprple_btn ms-0"
                  onClick={(event) => DeleteRequestFn(event)}
                >
                  Yes
                </button>
                <div className="btn_bottom"></div>
              </div>
              <div className="btn_block">
                <button
                  onClick={handleDeleteRequest}
                  className="btn puprple_btn ms-0"
                >
                  No
                </button>
                <div className="btn_bottom"></div>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/*  Modal result */}
      <Modal
        show={resultModal}
        onHide={handleSuccessModal}
        backdrop="static"
        keyboard={false}
        size="md"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Request Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <p>
              Your request has been sent to the selected trainers! Please allow
              up to 48 hours for the trainer to respond. If they are
              unavailable, we will send your request to other trainers we feel
              are a good fit. If you are not connected to a trainer within a
              week, feel free to submit another request as new trainers are
              joining our site every day! Thank you again!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*  Modal Confirmation */}
      <Modal
        show={trainerProfileView}
        onHide={handleTrainerProfileModal}
        backdrop="static"
        keyboard={false}
        size="lg"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Trainer profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TrainerProfileRead />
        </Modal.Body>
      </Modal>

      {/*  Modal Trainer match */}
      <Modal
        show={acceptedByList}
        onHide={() => setAcceptedByList(false)}
        backdrop="static"
        keyboard={false}
        size="sm"
        className="close_request_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Accepted By</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {acceptedByListData?.acceptedBy?.map((item) => {
                return (
                  <tr key={item?.trainerId}>
                    <td>{item?.trainerName}</td>
                    <td>
                      <div className="complete_center">
                        <button
                          className="xs_btn_icon "
                          onClick={() => {
                            setTrainerProfileView(true);
                            dispatch(GetTrainerProfile(item.trainerId));
                          }}
                        >
                          <CgProfile size={26} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <Tooltip id="delete" />
      <Tooltip id="view_match" />
      <Tooltip id="close" />
      <Tooltip id="view" />
    </>
  );
}
