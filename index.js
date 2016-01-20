var re = /^[0-9a-fA-F]{24}$/;
module.exports = function(str) {
  if(str && 'string' !== typeof str && str.toString)
    str = str.toString();

  return str && re.test(str);
};
