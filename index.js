var re = /^[0-9a-fA-F]+$/;
module.exports = function(str) {
  if('string' !== typeof str && str.toString)
    str = str.toString();

  return str && str.length === 24 && re.test(str);
};