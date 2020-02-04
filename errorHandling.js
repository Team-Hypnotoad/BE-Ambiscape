const noRouteError = (req, res, next) => {
  res.status(404).send({ msg: 'Page Not Found' })
}

const send405Error = (req, res, next) => {
  res.status(404).send({ msg: 'Method Not Allowed' })
}

const errorHandler = () => { };

module.exports = { noRouteError, send405Error, errorHandler }