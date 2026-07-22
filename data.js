/* ══════════════════════════════════════════════════════════════════════════
   늘품 지역사회 지도 — 데이터 파일
   ──────────────────────────────────────────────────────────────────────────
   이 파일이 지도의 "내용"입니다. index.html 은 건드릴 필요가 없습니다.

   고치는 방법: 지도에서 [편집모드] → 고치기 → [저장] →
               내려받은 data.js 로 이 파일을 덮어쓰기
   ══════════════════════════════════════════════════════════════════════════ */

var CENTER = {
  name: "늘품발달장애인평생교육센터",
  addr: "인천 남동구 소래로 610, 1층",
  lat: 37.4443760,
  lng: 126.7325437,
  zoom: 16
};

var PLACES = [
  {
    n: 1, cat: "food", name: "평강 오리타운", walk: 2,
    lat: 37.4440681, lng: 126.7316341,
    addr: "인천광역시 남동구 인주대로820번길 114",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["주차장 있음", "외부화장실 있음"],
    photos: [
      { src: "photos/평강 오리타운/1.jpg", caption: "" },
      { src: "photos/평강 오리타운/2.jpg", caption: "" },
      { src: "photos/평강 오리타운/3.jpg", caption: "" },
      { src: "photos/평강 오리타운/4.jpg", caption: "" }
    ]
  },
  {
    n: 2, cat: "food", name: "육봉달", walk: 4,
    lat: 37.4462111, lng: 126.7331154,
    addr: "인천광역시 남동구 소래로 634 1층(민속빌딩)",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/육봉달/1.jpg", caption: "" },
      { src: "photos/육봉달/2.jpg", caption: "" },
      { src: "photos/육봉달/3.jpg", caption: "" },
      { src: "photos/육봉달/4.jpg", caption: "" }
    ]
  },
  {
    n: 3, cat: "food", name: "동해원", walk: 5,
    lat: 37.4464963, lng: 126.7337134,
    addr: "인천 남동구 장승로 6 1층 101호",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["입구에 계단 턱 있음", "외부화장실 있음 (옆 포도나무교회, 반층 계단)"],
    photos: [
      { src: "photos/동해원/1.jpg", caption: "" },
      { src: "photos/동해원/2.jpg", caption: "" },
      { src: "photos/동해원/3.jpg", caption: "" },
      { src: "photos/동해원/4.jpg", caption: "" },
      { src: "photos/동해원/5.jpg", caption: "" },
      { src: "photos/동해원/6.jpg", caption: "" }
    ]
  },
  {
    n: 4, cat: "food", name: "염소탕\u0026양푼이통태탕", walk: 5,
    lat: 37.4461693, lng: 126.7342888,
    addr: "인천광역시 남동구 장승로 14,101호",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["경사로있음(휠체어 이용가능)", "안에서 음식 섭취가능", "내부화장실 있음"],
    photos: [
      { src: "photos/염소탕\u0026양푼이통태탕/1.jpg", caption: "" },
      { src: "photos/염소탕\u0026양푼이통태탕/2.jpg", caption: "" },
      { src: "photos/염소탕\u0026양푼이통태탕/3.jpg", caption: "" }
    ]
  },
  {
    n: 5, cat: "mart", name: "남동농협", walk: 5,
    lat: 37.445326, lng: 126.7352625,
    addr: "인천광역시 남동구 장승로 28",
    practice: "장바구니 들기 → 살 것 담기 → 계산대에 줄 서기 → 카드로 계산하기",
    facts: ["경사로있음(휠체어 사용가능)", "엘리베이터있음", "비상구있음", "내부화장실 있음"],
    photos: [
      { src: "photos/남동농협/1.jpg", caption: "" },
      { src: "photos/남동농협/2.jpg", caption: "" },
      { src: "photos/남동농협/3.jpg", caption: "" },
      { src: "photos/남동농협/4.jpg", caption: "" },
      { src: "photos/남동농협/5.jpg", caption: "" },
      { src: "photos/남동농협/6.jpg", caption: "" },
      { src: "photos/남동농협/7.jpg", caption: "" }
    ]
  },
  {
    n: 6, cat: "food", name: "용기포횟집", walk: 5,
    lat: 37.4467474, lng: 126.7334876,
    addr: "인천광역시 남동구 장승로 4",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/용기포횟집/1.jpg", caption: "" },
      { src: "photos/용기포횟집/2.jpg", caption: "" },
      { src: "photos/용기포횟집/3.jpg", caption: "" }
    ]
  },
  {
    n: 7, cat: "food", name: "준형이네순대국뼈해장국", walk: 5,
    lat: 37.4464963, lng: 126.7337134,
    addr: "인천광역시 남동구 장승로6",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["외부화장실 있음"],
    photos: [
      { src: "photos/준형이네순대국뼈해장국/1.jpg", caption: "" },
      { src: "photos/준형이네순대국뼈해장국/2.jpg", caption: "" },
      { src: "photos/준형이네순대국뼈해장국/3.jpg", caption: "" }
    ]
  },
  {
    n: 8, cat: "food", name: "대동장황궁쟁반짜장 만수점", walk: 6,
    lat: 37.4437445, lng: 126.7357564,
    addr: "인천 남동구 장승남로33번길 9 대동아파트상가",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["매장 내 식사 가능", "내부화장실 있으나 잠겨서 사용 불가"],
    photos: [
      { src: "photos/대동장황궁쟁반짜장 만수점/1.jpg", caption: "" },
      { src: "photos/대동장황궁쟁반짜장 만수점/2.jpg", caption: "" },
      { src: "photos/대동장황궁쟁반짜장 만수점/3.jpg", caption: "" },
      { src: "photos/대동장황궁쟁반짜장 만수점/4.jpg", caption: "" }
    ]
  },
  {
    n: 9, cat: "food", name: "뚝배기 짬뽕", walk: 6,
    lat: 37.4466589, lng: 126.7348797,
    addr: "인천광역시 남동구 인주대로888번길 36",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["안에서 음식 섭취가능", "경사로있음(휠체어 사용가능)", "외부화장실 있음"],
    photos: [
      { src: "photos/뚝배기 짬뽕/1.jpg", caption: "" },
      { src: "photos/뚝배기 짬뽕/2.jpg", caption: "" },
      { src: "photos/뚝배기 짬뽕/3.jpg", caption: "" },
      { src: "photos/뚝배기 짬뽕/4.jpg", caption: "" },
      { src: "photos/뚝배기 짬뽕/5.jpg", caption: "" },
      { src: "photos/뚝배기 짬뽕/6.jpg", caption: "" }
    ]
  },
  {
    n: 10, cat: "food", name: "대박식당", walk: 6,
    lat: 37.446577, lng: 126.7351116,
    addr: "인천광역시 남동구 인주대로888번길 35",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["계단있음(1단)", "안에서 음식섭취 가능", "외부화장실 있음 (건물 밖)"],
    photos: [
      { src: "photos/대박식당/1.jpg", caption: "" },
      { src: "photos/대박식당/2.jpg", caption: "" },
      { src: "photos/대박식당/3.jpg", caption: "" },
      { src: "photos/대박식당/4.jpg", caption: "" },
      { src: "photos/대박식당/5.jpg", caption: "" }
    ]
  },
  {
    n: 11, cat: "unmanned", name: "RAFE24시", walk: 6,
    lat: 37.4436828, lng: 126.7361832,
    addr: "인천광역시 남동구 장승남로 35",
    practice: "라면 먹기: 자판기에서 라면 고르기 → 결정 버튼 누르기 → 카드로 결제하기 → \u0027라면 나오는 곳\u0027에서 꺼내기 → 조리기에 넣고 익을 때까지 기다리기\n\n냉장고 음식: 키오스크에서 먼저 결제하기 → 냉장고 문이 열림 → 결제한 것만 꺼내기",
    facts: ["경사로있음(휠체어사용가능)", "안에서 음료,음식섭취가능", "다양한먹거리 많음", "키오스크있음", "화장실 없음"],
    photos: [
      { src: "photos/RAFE24시/1.jpg", caption: "" },
      { src: "photos/RAFE24시/2.jpg", caption: "" },
      { src: "photos/RAFE24시/3.jpg", caption: "" },
      { src: "photos/RAFE24시/4.jpg", caption: "" }
    ]
  },
  {
    n: 12, cat: "food", name: "아저씨 만수점", walk: 6,
    lat: 37.4466293, lng: 126.7342355,
    addr: "인천 남동구 장승로 9 106호",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/아저씨 만수점/1.jpg", caption: "" },
      { src: "photos/아저씨 만수점/2.jpg", caption: "" },
      { src: "photos/아저씨 만수점/3.jpg", caption: "" },
      { src: "photos/아저씨 만수점/4.jpg", caption: "" },
      { src: "photos/아저씨 만수점/5.jpg", caption: "" }
    ]
  },
  {
    n: 13, cat: "food", name: "만수불향쭈꾸미", walk: 6,
    lat: 37.4467858, lng: 126.7339275,
    addr: "인천광역시 남동구 장승로 5 101호",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/만수불향쭈꾸미/1.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/2.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/3.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/4.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/5.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/6.jpg", caption: "" },
      { src: "photos/만수불향쭈꾸미/7.jpg", caption: "" }
    ]
  },
  {
    n: 14, cat: "cafe", name: "컴포즈커피 인천남동구청점", walk: 6,
    lat: 37.446238, lng: 126.7348613,
    addr: "인천광역시 남동구 장승로 17",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: ["키오스크 있음", "안에서 음료섭취가능", "외부화장실 있음 (건물 밖)"],
    photos: [
      { src: "photos/컴포즈 커피/1.jpg", caption: "" },
      { src: "photos/컴포즈 커피/2.jpg", caption: "" },
      { src: "photos/컴포즈 커피/3.jpg", caption: "" },
      { src: "photos/컴포즈 커피/4.jpg", caption: "" },
      { src: "photos/컴포즈 커피/5.jpg", caption: "" },
      { src: "photos/컴포즈 커피/6.jpg", caption: "" }
    ]
  },
  {
    n: 15, cat: "food", name: "회 포장하는 집", walk: 6,
    lat: 37.446577, lng: 126.7351116,
    addr: "인천 남동구 인주대로888번길 35",
    practice: "포장할 회 고르기 → 직원에게 말하기 → 카드로 결제하기 → 포장 받아 가기",
    facts: ["매장 내 식사 가능"],
    photos: [
      { src: "photos/회 포장하는 집/1.jpg", caption: "" },
      { src: "photos/회 포장하는 집/2.jpg", caption: "" }
    ]
  },
  {
    n: 16, cat: "food", name: "병천순대", walk: 6,
    lat: 37.4467064, lng: 126.734916,
    addr: "인천광역시 남동구 만수동 1076-12",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["안에서 음식 섭취가능", "옆에 무료주차장있음", "경사로있음(휠체어사용가능)", "내부화장실 있음"],
    photos: [
      { src: "photos/병천순대/1.jpg", caption: "" },
      { src: "photos/병천순대/2.jpg", caption: "" },
      { src: "photos/병천순대/3.jpg", caption: "" }
    ]
  },
  {
    n: 17, cat: "cafe", name: "빽다방(인천남동초교점)", walk: 7,
    lat: 37.4436431, lng: 126.7368027,
    addr: "인천광역시 남동구 장승남로 41",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: ["안에서 음료 섭취가능", "키오스크있음", "내부화장실 있음"],
    photos: [
      { src: "photos/빽다방(인천남동초교점)/1.jpg", caption: "" },
      { src: "photos/빽다방(인천남동초교점)/2.jpg", caption: "" },
      { src: "photos/빽다방(인천남동초교점)/3.jpg", caption: "" },
      { src: "photos/빽다방(인천남동초교점)/4.jpg", caption: "" }
    ]
  },
  {
    n: 18, cat: "public", name: "남동구청", walk: 7,
    lat: 37.4473884, lng: 126.7306774,
    addr: "인천광역시 남동구 소래로 633",
    practice: "번호표 뽑기 → 의자에 앉아 기다리기 → 번호가 나오면 창구로 가기 → 필요한 일 말하기",
    facts: ["경사로 설치되어있음(휠체어 이용가능)", "엘리베이터있음", "장애인주차장이용가능", "내부·외부 화장실 모두 있음"],
    photos: [
      { src: "photos/남동구청/1.jpg", caption: "" },
      { src: "photos/남동구청/2.jpg", caption: "" },
      { src: "photos/남동구청/3.jpg", caption: "" },
      { src: "photos/남동구청/4.jpg", caption: "" },
      { src: "photos/남동구청/5.jpg", caption: "" },
      { src: "photos/남동구청/6.jpg", caption: "" }
    ]
  },
  {
    n: 19, cat: "cafe", name: "cafe21 본점", walk: 7,
    lat: 37.4475507, lng: 126.7325681,
    addr: "인천광역시 남동구 인주대로850번길 31-3 1층",
    practice: "메뉴판 보고 음료 고르기 → 카운터에서 직원에게 말로 주문하기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 받기",
    facts: ["계단있음(1단)", "안에서 음료섭치가능", "외부화장실 있음 (옆 건물)"],
    photos: [
      { src: "photos/cafe21 본점/1.jpg", caption: "" },
      { src: "photos/cafe21 본점/2.jpg", caption: "" },
      { src: "photos/cafe21 본점/3.jpg", caption: "" },
      { src: "photos/cafe21 본점/4.jpg", caption: "" },
      { src: "photos/cafe21 본점/5.jpg", caption: "" },
      { src: "photos/cafe21 본점/6.jpg", caption: "" }
    ]
  },
  {
    n: 20, cat: "public", name: "신한은행 남동구청", walk: 7,
    lat: 37.4473884, lng: 126.7306774,
    addr: "인천 남동구 소래로 633",
    practice: "번호표 뽑기 → 기다리기 → 번호가 나오면 창구에서 은행 일 보기",
    facts: ["남동구청 안에위치"],
    photos: [
      { src: "photos/신한은행 남동구청/1.jpg", caption: "" },
      { src: "photos/신한은행 남동구청/2.jpg", caption: "" }
    ]
  },
  {
    n: 21, cat: "cafe", name: "우지커피 남동구청점", walk: 7,
    lat: 37.4476738, lng: 126.7321892,
    addr: "인천 남동구 인주대로850번길 21 1층",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: ["입구에 계단 있음", "외부화장실 있음"],
    photos: [
      { src: "photos/우지커피 남동구청점/1.jpg", caption: "" },
      { src: "photos/우지커피 남동구청점/2.jpg", caption: "" },
      { src: "photos/우지커피 남동구청점/3.jpg", caption: "" },
      { src: "photos/우지커피 남동구청점/4.jpg", caption: "" }
    ]
  },
  {
    n: 22, cat: "cafe", name: "카페휴고", walk: 8,
    lat: 37.4454926, lng: 126.7372507,
    addr: "인천 남동구 담방서로3번길 3 장원빌딩 1층 카페휴고",
    practice: "메뉴판 보고 음료 고르기 → 카운터에서 직원에게 말로 주문하기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 받기",
    facts: ["매장 내 음용 가능", "내부화장실 있음"],
    photos: [
      { src: "photos/카페휴고/1.jpg", caption: "" },
      { src: "photos/카페휴고/2.jpg", caption: "" },
      { src: "photos/카페휴고/3.jpg", caption: "" },
      { src: "photos/카페휴고/4.jpg", caption: "" },
      { src: "photos/카페휴고/5.jpg", caption: "" },
      { src: "photos/카페휴고/6.jpg", caption: "" },
      { src: "photos/카페휴고/7.jpg", caption: "" },
      { src: "photos/카페휴고/8.jpg", caption: "" }
    ]
  },
  {
    n: 23, cat: "sports", name: "TJ탁구클럽", walk: 8,
    lat: 37.4413191, lng: 126.7355694,
    addr: "인천광역시 남동구 담방로21번길 55",
    practice: "카운터에서 이용 시간 말하기 → 요금 내기 → 탁구대 배정받기 → 이용하기",
    facts: ["계단있음", "30분단식6000원 복식:8000원", "1시간 단식8000원 복식15000원", "내부화장실 있음"],
    photos: [
      { src: "photos/TJ탁구클럽/1.jpg", caption: "" },
      { src: "photos/TJ탁구클럽/2.jpg", caption: "" },
      { src: "photos/TJ탁구클럽/3.jpg", caption: "" },
      { src: "photos/TJ탁구클럽/4.jpg", caption: "" },
      { src: "photos/TJ탁구클럽/5.jpg", caption: "" }
    ]
  },
  {
    n: 24, cat: "cafe", name: "배스킨라빈스 인천만수", walk: 8,
    lat: 37.4431657, lng: 126.7370005,
    addr: "인천 남동구 장승남로 44 명진프라자",
    practice: "키오스크에서 먹고 싶은 맛과 컵·콘 고르기 → 카드로 결제하기 → 카운터에서 받기",
    facts: ["매장 내 취식 가능", "외부화장실 있음 (명진프라자, 입구 좌측 코너)"],
    photos: [
      { src: "photos/배스킨라빈스 인천만수/1.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/2.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/3.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/4.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/5.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/6.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/7.jpg", caption: "" },
      { src: "photos/배스킨라빈스 인천만수/8.jpg", caption: "" }
    ]
  },
  {
    n: 25, cat: "public", name: "인천만수6동우체국", walk: 8,
    lat: 37.4436173, lng: 126.7371722,
    addr: "인천광역시 남동구 장승남로 43",
    practice: "번호표 뽑기 → 기다리기 → 창구에서 택배나 우편 보내기",
    facts: ["계단있음"],
    photos: [
      { src: "photos/인천만수6동우체국/1.jpg", caption: "" },
      { src: "photos/인천만수6동우체국/2.jpg", caption: "" }
    ]
  },
  {
    n: 26, cat: "sports", name: "뉴월드볼링센터", walk: 8,
    lat: 37.4413191, lng: 126.7355694,
    addr: "인천광역시 남동구 담방로21번길 55",
    practice: "카운터에서 몇 게임 할지 말하기 → 신발 빌리기 → 요금 내기 → 레인에서 볼링 치기",
    facts: ["계단있음", "안에서 음식 섭취가능", "3겜 8000원", "4겜 10000원", "5겜12000원", "주말,공휴일 3겜 10000원", "내부화장실 있음"],
    photos: [
      { src: "photos/뉴월드볼링센터/1.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/2.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/3.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/4.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/5.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/6.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/7.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/8.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/9.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/10.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/11.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/12.jpg", caption: "" },
      { src: "photos/뉴월드볼링센터/13.jpg", caption: "" }
    ]
  },
  {
    n: 27, cat: "food", name: "황식당", walk: 8,
    lat: 37.4469224, lng: 126.7357351,
    addr: "인천광역시 남동구 인주대로888번길 27 창대장터상가",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["매장 내 식사 가능", "내부화장실 없음"],
    photos: [
      { src: "photos/황식당/1.jpg", caption: "" },
      { src: "photos/황식당/2.jpg", caption: "" }
    ]
  },
  {
    n: 28, cat: "unmanned", name: "간식 창고", walk: 8,
    lat: 37.4413191, lng: 126.7355694,
    addr: "인천광역시 남동구 담방로21번길 55",
    practice: "(확인 필요) 먹고 싶은 과자나 아이스크림 고르기 → 무인 계산대에서 바코드 찍기 → 카드로 결제하기",
    facts: ["계단있음", "24시간운영", "키오스크있음"],
    photos: [
      { src: "photos/간식 창고/1.jpg", caption: "" },
      { src: "photos/간식 창고/2.jpg", caption: "" }
    ]
  },
  {
    n: 29, cat: "food", name: "내고향만두", walk: 8,
    lat: 37.4469224, lng: 126.7357351,
    addr: "인천 남동구 인주대로888번길 27 창대장터상가",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["매장 내 식사 가능", "외부화장실 있음 (옆 노브랜드 매장 안)"],
    photos: [
      { src: "photos/내고향만두/1.jpg", caption: "" },
      { src: "photos/내고향만두/2.jpg", caption: "" },
      { src: "photos/내고향만두/3.jpg", caption: "" },
      { src: "photos/내고향만두/4.jpg", caption: "" },
      { src: "photos/내고향만두/5.jpg", caption: "" },
      { src: "photos/내고향만두/6.jpg", caption: "" },
      { src: "photos/내고향만두/7.jpg", caption: "" }
    ]
  },
  {
    n: 30, cat: "public", name: "만월지구대", walk: 8,
    lat: 37.4438032, lng: 126.7372994,
    addr: "인천광역시 남동구 장승남로47번길 7 만수6동 지구대",
    practice: "도움이 필요하면 안으로 들어가기 → 경찰관에게 상황을 말하기",
    facts: ["특이사항 경사로 있음, 주차장 있음"],
    photos: [
      { src: "photos/만월지구대/1.jpg", caption: "" },
      { src: "photos/만월지구대/2.jpg", caption: "" },
      { src: "photos/만월지구대/3.jpg", caption: "" },
      { src: "photos/만월지구대/4.jpg", caption: "" }
    ]
  },
  {
    n: 31, cat: "cafe", name: "cafe siso", walk: 9,
    lat: 37.4440099, lng: 126.7375818,
    addr: "인천광역시 남동구 장승남로47번길 12 2층 카페시소",
    practice: "메뉴판 보고 음료 고르기 → 카운터에서 직원에게 말로 주문하기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 받기",
    facts: ["계단있음", "안에서 섭취가능", "외부화장실 있음"],
    photos: [
      { src: "photos/cafe siso/1.jpg", caption: "" },
      { src: "photos/cafe siso/2.jpg", caption: "" },
      { src: "photos/cafe siso/3.jpg", caption: "" },
      { src: "photos/cafe siso/4.jpg", caption: "" },
      { src: "photos/cafe siso/5.jpg", caption: "" },
      { src: "photos/cafe siso/6.jpg", caption: "" },
      { src: "photos/cafe siso/7.jpg", caption: "" },
      { src: "photos/cafe siso/8.jpg", caption: "" }
    ]
  },
  {
    n: 32, cat: "cafe", name: "카페마린", walk: 9,
    lat: 37.4450638, lng: 126.737574,
    addr: "인천광역시 남동구 장승남로47번길 32-1 1층",
    practice: "메뉴판 보고 음료 고르기 → 카운터에서 직원에게 말로 주문하기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 받기",
    facts: ["실내에서 음료 섭취 가능", "외부화장실 있음"],
    photos: [
      { src: "photos/카페마린/1.jpg", caption: "" },
      { src: "photos/카페마린/2.jpg", caption: "" },
      { src: "photos/카페마린/3.jpg", caption: "" },
      { src: "photos/카페마린/4.jpg", caption: "" },
      { src: "photos/카페마린/5.jpg", caption: "" },
      { src: "photos/카페마린/6.jpg", caption: "" },
      { src: "photos/카페마린/7.jpg", caption: "" }
    ]
  },
  {
    n: 33, cat: "food", name: "큰집냉면\u0026돈까스 인천만수점", walk: 9,
    lat: 37.4440099, lng: 126.7375818,
    addr: "인천 남동구 장승남로47번길 12",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["매장 내 식사 가능", "내부화장실 없음 (추가 예정)"],
    photos: [
      { src: "photos/큰집냉면\u0026돈까스 인천만수점/1.jpg", caption: "" },
      { src: "photos/큰집냉면\u0026돈까스 인천만수점/2.jpg", caption: "" },
      { src: "photos/큰집냉면\u0026돈까스 인천만수점/3.jpg", caption: "" }
    ]
  },
  {
    n: 34, cat: "food", name: "손군부대찌개", walk: 9,
    lat: 37.4452191, lng: 126.7379469,
    addr: "인천광역시 남동구 장승로 48 1층",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["외부화장실 있음 (좌측 빌딩)"],
    photos: [
      { src: "photos/손군부대찌개/1.jpg", caption: "" },
      { src: "photos/손군부대찌개/2.jpg", caption: "" },
      { src: "photos/손군부대찌개/3.jpg", caption: "" },
      { src: "photos/손군부대찌개/4.jpg", caption: "" },
      { src: "photos/손군부대찌개/5.jpg", caption: "" },
      { src: "photos/손군부대찌개/6.jpg", caption: "" }
    ]
  },
  {
    n: 35, cat: "public", name: "만수6동행정복지센터", walk: 9,
    lat: 37.4437673, lng: 126.7376512,
    addr: "인천광역시 남동구 장승남로 47 만수6동 행정복지센터",
    practice: "번호표 뽑기 → 기다리기 → 창구에서 필요한 서류 신청하기",
    facts: ["장애인 주차주역 있음, 경사로 있음"],
    photos: [
      { src: "photos/만수6동행정복지센터/1.jpg", caption: "" },
      { src: "photos/만수6동행정복지센터/2.jpg", caption: "" },
      { src: "photos/만수6동행정복지센터/3.jpg", caption: "" }
    ]
  },
  {
    n: 36, cat: "cafe", name: "이디야커피 인천남동구청역점", walk: 10,
    lat: 37.4479413, lng: 126.7359238,
    addr: "인천 남동구 인주대로 888",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: ["매장 내 취식 가능", "내부화장실 있음"],
    photos: [
      { src: "photos/이디야커피 인천남동구청역점/1.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/2.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/3.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/4.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/5.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/6.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/7.jpg", caption: "" },
      { src: "photos/이디야커피 인천남동구청역점/8.jpg", caption: "" }
    ]
  },
  {
    n: 37, cat: "mart", name: "진로할인마트", walk: 10,
    lat: 37.4436999, lng: 126.7384945,
    addr: "인천광역시 남동구 담방로 45 지하",
    practice: "장바구니 들기 → 살 것 담기 → 계산대에 줄 서기 → 카드로 계산하기",
    facts: ["경사로 설치되어 있음(휠체어사용가능)", "비상구 있음", "엘리베이터 이용가능"],
    photos: [
      { src: "photos/진로할인마트/1.jpg", caption: "" },
      { src: "photos/진로할인마트/2.jpg", caption: "" },
      { src: "photos/진로할인마트/3.jpg", caption: "" },
      { src: "photos/진로할인마트/4.jpg", caption: "" },
      { src: "photos/진로할인마트/5.jpg", caption: "" },
      { src: "photos/진로할인마트/6.jpg", caption: "" },
      { src: "photos/진로할인마트/7.jpg", caption: "" },
      { src: "photos/진로할인마트/8.jpg", caption: "" }
    ]
  },
  {
    n: 38, cat: "food", name: "명가칼국수", walk: 10,
    lat: 37.4454582, lng: 126.738014,
    addr: "인천광역시 남동구 장승로 49 동명빌딩",
    practice: "자리에 앉기 → 메뉴판 보고 고르기 → 직원에게 말로 주문하기 → 다 먹고 카운터에서 계산하기",
    facts: ["외부화장실 있음"],
    photos: [
      { src: "photos/명가칼국수/1.jpg", caption: "" },
      { src: "photos/명가칼국수/2.jpg", caption: "" },
      { src: "photos/명가칼국수/3.jpg", caption: "" },
      { src: "photos/명가칼국수/4.jpg", caption: "" },
      { src: "photos/명가칼국수/5.jpg", caption: "" },
      { src: "photos/명가칼국수/6.jpg", caption: "" },
      { src: "photos/명가칼국수/7.jpg", caption: "" },
      { src: "photos/명가칼국수/8.jpg", caption: "" }
    ]
  },
  {
    n: 39, cat: "cafe", name: "테라커피 만수점", walk: 11,
    lat: 37.4431559, lng: 126.7385248,
    addr: "",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: [],
    photos: [
      { src: "photos/테라커피 만수점/1.jpg", caption: "" },
      { src: "photos/테라커피 만수점/2.jpg", caption: "" },
      { src: "photos/테라커피 만수점/3.jpg", caption: "" }
    ]
  },
  {
    n: 40, cat: "cafe", name: "파리바게뜨 만수로데오점", walk: 11,
    lat: 37.4432683, lng: 126.7390133,
    addr: "인천광역시 남동구 장승남로 62 1층 103호, 104호",
    practice: "쟁반과 집게 들기 → 먹고 싶은 빵 담기 → 카운터에서 직원에게 계산하기",
    facts: ["외부화장실 있으나 잠겨 있음 (엘리베이터 옆)"],
    photos: [
      { src: "photos/파리바게뜨 만수로데오점/1.jpg", caption: "" },
      { src: "photos/파리바게뜨 만수로데오점/2.jpg", caption: "" },
      { src: "photos/파리바게뜨 만수로데오점/3.jpg", caption: "" },
      { src: "photos/파리바게뜨 만수로데오점/4.jpg", caption: "" },
      { src: "photos/파리바게뜨 만수로데오점/5.jpg", caption: "" }
    ]
  },
  {
    n: 41, cat: "cafe", name: "메가커피 만수점", walk: 11,
    lat: 37.4430876, lng: 126.7389838,
    addr: "",
    practice: "키오스크에서 음료 고르기 → HOT 또는 ICE 고르기 → 카드로 결제하기 → 진동벨 받고 기다리기 → 벨이 울리면 카운터에서 받기",
    facts: [],
    photos: [
      { src: "photos/메가커피 만수점/1.jpg", caption: "" },
      { src: "photos/메가커피 만수점/2.jpg", caption: "" },
      { src: "photos/메가커피 만수점/3.jpg", caption: "" }
    ]
  },
  {
    n: 42, cat: "food", name: "피자스쿨 인천만수3지구점", walk: 11,
    lat: 37.443156, lng: 126.7385249,
    addr: "인천 남동구 담방로 39 로얄프라자",
    practice: "메뉴 고르기 → 카운터에서 주문하고 결제하기 → 피자 나오면 받기",
    facts: ["매장 내 식사 가능", "내부화장실 없음", "외부화장실 있음 (옆 로얄프라자 건물 안)"],
    photos: [
      { src: "photos/피자스쿨 인천만수3지구점/1.jpg", caption: "" },
      { src: "photos/피자스쿨 인천만수3지구점/2.jpg", caption: "" },
      { src: "photos/피자스쿨 인천만수3지구점/3.jpg", caption: "" },
      { src: "photos/피자스쿨 인천만수3지구점/4.jpg", caption: "" }
    ]
  },
  {
    n: 43, cat: "unmanned", name: "PICKME 아이스크림 할인매장", walk: 12,
    lat: 37.4500578, lng: 126.7327766,
    addr: "인천 남동구 소래로669번길 30 (확인 필요)",
    practice: "(확인 필요) 아이스크림이나 과자 고르기 → 무인 계산대에서 바코드 찍기 → 카드로 결제하기",
    facts: [],
    photos: [
      { src: "photos/PICKME 아이스크림 할인매장/1.jpg", caption: "" },
      { src: "photos/PICKME 아이스크림 할인매장/2.jpg", caption: "" }
    ]
  },
  {
    n: 44, cat: "unmanned", name: "마이미카페24시", walk: 12,
    lat: 37.4418283, lng: 126.7390128,
    addr: "인천광역시 남동구 담방로 22-1",
    practice: "커피 기계 화면에서 음료 고르기 → 카드로 결제하기 → 아래 칸에서 컵 꺼내기 → 자리에 앉아 마시기",
    facts: ["계단있음", "안에서 음료섭취가능", "24시간운영", "키오스크있음", "화장실 없음"],
    photos: [
      { src: "photos/마이미카페24시/1.jpg", caption: "" },
      { src: "photos/마이미카페24시/2.jpg", caption: "" },
      { src: "photos/마이미카페24시/3.jpg", caption: "" },
      { src: "photos/마이미카페24시/4.jpg", caption: "" }
    ]
  },
  {
    n: 45, cat: "food", name: "엽기떡볶이 만수3지구점", walk: 13,
    lat: 37.4438301, lng: 126.7402446,
    addr: "인천광역시 남동구 담방로48번길 24 1층 엽기떡볶이 만수3지구점",
    practice: "메뉴 고르기 → 카운터에서 주문하고 결제하기 → 번호표 받고 기다리기 → 음식 받아 자리로 가기",
    facts: ["계단있음(1단)", "안에서 식사가능", "키오스크있음", "외부화장실 있음 (우측 노래방 건물, 비밀번호 2431)"],
    photos: [
      { src: "photos/엽기떡볶이 만수3지구점/1.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/2.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/3.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/4.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/5.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/6.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/7.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/8.jpg", caption: "" },
      { src: "photos/엽기떡볶이 만수3지구점/9.jpg", caption: "" }
    ]
  },
  {
    n: 46, cat: "sports", name: "남동종합문화체육광장", walk: 13,
    lat: 37.4388763, lng: 126.7356147,
    addr: "인천 남동구 매소홀로 1008",
    practice: "이용할 시설 확인하기 → 정해진 자리에서 운동하기 → 화장실과 쉼터 이용하기",
    facts: ["농구장, 화장실, 놀이터, 운동 기구, 산책길이 있음"],
    photos: [
      { src: "photos/남동종합문화체육광장/1.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/2.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/3.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/4.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/5.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/6.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/7.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/8.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/9.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/10.jpg", caption: "" },
      { src: "photos/남동종합문화체육광장/11.jpg", caption: "" }
    ]
  },
  {
    n: 47, cat: "sports", name: "3지구 당구클럽", walk: 13,
    lat: 37.4437602, lng: 126.7399098,
    addr: "인천광역시 남동구 담방로48번길 16",
    practice: "카운터에서 이용 시간 말하기 → 요금 확인하기 → 당구대 배정받기 → 이용 후 카운터에서 계산하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/3지구 당구클럽/1.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/2.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/3.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/4.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/5.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/6.jpg", caption: "" },
      { src: "photos/3지구 당구클럽/7.jpg", caption: "" }
    ]
  },
  {
    n: 48, cat: "public", name: "인천만수1동우체국", walk: 13,
    lat: 37.448376, lng: 126.7383555,
    addr: "인천 남동구 인주대로 907",
    practice: "번호표 뽑기 → 기다리기 → 창구에서 택배나 우편 보내기",
    facts: ["경사로 보유 이동시 용이함", "경사로있음(휠체어사용가능)"],
    photos: [
      { src: "photos/인천만수1동우체국/1.jpg", caption: "" },
      { src: "photos/인천만수1동우체국/2.jpg", caption: "" }
    ]
  },
  {
    n: 49, cat: "unmanned", name: "까까야 만수점", walk: 13,
    lat: 37.441399, lng: 126.73913,
    addr: "인천광역시 남동구 담방로 20 상가동 103호 까까야 만수점",
    practice: "장바구니 들기 → 먹고 싶은 과자나 아이스크림 고르기 → 무인 계산대에서 바코드 찍기 → 카드로 결제하기 → 영수증 확인하고 나오기",
    facts: ["계단있음", "24시간운영", "키오스크있음"],
    photos: [
      { src: "photos/까까야 만수점/1.jpg", caption: "" },
      { src: "photos/까까야 만수점/2.jpg", caption: "" },
      { src: "photos/까까야 만수점/3.jpg", caption: "" }
    ]
  },
  {
    n: 50, cat: "unmanned", name: "아슈크림 담방점", walk: 15,
    lat: 37.4393551, lng: 126.7385129,
    addr: "인천 남동구 매소홀로 1040 상가등 1층 101호",
    practice: "(확인 필요) 장바구니 들기 → 살 것 고르기 → 무인 계산대에서 바코드 찍기 → 카드로 결제하기",
    facts: ["매장 내 취식 가능", "내부화장실 없음 (추가 예정)"],
    photos: [
      { src: "photos/아슈크림 담방점/1.jpg", caption: "" },
      { src: "photos/아슈크림 담방점/2.jpg", caption: "" },
      { src: "photos/아슈크림 담방점/3.jpg", caption: "" },
      { src: "photos/아슈크림 담방점/4.jpg", caption: "" }
    ]
  },
  {
    n: 51, cat: "sports", name: "남동둘레길", walk: 16,
    lat: 37.4376291, lng: 126.7367072,
    addr: "인천 남동구 만수동 831-3",
    practice: "관광안내도에서 갈 곳 확인하기 → 표지판 보고 방향 찾기 → 정해진 길 따라 걷기 → 갈림길에서 안내도 다시 보기",
    facts: ["포장된 평지 길이라 걷기 편함", "곳곳에 방향 안내 표지판 있음", "관광안내도 설치되어 있음", "외부화장실 있음 (표지판 따라 이동)", "소래습지생태공원 방향으로 이어짐"],
    photos: [
      { src: "photos/남동둘레길/1.jpg", caption: "" },
      { src: "photos/남동둘레길/2.jpg", caption: "" },
      { src: "photos/남동둘레길/3.jpg", caption: "" },
      { src: "photos/남동둘레길/4.jpg", caption: "" }
    ]
  },
  {
    n: 52, cat: "public", name: "남동소방서담방119안전센터", walk: 16,
    lat: 37.4393349, lng: 126.7390222,
    addr: "인천 남동구 매소홀로 1044",
    practice: "위급할 때 도움을 받는 곳임을 알기 → 안전 교육이나 도움을 요청하기",
    facts: ["119 구급대 감염관리실에는 경사로가 있음", "화장실 추가 예정"],
    photos: [
      { src: "photos/남동소방서담방119안전센터/1.jpg", caption: "" },
      { src: "photos/남동소방서담방119안전센터/2.jpg", caption: "" },
      { src: "photos/남동소방서담방119안전센터/3.jpg", caption: "" }
    ]
  },
  {
    n: 53, cat: "unmanned", name: "별난마켓 만수점", walk: 18,
    lat: 37.4509539, lng: 126.7264355,
    addr: "",
    practice: "(확인 필요) 장바구니 들기 → 살 것 고르기 → 무인 계산대에서 바코드 찍기 → 카드로 결제하기",
    facts: [],
    photos: [
      { src: "photos/별난마켓 만수점/1.jpg", caption: "" },
      { src: "photos/별난마켓 만수점/2.jpg", caption: "" }
    ]
  },
  {
    n: 54, cat: "sports", name: "육아종합지원센터", walk: 21,
    lat: 37.4346624, lng: 126.7337895,
    addr: "인천광역시 남동구  소래로 500",
    practice: "(확인 필요) 안내데스크에서 이용 방법 물어보기 → 안내에 따라 이용하기",
    facts: ["내부화장실 있음"],
    photos: [
      { src: "photos/육아종합지원센터/1.jpg", caption: "" },
      { src: "photos/육아종합지원센터/2.jpg", caption: "" },
      { src: "photos/육아종합지원센터/3.jpg", caption: "" },
      { src: "photos/육아종합지원센터/4.jpg", caption: "" }
    ]
  }
];
