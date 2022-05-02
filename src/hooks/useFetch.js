import React, { useState, useEffect } from 'react';

function useFetch(query, params) {
  let [data, setData] = useState();
  let [fetchMoreResult, setFetchMoreResult] = useState();
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState();
  let [status, setStatus] = useState();

  let refetch = async (params1) => {
    let result;
    if (params) {
      result = await query(params.variables);
    }
    if (params1) {
      result = await query(params1.variables);
    } else {
      result = await query();
    }

    setLoading(false);
    setData(result.data);
    setError(result.data.error);
    setStatus(result.status);
  };

  useEffect(() => {
    refetch();
  }, []);

  let fetchMore = async (params) => {
    let result;
    if (params) {
      result = await query(params.variables);
    } else {
      result = await query();
    }

    setLoading(false);
    setFetchMoreResult(result.data);
    setError(result.data.error);
    setStatus(result.status);
  };
  return { data, error, loading, status, fetchMore, fetchMoreResult, refetch };
}

export default useFetch;
