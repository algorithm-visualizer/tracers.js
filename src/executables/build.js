import * as languages from '/languages';
import Promise from 'bluebird';

const { LANG } = process.env;
if (LANG) {
  languages[LANG].build().catch(() => process.exit(1));
} else {
  Promise.each(Object.values(languages), language => language.build()).catch(() => process.exit(1));
}