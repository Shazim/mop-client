import React, { useState } from 'react';

function UsePost(query) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [status, setStatus] = useState();

  let calling = async (params) => {
    let result;
    if (params) {
      result = await query(params.variables);
    } else {
      result = await query();
    }

    setLoading(false);
    setStatus(result.status);
    setData(result.data);
    setError(result.data.error);
  };

  return [calling, { data, error, loading, status }];
}

export default UsePost;
