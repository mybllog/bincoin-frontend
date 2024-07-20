"use client";
import React from 'react';
import Link from 'next/link';
//import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faUserCircle,
  faCog,
  faSignOut,
  faBars,
  faTimes,
  faRotate,
  faMoneyBillTrendUp,
  faCreditCard,
  faFileInvoice,
  faLaptop,
} from '@fortawesome/free-solid-svg-icons';
//import DurationDropdown from './DurationDropdown.js';
//import { Provider } from 'react-redux';
//import { logout } from '../redux/slices/auth';
//import logo from '../assets/logo.png';

const Sidebar = () => {
  const activeStyle = {
    color: 'black',
    fontSize: '17px',
    borderRadius: '0.5rem',
    backgroundColor: '#feecf0',
    width: '100%',
    border: '5px solid transparent',
    fontStyle: 'bold',
  };

  const [collapseShow, setCollapseShow] = React.useState('hidden');

  return (
    <nav
      className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
      style={{ backgroundColor: "#671c2d" }}
    >
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer justify-center text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 15, color: 'red', paddingRight: 5 }}
          />
        </button>
        {/* Brand Logo */}
        {/*<div className="top-6 text-sm w-full  py-3">
          <a href="/">
            <img
              className="img"
              alt="manifold logo"
              src={logo}
              width="100px"
              height="40px"
            />
          </a>
        </div>*/}
        {/* Duration */}
        {/*<ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <DurationDropdown />
          </li>
        </ul>*/}
        {/* Collapse */}
        <div
          className={
            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block  pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm  font-bold p-4 px-0">
                  Manifold Computers
                </a>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow('hidden')}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ fontSize: 20, color: 'red', paddingRight: 5 }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                className="text-white text-lg py-3 font-medium block"
                href="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faFile}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Dashboard
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/user"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                User Management
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/exchange-rates"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faRotate}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Rates
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/opening-balance"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faMoneyBillTrendUp}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Opening Balance
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/expense"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faFileInvoice}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Accrued Expenses
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/prepaid"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faLaptop}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Prepaid Expenses
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/inventories"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faLaptop}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Inventories
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-sm py-3 font-bold block"
                href="/overdraft"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faCreditCard}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Overdraft
              </Link>
            </li>

            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/setting"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faCog}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Setting
              </Link>
            </li>
            <li className="items-center">
              <Link
                className="text-white hover:text-black text-lg py-3 font-medium block"
                href="/login"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <FontAwesomeIcon
                  icon={faSignOut}
                  style={{
                    fontSize: 13,
                    color: 'white',
                    paddingRight: 20,
                    left: 12,
                    position: 'relative',
                  }}
                />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
