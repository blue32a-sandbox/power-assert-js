const assert = require('assert');

describe('Powar Assert', () => {
  describe('assert', () => {
    it('数値の比較', () => {
      assert(1 === 0);
    });
    it('文字列の比較', () => {
      assert('hoge' === 'fuga');
    });
    it('配列の比較', () => {
      assert([1, 2] == [1]);
    });
    it('オブジェクトの比較', () => {
      assert({ a: 1, b: 2 } == { a: 1 });
    });
  });
});
