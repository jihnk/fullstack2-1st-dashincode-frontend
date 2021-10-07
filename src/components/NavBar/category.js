const category = [
  {
    id: 1,
    name: '다신메이드',
    list: [{ id: 1, name: '다신메이드' }],
  },
  {
    id: 2,
    name: '도시락&샐러드',
    list: [
      { id: 1, name: '도시락' },
      { id: 2, name: '샐러드' },
    ],
  },
  {
    id: 3,
    name: '닭가슴살',
    list: [{ id: 1, name: '닭가슴살' }],
  },
  {
    id: 4,
    name: '간편식',
    list: [
      { id: 1, name: '베이커리/떡' },
      { id: 2, name: '분식' },
      { id: 3, name: '곤약/면류' },
      { id: 4, name: '시리얼/선식' },
    ],
  },
  {
    id: 5,
    name: '건강간식',
    list: [
      { id: 1, name: '건강과자' },
      { id: 2, name: '고구마/단호박/계란' },
      { id: 3, name: '디저트' },
      { id: 4, name: '견과/바' },
      { id: 5, name: '소스/잼' },
      { id: 6, name: '두유/요거트,차' },
    ],
  },
  {
    id: 6,
    name: '단백질/헬스',
    list: [
      { id: 1, name: '단백질보충' },
      { id: 2, name: '장건강' },
      { id: 3, name: '건강식품' },
      { id: 4, name: '체중계/홈트' },
    ],
  },
  {
    id: 7,
    name: '체지방관리',
    list: [
      { id: 1, name: '체지방' },
      { id: 2, name: '클렌즈/스무디' },
    ],
  },
  {
    id: 8,
    name: '익선동18',
    list: [{ id: 1, name: '익선동18' }],
  },
];

const navbarList = [
  { name: '베스트', link: 'bestproducts' },
  { name: '특가', link: 'specialprice' },
  { name: '신상품', link: 'newproducts' },
  { name: '식단플랜', link: 'dietplan' },
  { name: '다신배송', link: 'dashindelivery' },
  { name: '다신쿨배송', link: 'dashincooldelivery' },
];

export { category, navbarList };
