# React-Native 기초 개념 공부하기 + 테스트 코드 작성 습관화 들이기

## 어떤 앱?
- 간단한 목표 관리 앱

##  학습 내용
- **SafeAreaView** -> 아이폰에서 Status Bar와 View가 겹치는것을 피할 수 있다. ( 안드로이드에서는 **StatusBar.currentHeight**를 통해 padding-top을 주어 가능 )

- 일반 React와 달리 RN에서는 change event시 **changeText** 이벤트를 사용해야하고 click 이벤트는 **onPress**를 사용한다.

- 아이폰에서는 **Text 컴포넌트에 border-radius가 적용이 안된다.** 때문에 border-radius를 적용하기 위해선 View로 감싸고 그곳에 적용해야한다.

- 기본적인 View는 스크롤 기능이 없기때문에 뷰를 범람하는 상황이 오게되어도 스크롤이 안생긴다. **스크롤 생성을 위해선 ScrollView를 사용**한다.

- **ScrollView는 데이터 컨테이너에 있는 모든 데이터를 한번에 렌더링** 시키기 때문에 데이터 양이 많으면 성능 저하가 발생한다. 그럴땐 FlatList를 사용한다. **FlatList는 레이지 로드 기능이 있어 보여져야할 타이밍에 렌더링이 된다.**

- FlatList에서는 data 속성을 통해 주입할 data를 넣고, renderItem속성을 통해 render할 컴포넌트를 주입할 수 있다. 또한 keyExtractor를 통해 기본으로 제공되는 유니크 key를 다른 이름을 가진 key로 변경이 가능하다.

- StatusBar 에서 color 속성이 있는데 이것을 통해 해당 bar의 color를 변경할 수 있다.

- 기본적으로 Modal Api가 제공되며 visible 속성을 통해 show hidden 처리가 가능하며 , animation 효과도 제공하여 fade 및 slide와 같은 기본 애니메이션 효과를 줄 수 있다.

- Button과 달리 View같은 컴포넌트는 onPress 이벤트를 줄 수 없기 때문에 **Pressable** ( 최신 api / TouchableOpacity와 같은 api와 비슷한 개념 )를 사용해 view를 감싸고 그곳에다가 이벤트를 줘야한다
