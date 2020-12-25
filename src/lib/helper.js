export const checkForToken = (history) => {
  if (!sessionStorage.getItem('token')) {
    history.push('/');
  }
};

export const paramsToArray = (paramKey) => {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const paramEntry = params.get(paramKey);
  if (paramEntry) {
    const paramArray = paramEntry.split(',');
    return paramArray;
  } else {
    return [];
  }
};
