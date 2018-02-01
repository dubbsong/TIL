## Promise

`MDN`

<br>

- Promise 객체는 비동기 계산을 위해 사용된다.
- Promise는, 아직은 아니지만 나중에 완료될 것으로 기대되는 연산을 표현한다.
- Promise는 프로미스가 생성될 때 꼭 알 필요는 없는 값을 위한 대리자이다. 이는 비동기 동작이 종료된 이후의 결과값이나 실패 이유를 처리하기 위한 처리기(handler)를 연결할 수 있도록 한다.
- Promise는 비동기 메소드가 동기 메소드처럼 값을 반환하도록 한다.
- Promise는 다음 중 하나의 상태를 가진다.
  - 대기중(pending): 초기 상태, 이해 또는 거부되지 않은.
  - 이행됨(fulfilled): 연산이 성공리에 완료되었음을 뜻함.
  - 거부됨(rejected): 연산이 실패했음을 뜻함.
- `Promise.prototype.then()` 및 `Promise.prototype.catch()` 메소드가 프로미스를 반환하기에, 둘은 연결(chain)될 수 있다. 이를 합성(composition)이라고 한다.
- JavaScript에서 프로미스는 이미 생긴 프로세스를 나타내고, 이는 콜백 함수로 연결(chain)될 수 있다.