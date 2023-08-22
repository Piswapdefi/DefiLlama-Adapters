const { getUniTVL } = require("../helper/unknownTokens.js");

const factory = "";

module.exports = {
  misrepresentedTokens: true,
  methodology: 'TVL counts the liquidity of the DEX. The factory address() is used to find every LP pair that has been created.',
  shibarium: {
    tvl: getUniTVL({
      chain: 'shibarium',
      factory,
      useDefaultCoreAssets: true,
    }),
  },
};
