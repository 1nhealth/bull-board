import * as bullBoard from '@1nhealth/api';

describe('lib public interface', () => {
  it('should save the interface', () => {
    expect(bullBoard).toMatchInlineSnapshot(`
      Object {
        "createBullBoard": [Function],
      }
    `);
  });
});
