import React from 'react';
import PropTypes from 'prop-types';

const ToastMsg = ({ title, subtitle }) => {
  return (
    <div>
      <h6 className="font-semibold">{title}</h6>{' '}
      {subtitle && (
        <p className="font-medium text-14 text-white/80 leading-5">
          {subtitle}
        </p>
      )}
    </div>
  );
};
ToastMsg.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default ToastMsg;
