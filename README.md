# GlowGuide (화장 SNS) — AR Makeup Coaching Platform

> 인플루언서 메이크업 튜토리얼을 **재현 가능한 “룩 레시피(Recipe)”**로 변환하고, 사용자가 **AR 단계별 코칭**으로 실제로 따라 하게 만드는 SNS  
> **뷰티 필터 앱이 아니라, 코칭(How-to) 앱**입니다.

---

## 핵심 한 줄
**Tutorial Video → Look Recipe(절차/좌표/동작) → AR Coach(오버레이/가이드/진행률/피드백)**

---

## Problem
일반적인 메이크업 튜토리얼은 “영상 시청”만으로는 재현이 어렵습니다.

- 어디에 발라야 하는지(정확한 부위/범위)
- 어떻게 움직여야 하는지(방향/스트로크/블렌딩)
- 얼마나 해야 하는지(강도/면적/시간)
- 어떤 순서로 해야 하는지(스텝 시퀀스)

GlowGuide는 이를 **절차(Procedure)**로 구조화하고, 사용자의 얼굴 위에 **AR로 코칭**합니다.
---

## Design (Figma)
- Figma: `화장 SNS`  
  https://www.figma.com/design/swWvlVHguZtcmvjleDuj5u/%ED%99%94%EC%9E%A5-SNS?t=SgXCDRehHM8I9qqI-1

> 주요 화면: Explore / Look Detail / AR Coaching / Completed / Creator Studio
---

## MVP Scope
**Daily 룩** 중심으로 아래 3종 파트를 1차 완성 범위로 잡습니다.

- **Blush(블러셔)**: 타원/소프트 마스크 오버레이 + 방향 가이드
- **Lip(립)**: 윤곽 + 그라데이션 영역 가이드
- **Contour/Shading(쉐딩/컨투어)**: 턱선/광대 밴드 오버레이 + 블렌딩 방향 가이드

> MVP의 목표는 “색 정확도 평가”가 아니라 **위치/방향/범위/진행률 코칭**입니다.

---

## Key Features

### For Users
- **Explore/Feed**: 룩 탐색(태그/난이도/소요시간/트렌딩)
- **Look Detail**: 레시피 개요(스텝/제품/대체제품)
- **AR Coaching**
  - 얼굴 위 오버레이(soft mask / ellipse / band)
  - 모션 가이드(방향/스트로크 힌트)
  - 진행률(coverage %) + 간단 피드백 토스트
  - 트래킹/조명 상태(Tracking stable / Too dark)
- **Completed Review**
  - 전/후 비교
  - 요약(완주, 일관성/균형 지표)
  - 제품 리스트 + 대체 제품 + 저장/공유/재시도

### For Creators
- **Creator Studio**
  - 튜토리얼 업로드
  - 스텝 타임라인 편집(split/merge/reorder)
  - 얼굴 오버레이 편집(ellipse / soft mask brush / band / mirror L/R)
  - 스텝 속성(카테고리, 한 문장 안내, 방향, 강도)
  - 제품 연결(스텝별 제품/대체제품)
  - AR Preview 시뮬레이션
  - Publish(검증/에러 상태 포함)

---

## Product Concept

### Look Recipe = Procedure + Face-Coordinate Actions
룩은 “예쁘다”가 아니라 **재현 가능한 절차**로 저장됩니다.

- Step = (Region) + (Action) + (Intensity) + (Tool/Product)
- Region은 얼굴 랜드마크 기반 **정규화 좌표계**에서 정의 → 얼굴 형태가 달라도 적용 가능

---

## Architecture (High Level)

### Mobile (Client)
- 전면 카메라 + 얼굴 트래킹
- AR 오버레이 렌더러
- 스텝 진행 UI(바텀시트 + Next gating)
- 전/후 캡처(완료 화면)

### Backend
- Look / Steps / Products 저장 및 조회
- Creator 업로드 파이프라인
- 추천/탐색(태그, 난이도, 트렌딩)
- 이벤트 트래킹(완주율/이탈 구간)

### (Optional) AI Pipeline (Future)
- 영상에서 스텝 분할(음성/화면 변화/도구 움직임)
- 적용 부위 추정(세그먼트/색 변화)
- 동작 분류(pat/swipe/blend)

> 초기에는 “자동 100%”보다 **자동 초안 + 크리에이터 편집/승인**으로 품질을 확보합니다.

---

## Recipe Data Model (Simplified)

```json
{
  "lookId": "look_123",
  "title": "Natural Sun-Kissed Glow",
  "difficulty": "easy",
  "estimatedTimeSec": 900,
  "products": [
    { "category": "blush", "brand": "NARS", "name": "Orgasm", "shadeName": "Peach Pink" }
  ],
  "steps": [
    {
      "order": 3,
      "category": "blush",
      "name": "Blush – Left Cheek",
      "instructionText": "Apply upward along the cheekbone for a lifted effect.",
      "faceAction": {
        "overlay": { "type": "ellipse", "softEdge": 0.7 },
        "motionGuide": { "type": "arrows", "direction": "outward" },
        "intensityGuide": { "target": 0.6 }
      },
      "requirements": { "coverageMin": 0.4, "timeMinSec": 10 }
    }
  ]
}
```

---

## Roadmap

### v0 (MVP)
- Daily 룩: **Blush + Lip + Contour**
- Creator Studio 레시피 편집기
- AR 코칭(오버레이 + 진행률 + 단순 피드백)
- 완료 리뷰 + 저장/공유

### v1
- 코칭 고도화(도구/손 움직임 힌트)
- 개인화(선호 강도/얼굴 타입)
- 대체 제품 추천 강화
- 크리에이터 대시보드(완주율/드롭오프)

### v2
- 튜토리얼 기반 반자동 레시피 추출
- SDK/B2B(뷰티 커머스/브랜드 앱 연동)

---

## Getting Started
> WIP — 실행 가능한 프로토타입과 설치 가이드는 추후 추가됩니다.

---

## License
TBD
