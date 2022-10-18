import Button from 'components/atoms/buttons/Button';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_MODEL, LOGOUT_USER } from 'store/actions/actionTypes';
import routes from 'routes';
import { removeCookie } from 'cookies/Cookies';

import { useHistory } from 'react-router-dom';
const CheckModel = () => {
  const history = useHistory();

  const { isCheck, isLogout } = useSelector((state) => state.modals);
  const dispatch = useDispatch();

  const scrollOff = () => {
    isCheck
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'scroll');
  };

  useEffect(() => {
    scrollOff();
  }, [isCheck]);
  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER, payload: true });
    removeCookie('user');
    dispatch({ type: LOGOUT_USER, payload: false });
    handleCheckToggle();
  };
  const handleCheckToggle = () => {
    dispatch({ type: CHECK_MODEL, payload: !isCheck });
  };
  return (
    <div className={`w-100% h-100% `}>
      <Modal
        isOpen={isCheck}
        onRequestClose={handleCheckToggle}
        className="absolute border-0 top-50% left-50% transform-xy"
        overlayClassName=" fixed inset-0 overflow-auto bg-white bg-opacity-90 top-68"
      >
        <div className="bg-gray-lighter w-568 pl-56 pr-57 py-40">
          <div className="font-avenir-reg text-2xl mb-15 text-secondary tracking-wider leading-38 uppercase">
            Are you Sure?
          </div>
          <div className="flex justify-between">
            <Button
              className="w-200 h-38"
              color="primary"
              onClick={handleLogout}
            >
              Yes
            </Button>
            <Button
              className="w-200 h-38"
              color="secondary"
              onClick={handleCheckToggle}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CheckModel;
