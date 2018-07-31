import * as languages from '/languages';
import Promise from 'bluebird';

const { LANG } = process.env;
if (LANG) {
  languages[LANG].build();
} else {
  Promise.each(Object.values(languages), language => language.build());
}