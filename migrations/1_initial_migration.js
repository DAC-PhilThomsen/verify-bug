const Contract = artifacts.require("Reproducer");

module.exports = function (deployer) {
  deployer.deploy(Contract);
};
