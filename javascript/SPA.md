## Single Page Application

###### SPA, 단일 페이지 애플리케이션

###### poiemaweb, 

<br>

- link tag를 사용하는 전통적인 웹 방식은 새로운 페이지 요청 시마다 정적 리소스가 다운로드되고 전체 페이지를 다시 렌더링하는 방식을 사용하므로 새로고침이 발생되어 사용성이 좋지 않다. 그리고 변경이 필요 없는 부분을 포함하여 전체 페이지를 갱신하므로 비효율적이다.
- SPA는 기본적으로 웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한 번 다운로드한다. 이후 새로운 페이지 요청 시, 페이지 갱신에 필요한 데이터만을 전달받아 페이지를 갱신하므로 전체적인 트래픽을 감소화할 수 있고, 전체 페이지를 다시 렌더링하지 않고 변경되는 부분만을 갱신하므로 새로고침이 발생하지 않아 네이티브 앱과 유사한 사용자 경험을 제공할 수 있다.
- SPA의 핵심 가치는 **사용자 경험(UX) 향상**에 있으며, 부가적으로 애플리케이션 속도의 향상도 기대할 수 있어서 모바일 퍼스트(Mobile First) 전략에 부합한다.
- SPA 또한 구조적인 단점을 가지고 있다.
- SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한 번 다운로드하기 때문에 초기 구동 속도가 상대적으로 느리다. 하지만 웹 페이지보다는 애플리케이션에 적합한 기술이므로 트래픽의 감소와 속도, 사용성, 반응성의 향상 등의 장점을 생각한다면 결정적인 단점이라고 할 수는 없다.
- SPA는 서버 렌더링 방식이 아닌 JS 기반 비동기 모델(클라이언트 렌더링 방식)이다.
- ​

