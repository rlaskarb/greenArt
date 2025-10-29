import {conHello , fnplus} from './library.js';

console.log(conHello , '이름으로 내보내기입니다');
console.log('1+2=' , fnplus(1,2));

import * as myLibrary from './library.js'; //한꺼번에 모든 공개 API 불러오기

console.log(myLibrary.conHello , '이름으로 내보내기입니다');
console.log('10+20=' , myLibrary.fnplus(10,20));