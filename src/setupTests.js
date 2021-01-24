import { toMatchImageSnapshot } from 'jest-image-snapshot';
import 'mutationobserver-shim';
import 'jest-styled-components';
import '@testing-library/jest-dom';

expect.extend({ toMatchImageSnapshot });
