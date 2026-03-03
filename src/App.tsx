import React, { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';
import { Map as MapIcon, BookOpen, Sparkles, User, Globe, ChevronLeft, X, MapPin, Clock, Bookmark, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { getKoreanCountryName, getKoreanRegionName } from './utils/countryNames';
import { regionRecommendations, type Recommendation } from './data/recommendations';
import { regionCourses, type Course, type CourseStep } from './data/courses';

const worldGeoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const countryConfigs: Record<string, { url: string; projection: { scale: number; center: [number, number]; rotate?: [number, number, number] } }> = {
  "South Korea": {
    url: "https://raw.githubusercontent.com/southkorea/southkorea-maps/master/gadm/json/skorea-provinces-topo.json",
    projection: { scale: 5000, center: [0, 0], rotate: [-127.5, -36, 0] }
  },
  "Japan": {
    url: "https://raw.githubusercontent.com/d3-japan/jp-prefectures/master/jp-prefectures.json",
    projection: { scale: 2000, center: [0, 0], rotate: [-138, -38, 0] }
  }
};

// ─── Saved course types ────────────────────────────────────────────────────────
interface SavedCourse {
  courseId: number;
  region: string;
  title: string;
  category: 'activity' | 'sightseeing';
  steps: CourseStep[];
}

interface SavedItem {
  id: string;
  step: CourseStep;
  courseTitle: string;
  region: string;
}

// ─── Utility helpers ──────────────────────────────────────────────────────────
const categoryMeta = (cat: string) => {
  if (cat === 'landmark') return { label: '명소', emoji: '🏛️', bg: '#dbeafe', color: '#1e40af', border: '#3b82f6' };
  if (cat === 'food')     return { label: '맛집', emoji: '🍽️', bg: '#fef3c7', color: '#92400e', border: '#f59e0b' };
  return                         { label: '액티비티', emoji: '🎯', bg: '#dcfce7', color: '#166534', border: '#22c55e' };
};

const App: React.FC = () => {
  // ─── Auth ──────────────────────────────────────────────────────────────────
  const [isLoggedIn, setIsLoggedIn]   = useState(false);
  const [authMode, setAuthMode]       = useState<'login' | 'signup'>('login');

  // ─── Navigation ────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState('map');

  // ─── Map state ─────────────────────────────────────────────────────────────
  const [selectedCountry, setSelectedCountry]     = useState<string | null>(null);
  const [viewLevel, setViewLevel]                 = useState<'world' | 'country'>('world');
  const [focusedCountryName, setFocusedCountryName] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion]       = useState<string | null>(null);

  // ─── Region panel tabs ─────────────────────────────────────────────────────
  const [regionTab, setRegionTab]           = useState<'spots' | 'courses'>('spots');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'landmark' | 'food' | 'activity'>('all');
  const [courseCategory, setCourseCategory] = useState<'sightseeing' | 'activity'>('sightseeing');
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  // ─── Landmark detail modal ─────────────────────────────────────────────────
  const [selectedSpot, setSelectedSpot] = useState<Recommendation | null>(null);

  // ─── Saved courses ─────────────────────────────────────────────────────────
  const [savedCourses, setSavedCourses] = useState<SavedCourse[]>([]);
  const [savedItems,   setSavedItems]   = useState<SavedItem[]>([]);

  // ─── Derived ──────────────────────────────────────────────────────────────
  const activeCountryConfig = useMemo(() => {
    if (viewLevel === 'country' && focusedCountryName) return countryConfigs[focusedCountryName];
    return null;
  }, [viewLevel, focusedCountryName]);

  const regionCourseList = useMemo(() => {
    if (!selectedRegion) return [];
    return regionCourses.filter(c => c.region === selectedRegion && c.category === courseCategory);
  }, [selectedRegion, courseCategory]);

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleCountryClick = (geo: any) => {
    let englishName = geo.properties.name;
    if (englishName === "Republic of Korea" || geo.id === "410") englishName = "South Korea";
    if (englishName === "Dem. Rep. Korea"   || geo.id === "408") englishName = "North Korea";
    const nameKR = getKoreanCountryName(geo.id, englishName);
    if (countryConfigs[englishName]) {
      setFocusedCountryName(englishName);
      setViewLevel('country');
      setSelectedCountry(nameKR);
      setSelectedRegion(null);
    } else {
      alert(`${nameKR}의 상세 지도는 준비 중입니다.`);
    }
  };

  const handleBackToWorld = () => {
    setViewLevel('world');
    setFocusedCountryName(null);
    setSelectedCountry(null);
    setSelectedRegion(null);
    setSelectedSpot(null);
    setCategoryFilter('all');
  };

  const handleRegionClick = (nameKR: string) => {
    setSelectedRegion(nameKR);
    setCategoryFilter('all');
    setRegionTab('spots');
    setExpandedCourse(null);
    setSelectedSpot(null);
  };

  const handleSaveCourse = (course: Course) => {
    const already = savedCourses.some(c => c.courseId === course.id);
    if (already) {
      setSavedCourses(prev => prev.filter(c => c.courseId !== course.id));
    } else {
      setSavedCourses(prev => [...prev, { courseId: course.id, region: course.region, title: course.title, category: course.category, steps: course.steps }]);
    }
  };

  const handleSaveItem = (step: CourseStep, course: Course) => {
    const itemId = `${course.id}-${step.time}`;
    const already = savedItems.some(i => i.id === itemId);
    if (already) {
      setSavedItems(prev => prev.filter(i => i.id !== itemId));
    } else {
      setSavedItems(prev => [...prev, { id: itemId, step, courseTitle: course.title, region: course.region }]);
    }
  };

  const handleLogin  = (e: React.FormEvent) => { e.preventDefault(); setIsLoggedIn(true); };
  const handleSignup = (e: React.FormEvent) => { e.preventDefault(); alert("회원가입이 완료되었습니다! 로그인해 주세요."); setAuthMode('login'); };

  // ─── Related courses for a spot ───────────────────────────────────────────
  const relatedCourses = (spot: Recommendation) =>
    regionCourses.filter(c => c.region === selectedRegion && c.steps.some(s => s.place.includes(spot.name) || spot.name.includes(s.place)));

  // ─── Render helpers ────────────────────────────────────────────────────────
  const renderAuth = () => (
    <div className="auth-container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Globe size={60} color="#3b82f6" style={{ marginBottom: '16px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: '800' }}>트래블 로그</h1>
        <p style={{ color: '#64748b' }}>당신의 여행을 기록하고 공유하세요</p>
      </div>
      <form onSubmit={authMode === 'login' ? handleLogin : handleSignup}>
        {authMode === 'signup' && (
          <div className="input-group">
            <label>이름</label>
            <input type="text" placeholder="홍길동" required />
          </div>
        )}
        <div className="input-group"><label>이메일</label><input type="email" placeholder="example@travel.com" required /></div>
        <div className="input-group"><label>비밀번호</label><input type="password" placeholder="••••••••" required /></div>
        <button type="submit" className="btn" style={{ width: '100%', marginTop: '8px', padding: '14px' }}>
          {authMode === 'login' ? '로그인' : '회원가입'}
        </button>
      </form>
      <div className="auth-switch">
        {authMode === 'login'
          ? (<>계정이 없으신가요? <span onClick={() => setAuthMode('signup')}>회원가입</span></>)
          : (<>이미 계정이 있으신가요? <span onClick={() => setAuthMode('login')}>로그인</span></>)}
      </div>
    </div>
  );

  /* ── Landmark detail modal ── */
  const renderSpotModal = () => {
    if (!selectedSpot) return null;
    const meta = categoryMeta(selectedSpot.category);
    const related = relatedCourses(selectedSpot);
    return (
      <div style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
        zIndex: 200, display: 'flex', alignItems: 'flex-end'
      }} onClick={() => setSelectedSpot(null)}>
        <div
          style={{ background: '#fff', borderRadius: '20px 20px 0 0', width: '100%', maxHeight: '80vh', overflowY: 'auto', padding: '24px 20px 32px' }}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '11px', fontWeight: '700', padding: '3px 8px', borderRadius: '20px', background: meta.bg, color: meta.color, marginBottom: '8px', display: 'inline-block' }}>
                {meta.emoji} {meta.label}
              </span>
              <h2 style={{ fontSize: '20px', fontWeight: '800', margin: '4px 0' }}>{selectedSpot.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', fontSize: '12px' }}>
                <MapPin size={12} />
                <span>{selectedSpot.location}</span>
              </div>
            </div>
            <button onClick={() => setSelectedSpot(null)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <X size={16} />
            </button>
          </div>

          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '20px', padding: '14px', background: '#f8fafc', borderRadius: '10px' }}>
            {selectedSpot.detailDescription}
          </p>

          {related.length > 0 && (
            <>
              <h3 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '10px', color: '#1e293b' }}>
                📋 이 명소를 포함한 추천 코스
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {related.map(course => {
                  const isSaved = savedCourses.some(c => c.courseId === course.id);
                  return (
                    <div key={course.id} style={{ border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '14px', background: '#fff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <div>
                          <span style={{ fontSize: '11px', fontWeight: '700', padding: '2px 7px', borderRadius: '10px', background: course.category === 'activity' ? '#dcfce7' : '#dbeafe', color: course.category === 'activity' ? '#166534' : '#1e40af', marginRight: '6px' }}>
                            {course.category === 'activity' ? '🎯 액티비티' : '🏛️ 명소관광'}
                          </span>
                          <span style={{ fontSize: '11px', color: '#94a3b8' }}>{course.theme}</span>
                        </div>
                        <button
                          onClick={() => handleSaveCourse(course)}
                          style={{ background: isSaved ? '#3b82f6' : '#f1f5f9', border: 'none', borderRadius: '8px', padding: '5px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: isSaved ? '#fff' : '#475569', fontWeight: '600' }}
                        >
                          {isSaved ? <><Check size={11} />담김</> : <><Bookmark size={11} />담기</>}
                        </button>
                      </div>
                      <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '6px' }}>{course.title}</div>
                      {course.steps.map((step, i) => (
                        <div key={i} style={{ display: 'flex', gap: '8px', padding: '4px 0', borderTop: i > 0 ? '1px solid #f1f5f9' : 'none', alignItems: 'flex-start' }}>
                          <span style={{ fontSize: '11px', color: '#94a3b8', minWidth: '38px', paddingTop: '1px' }}>{step.time}</span>
                          <div>
                            <span style={{ fontSize: '13px', fontWeight: '600' }}>{step.place}</span>
                            <span style={{ fontSize: '12px', color: '#64748b' }}> · {step.activity}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            </>
          )}
          {related.length === 0 && (
            <p style={{ fontSize: '13px', color: '#94a3b8', textAlign: 'center', padding: '16px 0' }}>이 명소를 포함한 코스 정보가 없습니다.</p>
          )}
        </div>
      </div>
    );
  };

  /* ── Course card ── */
  const renderCourseCard = (course: Course) => {
    const isSaved  = savedCourses.some(c => c.courseId === course.id);
    const isExpanded = expandedCourse === course.id;
    return (
      <div key={course.id} style={{ border: '1.5px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden', background: '#fff' }}>
        <div style={{ padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px', background: course.category === 'activity' ? '#dcfce7' : '#dbeafe', color: course.category === 'activity' ? '#166534' : '#1e40af' }}>
                  {course.category === 'activity' ? '🎯 액티비티' : '🏛️ 명소관광'}
                </span>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>{course.theme}</span>
              </div>
              <div style={{ fontWeight: '700', fontSize: '15px' }}>{course.title}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                <Clock size={10} style={{ display: 'inline', marginRight: '3px' }} />
                {course.steps.length}개 일정 · 하루 코스
              </div>
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginLeft: '8px' }}>
              <button
                onClick={() => handleSaveCourse(course)}
                style={{ background: isSaved ? '#3b82f6' : '#f1f5f9', border: 'none', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: isSaved ? '#fff' : '#475569', fontWeight: '600', whiteSpace: 'nowrap' }}
              >
                {isSaved ? <><Check size={11} />담김</> : <><Bookmark size={11} />전체담기</>}
              </button>
              <button
                onClick={() => setExpandedCourse(isExpanded ? null : course.id)}
                style={{ background: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '6px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>
          {!isExpanded && (
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '6px' }}>
              {course.steps.slice(0, 3).map((s, i) => (
                <span key={i} style={{ fontSize: '11px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '2px 7px', color: '#475569' }}>{s.place}</span>
              ))}
              {course.steps.length > 3 && <span style={{ fontSize: '11px', color: '#94a3b8' }}>+{course.steps.length - 3}곳</span>}
            </div>
          )}
        </div>
        {isExpanded && (
          <div style={{ borderTop: '1px solid #f1f5f9', background: '#fafafa' }}>
            {course.steps.map((step, i) => {
              const itemId  = `${course.id}-${step.time}`;
              const isSavedItem = savedItems.some(item => item.id === itemId);
              return (
                <div key={i} style={{ display: 'flex', gap: '12px', padding: '10px 16px', borderBottom: i < course.steps.length - 1 ? '1px solid #f1f5f9' : 'none', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '36px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#3b82f6' }}>{step.time}</span>
                    {i < course.steps.length - 1 && <div style={{ width: '1px', flex: 1, background: '#e2e8f0', marginTop: '4px', minHeight: '16px' }} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>{step.place}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{step.activity}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                      <Clock size={9} style={{ display: 'inline', marginRight: '2px' }} />{step.duration}
                    </div>
                  </div>
                  <button
                    onClick={() => handleSaveItem(step, course)}
                    style={{ background: isSavedItem ? '#dbeafe' : '#f1f5f9', border: 'none', borderRadius: '8px', padding: '5px 8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', fontSize: '11px', color: isSavedItem ? '#1e40af' : '#94a3b8', fontWeight: '600', whiteSpace: 'nowrap' }}
                  >
                    {isSavedItem ? <><Check size={10} />선택됨</> : <>+ 선택</>}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  /* ── Region panel ── */
  const renderRegionPanel = () => {
    if (!selectedRegion) return null;
    const spots = regionRecommendations[selectedRegion] ?? [];
    const filtered = categoryFilter === 'all' ? spots : spots.filter(r => r.category === categoryFilter);

    return (
      <div style={{ marginTop: '20px' }}>
        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', borderRadius: '14px', padding: '14px 16px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '24px' }}>📍</span>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', fontWeight: '600' }}>선택한 지역</div>
            <div style={{ color: '#fff', fontSize: '18px', fontWeight: '800' }}>{selectedRegion}</div>
          </div>
        </div>

        {/* Tab toggle */}
        <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '10px', padding: '3px', marginBottom: '14px' }}>
          {(['spots', 'courses'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setRegionTab(tab)}
              style={{ flex: 1, padding: '8px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '13px', background: regionTab === tab ? '#fff' : 'transparent', color: regionTab === tab ? '#3b82f6' : '#64748b', boxShadow: regionTab === tab ? '0 1px 4px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.15s' }}
            >
              {tab === 'spots' ? '🗺️ 주요 명소' : '📋 코스 추천'}
            </button>
          ))}
        </div>

        {/* ── Spots tab ── */}
        {regionTab === 'spots' && (
          <>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
              {(['all', 'landmark', 'food', 'activity'] as const).map(cat => {
                const isActive = categoryFilter === cat;
                const meta = cat === 'all' ? { label: '전체', emoji: '🗺️' } : categoryMeta(cat);
                return (
                  <button key={cat} onClick={() => setCategoryFilter(cat)} style={{ padding: '5px 12px', borderRadius: '20px', border: isActive ? '2px solid #3b82f6' : '2px solid #e2e8f0', background: isActive ? '#3b82f6' : '#fff', color: isActive ? '#fff' : '#475569', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.15s' }}>
                    <span>{meta.emoji}</span><span>{meta.label}</span>
                  </button>
                );
              })}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filtered.length > 0 ? filtered.map(rec => {
                const meta = categoryMeta(rec.category);
                return (
                  <div key={rec.id} className="card" style={{ borderLeft: `4px solid ${meta.border}`, padding: '12px 14px', cursor: 'pointer' }} onClick={() => setSelectedSpot(rec)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
                        <span style={{ fontSize: '20px' }}>{meta.emoji}</span>
                        <strong style={{ fontSize: '15px', lineHeight: '1.3' }}>{rec.name}</strong>
                      </div>
                      <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '20px', fontWeight: '600', whiteSpace: 'nowrap', background: meta.bg, color: meta.color }}>{meta.label}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '7px 0 4px 28px', lineHeight: '1.5' }}>{rec.description}</p>
                    <div style={{ fontSize: '11px', color: '#94a3b8', margin: '0 0 0 28px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <MapPin size={10} />
                      <span>{rec.location}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#3b82f6', margin: '4px 0 0 28px', fontWeight: '600' }}>탭하여 상세 정보 보기 →</div>
                  </div>
                );
              }) : (
                <div style={{ textAlign: 'center', padding: '24px', color: '#94a3b8', fontSize: '14px' }}>해당 카테고리의 추천 정보가 없습니다.</div>
              )}
            </div>
          </>
        )}

        {/* ── Courses tab ── */}
        {regionTab === 'courses' && (
          <>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
              {(['sightseeing', 'activity'] as const).map(cat => (
                <button key={cat} onClick={() => { setCourseCategory(cat); setExpandedCourse(null); }} style={{ flex: 1, padding: '8px', border: courseCategory === cat ? '2px solid #3b82f6' : '2px solid #e2e8f0', borderRadius: '10px', background: courseCategory === cat ? '#eff6ff' : '#fff', color: courseCategory === cat ? '#1e40af' : '#475569', fontSize: '13px', fontWeight: '700', cursor: 'pointer', transition: 'all 0.15s' }}>
                  {cat === 'sightseeing' ? '🏛️ 명소 관광 코스' : '🎯 액티비티 코스'}
                </button>
              ))}
            </div>
            {regionCourseList.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {regionCourseList.map(renderCourseCard)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 16px', color: '#94a3b8', fontSize: '14px' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>🗓️</div>
                이 지역의 코스 정보를 준비 중입니다.
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  const renderMain = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div className="content">
            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                {viewLevel === 'country' && (
                  <button onClick={handleBackToWorld} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <ChevronLeft size={20} />
                  </button>
                )}
                <h2 className="title" style={{ margin: 0 }}>
                  {viewLevel === 'world' ? '세계 여행 지도' : `${selectedCountry} 상세 지도`}
                </h2>
              </div>

              <div className="map-container" style={{ position: 'relative' }}>
                <ComposableMap
                  projectionConfig={activeCountryConfig ? activeCountryConfig.projection : { scale: 140 }}
                  style={{ width: "100%", height: "auto" }}
                >
                  <ZoomableGroup>
                    <Geographies geography={viewLevel === 'world' ? worldGeoUrl : activeCountryConfig?.url}>
                      {({ geographies }) =>
                        geographies && geographies.length > 0 ? geographies.map((geo: any) => {
                          const engRegionName = geo.properties.NAME_1 || geo.properties.name;
                          const nameKR = viewLevel === 'world'
                            ? getKoreanCountryName(geo.id, geo.properties.name)
                            : getKoreanRegionName(engRegionName);
                          const isSelected = viewLevel === 'country' && nameKR === selectedRegion;
                          return (
                            <Geography
                              key={geo.rsmKey || geo.id || engRegionName}
                              geography={geo}
                              onMouseEnter={() => { if (viewLevel === 'world') setSelectedCountry(nameKR); }}
                              onClick={() => { if (viewLevel === 'world') handleCountryClick(geo); else handleRegionClick(nameKR); }}
                              style={{
                                default: { fill: isSelected ? "#3b82f6" : "#D6D6DA", outline: "none" },
                                hover:   { fill: "#3b82f6", outline: "none", cursor: "pointer" },
                                pressed: { fill: "#2563eb", outline: "none" },
                              }}
                            />
                          );
                        }) : null
                      }
                    </Geographies>
                  </ZoomableGroup>
                </ComposableMap>
              </div>

              {!selectedRegion && selectedCountry && viewLevel === 'world' && (
                <div style={{ marginTop: '12px', fontSize: '14px', color: '#64748b' }}>
                  현재 선택: <strong>{selectedCountry}</strong>
                </div>
              )}

              {renderRegionPanel()}
            </div>

            {renderSpotModal()}
          </div>
        );

      case 'journal':
        return (
          <div className="content" style={{ padding: '16px' }}>
            <h2 className="title">내 여행 기록</h2>
            <div className="card">
              <div style={{ fontWeight: 'bold' }}>2025년 일본 여행</div>
              <div style={{ fontSize: '14px' }}>오사카, 교토 방문</div>
            </div>

            {(savedCourses.length > 0 || savedItems.length > 0) && (
              <>
                <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '20px 0 10px' }}>📋 저장한 코스</h3>
                {savedCourses.map(sc => (
                  <div key={sc.courseId} className="card" style={{ borderLeft: '4px solid #3b82f6', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: '700', fontSize: '14px' }}>{sc.title}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{sc.region} · {sc.steps.length}개 일정</div>
                      </div>
                      <button onClick={() => setSavedCourses(prev => prev.filter(c => c.courseId !== sc.courseId))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                        <X size={16} />
                      </button>
                    </div>
                    {sc.steps.map((step, i) => (
                      <div key={i} style={{ fontSize: '12px', color: '#475569', padding: '3px 0', borderTop: '1px solid #f1f5f9', marginTop: '6px', display: 'flex', gap: '8px' }}>
                        <span style={{ color: '#94a3b8', minWidth: '36px' }}>{step.time}</span>
                        <span><strong>{step.place}</strong> · {step.activity}</span>
                      </div>
                    ))}
                  </div>
                ))}

                {savedItems.length > 0 && (
                  <>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '20px 0 10px' }}>✅ 선택한 일정</h3>
                    {savedItems.map(item => (
                      <div key={item.id} className="card" style={{ borderLeft: '4px solid #22c55e', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontWeight: '700', fontSize: '14px' }}>{item.step.place}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{item.step.activity}</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{item.region} · {item.courseTitle} · {item.step.time}</div>
                        </div>
                        <button onClick={() => setSavedItems(prev => prev.filter(i => i.id !== item.id))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
            <button className="btn" style={{ width: '100%', marginTop: '12px' }}>+ 새 기록 추가</button>
          </div>
        );

      case 'recommend':
        return (
          <div className="content" style={{ padding: '16px' }}>
            <h2 className="title">추천 여행지</h2>
            <div className="card" style={{ borderLeft: '4px solid #3b82f6' }}>
              <Sparkles size={20} color="#3b82f6" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 'bold' }}>이탈리아 (Italy)</div>
              <p style={{ fontSize: '14px', color: '#64748b' }}>유럽 건축물과 미식을 좋아하시는 당신께 추천합니다.</p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <Sparkles size={20} color="#f59e0b" style={{ marginBottom: '8px' }} />
              <div style={{ fontWeight: 'bold' }}>태국 (Thailand)</div>
              <p style={{ fontSize: '14px', color: '#64748b' }}>가성비 넘치는 휴양지를 찾으신다면 제격입니다.</p>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="content" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: 40, background: '#e2e8f0', margin: '20px auto' }}></div>
            <h2 className="title">여행자 님</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '32px' }}>
              <div><strong>12</strong><div style={{ fontSize: '12px' }}>방문 국가</div></div>
              <div><strong>{savedCourses.length}</strong><div style={{ fontSize: '12px' }}>저장 코스</div></div>
              <div><strong>{savedItems.length}</strong><div style={{ fontSize: '12px' }}>저장 일정</div></div>
            </div>
            <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => setIsLoggedIn(false)}>로그아웃</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? renderAuth() : (
        <>
          {renderMain()}
          <nav className="nav-bar">
            <div className={`nav-item ${activeTab === 'map' ? 'active' : ''}`} onClick={() => setActiveTab('map')}>
              <MapIcon size={24} /><span>지도</span>
            </div>
            <div className={`nav-item ${activeTab === 'journal' ? 'active' : ''}`} onClick={() => setActiveTab('journal')}>
              <BookOpen size={24} /><span>기록</span>
            </div>
            <div className={`nav-item ${activeTab === 'recommend' ? 'active' : ''}`} onClick={() => setActiveTab('recommend')}>
              <Sparkles size={24} /><span>추천</span>
            </div>
            <div className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
              <User size={24} /><span>프로필</span>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default App;
