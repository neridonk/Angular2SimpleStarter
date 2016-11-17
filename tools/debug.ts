import * as gulp from 'gulp';
import { argv } from 'yargs';

require('../gulpfile');

const TASK = argv['task'];

if (!TASK) {
  throw new Error('You must specify a task name.');
}



gulp.start(TASK);
