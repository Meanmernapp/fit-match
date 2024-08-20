// import { AddCredit, GetAllPriceIds } from "@/services/trainer/trainerSlice";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect } from "react";
// import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import { MdVerified } from "react-icons/md";
// import { useDispatch, useSelector } from "react-redux";

// const CreditInformation = () => {
//   const searchParams = useSearchParams();
//   const success = searchParams.get("success");
//   const buyCredits = searchParams.get("buyCredits");
//   const router = useRouter();

//   const dispatch = useDispatch();
//   const getAllPriceIds = useSelector(
//     (state) => state?.trainerSlice?.getAllPriceIds
//   );
//   const addCredit = useSelector((state) => state?.trainerSlice?.addCredit);
//   const getUserById = useSelector((state) => state?.authSlice?.getUserById);
//   const getTrainerCredit = useSelector(
//     (state) => state?.trainerSlice?.getTrainerCredit
//   );

//   const isCreditSuccess = useSelector(
//     (state) => state?.trainerSlice?.isCreditSuccess
//   );
//   const creditAddedSuccess = useSelector(
//     (state) => state?.trainerSlice?.creditAddedSuccess
//   );

//   const getTrainerProfile = useSelector(
//     (state) => state?.trainerSlice?.getTrainerProfile
//   );

//   const handleAddCredit = (id) => {
//     const params = {
//       trainerId: getUserById?.trainerId,
//       priceId: id,
//     };

//     dispatch(AddCredit(params)).then((res) => {
//       if (res?.payload?.status === 200) {
//         window.location.href = res?.payload?.data;
//       }
//     });
//   };

//   useEffect(() => {
//     dispatch(GetAllPriceIds());
//   }, [dispatch]);

//   useEffect(() => {
//     if (success || buyCredits) {
//       router.push("/account");
//     }
//   }, [success, buyCredits]);
//   return (
//     <>
//       {getTrainerProfile?.trainerId ? (
//         <Container className="credit_information">
//           <Row className="mb-4">
//             <Col>
//               <div className="text-center">
//                 <h1 className="header-title">
//                   {getTrainerCredit?.credits <= 0 && "You currently have"}{" "}
//                   {getTrainerCredit && getTrainerCredit?.credits} Credits{" "}
//                   {getTrainerCredit?.isUserPremium && <MdVerified />}
//                 </h1>
//                 <p className="header-description">
//                   Purchase credits to accept requests and access customer
//                   information. Choose the package that best suits your needs!
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             {getAllPriceIds?.length > 0 &&
//               [...getAllPriceIds]
//                 ?.sort((a, b) => a?.price - b?.price)
//                 ?.map((item) => (
//                   <Col
//                     md={4}
//                     sm={6}
//                     xs={12}
//                     key={item?.priceId}
//                     className="mb-4"
//                   >
//                     <Card className="credit_card">
//                       <Card.Body>
//                         <Card.Title>Price: ${item?.price}</Card.Title>
//                         <Card.Text>Quantity: {item?.quantity}</Card.Text>
//                         <Card.Text>{item?.description}</Card.Text>
//                         <Button
//                           variant="primary"
//                           onClick={() => handleAddCredit(item?.priceId)}
//                         >
//                           Fill Credits
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//           </Row>
//           <Row className="mt-4">
//             <Col className="why_section_buy">
//               <h3>
//                 <p>Why Buy?</p>
//               </h3>
//               <ul>
//                 <li>
//                   You pay as you go! Only buy what you need, when you need it.
//                 </li>
//                 <li>
//                   Requests are <b>warm leads.</b>
//                   <ul>
//                     <li className="mr-4">
//                       They are from individuals specifically looking for your
//                       skillset and willing to pay your hourly rate!
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   The number of credits needed to accept a request doesn’t vary
//                   between requests. We deduct the <b>same</b> amount each time!
//                   Two <b>(2)</b> credits per request.
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//         </Container>
//       ) : (
//         <div>create beatiful informtion to create profile to buy credit.</div>
//       )}
//     </>
//   );
// };

// export default CreditInformation;

import { AddCredit, GetAllPriceIds } from "@/services/trainer/trainerSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { MdVerified } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const CreditInformation = () => {
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const buyCredits = searchParams.get("buyCredits");
  const router = useRouter();

  const dispatch = useDispatch();
  const getAllPriceIds = useSelector(
    (state) => state?.trainerSlice?.getAllPriceIds
  );
  const addCredit = useSelector((state) => state?.trainerSlice?.addCredit);
  const getUserById = useSelector((state) => state?.authSlice?.getUserById);
  const getTrainerCredit = useSelector(
    (state) => state?.trainerSlice?.getTrainerCredit
  );
  const isCreditSuccess = useSelector(
    (state) => state?.trainerSlice?.isCreditSuccess
  );
  const creditAddedSuccess = useSelector(
    (state) => state?.trainerSlice?.creditAddedSuccess
  );
  const getTrainerProfile = useSelector(
    (state) => state?.trainerSlice?.getTrainerProfile
  );

  const handleAddCredit = (id) => {
    const params = {
      trainerId: getUserById?.trainerId,
      priceId: id,
    };

    dispatch(AddCredit(params)).then((res) => {
      if (res?.payload?.status === 200) {
        window.location.href = res?.payload?.data;
      }
    });
  };

  useEffect(() => {
    dispatch(GetAllPriceIds());
  }, [dispatch]);

  useEffect(() => {
    if (success || buyCredits) {
      router.push("/account");
    }
  }, [success, buyCredits]);

  return (
    <>
      {getTrainerProfile?.trainerId ? (
        <Container className="credit_information">
          <Row className="mb-4">
            <Col>
              <div className="text-center">
                <h1 className="header-title">
                  {getTrainerCredit?.credits <= 0 && "You currently have"}{" "}
                  {getTrainerCredit && getTrainerCredit?.credits} Credits{" "}
                  {getTrainerCredit?.isUserPremium && <MdVerified />}
                </h1>
                <p className="header-description">
                  Purchase credits to accept requests and access customer
                  information. Choose the package that best suits your needs!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {getAllPriceIds?.length > 0 &&
              [...getAllPriceIds]
                ?.sort((a, b) => a?.price - b?.price)
                ?.map((item) => (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={item?.priceId}
                    className="mb-4"
                  >
                    <Card className="credit_card">
                      <Card.Body>
                        <Card.Title>Price: ${item?.price}</Card.Title>
                        <Card.Text>Quantity: {item?.quantity}</Card.Text>
                        <Card.Text>{item?.description}</Card.Text>
                        <Button
                          variant="primary"
                          onClick={() => handleAddCredit(item?.priceId)}
                        >
                          Fill Credits
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
          </Row>
          <Row className="mt-4">
            <Col className="why_section_buy">
              <h3>
                <p>Why Buy?</p>
              </h3>
              <ul>
                <li>
                  You pay as you go! Only buy what you need, when you need it.
                </li>
                <li>
                  Requests are <b>warm leads.</b>
                  <ul>
                    <li className="mr-4">
                      They are from individuals specifically looking for your
                      skillset and willing to pay your hourly rate!
                    </li>
                  </ul>
                </li>
                <li>
                  The number of credits needed to accept a request doesn’t vary
                  between requests. We deduct the <b>same</b> amount each time!
                  Two <b>(2)</b> credits per request.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="credit_information">
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <div className="profile-prompt">
                <h1 className="header-title">Create Your Profile</h1>
                <p className="header-description">
                  To purchase credits and access customer information, please
                  create your trainer profile. Click the Profile Tab to get
                  started.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CreditInformation;
