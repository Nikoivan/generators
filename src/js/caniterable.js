const canIterate = function (arg) {
  if (typeof arg === 'object' && Object.getOwnPropertySymbols(arg)) {
    return typeof arg[Symbol.iterator] === 'function';
  }
  return false;
};

export default canIterate;
