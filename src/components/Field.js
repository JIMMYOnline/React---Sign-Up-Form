import React from 'react';

function Field({ fieldAttr }) {
  const { classNameContent , classNameLabel, onChangeEvent, field } = fieldAttr;
  return(
    <div className={classNameContent}>
      <p className={classNameLabel}>{field}</p>
      <input type="text" name="fieldElement" className="inputField" onChange={onChangeEvent} id={field}/>
    </div>
  );
}

export default Field;
