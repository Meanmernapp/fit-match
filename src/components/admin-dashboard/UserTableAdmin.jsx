import { useState, useEffect } from "react";
import { Button, Table, Modal, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import moment from "moment-timezone";

import Pagination from "../Pagination";
import { AdminUsers } from "@/services/admin/adminSlice";
import { getUserById } from "@/constants/auth";
import TrainerProfileRead from "../trainer-dashboard/TrainerProfileRead";
import { GetTrainerProfile } from "@/services/trainer/trainerSlice";
import { formatDateToTimeZone } from "@/utils/formatDateToTimeZone";

export default function UserTableAdmin() {
  const adminUsers = useSelector((state) => state?.adminSlice?.adminUsers);
  const dispatch = useDispatch();
  const [showViewDetails, setViewDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState({ field: "created", asc: false });
  const itemsPerPage = 5; // Number of items per page
  const totalPages = Math.ceil(adminUsers?.length / itemsPerPage);

  const handleViewDetails = () => setViewDetails(false);

  useEffect(() => {
    dispatch(AdminUsers());
  }, [dispatch]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (field) => {
    if (sortOrder.field === field) {
      setSortOrder({ field, asc: !sortOrder.asc });
    } else {
      setSortOrder({ field, asc: true });
    }
  };

  const sortedUsers = [...adminUsers]?.sort((a, b) => {
    if (sortOrder?.field === "created") {
      return sortOrder?.asc
        ? new Date(a?.accountCreated) - new Date(b?.accountCreated)
        : new Date(b?.accountCreated) - new Date(a?.accountCreated);
    } else {
      return sortOrder?.asc
        ? a[sortOrder?.field].localeCompare(b[sortOrder?.field])
        : b[sortOrder?.field].localeCompare(a[sortOrder?.field]);
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedUsers?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h3 className="admin-heading bg-offwhite">
        <div className="d-flex">
          <p>Users</p>
        </div>
        <Button className="sml_btn ms-0">Edit Submit Request</Button>
      </h3>
      <div className="fit_shadow">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => handleSort("created")} className="pointer">
                Created{" "}
                {sortOrder?.field === "created" &&
                  (sortOrder?.asc ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  ))}
              </th>
              <th
                onClick={() => handleSort("userType")}
                className="text-center"
              >
                Type
              </th>
              <th
                onClick={() => handleSort("firstName")}
                className="text-center pointer"
              >
                First Name{" "}
                {sortOrder?.field === "firstName" &&
                  (sortOrder?.asc ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  ))}
              </th>
              <th
                onClick={() => handleSort("lastName")}
                className="text-center pointer"
              >
                Last Name{" "}
                {sortOrder?.field === "lastName" &&
                  (sortOrder?.asc ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  ))}
              </th>
              <th className="text-center">Profile</th>
            </tr>
          </thead>
          <tbody>
            {currentItems?.map((row) => (
              <tr key={row.id}>
                <td className="text-start">
                  {/* {moment(row?.accountCreated)
                    .tz(
                      getUserById?.timeZone
                        ? getUserById?.timeZone
                        : "America/Chicago"
                    )
                    .utc()
                    .format("MMMM Do YYYY, h:mm:ss a")} */}
                      {formatDateToTimeZone(
                        row?.accountCreated,
                        getUserById?.timeZone
                          ? getUserById?.timeZone
                          : "America/Chicago"
                      )}
                </td>
                <td className="text-center">{row.userType}</td>
                <td className="text-center">{row.firstName}</td>
                <td className="text-center">{row.lastName}</td>
                <td className="text-center">
                  {row.userType === "Trainer" && (
                    <button
                      className="xs_btn bg-primary"
                      onClick={() => {
                        dispatch(GetTrainerProfile(row?.trainerId));
                        setViewDetails(true);
                      }}
                    >
                      <FaEye /> view
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
    </>
  );
}
