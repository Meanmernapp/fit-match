"use client";
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from "react-icons/fa";
import { BiDumbbell } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa6";

export default function FirstStep({ userType, setUserType, setFirstStep }) {
  return (
    <div className='login-register mt-5'>
      <fieldset>
        <legend className="px-2">What is your reason for creating an account?</legend>
        <ul className="nav nav-tabs nav-tabs-border d-flex" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${userType === 'Customer' && "active"}`}
              onClick={() => setUserType('Customer')}>
              <div className="d-flex">
                <div className="tab-icon">
                <FaUserTie size={35} />
                </div>
                <div className="ms-2">
                  <h6 className="mb-0">Seeking</h6>
                  <p className="mb-0">a Personal Trainer</p>
                </div>
              </div>
              {userType === 'Customer' && <FaCheckCircle size={15} className='activepick' />}
            </a>
          </li>
          <li className="nav-item" id="empsignup">
            <a
              className={`nav-link ${userType === 'Trainer' && "active"}`}
              onClick={() => setUserType('Trainer')}>
              <div className="d-flex">
                <div className="tab-icon">
                <BiDumbbell size={35} />
                </div>
                <div className="ms-2">
                  <h6 className="mb-0">Joining as </h6>
                  <p className="mb-0">a Personal Trainer</p>
                </div>
              </div>
              {userType === 'Trainer' && <FaCheckCircle size={15} className='activepick' />}
            </a>
          </li>
        </ul>
      </fieldset>
      <div className="btn_block mt-5 ms-3" style={{ width: '130px' }}>
        <button
          onClick={() => setFirstStep()}
          className={`btn puprple_btn ms-0 ${!(userType && (userType !== 'Customer' || userType !== 'Trainer')) && "disabledBtn"}`}
          disabled={(!userType && (userType !== 'Customer' || userType !== 'Trainer'))}>
          Next
        </button>
        <div className="btn_bottom"></div>
      </div>
    </div>
  );
}
