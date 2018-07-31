import * as languages from '/languages';

const { LANG, TEMP_PATH } = process.env;
languages[LANG].compile(TEMP_PATH);
