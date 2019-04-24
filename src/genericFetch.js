import { FETCH_DEFAULT_OPTION } from './constants';

function generateCallbackFunction() {
  return `jsonp_${Date.now()}_${Math.ceil(Math.random() * 100000)}`;
}

const GenericFetch = (_url, options = {}) => {
  // to avoid param reassign
  let url = _url;
  const jsonpCallback =
    options.jsonpCallback || FETCH_DEFAULT_OPTION.jsonpCallback;

  let timeoutId;

  return new Promise((resolve, reject) => {
    const callbackFunction =
      options.jsonpCallbackFunction || generateCallbackFunction();
    const scriptId = `${jsonpCallback}_${callbackFunction}`;

    window[callbackFunction] = response => {
      resolve({
        ok: true,
        // keep consistent with fetch API
        json: () => Promise.resolve(response)
      });
      reject({
        ok: false,
        // keep consistent with fetch API
        json: () => Promise.resolve(response)
      });
      if (timeoutId) clearTimeout(timeoutId);
    };

    url += url.indexOf('?') === -1 ? '?' : '&';

    const jsonpScript = document.createElement('script');
    jsonpScript.setAttribute(
      'src',
      `${url}${jsonpCallback}=${callbackFunction}`
    );
    jsonpScript.id = scriptId;
    document.getElementsByTagName('head')[0].appendChild(jsonpScript);
  });
};

export default GenericFetch;

// usage of the GenericFetch

// GenericFetch(API_URL)
//   .then(response => {
//     return response.json();
//   })
//   .then(json => {
//     this.setState({ liveMatches: json, isLoading: false });
//     localStorage.setItem('data', JSON.stringify(json));
//     // $FlowFixMe
//     localStorage.setItem('fetchedTime', currentTime);
//   })
//   .catch(error => {
//     this.setState({ error, isLoading: false });
//   });
