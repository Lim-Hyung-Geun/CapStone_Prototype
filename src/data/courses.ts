export interface CourseStep {
  time: string;
  place: string;
  activity: string;
  duration: string;
}

export interface Course {
  id: number;
  region: string;
  title: string;
  category: 'activity' | 'sightseeing';
  theme: string;
  steps: CourseStep[];
}

export const regionCourses: Course[] = [
  // ────────────────── 서울특별시 ──────────────────
  {
    id: 1, region: "서울특별시", title: "서울 역사 문화 투어", category: "sightseeing", theme: "조선 왕조의 숨결",
    steps: [
      { time: "09:00", place: "경복궁", activity: "조선의 법궁 관람, 수문장 교대식 관람", duration: "2시간" },
      { time: "11:00", place: "북촌한옥마을", activity: "전통 한옥 골목 산책 및 포토타임", duration: "1.5시간" },
      { time: "12:30", place: "광장시장", activity: "빈대떡·마약김밥 등 전통 먹거리 점심", duration: "1시간" },
      { time: "14:00", place: "창덕궁 후원", activity: "비밀 정원 투어 (가이드 동반)", duration: "1.5시간" },
      { time: "16:00", place: "인사동", activity: "전통 공예품 쇼핑 및 찻집 방문", duration: "1.5시간" },
      { time: "18:00", place: "청계천", activity: "저녁 산책 및 야경 감상", duration: "1시간" },
    ]
  },
  {
    id: 2, region: "서울특별시", title: "서울 감성 도심 투어", category: "sightseeing", theme: "골목과 뷰포인트",
    steps: [
      { time: "10:00", place: "남산서울타워", activity: "케이블카 탑승 후 서울 전경 감상, 자물쇠 달기", duration: "2시간" },
      { time: "12:00", place: "이태원 경리단길", activity: "다양한 세계 음식 레스토랑에서 점심", duration: "1시간" },
      { time: "13:30", place: "용산 국립중앙박물관", activity: "한국 역사·문화 상설 전시 관람", duration: "2시간" },
      { time: "16:00", place: "한강공원 반포지구", activity: "자전거 대여·반포 달빛무지개분수 감상", duration: "2시간" },
      { time: "19:00", place: "명동", activity: "저녁 식사 후 길거리 음식과 쇼핑", duration: "2시간" },
    ]
  },
  {
    id: 3, region: "서울특별시", title: "서울 아웃도어 액티비티", category: "activity", theme: "도심 속 자연과 스포츠",
    steps: [
      { time: "07:30", place: "북한산 국립공원", activity: "등산 (북한산성 코스, 왕복 약 4시간)", duration: "4시간" },
      { time: "12:00", place: "북한산 입구 식당가", activity: "등산 후 파전·막걸리로 든든한 점심", duration: "1시간" },
      { time: "14:00", place: "한강공원 뚝섬", activity: "수상레저(카약·SUP 보드) 체험", duration: "2시간" },
      { time: "17:00", place: "올림픽공원", activity: "인라인 스케이트 또는 자전거 라이딩", duration: "1.5시간" },
      { time: "19:00", place: "한강 치킨·맥주", activity: "한강에서 야외 치맥으로 하루 마무리", duration: "1.5시간" },
    ]
  },
  {
    id: 4, region: "서울특별시", title: "서울 도심 스포츠 데이", category: "activity", theme: "루프탑·클라이밍·볼링",
    steps: [
      { time: "09:00", place: "클라이밍 센터 (홍대/강남)", activity: "실내 볼더링 클라이밍 체험", duration: "2시간" },
      { time: "11:30", place: "홍대 카페거리", activity: "브런치 카페에서 휴식", duration: "1시간" },
      { time: "13:00", place: "한강 서울숲", activity: "러닝 또는 킥보드 라이딩", duration: "2시간" },
      { time: "16:00", place: "코엑스 아쿠아리움", activity: "도심 아쿠아리움 관람 및 별마당도서관 방문", duration: "2시간" },
      { time: "19:00", place: "잠실 롯데월드", activity: "야간 어트랙션 탑승", duration: "3시간" },
    ]
  },

  // ────────────────── 부산광역시 ──────────────────
  {
    id: 10, region: "부산광역시", title: "부산 해안 절경 투어", category: "sightseeing", theme: "바다와 항구의 도시",
    steps: [
      { time: "09:00", place: "해운대 해수욕장", activity: "해변 산책 및 아침 커피", duration: "1시간" },
      { time: "10:00", place: "동백섬·누리마루 APEC하우스", activity: "바다 전망 산책로 및 역사 건물 관람", duration: "1시간" },
      { time: "11:30", place: "감천문화마을", activity: "미로 골목 산책, 벽화·조형물 포토존", duration: "2시간" },
      { time: "14:00", place: "자갈치시장", activity: "회·해물탕으로 점심, 수산시장 구경", duration: "1.5시간" },
      { time: "16:00", place: "태종대", activity: "유람선 탑승 또는 절벽 전망대 관람", duration: "2시간" },
      { time: "19:00", place: "광안리 해수욕장", activity: "광안대교 야경 감상 및 저녁 식사", duration: "2시간" },
    ]
  },
  {
    id: 11, region: "부산광역시", title: "부산 핫플 감성 투어", category: "sightseeing", theme: "예술과 문화의 골목",
    steps: [
      { time: "10:00", place: "F1963 (복천문화공원)", activity: "옛 철강 공장 개조 복합문화공간 관람", duration: "1.5시간" },
      { time: "12:00", place: "수영 맛집 골목", activity: "부산 밀면으로 점심 식사", duration: "1시간" },
      { time: "13:30", place: "UN기념공원", activity: "전쟁 역사 추모 및 아름다운 정원 산책", duration: "1시간" },
      { time: "15:00", place: "해운대 블루라인파크", activity: "하늘 스카이캡슐·해변 열차 탑승", duration: "2시간" },
      { time: "18:00", place: "부산 남포동 BIFF광장", activity: "씨앗호떡·어묵으로 야식 후 쇼핑", duration: "2시간" },
    ]
  },
  {
    id: 12, region: "부산광역시", title: "부산 바다 액티비티 데이", category: "activity", theme: "파도 위의 스릴",
    steps: [
      { time: "09:00", place: "송정 해수욕장", activity: "서핑 강습 및 자유 서핑 (2~3시간)", duration: "3시간" },
      { time: "12:30", place: "기장 대변항", activity: "싱싱한 멸치회와 해산물로 점심", duration: "1시간" },
      { time: "14:00", place: "이기대 해안 산책로", activity: "오륙도 뷰 트레킹 코스 (왕복 2시간)", duration: "2시간" },
      { time: "17:00", place: "해운대 요트 투어", activity: "선셋 요트 크루즈 탑승", duration: "2시간" },
      { time: "20:00", place: "해운대 바", activity: "해변 바에서 칵테일로 마무리", duration: "1.5시간" },
    ]
  },
  {
    id: 13, region: "부산광역시", title: "부산 산악·트레킹 코스", category: "activity", theme: "금정산성 종주",
    steps: [
      { time: "08:00", place: "금정산성 북문", activity: "금정산성 트레킹 시작 (고당봉 왕복)", duration: "4시간" },
      { time: "12:30", place: "금정산 산성마을", activity: "산성 막걸리·도토리묵으로 점심", duration: "1시간" },
      { time: "14:00", place: "범어사", activity: "신라 시대 고찰 관람 및 산사 산책", duration: "1.5시간" },
      { time: "16:00", place: "온천천 카페거리", activity: "하산 후 카페에서 휴식", duration: "1시간" },
      { time: "18:00", place: "부산진 돼지국밥 골목", activity: "24시간 돼지국밥으로 든든한 저녁", duration: "1시간" },
    ]
  },

  // ────────────────── 제주특별자치도 ──────────────────
  {
    id: 20, region: "제주특별자치도", title: "제주 동쪽 절경 투어", category: "sightseeing", theme: "화산과 바다의 신비",
    steps: [
      { time: "07:00", place: "성산일출봉", activity: "일출 감상 후 분화구 트레킹", duration: "2시간" },
      { time: "09:30", place: "섭지코지", activity: "해안 절경 산책 및 포토타임", duration: "1시간" },
      { time: "11:00", place: "성읍 민속마을", activity: "제주 전통 가옥·문화 체험", duration: "1시간" },
      { time: "13:00", place: "표선 해비치 해변", activity: "제주 흑돼지로 점심 후 모래사장 산책", duration: "1.5시간" },
      { time: "15:00", place: "비자림", activity: "500년 비자나무 숲 산책 (힐링 코스)", duration: "1.5시간" },
      { time: "17:00", place: "우도", activity: "배 타고 우도 방문, 땅콩 아이스크림 후 에메랄드 바다 감상", duration: "2.5시간" },
    ]
  },
  {
    id: 21, region: "제주특별자치도", title: "제주 서쪽 감성 드라이브", category: "sightseeing", theme: "노을과 돌문화",
    steps: [
      { time: "10:00", place: "제주 돌문화공원", activity: "제주 화산석·돌하르방 테마공원 관람", duration: "1.5시간" },
      { time: "12:00", place: "애월 카페거리", activity: "바다 뷰 카페에서 점심 겸 브런치", duration: "1.5시간" },
      { time: "14:00", place: "한림 협재 해수욕장", activity: "에메랄드 바다에서 수영 및 스노클링", duration: "2시간" },
      { time: "17:00", place: "한경 수월봉", activity: "지질 명소에서 서해 석양 감상", duration: "1.5시간" },
      { time: "19:00", place: "모슬포 해산물 거리", activity: "자리돔·갈치조림으로 저녁 식사", duration: "1.5시간" },
    ]
  },
  {
    id: 22, region: "제주특별자치도", title: "한라산 완등 어드벤처", category: "activity", theme: "백록담 정상 도전",
    steps: [
      { time: "05:00", place: "성판악 탐방로 입구", activity: "한라산 성판악 코스 등산 시작", duration: "5시간" },
      { time: "10:00", place: "한라산 정상 백록담", activity: "백록담 감상 및 인증 사진 촬영", duration: "1시간" },
      { time: "11:00", place: "하산 (관음사 코스)", activity: "관음사 코스로 하산", duration: "3시간" },
      { time: "15:00", place: "관음사 주변 식당", activity: "몸국·고기국수로 든든한 식사", duration: "1시간" },
      { time: "17:00", place: "제주 온천", activity: "등산 후 온천욕으로 피로 회복", duration: "1.5시간" },
    ]
  },
  {
    id: 23, region: "제주특별자치도", title: "제주 해양 액티비티 풀코스", category: "activity", theme: "바다를 온몸으로",
    steps: [
      { time: "09:00", place: "중문 색달 해수욕장", activity: "서핑 강습 및 자유 서핑", duration: "2.5시간" },
      { time: "12:00", place: "중문 해산물 식당", activity: "해녀가 직접 잡은 소라·전복회로 점심", duration: "1시간" },
      { time: "14:00", place: "서귀포 해중전망대", activity: "수중 전망대에서 제주 바다 물고기 관찰", duration: "1시간" },
      { time: "15:30", place: "올레길 7코스", activity: "외돌개~월평 구간 해안 트레킹", duration: "2시간" },
      { time: "18:00", place: "서귀포 이중섭 거리", activity: "야시장에서 저녁, 예술가 거리 산책", duration: "2시간" },
    ]
  },

  // ────────────────── 경기도 ──────────────────
  {
    id: 30, region: "경기도", title: "경기 역사 유산 투어", category: "sightseeing", theme: "왕도의 흔적을 따라",
    steps: [
      { time: "09:00", place: "수원 화성", activity: "성곽 둘레길 걷기, 화성 열차 탑승 및 화성행궁 관람", duration: "3시간" },
      { time: "12:30", place: "수원 통닭 골목", activity: "수원 왕갈비·통닭으로 점심", duration: "1시간" },
      { time: "14:00", place: "용인 한국민속촌", activity: "조선 시대 생활상 체험 및 전통 공연 관람", duration: "3시간" },
      { time: "18:00", place: "광교 호수공원", activity: "저녁 노을 감상하며 호수 산책", duration: "1.5시간" },
    ]
  },
  {
    id: 31, region: "경기도", title: "경기 레저 액티비티 데이", category: "activity", theme: "테마파크와 레포츠",
    steps: [
      { time: "09:00", place: "에버랜드", activity: "오전 어트랙션 탑승 (T-익스프레스·우주관)", duration: "4시간" },
      { time: "13:00", place: "에버랜드 내 식당", activity: "점심 후 동물원·튤립 정원 구경", duration: "1.5시간" },
      { time: "15:00", place: "캐리비안 베이", activity: "워터파크 입장 및 파도풀·슬라이드 즐기기", duration: "3시간" },
      { time: "19:00", place: "에버랜드 야간 퍼레이드", activity: "야간 퍼레이드 및 불꽃 공연 관람", duration: "2시간" },
    ]
  },
  {
    id: 32, region: "경기도", title: "경기 북부 안보·자연 투어", category: "sightseeing", theme: "DMZ와 파주 감성",
    steps: [
      { time: "09:00", place: "파주 임진각", activity: "평화공원·망배단 방문, 안보 전시관 관람", duration: "2시간" },
      { time: "11:30", place: "파주 헤이리 예술마을", activity: "갤러리·카페 투어, 점심 식사", duration: "2시간" },
      { time: "14:00", place: "파주 출판도시", activity: "국내 최대 출판단지 산책, 서점 탐방", duration: "1.5시간" },
      { time: "16:00", place: "남한산성", activity: "성벽 트레킹 및 저녁 노을 감상", duration: "2시간" },
    ]
  },
  {
    id: 33, region: "경기도", title: "경기 MTB·트레킹 코스", category: "activity", theme: "산과 강 사이 라이딩",
    steps: [
      { time: "08:00", place: "가평 자라섬", activity: "자전거 대여 후 자라섬 일주 라이딩", duration: "1.5시간" },
      { time: "10:00", place: "가평 쁘띠프랑스", activity: "유럽 감성 포토존 산책", duration: "1시간" },
      { time: "11:30", place: "가평 닭갈비 식당", activity: "가평 잣 막걸리·닭갈비로 점심", duration: "1시간" },
      { time: "13:00", place: "청평 강 래프팅", activity: "북한강 래프팅 체험", duration: "2시간" },
      { time: "16:00", place: "양평 두물머리", activity: "남한강·북한강 합류 지점 일몰 감상", duration: "1.5시간" },
    ]
  },

  // ────────────────── 강원도 ──────────────────
  {
    id: 40, region: "강원도", title: "강릉·동해 절경 투어", category: "sightseeing", theme: "관동팔경과 커피향",
    steps: [
      { time: "09:00", place: "강릉 경포대", activity: "관동팔경 경포대 관람 및 경포호 산책", duration: "1시간" },
      { time: "10:30", place: "강릉 안목 커피거리", activity: "바다 뷰 카페에서 커피 한 잔", duration: "1시간" },
      { time: "12:00", place: "강릉 초당 두부마을", activity: "초당 두부찌개·순두부로 점심", duration: "1시간" },
      { time: "14:00", place: "정동진", activity: "모래시계 공원·썬크루즈 리조트 전망 감상", duration: "1.5시간" },
      { time: "16:00", place: "동해 촛대바위", activity: "추암 촛대바위 해안 산책로 투어", duration: "1시간" },
      { time: "18:00", place: "묵호항 논골담길", activity: "벽화마을 저녁 산책 및 오징어 요리 저녁", duration: "1.5시간" },
    ]
  },
  {
    id: 41, region: "강원도", title: "설악산·속초 산과 바다", category: "sightseeing", theme: "국립공원과 항구 마을",
    steps: [
      { time: "08:00", place: "설악산 울산바위", activity: "울산바위 트레킹 (왕복 3시간)", duration: "3시간" },
      { time: "11:30", place: "속초 중앙시장", activity: "닭강정·오징어순대·만석닭강정으로 점심", duration: "1시간" },
      { time: "13:00", place: "속초 영금정", activity: "파도 소리 들으며 해안 암반 산책", duration: "1시간" },
      { time: "14:30", place: "속초 해수욕장", activity: "청초호 뷰 카페에서 휴식", duration: "1시간" },
      { time: "16:00", place: "고성 화진포", activity: "화진포 석호·이승만 별장 역사 관람", duration: "2시간" },
    ]
  },
  {
    id: 42, region: "강원도", title: "강원 스키·스노보드 풀데이", category: "activity", theme: "겨울 설원의 스릴",
    steps: [
      { time: "08:00", place: "평창 알펜시아 리조트", activity: "스키·스노보드 강습 (초급 2시간)", duration: "2시간" },
      { time: "10:30", place: "슬로프 자유 이용", activity: "중·상급 슬로프 자유 라이딩", duration: "3시간" },
      { time: "13:30", place: "리조트 내 식당", activity: "뜨끈한 국밥으로 점심 후 휴식", duration: "1시간" },
      { time: "15:00", place: "오후 자유 라이딩", activity: "나이트 슬로프 준비 전 오후 라이딩", duration: "2시간" },
      { time: "18:00", place: "평창 황태덕장 식당", activity: "황태해장국으로 저녁 후 귀가", duration: "1시간" },
    ]
  },
  {
    id: 43, region: "강원도", title: "강원 래프팅·번지점프", category: "activity", theme: "한탄강의 스릴",
    steps: [
      { time: "09:00", place: "인제 내린천", activity: "내린천 래프팅 체험 (3~4급 급류)", duration: "3시간" },
      { time: "13:00", place: "인제 황태·산채 정식", activity: "산골 정식으로 든든한 점심", duration: "1시간" },
      { time: "15:00", place: "양구 번지점프", activity: "번지점프 체험 (63m)", duration: "1시간" },
      { time: "17:00", place: "춘천 의암호 카약", activity: "의암호 카약 투어 (일몰 코스)", duration: "2시간" },
      { time: "20:00", place: "춘천 닭갈비 골목", activity: "춘천 숯불 닭갈비로 저녁 마무리", duration: "1.5시간" },
    ]
  },

  // ────────────────── 대구광역시 ──────────────────
  {
    id: 50, region: "대구광역시", title: "대구 근대 골목 투어", category: "sightseeing", theme: "100년의 시간 여행",
    steps: [
      { time: "09:00", place: "근대 골목 투어 출발점(계산성당)", activity: "대구 근대 역사 골목 가이드 투어", duration: "2시간" },
      { time: "11:00", place: "김광석 다리길", activity: "노래비·벽화 감상 및 포토타임", duration: "1시간" },
      { time: "12:30", place: "서문시장 야시장(주간)", activity: "납작만두·뭉티기 등 대구 향토 음식으로 점심", duration: "1.5시간" },
      { time: "14:30", place: "동성로", activity: "대구 최대 번화가 쇼핑 및 카페 탐방", duration: "2시간" },
      { time: "17:00", place: "팔공산 갓바위", activity: "저녁 노을 속 갓바위 참배 및 전망 감상", duration: "2시간" },
    ]
  },
  {
    id: 51, region: "대구광역시", title: "팔공산 트레킹 & 사찰 투어", category: "activity", theme: "산사와 자연을 걷다",
    steps: [
      { time: "08:00", place: "팔공산 케이블카", activity: "케이블카 탑승 후 동봉 트레킹", duration: "3시간" },
      { time: "11:30", place: "파계사", activity: "신라 시대 고찰 산사 참배 및 경내 산책", duration: "1시간" },
      { time: "13:00", place: "팔공산 자연공원 식당", activity: "산채 비빔밥으로 점심", duration: "1시간" },
      { time: "14:30", place: "대구 수목원", activity: "수목원 산책 및 온실 관람", duration: "1.5시간" },
      { time: "17:00", place: "대구 치맥 거리", activity: "대구 치맥 골목에서 저녁", duration: "2시간" },
    ]
  },

  // ────────────────── 인천광역시 ──────────────────
  {
    id: 60, region: "인천광역시", title: "인천 개항장 역사 투어", category: "sightseeing", theme: "근대 문물의 관문",
    steps: [
      { time: "09:30", place: "인천 차이나타운", activity: "100년 역사 차이나타운 탐방·짜장면 체험", duration: "2시간" },
      { time: "11:30", place: "인천 개항장 문화지구", activity: "개항기 근대 건축물 투어 (구 일본 영사관 등)", duration: "1.5시간" },
      { time: "13:30", place: "인천 신포 국제시장", activity: "닭강정·닭강정으로 유명한 시장 점심", duration: "1시간" },
      { time: "15:00", place: "자유공원", activity: "맥아더 동상, 인천항 전경 감상", duration: "1시간" },
      { time: "17:00", place: "월미도", activity: "놀이공원 어트랙션 및 해안 산책, 일몰 감상", duration: "2시간" },
    ]
  },
  {
    id: 61, region: "인천광역시", title: "인천 섬 트레킹 & 해양 투어", category: "activity", theme: "강화도와 서해 자연",
    steps: [
      { time: "08:30", place: "강화도 마니산", activity: "참성단 트레킹 코스 (왕복 2.5시간)", duration: "2.5시간" },
      { time: "11:30", place: "강화 전통시장", activity: "순무김치·밴댕이 무침·젓갈로 점심", duration: "1시간" },
      { time: "13:00", place: "강화 고인돌 유적지", activity: "세계문화유산 고인돌 공원 탐방", duration: "1시간" },
      { time: "15:00", place: "을왕리 해수욕장", activity: "서해 낙조 감상 전 해변 산책", duration: "1.5시간" },
      { time: "17:00", place: "인천 소래포구", activity: "꽃게·새우젓 구매 및 해산물 저녁", duration: "2시간" },
    ]
  },

  // ────────────────── 광주광역시 ──────────────────
  {
    id: 70, region: "광주광역시", title: "광주 역사·문화 투어", category: "sightseeing", theme: "민주주의의 도시",
    steps: [
      { time: "09:00", place: "5·18 민주화운동 기념공원", activity: "민주화 운동 역사 추모 및 기념관 관람", duration: "2시간" },
      { time: "11:00", place: "국립아시아문화전당", activity: "아시아 각국 문화 전시 관람", duration: "2시간" },
      { time: "13:30", place: "양림동 역사문화마을", activity: "근대 선교사 가옥·호랑이 할머니 벽화 투어", duration: "1.5시간" },
      { time: "15:30", place: "광주 충장로", activity: "예술 갤러리·독립 서점 탐방", duration: "1시간" },
      { time: "18:00", place: "광주 송정 떡갈비 골목", activity: "광주 명물 송정 떡갈비로 저녁", duration: "1.5시간" },
    ]
  },
  {
    id: 71, region: "광주광역시", title: "무등산 트레킹 & 자연 힐링", category: "activity", theme: "광주의 진산을 오르다",
    steps: [
      { time: "08:00", place: "무등산 증심사 입구", activity: "증심사 코스 트레킹 (정상 서석대까지)", duration: "4시간" },
      { time: "12:30", place: "무등산 입구 식당", activity: "산채 비빔밥으로 점심 후 휴식", duration: "1시간" },
      { time: "14:00", place: "광주 국립공원 치유숲", activity: "산림욕 및 치유 프로그램 체험", duration: "1.5시간" },
      { time: "16:00", place: "광주 호수생태원", activity: "도심 생태 공원 자전거 라이딩", duration: "1.5시간" },
    ]
  },

  // ────────────────── 대전광역시 ──────────────────
  {
    id: 80, region: "대전광역시", title: "대전 과학·문화 투어", category: "sightseeing", theme: "과학 도시의 매력",
    steps: [
      { time: "09:30", place: "엑스포 과학공원", activity: "과학 체험 전시 및 한빛탑 전망 감상", duration: "2시간" },
      { time: "12:00", place: "성심당 본점", activity: "대전 명물 튀김소보로·부추빵 구매 및 점심", duration: "1시간" },
      { time: "13:30", place: "대전 시립미술관", activity: "현대 미술 전시 관람", duration: "1.5시간" },
      { time: "15:30", place: "유성 온천 족욕카페", activity: "온천 족욕으로 힐링", duration: "1시간" },
      { time: "17:30", place: "대전 으능정이 거리", activity: "대전 젊음의 거리 야경 및 저녁 쇼핑", duration: "2시간" },
    ]
  },
  {
    id: 81, region: "대전광역시", title: "계룡산 등산 & 사찰 탐방", category: "activity", theme: "충남의 영산 순례",
    steps: [
      { time: "08:00", place: "계룡산 갑사 입구", activity: "갑사 계곡 트레킹 후 삼불봉 등정", duration: "4시간" },
      { time: "12:30", place: "갑사 입구 산채식당", activity: "된장찌개 산채 정식으로 점심", duration: "1시간" },
      { time: "14:00", place: "동학사", activity: "봄 벚꽃 (또는 단풍) 계곡 산책", duration: "1.5시간" },
      { time: "16:00", place: "유성 온천 스파", activity: "등산 후 온천 입욕으로 피로 회복", duration: "2시간" },
    ]
  },

  // ────────────────── 울산광역시 ──────────────────
  {
    id: 90, region: "울산광역시", title: "울산 산업·자연 투어", category: "sightseeing", theme: "고래와 암각화의 도시",
    steps: [
      { time: "09:00", place: "반구대 암각화", activity: "7000년 전 선사 유적 암각화 탐방", duration: "1.5시간" },
      { time: "11:00", place: "대왕암공원", activity: "해안 기암절벽 산책로 및 출렁다리 체험", duration: "2시간" },
      { time: "13:30", place: "장생포 고래 문화특구", activity: "고래박물관 관람 및 고래 워치킹 투어", duration: "2시간" },
      { time: "16:00", place: "태화강 국가정원", activity: "십리대숲 산책 및 자전거 라이딩", duration: "1.5시간" },
      { time: "18:00", place: "울산 언양불고기 거리", activity: "100년 전통 언양식 불고기로 저녁", duration: "1.5시간" },
    ]
  },
  {
    id: 91, region: "울산광역시", title: "간절곶 일출 & 해안 트레킹", category: "activity", theme: "동해 최초 일출",
    steps: [
      { time: "06:00", place: "간절곶", activity: "한반도 최초 일출 감상", duration: "1.5시간" },
      { time: "08:00", place: "간절곶 카페", activity: "아침 식사 및 커피로 일출 여운", duration: "1시간" },
      { time: "09:30", place: "진하 해수욕장", activity: "해안 트레킹 및 명선도 일주 산책", duration: "2시간" },
      { time: "12:00", place: "온양 해물탕 식당", activity: "동해 해물탕·게장으로 점심", duration: "1시간" },
      { time: "14:00", place: "영남 알프스 트레킹", activity: "신불산 공룡 능선 트레킹", duration: "4시간" },
    ]
  },

  // ────────────────── 충청북도 ──────────────────
  {
    id: 100, region: "충청북도", title: "단양 절경 투어", category: "sightseeing", theme: "단양팔경과 남한강",
    steps: [
      { time: "09:00", place: "도담삼봉", activity: "남한강 위의 세 봉우리 감상, 유람선 탑승", duration: "1.5시간" },
      { time: "11:00", place: "단양 석문", activity: "단양팔경 석문 트레킹", duration: "1시간" },
      { time: "12:30", place: "단양 구경시장", activity: "단양 마늘 떡볶이·올갱이국 점심", duration: "1시간" },
      { time: "14:00", place: "고수동굴", activity: "천연 석회암 동굴 탐험 (약 1시간)", duration: "1시간" },
      { time: "16:00", place: "충주호 유람선", activity: "충주호 유람선 탑승 및 단풍(또는 설경) 감상", duration: "2시간" },
    ]
  },
  {
    id: 101, region: "충청북도", title: "속리산 등산 & 법주사 탐방", category: "activity", theme: "팔경의 으뜸 산",
    steps: [
      { time: "08:00", place: "속리산 법주사 입구", activity: "법주사 관람 후 문장대 등산 코스 시작", duration: "4시간" },
      { time: "12:30", place: "속리산 음식점", activity: "산채 정식·도토리묵으로 점심", duration: "1시간" },
      { time: "14:00", place: "청주 청남대", activity: "대통령 별장 청남대 투어", duration: "2시간" },
      { time: "17:00", place: "청주 시내 올갱이해장국", activity: "충북 대표 향토 해장국으로 저녁", duration: "1시간" },
    ]
  },

  // ────────────────── 충청남도 ──────────────────
  {
    id: 110, region: "충청남도", title: "백제 역사 문화 투어", category: "sightseeing", theme: "찬란한 백제를 찾아서",
    steps: [
      { time: "09:00", place: "공주 무령왕릉", activity: "세계문화유산 무령왕릉·공산성 관람", duration: "2.5시간" },
      { time: "12:00", place: "공주 국밥 골목", activity: "공주 국밥·생강 한과로 점심", duration: "1시간" },
      { time: "13:30", place: "부여 국립박물관", activity: "백제 금동대향로 등 국보급 유물 관람", duration: "1.5시간" },
      { time: "15:30", place: "부여 궁남지", activity: "국내 최초 인공 연못 산책, 포룡정 감상", duration: "1시간" },
      { time: "17:00", place: "부여 백제문화단지", activity: "백제 사비궁 재현 단지 야경 투어", duration: "2시간" },
    ]
  },
  {
    id: 111, region: "충청남도", title: "태안 해안 트레킹 & 갯벌 체험", category: "activity", theme: "서해 해안의 보물",
    steps: [
      { time: "09:00", place: "태안 꽃지 해수욕장", activity: "할미·할아비 바위 일대 해안 트레킹", duration: "2시간" },
      { time: "11:30", place: "안면도 자연휴양림", activity: "안면송 숲 산림욕 및 산책", duration: "1.5시간" },
      { time: "13:30", place: "태안 해산물 식당", activity: "꽃게탕·조개구이로 점심", duration: "1시간" },
      { time: "15:00", place: "몽산포 갯벌", activity: "갯벌 체험 (조개·낙지 잡기)", duration: "2시간" },
      { time: "17:30", place: "안면도 밀물 카페", activity: "서해 낙조 감상하며 카페에서 마무리", duration: "1시간" },
    ]
  },

  // ────────────────── 전라북도 ──────────────────
  {
    id: 120, region: "전라북도", title: "전주 한옥·음식 문화 투어", category: "sightseeing", theme: "한식의 성지 전주",
    steps: [
      { time: "09:00", place: "전주 한옥마을", activity: "700채 한옥 골목 산책 및 한복 체험", duration: "2시간" },
      { time: "11:00", place: "경기전·전주 향교", activity: "조선 태조 영정 봉안 경기전 관람", duration: "1시간" },
      { time: "12:30", place: "전주 비빔밥 명가", activity: "전주 콩나물 비빔밥으로 점심", duration: "1시간" },
      { time: "14:00", place: "군산 근대문화거리", activity: "일제강점기 근대 건축물 투어", duration: "2시간" },
      { time: "17:00", place: "진안 마이산", activity: "마이산 탑사 및 암마이봉 전망 감상", duration: "2시간" },
    ]
  },
  {
    id: 121, region: "전라북도", title: "내장산 단풍 트레킹", category: "activity", theme: "한국 단풍 1번지",
    steps: [
      { time: "08:00", place: "내장산 국립공원 입구", activity: "내장사 케이블카 탑승 또는 등산 시작", duration: "3시간" },
      { time: "11:30", place: "내장산 입구 식당", activity: "단풍 취나물 비빔밥으로 점심", duration: "1시간" },
      { time: "13:00", place: "순창 고추장 마을", activity: "전통 항아리 고추장 공장 견학 및 시식", duration: "1.5시간" },
      { time: "15:00", place: "담양 메타세쿼이아길", activity: "가을 이국적 가로수길 드라이브·자전거 라이딩", duration: "1.5시간" },
      { time: "17:30", place: "전주 한옥마을 야시장", activity: "전주 야시장 먹거리 탐방", duration: "2시간" },
    ]
  },

  // ────────────────── 전라남도 ──────────────────
  {
    id: 130, region: "전라남도", title: "여수·순천 남해 투어", category: "sightseeing", theme: "밤바다와 생태 정원",
    steps: [
      { time: "09:00", place: "순천만 국가정원", activity: "순천만 갈대밭 탐조 및 정원 관람", duration: "2시간" },
      { time: "11:30", place: "순천 시내", activity: "순천 짱뚱어탕으로 점심", duration: "1시간" },
      { time: "13:00", place: "여수 돌산도 케이블카", activity: "해상 케이블카 탑승 후 돌산도 전망 감상", duration: "1.5시간" },
      { time: "15:00", place: "여수 오동도", activity: "동백꽃 섬 오동도 산책", duration: "1시간" },
      { time: "17:00", place: "여수 낭만포차 거리", activity: "여수 밤바다 야경과 갓김치·굴구이 저녁", duration: "2.5시간" },
    ]
  },
  {
    id: 131, region: "전라남도", title: "담양·보성 녹색 힐링 투어", category: "sightseeing", theme: "대나무와 녹차의 향기",
    steps: [
      { time: "09:00", place: "담양 죽녹원", activity: "울창한 대나무 숲 산책로 힐링 코스", duration: "1.5시간" },
      { time: "11:00", place: "담양 떡갈비 거리", activity: "담양 대통밥·떡갈비로 점심", duration: "1시간" },
      { time: "12:30", place: "담양 메타세쿼이아길", activity: "이국적 가로수길 산책 및 드라이브", duration: "1시간" },
      { time: "14:00", place: "보성 녹차밭 (대한다원)", activity: "초록빛 차밭 산책 및 녹차 체험", duration: "2시간" },
      { time: "17:00", place: "벌교 꼬막 거리", activity: "벌교 꼬막 비빔밥·꼬막 정식으로 저녁", duration: "1.5시간" },
    ]
  },
  {
    id: 132, region: "전라남도", title: "지리산 둘레길 트레킹", category: "activity", theme: "어머니의 산 지리산",
    steps: [
      { time: "08:00", place: "지리산 노고단 코스", activity: "노고단 일출 트레킹 (성삼재 출발)", duration: "3시간" },
      { time: "11:30", place: "구례 화개장터", activity: "섬진강 재첩국·쌍계사 벚꽃길 점심", duration: "1.5시간" },
      { time: "13:30", place: "하동 쌍계사", activity: "천년 고찰 쌍계사 참배", duration: "1시간" },
      { time: "15:00", place: "섬진강 자전거길", activity: "섬진강 따라 자전거 라이딩", duration: "2시간" },
    ]
  },

  // ────────────────── 경상북도 ──────────────────
  {
    id: 140, region: "경상북도", title: "경주 신라 천년 역사 투어", category: "sightseeing", theme: "노천 박물관 경주",
    steps: [
      { time: "09:00", place: "불국사", activity: "유네스코 세계문화유산 불국사 관람", duration: "2시간" },
      { time: "11:30", place: "석굴암", activity: "신라 불교 예술의 정수 석굴암 참배", duration: "1시간" },
      { time: "13:00", place: "경주 쪽샘 유적지 인근 식당", activity: "경주 한우 육회비빔밥·황리단길 점심", duration: "1시간" },
      { time: "14:30", place: "대릉원·첨성대", activity: "신라 고분군 산책 및 첨성대 관람", duration: "2시간" },
      { time: "17:00", place: "동궁과 월지 (안압지)", activity: "야간 조명 점등 후 신라 궁원 야경 감상", duration: "2시간" },
    ]
  },
  {
    id: 141, region: "경상북도", title: "안동 전통 문화 투어", category: "sightseeing", theme: "조선 유교 문화의 본향",
    steps: [
      { time: "09:00", place: "안동 하회마을", activity: "유네스코 세계문화유산 양반 마을 탐방", duration: "2.5시간" },
      { time: "12:00", place: "안동 찜닭 골목", activity: "안동 찜닭·간고등어·헛제삿밥으로 점심", duration: "1.5시간" },
      { time: "14:00", place: "도산서원", activity: "퇴계 이황의 서원 관람 및 강 뷰 감상", duration: "1.5시간" },
      { time: "16:00", place: "월영교", activity: "안동호 목재 보도교 야경 산책", duration: "1시간" },
    ]
  },
  {
    id: 142, region: "경상북도", title: "포항·울릉도 액티비티 투어", category: "activity", theme: "동해 바다의 끝을 향해",
    steps: [
      { time: "08:00", place: "포항 호미곶", activity: "일출 감상 후 해안 트레킹", duration: "2시간" },
      { time: "10:30", place: "구룡포 일본인 거리", activity: "근대 역사 골목 탐방 및 과메기 시식", duration: "1.5시간" },
      { time: "12:30", place: "포항 죽도시장", activity: "물회·과메기로 점심", duration: "1시간" },
      { time: "14:00", place: "영일만 패러글라이딩", activity: "동해 바다 위 패러글라이딩 체험", duration: "2시간" },
      { time: "17:00", place: "형산강 자전거길", activity: "형산강 따라 석양 라이딩", duration: "1.5시간" },
    ]
  },

  // ────────────────── 경상남도 ──────────────────
  {
    id: 150, region: "경상남도", title: "통영·거제 한려수도 투어", category: "sightseeing", theme: "동양의 나폴리",
    steps: [
      { time: "09:00", place: "통영 케이블카", activity: "미륵산 케이블카로 한려수도 전망 감상", duration: "1.5시간" },
      { time: "11:00", place: "통영 중앙시장", activity: "꿀빵·다찌·충무김밥으로 점심 식사", duration: "1.5시간" },
      { time: "13:00", place: "거제 외도·해금강", activity: "보트 투어로 외도 식물원과 해금강 관람", duration: "3시간" },
      { time: "17:00", place: "거제 바람의 언덕", activity: "풍차와 다도해 전망 감상 후 일몰", duration: "1시간" },
      { time: "19:00", place: "통영 서피랑 야경", activity: "통영 야경 감상 후 해산물 저녁", duration: "2시간" },
    ]
  },
  {
    id: 151, region: "경상남도", title: "합천 해인사 & 지리산 종주", category: "sightseeing", theme: "법보종찰 순례",
    steps: [
      { time: "08:00", place: "합천 해인사", activity: "팔만대장경 장경판전 관람, 산사 경내 투어", duration: "2.5시간" },
      { time: "11:00", place: "해인사 입구 식당", activity: "산채 비빔밥·들깨 수제비로 점심", duration: "1시간" },
      { time: "12:30", place: "가야산 국립공원", activity: "칠불봉 트레킹 코스 (왕복 4시간)", duration: "4시간" },
      { time: "17:30", place: "합천 황강 유원지", activity: "강변 캠핑 또는 낙조 감상", duration: "1.5시간" },
    ]
  },
  {
    id: 152, region: "경상남도", title: "남해 섬 힐링 액티비티", category: "activity", theme: "독일마을과 바다 트레킹",
    steps: [
      { time: "09:00", place: "남해 독일마을", activity: "파독 교포 역사 마을 산책 및 맥주 카페", duration: "1.5시간" },
      { time: "11:00", place: "남해 보리암", activity: "금산 보리암 등산 (국내 3대 기도처)", duration: "2시간" },
      { time: "13:30", place: "남해 시장", activity: "멸치쌈밥·갈치회무침으로 점심", duration: "1시간" },
      { time: "15:00", place: "상주 은모래 해수욕장", activity: "서핑·카약 체험 및 해수욕", duration: "2.5시간" },
      { time: "18:30", place: "남해 창선교", activity: "낙조 드라이브 후 저녁 귀가", duration: "1시간" },
    ]
  },
];
