# express sever

## initial setting

```javascript
npm init
npm install express --save

npm install @babel/node
npm install @babel/cli
npm install @babel/preset-env
npm install @babel/core

```

##### .babelrc

babel plugin 들을 모아놓고 사용할 설정파일

최신문법을 브라우저가 해석 할 수 있게 바꿔주는 작업을 한다.

babel은 plugin이 있는데 각 plugin은 npm 라이브러리를 가지고 있다.  이 라이브러리가 문법을 변환시켜준다

es6 기능을 더 쓰고 싶다면 매번 필요한 plugin을 설치해야하는데 번거로우니 나온 솔루션이 preset이다

```javascript
{
	"presets" : ["@babel/preset-env"]
}

```

```javascript
// package.json
"scripts": {
    "start": "babel-node index.js",
  },
```



##### index.js

```javascript
import express from "express"
```



##### nodemon 

```javascript
npm install -g nodemon
```

```javascript
// package.json
//delay 2 는 서버가 실행되고 babel이 번역하고 난 후 다시 실행되는것을 방지하기 위해 사용  (서버가 재실행되는것 방지)
"scripts": {
    "start": "nodemon --exec babel-node index.js --dalay 2",
  },
```





## middleware

##### helmet 

```javascript
//보안 모듈
npm install helmet

```



##### morgan

```
npm install morgan
```



##### body-parser

```
npm install body-parser
```



##### passport

```
npm install passport
```



##### cookie-parser

```
npm install cookie-parser
```



##### express-session

```
npm install express-session
```

