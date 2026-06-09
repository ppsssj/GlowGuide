# GlowGuide

GlowGuide는 메이크업 튜토리얼을 단순히 보는 경험에서, 직접 따라 하며 익히는 경험으로 바꾸는 AI-native AR 메이크업 코칭 앱입니다.

크리에이터가 만든 메이크업 룩을 사용자가 발견하고, 룩의 제품과 순서를 확인한 뒤, 얼굴 위 가이드 오버레이를 보며 단계별로 따라 할 수 있도록 돕는 모바일 중심 뷰티 플랫폼입니다.

## Why GlowGuide

기존 메이크업 튜토리얼은 영상 속 전문가의 손동작과 위치를 눈으로 추측해야 합니다.  
GlowGuide는 “어디에”, “어떤 방향으로”, “얼마나”, “어떤 순서로” 바르는지를 사용자의 얼굴 위에 코칭 UI로 안내하는 것을 목표로 합니다.

핵심은 필터가 아니라 코칭입니다.  
사용자가 완성된 얼굴을 즉시 합성해보는 것이 아니라, 실제로 자신의 얼굴에 메이크업을 재현할 수 있도록 돕습니다.

## Product Experience

### Discover Looks

사용자는 홈 피드에서 데일리, 블러쉬, 립, 컨투어 등 다양한 메이크업 룩을 탐색합니다.

![Home screen](Design/Home/screen.png)

### Learn The Recipe

각 룩은 제품, 난이도, 예상 소요 시간, 적용 단계로 구성됩니다. 사용자는 AR 코칭을 시작하기 전에 전체 메이크업 레시피를 미리 확인할 수 있습니다.

![Look Detail screen](Design/Look%20Detail/screen.png)

### Follow AR Coaching

AR Coaching 화면은 실제 카메라 경험을 전제로 한 mock UI입니다. 얼굴 위에 블러쉬 타원, 컨투어 밴드, 립 영역 같은 가이드가 표시되고, 하단 시트에서 단계별 설명과 진행률을 확인합니다.

![AR Coaching screen](Design/AR%20Coaching/screen.png)

### Review The Result

룩을 완료하면 before/after 비교, 정확도 점수, achievement, 사용 제품을 확인하고 저장하거나 다시 시도할 수 있습니다.

![Look Completed screen](Design/Look%20Completed/screen.png)

### Follow Creators

크리에이터 프로필에서는 대표 룩, 팔로워 통계, featured masterclass를 확인할 수 있습니다. GlowGuide는 크리에이터가 자신만의 메이크업 레시피를 AR 코칭 콘텐츠로 확장할 수 있는 플랫폼을 지향합니다.

![Creator Profile screen](Design/Creator%20Profile/screen.png)

## Creator Vision

Creator Editor는 현재 MVP에는 포함되어 있지 않지만, 향후 크리에이터가 직접 메이크업 스텝과 얼굴 가이드 영역을 편집하고 발행하는 도구로 확장될 예정입니다.

![Creator Editor screen](Design/Creator%20Editor/screen.png)

## MVP Scope

현재 앱은 사용자-facing MVP에 집중합니다.

- 룩 탐색
- 룩 상세 확인
- mock AR 코칭
- 완료 리뷰
- 크리에이터 프로필

현재 포함하지 않는 기능:

- 실제 카메라 연동
- MediaPipe 또는 face tracking
- 실시간 AI 분석
- Creator Editor 구현
- 백엔드, 인증, 결제, 커머스 연동

## Tech Stack

- Expo
- React Native
- TypeScript
- Expo Router
- React Native `StyleSheet`
- Expo Web for desktop development review

GlowGuide는 모바일 앱을 primary target으로 개발됩니다. Expo Web은 개발 중 빠른 UI 확인을 위한 보조 실행 환경입니다.

## Run

Install dependencies:

```bash
npm install
```

Run for mobile development:

```bash
npx expo start
```

Run on desktop with Expo Web:

```bash
npx expo start --web
```

Typecheck:

```bash
npm run typecheck
```

## Project Structure

```text
app/
  _layout.tsx
  index.tsx
  look/[id].tsx
  coaching/[id].tsx
  completed/[id].tsx
  creator/[id].tsx

src/
  shared/
    components/
    constants/
    data/
  features/
    home/
    look/
    coaching/
    creator/
```

## Design Notes

`Design/` 폴더의 HTML 파일은 Figma Make export 참고 자료입니다.  
앱 UI는 HTML 태그를 직접 재사용하지 않고 React Native 컴포넌트로 다시 구현했습니다.

`Design/**/screen.png` 파일은 현재 MVP의 디자인 기준 및 임시 visual placeholder로 사용됩니다.
