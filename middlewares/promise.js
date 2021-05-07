const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err = {}) => res.status(err.status || 500).send({error: err.message});

module.exports = function promiseMiddleware(){
  return (req,res,next) => {
    res.promise = (p) => {
      let promiseToResolve;
      if (p.then && p.catch) {
        promiseToResolve = p;
      } else if (typeof p === 'function') {
        promiseToResolve = Promise.resolve().then(() => p());
      } else {
        promiseToResolve = Promise.resolve(p);
      }

      return promiseToResolve
        .then((data) => handleResponse(res, data))
        .catch((e) => handleError(res, e));  
    };

    return next();
  };
}