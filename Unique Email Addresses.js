/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var hashSet = new Set();
  emails.forEach(email => {
    var [local, domain] = email.split("@");
    var subStr = local.split("+")[0].replace(/\./g, "");
    var str = subStr + "@" + domain;
    hashSet.add(str);
  });
  return hashSet.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
  ])
);
