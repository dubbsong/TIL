## Github + Jekyll

#### 1. Jekyll 설치

- `$ cd~`


- `$ sudo gem install jekyll`

<br>

#### 2. 디렉토리 생성

- `$ cd Desktop`
- `$ mkdir BLOG`
- `$ cd BLOG`

<br>

#### 3. 로컬에서 블로그 생성

- `$ jekyll new dubbsong.github.io`
- `$ cd dubbsong.github.io`
- `$ jekyll serve —watch`
  - 브라우저에서 `http://localhost:4000`로 확인 가능

<br>

#### 4. Github에 온라인 저장소 만들기

- 동일한 이름(dubbsong.github.io)으로 Github 온라인 저장소에 저장소 생성
- `$ git init`
- `$ git remote add origin [저장소 URL]`
- `$ git add .`
- `$ git commit -m 'Initialize Blog'`
- `$ git push origin master`
  - 생성된 블로그는 `http://dubbsong.github.io`로 확인 가능 
  - 처음 생성하는 경우 몇 분의 시간이 걸림