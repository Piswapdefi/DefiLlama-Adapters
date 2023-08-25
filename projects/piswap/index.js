const { getUniTVL } = require("../helper/unknownTokens.js");

const factory = "0xf6408ddc67210E91A5cA5a82a8194b87465CE204";

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
