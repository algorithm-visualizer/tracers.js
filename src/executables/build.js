import * as languages from '/languages';
import Promise from 'bluebird';
import { exit } from '/common/util';

const [, , LANG] = process.argv;
if (LANG) {
  languages[LANG].build().catch(exit);
} else {
  Promise.each(Object.values(languages), language => language.build()).catch(exit);
}
