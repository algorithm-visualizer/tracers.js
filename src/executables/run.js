import * as languages from '/languages';

const { LANG, TEMP_PATH } = process.env;
languages[LANG].run(TEMP_PATH).catch(() => process.exit(1));
