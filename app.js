/* 이미지 복제 억제: 우클릭 저장·끌어서 저장 차단 (지도·로고 등) */
document.addEventListener('contextmenu', e => { if (e.target.closest('img, .figure')) e.preventDefault(); });
document.addEventListener('dragstart', e => { if (e.target.tagName === 'IMG') e.preventDefault(); });
/* 클릭재킹 방지: 다른 사이트의 iframe 안에서 열리지 않도록 */
if (window.top !== window.self) { try { window.top.location = window.self.location; } catch (e) { document.documentElement.style.display = 'none'; } }
/* =========================================================
   ✏️ 운영진 편집 영역 — 아래 데이터만 고치면 화면 전체에 반영됩니다.
   ========================================================= */
const DATA = {
  eventStart: '2026-10-28T09:30', eventEnd: '2026-10-29T16:30',
  dates: { 1: '2026-10-28', 2: '2026-10-29' },
  overview: [
    { k: '목적', v: '지자체 공무원의 도시재생 정책 이해 및 실무 역량 강화' },
    { k: '일정', v: '2026. 10. 28.(수) 10:30 ~ 10. 29.(목) 16:30', sub: '1박 2일 · 총 13시간' },
    { k: '장소', html: '<span class="pill p-blue">1일차</span>아바니 센트럴 부산 브릿지2홀<span class="sub">부산 남구 전포대로 133</span><div style="height:6px"></div><span class="pill p-green">2일차</span>부산 동래구 · 수영구 일원<span class="sub">혁신어울림센터, 도도수영, F1963 등</span>' },
    { k: '대상', v: '전국 도시재생 업무 담당 지자체 공무원', sub: '총 30명 내외' },
    { k: '수료', v: '교육시간(13시간) 100% 출석 시 수료', sub: '국토교통부 관인 수료증 · 상시학습 13시간 인정' },
  ],
  goals: [
    '도시재생 정책 방향과 사업유형에 대한 이해 제고',
    '사업지 발굴, 성과관리 및 모니터링 등 사업추진 실무역량 강화',
    '종료사업지 사후관리 미흡·젠트리피케이션 등 부작용 사례를 통한 재발 방지',
  ],
  // 도시재생 사례 소개 (area 색상: 동래구=파랑, 수영구=초록, 부산시=주황)
  sites: [
    { area: '동래구', name: '혁신어울림센터', desc: '쇠퇴한 온천장 지역에 활력을 불어넣고 세대 간 소통을 돕는 지역 커뮤니티 거점 — 사후관리 우수 사례', url: 'http://www.diec.or.kr/hello.php' },
    { area: '수영구', name: '도도수영 8A', desc: '역사문화자원을 활용한 지역 활성화와 주민참여 기반 구축으로 공동체 회복을 이끈 사례', url: 'https://www.dodosuyeong.com/index.dodo' },
    { area: '수영구', name: 'F1963', desc: '민관 협업 리노베이션으로 사회문화적 가치와 기능을 지닌 공간으로 재창조한 사례', url: 'https://www.f1963.org/ko/' },
    { area: '부산시', name: '부산도시공사 도시재생', desc: '노후·쇠퇴 지역의 물리적·경제적·사회문화적 부분을 종합적으로 개선해 도시의 활력을 찾는 사업 — 샛디산복마을, 호천마을, 영도 경제기반형 등', url: 'https://www.bmc.busan.kr/index.do?menuCd=DOM_000000102003000000&pageIndex=1' },
  ],
  // type: lecture | meal | move | tour | gather
  schedule: {
    1: [
      { s: '09:30', e: '10:30', type: 'gather', title: '교육장 이동 및 집합', where: '아바니 센트럴 부산 브릿지2홀' },
      { s: '10:30', e: '12:00', type: 'lecture', title: '도시재생 정책 이해 및 활성화 계획 수립 방법', who: '서수정 박사 / AURI(건축공간연구원)', where: '브릿지2홀' },
      { s: '12:00', e: '13:00', type: 'meal', title: '중식', who: '뷔페식', where: '아바니 센트럴 호텔 4층 더 큐브' },
      { s: '13:00', e: '14:30', type: 'lecture', title: '보조금 정산 절차 및 주의사항', who: '김용윤 부대표 / 우리회계법인', where: '브릿지2홀' },
      { s: '14:30', e: '16:00', type: 'lecture', title: '도시재생사업 평가 및 성과관리 방안', who: '한인구 교수 / 목원대', where: '브릿지2홀' },
      { s: '16:00', e: '17:30', type: 'lecture', title: '도시재생 사후관리', who: '양민구 박사 / 한국표준협회', where: '브릿지2홀' },
    ],
    2: [
      { s: '09:00', e: '09:30', type: 'gather', title: '집합 및 전세버스 탑승', where: 'BIFC 자갈마당 (공터 주차장)' },
      { s: '09:30', e: '10:00', type: 'move', title: '동래구 혁신어울림센터 이동', where: '버스 이동' },
      { s: '10:00', e: '10:30', type: 'lecture', title: '동래구 도시재생 사업 Case-Study', who: '권도헌 센터장 / 동래구 도시재생지원센터', where: '혁신어울림센터 1층' },
      { s: '10:30', e: '11:30', type: 'tour', title: '혁신어울림센터 복합 거점 안내 및 사례지 투어', who: '혁신어울림센터장', where: '혁신어울림센터' },
      { s: '11:30', e: '11:40', type: 'move', title: '중식 장소 이동', where: '도보 이동' },
      { s: '11:40', e: '13:30', type: 'meal', title: '중식 및 수영구 이동', who: '한식', where: '쌈보보쌈 온천장점' },
      { s: '13:30', e: '14:30', type: 'tour', title: '수영구 도시재생 사례지 투어 ①', who: '도도수영 도시재생 해설사', route: ['조마루 감자탕(본점) 하차', '역사를 잇는 느린 골목길', '생활형 SOC 일대', '도도수영8A'] },
      { s: '14:30', e: '15:00', type: 'lecture', title: '수영구 도시재생 사업 Case-Study', who: '수영구 도시재생지원센터 사무국장', where: '도도수영8A 4층 세미나실' },
      { s: '15:00', e: '16:00', type: 'tour', title: '수영구 도시재생 사례지 투어 ②', who: '도도수영 도시재생 해설사', route: ['비콘그라운드', 'F1963'] },
      { s: '16:00', e: '16:30', type: 'gather', title: '강평 및 기념사진' },
      { s: '16:30', e: '17:30', type: 'move', title: '해산', where: '부산역 및 종합버스터미널(노포역)' },
    ],
  },
  routeStops: [
    { name: 'BIFC 자갈마당 (집결·출발)', desc: '09:00 집합 · 45인승 전세버스 탑승', q: '부산국제금융센터' },
    { name: '동래구 혁신어울림센터', desc: 'Case-Study 및 복합 거점 투어 · 이후 중식', q: '동래구 혁신어울림센터' },
    { name: '수영구 도도수영8A', desc: '도보 투어 · 4층 세미나실 Case-Study', q: '도도수영' },
    { name: 'F1963', desc: '비콘그라운드 경유 · 투어 종료 후 강평·기념사진', q: 'F1963' },
  ],
  walk: ['조마루 감자탕(본점) 하차', '팔도시장', '역사를 잇는 느린 골목길', '생활형 SOC', '도도수영8A', '비콘그라운드', 'F1963'],
  // 주변 숙박: line = 지하철 호선 (1 = 1호선 주황, 2 = 2호선 초록)
  hotels: [
    { station: '서면역', lines: [1, 2], items: ['하운드호텔 서면', '샤이어호텔 서면'] },
    { station: '범내골역', lines: [1], items: ['사우스반데코호텔'] },
    { station: '범일역', lines: [1], items: ['올집아카이브4H', '루이스호텔'] },
    { station: '문현역', lines: [2], items: ['에이치에비뉴호텔 문현점', '시그니처덴바스타호텔'] },
  ],
  checklist: ['신분증 (출석 확인용)', '편한 신발 (2일차 도보 답사)', '필기구 · 노트북(선택)', '추위를 대비한 외투 (10월 말 부산 아침·저녁 쌀쌀)', '귀가 교통편 예매 (16:30 해산)'],
  contacts: [
    { role: '이엔아이그룹', name: '김인규 본부장', phone: '010-8027-1919', color: '#003E7E', icon: 'person' },
    { role: '이엔아이그룹', name: '김현주 과장', phone: '010-2646-0216', color: '#0072BC', icon: 'person' },
  ],
  emergency: [
    { kind: '병원', name: '부산의료원 응급실', phone: '051-607-2142' },
    { kind: '병원', name: '센텀종합병원 응급실', phone: '051-750-5119' },
    { kind: '소방', name: '부산남부소방서 망미119안전센터', phone: '051-761-1119' },
  ],
  meals: [
    { tag: '1일차 중식', color: 'p-blue', when: '10.28(수) 12:00', place: '아바니 센트럴 호텔 4층 더 큐브', note: '뷔페식', menu: '제철 미식로드 (2026)', menuDesc: '산지의 이야기와 제철 식재료를 담아 한 계절의 미식을 완성하는 더 큐브의 시즌 점심 뷔페입니다. 3개월마다 메뉴와 테마가 바뀝니다.', menuItems: ['열빙어 난반 쯔케', '표고 두부 튀김', '로제 춘천 닭갈비', '초당 두부 카프레제 샐러드', '미나리 게살 스프'], menuHint: '※ 대표 메뉴 예시이며, 시즌 구성에 따라 달라질 수 있습니다.', menuUrl: 'https://avanicentralbusan.notion.site/4F-THE-CUBE-BUFFET-200828360d7f80c9b5d5ff035b3d122f', addr: '부산광역시 남구 전포대로 133, 아바니센트럴부산 4F', phone: '051-791-5840', q: '아바니 센트럴 부산' },
    { tag: '2일차 중식', color: 'p-green', when: '10.29(목) 11:40', place: '쌈보보쌈 온천장점', note: '한식', menu: '쌈보한상 (2인 이상)', menuDesc: '매일 삶는 쌈보보쌈과 매일 담는 보쌈김치에 다양한 곁들임을 더한 풍성한 한 상 차림입니다.', menuItems: ['쌈보보쌈', '보쌈김치', '불향 낙지볶음', '수제 모듬튀김', '순살 꼬막무침', '안동 청국장', '따뜻한 밥'], menuUrl: 'https://app.catchtable.co.kr/ct/shop/ssambo_bossam/menu/menuInfo?foodMenuSeq=2620379', addr: '부산 동래구 금강로 118 1층', phone: '051-557-5353', q: '쌈보보쌈 온천장점' },
    { tag: '2일차 음료', color: 'p-orange', when: '수영구 도시재생 사업 Case-Study', place: '도도수영 8A', note: '커피 및 음료 1인 1잔', menu: '수영성카페', menuItems: ['아메리카노', '아이슈페너', '에이드', '아이스티', '스무디'], menuHint: '위 메뉴 중 1인 1잔을 선택하실 수 있습니다.', addr: '수영구 도도수영 8A', q: '도도수영' },
  ],
};
/* ========================================================= */

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const params = new URLSearchParams(location.search);
function store(k, v){ try{ if(v===undefined) return localStorage.getItem(k); localStorage.setItem(k, v);}catch(e){ return null; } }

/* 현재 시각 (KST). 테스트: ?now=2026-10-29T14:40 */
function nowKST(){
  const q = params.get('now');
  if (q && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(q)) return new Date(q + ':00+09:00');
  return new Date();
}
const kst = (d, t) => new Date(`${d}T${t}:00+09:00`);

/* ---------- Welcome ---------- */
(function welcome(){
  const name = (params.get('name') || '').trim().slice(0, 12);
  if (name) $('#greetName').textContent = `${name} 님, 환영합니다`;

  const today = nowKST();
  const start = kst(DATA.dates[1], '00:00');
  const dayMs = 864e5;
  const diff = Math.floor((start - today) / dayMs) + 1;
  const end = new Date(DATA.eventEnd + ':00+09:00');
  let txt;
  if (today > end) txt = '수료 축하 🎉';
  else if (today >= start) txt = (today < kst(DATA.dates[2], '00:00')) ? 'DAY 1' : 'DAY 2';
  else txt = diff <= 0 ? 'D-DAY' : `D-${diff}`;
  $('#dday').textContent = txt;

  const slider = $('#slider'), dots = $$('#dots button');
  let idx = 0, timer;
  const go = i => { idx = (i + dots.length) % dots.length; slider.scrollTo({ left: slider.clientWidth * idx, behavior: 'smooth' }); };
  dots.forEach((d, i) => d.onclick = () => { go(i); restart(); });
  slider.addEventListener('scroll', () => {
    const i = Math.round(slider.scrollLeft / slider.clientWidth);
    dots.forEach((d, j) => d.classList.toggle('on', i === j)); idx = i;
  }, { passive: true });
  const restart = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 4500); };
  slider.addEventListener('touchstart', () => clearInterval(timer), { passive: true });
  slider.addEventListener('touchend', restart, { passive: true });
  restart();
})();

/* ---------- Routing ---------- */
const welcomeEl = $('#welcome'), appEl = $('#app');
function showApp(tab){
  welcomeEl.classList.add('leaving');
  setTimeout(() => welcomeEl.classList.add('hidden'), 420);
  appEl.setAttribute('aria-hidden', 'false');
  selectTab(tab || 'overview', false);
}
function showWelcome(){
  welcomeEl.classList.remove('hidden');
  requestAnimationFrame(() => welcomeEl.classList.remove('leaving'));
  appEl.setAttribute('aria-hidden', 'true');
}
function route(){
  const h = location.hash.replace('#', '');
  if (h.startsWith('info')) showApp(h.split('/')[1]); else showWelcome();
}
$('#enterBtn').onclick = () => { location.hash = 'info/overview'; };
$('#homeBtn').onclick = () => { location.hash = ''; };
window.addEventListener('hashchange', route);

function selectTab(t, push = true){
  if (!document.getElementById('p-' + t)) t = 'overview';
  $$('.tab').forEach(b => b.classList.toggle('on', b.dataset.tab === t));
  $$('.panel').forEach(p => p.classList.toggle('on', p.id === 'p-' + t));
  if (push && location.hash !== '#info/' + t) history.replaceState(null, '', '#info/' + t);
  window.scrollTo({ top: 0 });
  if (t === 'schedule' && typeof scrollToFocus === 'function') { renderTimeline(); scrollToFocus(); }
}
$$('.tab').forEach(b => b.onclick = () => selectTab(b.dataset.tab));

/* ---------- Render ---------- */
const ICON = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  hq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1v-6h3zM3 19a2 2 0 002 2h1v-6H3z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',
  hospital: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4 0 7-2.8 7-6.8 0-3.6-2.6-6-4-8.7-.6 2-1.6 3.2-3 3.7C12 7 11 4.4 8.6 2 8.8 6 5 8.8 5 15.2 5 19.2 8 22 12 22z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>',
};
const mapLinks = q => `<a class="n" href="https://map.naver.com/p/search/${encodeURIComponent(q)}" target="_blank" rel="noopener">네이버지도</a><a class="k" href="https://map.kakao.com/link/search/${encodeURIComponent(q)}" target="_blank" rel="noopener">카카오맵</a>`;

$('#kv').innerHTML = DATA.overview.map(o => `<div class="kv-row"><span class="kv-k">${o.k}</span><div class="kv-v">${o.html || (o.v + (o.sub ? `<span class="sub">${o.sub}</span>` : ''))}</div></div>`).join('');
$('#goals').innerHTML = DATA.goals.map(g => `<li>${g}</li>`).join('');
const AREA_COLOR = { '동래구': 'p-blue', '수영구': 'p-green', '부산시': 'p-orange' };
$('#sites').innerHTML = DATA.sites.map(s => `<div class="site"><span class="pill ${AREA_COLOR[s.area] || 'p-gray'}">${s.area}</span><h4>${s.name}</h4><p>${s.desc}</p><a class="sitelink" href="${s.url}" target="_blank" rel="noopener">홈페이지 바로가기<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></a></div>`).join('');
$('#routeSteps').innerHTML = DATA.routeStops.map(s => `<div class="step"><div class="s-b"><h4>${s.name}</h4><p>${s.desc}</p><div class="maplinks">${mapLinks(s.q)}</div></div></div>`).join('');
$('#walk').innerHTML = DATA.walk.map((w, i) => `<span>${i + 1}. ${w}</span>${i < DATA.walk.length - 1 ? '<i>›</i>' : ''}`).join('');
const naverSearch = q => `https://map.naver.com/p/search/${encodeURIComponent(q)}`;
$('#hotels').innerHTML = DATA.hotels.map(s => `<div class="station"><a class="st-head" href="${naverSearch(s.station + ' 숙소')}" target="_blank" rel="noopener" aria-label="${s.station} 주변 숙소 현황 및 예약">${s.lines.map(l => `<span class="line l${l}">${l}</span>`).join('')}<b>${s.station}</b><span class="st-go">주변 숙소 · 예약<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></span></a><ul>${s.items.map(h => `<li><span>${h}</span><a href="${naverSearch('부산 ' + h)}" target="_blank" rel="noopener">보기·예약</a></li>`).join('')}</ul></div>`).join('');
const callBtn = ph => `<a class="call" href="tel:${ph.replace(/-/g, '')}">${ICON.phone}전화</a>`;
$('#contacts').innerHTML = DATA.contacts.map(c => `<div class="contact"><span class="avatar" style="background:${c.color}">${ICON[c.icon]}</span><div class="c-b"><small>${c.role}</small><h4>${c.name}</h4><p>${c.phone}</p></div>${callBtn(c.phone)}</div>`).join('');
$('#emergency').innerHTML = DATA.emergency.map(e => `<div class="contact"><span class="avatar" style="background:${e.kind === '병원' ? '#DC2626' : '#EA580C'}">${ICON[e.kind === '병원' ? 'hospital' : 'fire']}</span><div class="c-b"><small>${e.kind === '병원' ? '응급의료' : '소방기관'}</small><h4>${e.name}</h4><p>${e.phone}</p></div>${callBtn(e.phone)}</div>`).join('');
$('#meals').innerHTML = DATA.meals.map(m => `<div class="meal-card"><div class="meal-top"><span class="pill ${m.color}">${m.tag}</span><span class="muted">${m.when}</span></div><h4>${m.place}</h4><p class="meal-note">${m.note}</p>${m.menu ? `<div class="menu-box"><div class="menu-head"><span class="menu-k">메뉴</span><b>${m.menu}</b></div>${m.menuDesc ? `<p class="menu-desc">${m.menuDesc}</p>` : ''}${m.menuItems ? `<div class="menu-items">${m.menuItems.map(x => `<span>${x}</span>`).join('')}</div>` : ''}${m.menuHint ? `<p class="menu-hint">${m.menuHint}</p>` : ''}${m.menuUrl ? `<a class="sitelink menu-link" href="${m.menuUrl}" target="_blank" rel="noopener">메뉴 자세히 보기<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg></a>` : ''}</div>` : ''}<div class="tl-where">${ICON.pin}${m.addr}</div><div class="meal-act">${m.phone ? `<a class="call" href="tel:${m.phone.replace(/-/g, '')}">${ICON.phone}${m.phone}</a>` : ''}<div class="maplinks" style="margin-top:0">${mapLinks(m.q)}</div></div></div>`).join('');
document.querySelector('.sos-call').innerHTML = ICON.phone + '전화';
$$('.maplinks[data-q]').forEach(el => el.insertAdjacentHTML('afterbegin', mapLinks(el.dataset.q)));

const checked = JSON.parse(store('chk') || '[]');
$('#checklist').innerHTML = DATA.checklist.map((c, i) => `<li><input type="checkbox" id="c${i}" ${checked.includes(i) ? 'checked' : ''}><label for="c${i}">${c}</label></li>`).join('');
$('#checklist').addEventListener('change', () => store('chk', JSON.stringify($$('#checklist input').map((x, i) => x.checked ? i : -1).filter(i => i >= 0))));

/* ---------- Timeline & live status ---------- */
let curDay = 1;
const WEEK = ['일','월','화','수','목','금','토'];
const pad2 = n => String(n).padStart(2, '0');
function kstParts(d){ const k = new Date(d.getTime() + 9 * 3600e3); return { M: k.getUTCMonth() + 1, D: k.getUTCDate(), w: WEEK[k.getUTCDay()], h: k.getUTCHours(), m: k.getUTCMinutes() }; }
/* 접속 시각 기준: 진행 중(live) / 다음 일정(next) 찾기 */
function findFocus(now){
  let live = null, next = null;
  for (const day of [1, 2]) DATA.schedule[day].forEach((it, i) => {
    const st = kst(DATA.dates[day], it.s), en = kst(DATA.dates[day], it.e);
    if (!live && now >= st && now < en) live = { day, i };
    if (!next && st > now) next = { day, i };
  });
  return { live, next };
}
function renderTimeline(){
  const now = nowKST(), d = DATA.dates[curDay], { live, next } = findFocus(now);
  const focus = live || next;
  $('#timeline').innerHTML = DATA.schedule[curDay].map((it, i) => {
    const st = kst(d, it.s), en = kst(d, it.e);
    let state = now >= en ? 'past' : '';
    if (live && live.day === curDay && live.i === i) state = 'live';
    else if (!live && next && next.day === curDay && next.i === i) state = 'next';
    const badge = state === 'live' ? '<span class="badge-live">● 지금 진행 중</span>' : state === 'next' ? '<span class="badge-next">다음 일정</span>' : state === 'past' ? '<span class="badge-done">종료</span>' : '';
    const route = it.route ? `<div class="route-inline">${it.route.map((r, j) => `<span>${r}</span>${j < it.route.length - 1 ? '<i>→</i>' : ''}`).join('')}</div>` : '';
    return `<div class="tl-item ${it.type} ${state}" ${state === 'live' || state === 'next' ? 'id="tlFocus"' : ''}>
      <div class="tl-time">${it.s}<small>~${it.title === '해산' ? '' : it.e}</small></div>
      <div class="tl-body">${badge ? `<div class="tl-badges">${badge}</div>` : ''}<div class="tl-title">${it.title}</div>
      ${it.who ? `<div class="tl-who">${it.who}</div>` : ''}${route}
      ${it.where ? `<div class="tl-where">${ICON.pin}${it.where}</div>` : ''}</div></div>`;
  }).join('');
  // 상단 현재 시각 안내
  const p = kstParts(now);
  let msg;
  const first = kst(DATA.dates[1], DATA.schedule[1][0].s);
  if (live) { const it = DATA.schedule[live.day][live.i]; msg = `<b>DAY ${live.day} · ${it.s}~${it.e}</b> <span class="hl">${it.title}</span> 진행 중입니다`; }
  else if (now < first) { const dd = Math.ceil((kst(DATA.dates[1], '00:00') - now) / 864e5); msg = `교육 시작까지 <b class="hl">D-${dd}</b> · 첫 일정 <b>10.28(수) 09:30 교육장 집합</b>`; }
  else if (next) { const it = DATA.schedule[next.day][next.i]; msg = `다음 일정 <b>DAY ${next.day} · ${it.s}</b> <span class="hl">${it.title}</span>`; }
  else msg = '모든 교육 일정이 종료되었습니다. 감사합니다!';
  $('#tlStatus').innerHTML = `<span class="clock">${ICON.clock}${p.M}.${pad2(p.D)}(${p.w}) ${pad2(p.h)}:${pad2(p.m)} 기준</span><span class="msg">${msg}</span>${focus && focus.day !== curDay ? `<button class="jump" data-day="${focus.day}">DAY ${focus.day}로 이동 →</button>` : ''}`;
  const j = $('#tlStatus .jump'); if (j) j.onclick = () => { $$('#seg button')[focus.day - 1].click(); scrollToFocus(); };
}
function scrollToFocus(){
  setTimeout(() => { const f = document.getElementById('tlFocus'); if (f && $('#p-schedule').classList.contains('on')) f.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 120);
}
// 접속 시 해당 일차 자동 선택
(function autoDay(){ const { live, next } = findFocus(nowKST()); const f = live || next; if (f) curDay = f.day; $$('#seg button').forEach(x => x.classList.toggle('on', +x.dataset.day === curDay)); })();
$$('#seg button').forEach(b => b.onclick = () => { curDay = +b.dataset.day; $$('#seg button').forEach(x => x.classList.toggle('on', x === b)); renderTimeline(); });

function renderNow(){
  const now = nowKST(), el = $('#nowCard');
  let cur = null, next = null, nextDay = null;
  for (const day of [1, 2]) for (const it of DATA.schedule[day]) {
    const st = kst(DATA.dates[day], it.s), en = kst(DATA.dates[day], it.e);
    if (now >= st && now < en && !cur) cur = { ...it, day };
    if (st > now && !next) { next = { ...it, day }; }
  }
  const start = kst(DATA.dates[1], DATA.schedule[1][0].s);
  let html;
  if (now < start) {
    const days = Math.ceil((kst(DATA.dates[1], '00:00') - now) / 864e5);
    html = `<div class="lbl">교육까지 ${days > 0 ? 'D-' + days : '오늘!'}</div>
      <div class="big">10월 28일(수) 09:30까지<br>아바니 센트럴 부산 브릿지2홀로 와주세요</div>
      <div class="meta">첫 강의 10:30 시작 · 13시간 100% 출석 시 수료</div>
      <button class="go" data-goto="route">찾아오는 길 보기 →</button>`;
  } else if (cur) {
    html = `<div class="lbl">지금 진행 중 · DAY ${cur.day} ${cur.s}~${cur.e}</div>
      <div class="big">${cur.title}</div>
      <div class="meta">${[cur.who, cur.where].filter(Boolean).join(' · ')}${next ? `<br>다음: ${next.s} ${next.title}` : ''}</div>
      <button class="go" data-goto="schedule">전체 일정 보기 →</button>`;
  } else if (next) {
    html = `<div class="lbl">다음 일정 · DAY ${next.day} ${next.s}</div>
      <div class="big">${next.title}</div>
      <div class="meta">${[next.who, next.where].filter(Boolean).join(' · ')}${next.day === 2 && next.s === '09:00' ? '<br>BIFC 자갈마당 · 전세버스 경남 72바 6112' : ''}</div>
      <button class="go" data-goto="${next.day === 2 && next.s === '09:00' ? 'route' : 'schedule'}">자세히 보기 →</button>`;
  } else {
    html = `<div class="lbl">교육 종료</div><div class="big">이틀간 함께해 주셔서 감사합니다 🙏</div>
      <div class="meta">수료증은 운영사무국을 통해 안내드립니다. 안전한 귀가 되세요.</div>`;
  }
  el.innerHTML = html;
  const g = el.querySelector('[data-goto]'); if (g) g.onclick = () => selectTab(g.dataset.goto);
  // 일정표 기본 탭: 2일차 당일이면 DAY2
  renderNow.done = true;
}
renderTimeline(); renderNow();
setInterval(() => { renderTimeline(); renderNow(); }, 30000);

/* ---------- Utilities ---------- */
function toast(m){ const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
document.addEventListener('click', e => {
  const c = e.target.closest('.copy');
  if (c) { (navigator.clipboard ? navigator.clipboard.writeText(c.dataset.copy) : Promise.reject()).then(() => toast('주소가 복사되었습니다'), () => toast(c.dataset.copy)); }
  const z = e.target.closest('[data-zoom]');
  if (z) { $('#lb img').src = z.querySelector('img').src; $('#lb img').alt = z.querySelector('img').alt; $('#lb').classList.add('on'); }
});
$('#lb').onclick = () => $('#lb').classList.remove('on');
$('#shareBtn').onclick = async () => {
  const url = location.href.split('#')[0].replace(/[?&]name=[^&]*/, '');
  if (navigator.share) { try { await navigator.share({ title: '2026 도시재생 지자체 공무원 교육 안내', url }); } catch(e){} }
  else if (navigator.clipboard) { navigator.clipboard.writeText(url).then(() => toast('링크가 복사되었습니다')); }
};
route();
