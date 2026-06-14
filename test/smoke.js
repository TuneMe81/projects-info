const assert = require("assert");

const { parachainInfos } = require("../dist/main.js");

const expectedNetworks = [
  "kusama",
  "polkadot",
  "rococo",
  "westend",
  "coretime-kusama",
  "coretime-polkadot",
];

assert.ok(parachainInfos && typeof parachainInfos === "object", "Expected parachainInfos export");

for (const network of expectedNetworks) {
  assert.ok(
    Object.prototype.hasOwnProperty.call(parachainInfos, network),
    `Expected network export for ${network}`
  );
  assert.strictEqual(
    typeof parachainInfos[network],
    "object",
    `Expected ${network} export to be an object`
  );
}
