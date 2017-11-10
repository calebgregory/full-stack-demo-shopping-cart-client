import React from 'react';

function Errors(props) {
  return <div>
    {Object.keys(props.errors).length > 0 && <h1>Errors</h1>}
    {Object.keys(props.errors).map((path, i) => {
      const err = props.errors[path];
      return <p key={i}>
        <span><code>{path}</code></span>: <span>{err.statusCode}</span> <span>{err.message}</span>
      </p>
    })}
  </div>
}

export default Errors;
