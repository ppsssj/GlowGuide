---
name: Luminous Beauty AR
colors:
  surface: '#fbf9fa'
  surface-dim: '#dbdada'
  surface-bright: '#fbf9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f4'
  surface-container: '#efedee'
  surface-container-high: '#e9e8e9'
  surface-container-highest: '#e3e2e3'
  on-surface: '#1b1c1d'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f1'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#5f5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe0'
  on-secondary-container: '#636263'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#fbf9fa'
  on-background: '#1b1c1d'
  surface-variant: '#e3e2e3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin: 24px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is centered on a premium, modern, and clean aesthetic tailored for an AR-driven beauty coaching experience. It aims to evoke a sense of professional expertise blended with approachable luxury. The target audience values precision, elegance, and a high-tech yet intuitive interface.

The visual style is a sophisticated mix of **Minimalism** and **Glassmorphism**. It utilizes heavy white space and a soft neutral palette to allow the user's camera feed and makeup colors to remain the focal point. Translucent layers and background blurs (glassmorphism) are used for overlays and floating panels to maintain a sense of depth and spatial awareness without disconnecting the user from the AR environment. The emotional response is one of confidence, clarity, and high-end fashion.

## Colors

This design system uses a high-contrast palette to balance functional clarity with brand expression.

- **Primary (#E91E63):** A vibrant pink used exclusively for primary actions, active states, and critical brand touchpoints.
- **Secondary (#1A1A1B):** A deep, near-black used for high-contrast typography and primary iconography to ensure maximum legibility against light backgrounds.
- **Tertiary (#F8F9FA):** A soft, off-white neutral used for page backgrounds and large container surfaces to reduce visual fatigue.
- **Neutral (#717172):** A medium gray reserved for secondary text, disabled states, and subtle borders.

The default mode is **Light**, utilizing semi-transparent white fills (80-90% opacity) with backdrop blurs to create the signature glassmorphism effect for mobile overlays.

## Typography

The typography system relies entirely on **Inter** to achieve a systematic, utilitarian, yet premium look. The scale is designed for high contrast; titles should be bold and tight in spacing to command attention, while body text remains open and legible.

Use `display-lg` for hero marketing moments. `headline-lg` and its mobile variant are the primary headers for feature screens. For interactive elements like buttons and navigation tabs, use `label-lg` in semi-bold to distinguish them from passive content. Letter spacing is slightly tightened on larger headings to maintain a "fashion editorial" feel.

## Layout & Spacing

This design system employs a **Fluid Grid** approach for mobile-first environments. The layout is structured around an 8px base unit to ensure consistent vertical rhythm.

- **Margins:** Standard side margins are set to 24px to provide a premium "breathable" feel.
- **Gutters:** Card grids and item lists use a 16px gutter.
- **Safe Areas:** For AR views, controls must be inset 32px from the bottom to avoid system gestures, and key info should be placed in the top-third "safe zone."

The layout scales from a 4-column mobile grid to a 12-column desktop grid for admin/dashboard views, maintaining the same 24px external margins.

## Elevation & Depth

Depth is conveyed through **Glassmorphism** and **Ambient Shadows**. Instead of traditional solid cards, use semi-transparent surfaces with a 20px backdrop blur to let the camera feed or background gradients subtly bleed through.

- **Level 1 (Base):** Flat surfaces with a 1px soft neutral border (#E0E0E0).
- **Level 2 (Floating Panels):** Glass effect (White @ 85%) with a subtle 12px blur, 10% opacity black shadow, and a 0.5px white inside-stroke to simulate light catching the edge.
- **Level 3 (Modals/Popovers):** Deeper ambient shadows (24px blur) and a darker backdrop dimming to pull focus.

Shadows should never be pure black; they are tinted with the secondary color at very low opacities to maintain the "clean" aesthetic.

## Shapes

The shape language is consistently **Rounded**, reflecting the soft contours of the face and beauty products. 

- **Standard Buttons/Inputs:** 0.5rem (8px) radius.
- **Cards/Overlays:** 1rem (16px) radius for a modern, friendly feel.
- **Selection Chips:** 1.5rem (24px) or fully pill-shaped for a tactile, "squishy" appearance.

Avoid sharp corners entirely to maintain the approachable, premium coaching vibe.

## Components

- **Buttons:** Primary buttons use the #E91E63 background with white text and a subtle drop shadow. Secondary buttons are "ghost" style with a 1px dark border.
- **Glass Cards:** Used for AR coaching instructions. These feature a 16px corner radius and a 20px backdrop blur.
- **Color Swatches:** Round chips used for makeup shade selection, featuring a 2px white "active" ring when selected.
- **Input Fields:** Minimalist style with a 1px bottom border that transforms into a full 8px-rounded box with a soft glow on focus.
- **Progress Steppers:** Thin 2px lines for "tutorial" steps, using the primary accent color for completed stages.
- **AR Viewfinder:** Reticle and alignment guides use high-contrast white with 50% opacity, pulse-animating in the primary color when a face is detected.