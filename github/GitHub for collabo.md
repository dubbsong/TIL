## GitHub for collabo

- 중앙 remote: 인터넷이나 네트워크 어딘가에 있는 장소.
- 로컬(local): 내 PC에 파일이 저장되는 개인 전용 저장소.

<br>

- Organization으로 저장소 생성.

<br>

- `$ git clone [중앙 remote url]`
  = `$ git remote add origin [중앙 remote url]`
  = 1) 디렉토리를 만들고,
     2) 디렉토리로 들어가서 git init 명령으로 Git 저장소를 만든다.
     3) 입력한 url을 origin(기본값)이라는 이름의 리모트로 추가하고, (git remote add)
     4) git fetch 명령으로 리모트 저장소에서 데이터를 가져온다.

<br>

- 설정한 remote 목록을 확인
  `$ git remote -v`

<br>

- 내 로컬에서 새로운 작업을 하는 경우,
  master에서 그 작업에 대한 브랜치를 생성 후 이동한다.
  `$ git checkout -b feature/login`
  = `$ git branch feature/login (새로운 branch 생성)` + `$ git checkout feature/login (해당 branch로 작업 위치 이동)`

<br>

- 내 작업이 끝난 경우(해당 기능을 모두 구현한 경우), 
  feature/login brach를 origin remote로 push한다.
  origin remote에도 똑같은 feature/login branch가 생긴다.
  `$ git push origin feature/login`

<br>

- 변경 내용을 팀원이 모두 확인한 후 master branch에 merge한다.

<br>

- 중앙 원격 저장소의 master branch에는 새로운 내용이 갱신되어 있는 상태이다.
  master로 이동한 후에 master에 새로운 내용(중앙에 갱신된 내용)을 받아와야 한다.
  `$ git checkout master`

<br>

- 팀원 모두 자신의 로컬 저장소의 master branch를
  중앙 원격 저장소의 master branch와 동기화하여 최신 상태를 유지한다.
  `$ git pull origin master`

<br>

- 이전 branch들을 track 할 수 있다.

<br>

- 다시 새로운 작업을 하는 경우 master에서 그 작업에 대한 branch를 생성하여 작업한다.

