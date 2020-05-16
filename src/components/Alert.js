import React from 'react';
import '../styles/alert.css';

function Alert() {
  return (
    <div className="alert">
      <p>After a successful log in, we use a cookie in your browser to track your session. You can refer our</p>
      <a href="www.">Cookie Policy</a>
      <p>for more details.</p>
  </div>
  );
}

export default Alert;