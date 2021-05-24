const path = require('path');


exports.firstLevelFolderName = function(path) {
  return path.split('/')[0];
};

exports.secondLevelFolderName = function(path) {
  return path.split('/')[1];
};

exports.firstAndSecondLevelFolderName = function(path) {
  const splits = path.split('/');
  if (splits[1]) {
    return splits[0] + '/' + splits[1];
  }
  return undefined;
};
