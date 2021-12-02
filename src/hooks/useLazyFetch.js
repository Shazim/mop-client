import React, { useState } from 'react';

function useLazyFetch(query) {
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState();
  let [status, setStatus] = useState();

  let calling = async (params) => {
    let result;
    if (params) {
      result = await query(params.variables);
    } else {
      result = await query();
    }

    setLoading(false);
    setData(result.data);
    setError(result.data.error);
    setStatus(result.status);
  };

  return [calling, { data, error, loading, status }];
}

export default useLazyFetch;
