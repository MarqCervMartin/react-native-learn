describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
/*
  beforeEach(async () => {
    await device.reloadReactNative();
  });
*/

  it('Should have hello text', async() => {
    await expect(element(by.id("title"))).toBeVisible();
  })

  const typedText = 'Test && Test';
  it('Should type Test && Test', async() => {
    const input = element(by.id("input"));
    await input.typeText(typedText);
  });

  it('Should press on the submit button', async() => {
    await (element(by.id("button"))).tap();
  })

  it('Should have a alert with typed text', async() => {
    await expect(element(by.text(typedText)).atIndex(0)).toBeVisible();
    await element(by.text('OK')).tap();
  })
});
