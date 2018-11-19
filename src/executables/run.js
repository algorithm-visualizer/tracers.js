import * as languages from '/languages';
import { exit } from '/common/util';

const { LANG, TEMP_PATH } = process.env;
languages[LANG].run(TEMP_PATH).catch(exit);
