import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

const storybookUrl = 'http://localhost:6006';

const getMatchOptions = (args) => {
  const { context: { parameters: { __id }, fileName } } = args;
  const customPath = path.join(__dirname, path.dirname(fileName), '__imageshots__');
  // eslint-disable-next-line no-console
  // console.log({ path: path.dirname(fileName), cus: customPath });
  return {
    customSnapshotIdentifier: __id,
    customSnapshotsDir: customPath,
    failureThreshold: 0.2,
    failureThresholdType: 'percent',
  };
};

initStoryshots({
  suite: 'Imageshots',
  integrityOptions: { cwd: __dirname },
  test: imageSnapshot({
    storybookUrl,
    getMatchOptions,
  }),
});
