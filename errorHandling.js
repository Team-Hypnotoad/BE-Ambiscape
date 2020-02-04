const noRouteError = (req, res, next) => {
  res.status(404).send({ msg: 'Page Not Found' })
}

const send405Error = (req, res, next) => {
  res.status(404).send({ msg: 'Method Not Allowed' })
}

const errorHandler = (err, req, res, next) => {

  const errorRef = {
    '11P11': ['errorcode', 'errormessage']
  }

  if (err.code) {
    res.status(errorRef[err.code][0]).send({ msg: errorRef[err.code][1] });
  } else {
    let [errCode, errMsg] = err.err;
    res.status(errCode).send({ msg: errMsg })
  }
};

module.exports = { noRouteError, send405Error, errorHandler }