# Dashincode Front-end 소개

- 다이어트 전문 온라인 쇼핑몰 '[다신샵(Dashinshop)](http://dshop.dietshin.com/)'을 클론 코딩한 프로젝트입니다.
- 아래 이미지를 클릭하면, Demo 영상을 시청할 수 있습니다.
  [![[Dashincode] Demo 영상](./public/images/README.png)](https://vimeo.com/634975398)

<br/>

### 기간

---

- 2021.10.01 ~ 2021.10.15 (15일)

<br/>

### Team

---

- [고원구](https://github.com/goplanit) : 장바구니 페이지 구현
- [김재원](https://github.com/jambottle) : 상품 디테일 페이지 구현
- [김지현](https://github.com/jihnk) : 상품 리스트 페이지 구현
- [신정호](https://github.com/shin-jungho) : 회원가입 & 로그인 페이지 구현
- [안다빈](https://github.com/dabin219) : 메인 페이지 구현

<br/>

### Skills

---

- `Front-end`: React, React-Router, JavaScript, Styled-Component
- `Back-end`: Node.js, Express, MySQL, Prisma, Bcrypt, JWT
- `공통`: Git, ESLint, Prettier

<br/>

### Back-end Repository

---

- https://github.com/wecode-bootcamp-korea/fullstack2-1st-dashincode-frontend

<br/>

## 구현 기능 상세

---

### 1. 공통 구현 사항

- Header
  - 로그인/회원가입 페이지로 이동하는 링크 구현
  - 상품 검색창 및 장바구니 아이콘 기능 구현
- NavBar
  - '전체 카테고리' 부분을 hover하면, 카테고리 네비게이션이 Dropdown되는 효과 구현
  - 카테고리 항목별로 click하면, 해당 카테고리의 상품 리스트 페이지로 이동하는 라우팅 기능 구현
- Footer

### 2. 메인 페이지

- 상품 소개 및 이벤트 안내 이미지가 시간에 따라 바뀌는 Slider 컴포넌트 구현
- 특가 상품의 할인 정보 및 이벤트 마감 시간까지의 Countdown을 나타내는 컴포넌트 구현
- 최근에 본 상품들을 표시/삭제하는 사이드바와 페이지 맨 위/아래로 이동시키는 버튼 구현
- DB로부터 불러온 상품 정보들을 map 함수의 반복을 활용하여 카드 리스트 형태로 나열 (Grid 레이아웃 적용)

### 3. 상품 리스트 페이지

- DB로부터 불러온 상품 정보들을 map 함수의 반복을 활용하여 카드 리스트 형태로 나열 (Grid 레이아웃 적용)
- 상품별 카드를 hover하면 'Like' 버튼이 등장하고, 버튼을 click하면 활성화되는 효과 구현
- 상품의 'Like' 버튼을 click하면, 그 결과가 Back-end API를 통해 DB에 저장되는 기능 구현

### 4. 상품 디테일 페이지

- 동적 라우팅을 바탕으로 상품별 디테일 페이지마다 각기 다른 상품 정보를 DB로부터 불러와 출력
- 상품의 수량을 변경하면, 상품 가격에 맞춰 자동으로 계산된 총 상품금액이 표시되는 기능 구현
- 로그인을 한 경우, '장바구니' 버튼 click의 결과가 fetch 함수로 접근한 Back-end API를 통해 DB에 저장
- 상품의 'Like' 버튼을 click하면, 그 결과가 Back-end API를 통해 DB에 저장되는 기능 구현
- 상품의 'Share' 버튼을 click하면, SNS별로 페이지를 공유할 수 있게 하는 Modal 컴포넌트 구현
- DB로부터 불러온 상품 후기들을 map 함수의 반복을 활용하여 리스트 형태로 나열

### 5. 장바구니 페이지

- 로그인을 한 경우, 상품 디테일 페이지에서 장바구니에 담은 상품들을 DB로부터 불러와 출력
- 각 상품별로 수량을 변경하면, 상품 가격에 맞춰 자동으로 계산된 총 상품금액이 표시되는 기능 구현
- 각 상품별로 'Delete' 버튼을 click하면, 장바구니에 담았던 내역이 해당 페이지와 DB에서 삭제되는 기능 구현
- 모든 상품들의 가격 및 배송비의 총합을 바탕으로 자동으로 계산된 총 결제금액이 표시되는 기능 구현

### 6. 회원가입 & 로그인 페이지

- 정규표현식을 활용하여 입력한 이메일/닉네임/비밀번호의 타당성 검사
- 회원가입 페이지에서 회원가입 성공 시, 로그인 페이지로 이동
- 로그인 페이지에서 로그인 성공 시, 메인 페이지로 이동

<br/>

### References

---

- 본 프로젝트는 팀원들의 학습을 목적으로 [다신샵(Dashinshop)](http://dshop.dietshin.com/)을 참고하여 만들었습니다. 이 코드를 활용하여 이득을 취하거나 무단으로 배포할 경우 법적으로 문제될 수 있습니다.
- 본 프로젝트에서 사용하고 있는 이미지들은 [Unsplash](https://unsplash.com/)의 Free 이미지이므로 해당 프로젝트 외부인이 무단으로 사용할 수 없습니다.
