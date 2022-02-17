import React, { useState } from 'react';

function useLazyFetch(query) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [status, setStatus] = useState();

  const calling = async (params) => {
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
  
  const clear=()=>{
    setData();
    setLoading();
    setError();
  }
  
  return [calling, { data, error, loading, status,clear }];
}

export default useLazyFetch;


 