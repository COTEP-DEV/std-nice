function optional_require(packageName) {
  try {
    return require(packageName);
  } catch (e) {
    return false;
  }
}

module.exports = optional_require;
