# @dgshahr/ui-kit — Integration Guide

Reference for integrating `@dgshahr/ui-kit` into a React project. Written for both humans and AI coding agents (Claude Code, Cursor, Copilot, Windsurf, etc.). This file ships inside the npm package at `node_modules/@dgshahr/ui-kit/INTEGRATION.md`.

- Storybook (live demos): https://dgshahr.github.io/uikit/
- Source: https://github.com/dgshahr/uikit
- TypeScript declarations (source of truth for props): `node_modules/@dgshahr/ui-kit/dist/**/index.d.ts`

## Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Imports](#imports)
4. [Next.js / SSR](#nextjs--ssr)
5. [Theming](#theming)
6. [Component reference](#component-reference)
7. [Rules for AI agents](#rules-for-ai-agents)
8. [Agent setup snippets](#agent-setup-snippets)

---

## Overview

- React component library written in TypeScript.
- Styled with Tailwind CSS v4 using the scoped prefix `dgsuikit:`. Styles are **pre-compiled and auto-injected** when a component is imported — no Tailwind, PostCSS or global CSS import needed in the consumer project.
- RTL-first: text inputs default to `dir="rtl"`; the Datepicker uses the Jalali (Persian) calendar.
- Colors are driven by CSS variables (`--dgs-color-*`) and can be overridden globally.

## Installation

```bash
npm install @dgshahr/ui-kit
# or
yarn add @dgshahr/ui-kit
# or
pnpm add @dgshahr/ui-kit
```

Peer dependencies: `react >= 18.2.0`, `react-dom >= 18.2.0`.

## Imports

Two equivalent styles:

```tsx
// 1. Root named import
import { Button, Input, Select } from '@dgshahr/ui-kit';

// 2. Per-component subpath (default export) — smaller bundles
import Button from '@dgshahr/ui-kit/Button';
import Input from '@dgshahr/ui-kit/Form/Input';
```

| Component        | Root named export                     | Subpath                                      |
| ---------------- | ------------------------------------- | -------------------------------------------- |
| Accordion        | `AccordionGroup`, `AccordionItem`     | `@dgshahr/ui-kit/Accordion` (named)          |
| Alert            | `Alert`                               | `@dgshahr/ui-kit/Alert`                      |
| Badge            | `Badge`                               | `@dgshahr/ui-kit/Badge`                      |
| Breadcrumb       | `Breadcrumb`                          | `@dgshahr/ui-kit/Breadcrumb`                 |
| Button           | `Button`                              | `@dgshahr/ui-kit/Button`                     |
| Card             | `Card`                                | `@dgshahr/ui-kit/Card`                       |
| Chip             | `Chip`                                | `@dgshahr/ui-kit/Chip`                       |
| Divider          | `Divider`                             | `@dgshahr/ui-kit/Divider`                    |
| Drawer           | `Drawer`                              | `@dgshahr/ui-kit/Drawer`                     |
| Checkbox         | `Checkbox`                            | `@dgshahr/ui-kit/Form/Checkbox`              |
| Datepicker       | `Datepicker`                          | `@dgshahr/ui-kit/Form/Datepicker`            |
| FileUploader     | `FileUploader`                        | `@dgshahr/ui-kit/Form/FileUploader`          |
| Input            | `Input`                               | `@dgshahr/ui-kit/Form/Input`                 |
| OtpInput         | `OtpInput`                            | `@dgshahr/ui-kit/Form/OtpInput`              |
| RadioButton      | `RadioButton`                         | `@dgshahr/ui-kit/Form/RadioButton`           |
| RangeInput       | `RangeInput`                          | `@dgshahr/ui-kit/Form/RangeInput`            |
| Select           | `Select`                              | `@dgshahr/ui-kit/Form/Select`                |
| Switch           | `Switch`                              | `@dgshahr/ui-kit/Form/Switch`                |
| Textarea         | `Textarea`                            | `@dgshahr/ui-kit/Form/Textarea`              |
| Timepicker       | `Timepicker`                          | `@dgshahr/ui-kit/Form/Timepicker`            |
| Menu             | `Menu` (+ `Menu.Item`)                | `@dgshahr/ui-kit/Menu`                       |
| Pagination       | `Pagination`                          | `@dgshahr/ui-kit/Pagination`                 |
| ProgressBar      | `ProgressBar`                         | `@dgshahr/ui-kit/Progress/Bar`               |
| ProgressDoughnut | `ProgressDoughnut`                    | `@dgshahr/ui-kit/Progress/Doughnut`          |
| ProgressStep     | — (subpath only)                      | `@dgshahr/ui-kit/Progress/Step`              |
| Rate             | `Rate`                                | `@dgshahr/ui-kit/Rate`                       |
| Sidebar          | `Sidebar`                             | `@dgshahr/ui-kit/Sidebar`                    |
| Slider           | `Slider`, `Slide`                     | `@dgshahr/ui-kit/Slider` (named)             |
| Stepper          | `HorizontalStepper`, `HorizontalStep` | `@dgshahr/ui-kit/Stepper/Horizontal` (named) |
| Table            | `Table`                               | `@dgshahr/ui-kit/Table`                      |
| Tabs             | `Tabs`                                | `@dgshahr/ui-kit/Tabs`                       |
| Tooltip          | `Tooltip`                             | `@dgshahr/ui-kit/Tooltip`                    |

Form components live under `Form/` in subpaths (`@dgshahr/ui-kit/Form/Input`, **not** `@dgshahr/ui-kit/Input`).

Prop types are exported from the component modules, e.g. `import type { ButtonProps } from '@dgshahr/ui-kit/Button'`.

## Next.js / SSR

- Works with the Next.js App Router and Pages Router. No `transpilePackages` needed.
- Interactive components (inputs, pickers, Select, Drawer, Tooltip, Menu, Slider, Table, Tabs, Switch, etc.) use React state/effects. In the App Router, render them from a Client Component (`'use client'` at the top of your file).
- Portal-based components (Drawer, pickers in popover/drawer mode, Tooltip with `attachToBody`) access `document` only on the client.

## Theming

Every color is a CSS variable holding **space-separated RGB numbers** (not hex):

```
--dgs-color-{palette}-{shade}: {r} {g} {b};
```

Palettes: `primary`, `secondary`, `gray`, `success`, `error`, `warning`, `sky`, `violet`, `flamingo`.
Shades: `50 100 200 300 400 500 600 700 800 900`.

Override in your global CSS:

```css
:root {
  --dgs-color-primary-500: 16 185 143;
  --dgs-color-primary-600: 12 160 124;
}
```

Scope overrides to a subtree by setting the variables on any ancestor selector instead of `:root`.

Styling individual components: nearly every component accepts `className` and often more specific slots (`wrapperClassName`, `containerClassName`, `popoverClassName`, …). Use your own CSS/Tailwind classes there.

---

## Component reference

Legend: **bold** prop name = required. `Default` column shows the runtime default when one exists. Unless stated otherwise, `className` applies to the outermost element.

### AccordionGroup / AccordionItem

```tsx
import { AccordionGroup, AccordionItem } from '@dgshahr/ui-kit';

<AccordionGroup defaultActiveKey="a">
  <AccordionItem
    accordionKey="a"
    title="Shipping"
  >
    …
  </AccordionItem>
  <AccordionItem
    accordionKey="b"
    title="Returns"
  >
    …
  </AccordionItem>
</AccordionGroup>;
```

`AccordionGroup`

| Prop             | Type                 | Default | Notes                            |
| ---------------- | -------------------- | ------- | -------------------------------- |
| defaultActiveKey | `string \| string[]` |         | Initially open item key(s)       |
| disableAccordion | `boolean`            | `false` | Allow several items open at once |
| className        | `string`             |         |                                  |
| children         | `ReactNode`          |         | `AccordionItem` elements         |

`AccordionItem`

| Prop             | Type        | Default |
| ---------------- | ----------- | ------- |
| **title**        | `ReactNode` |         |
| accordionKey     | `string`    |         |
| disable          | `boolean`   |         |
| hideDivider      | `boolean`   | `false` |
| hideArrow        | `boolean`   | `false` |
| className        | `string`    |         |
| titleClassName   | `string`    |         |
| contentClassName | `string`    |         |
| children         | `ReactNode` |         |

### Alert

```tsx
<Alert
  variant="warning"
  title="Heads up"
  text="Your session expires in 5 minutes."
  primaryButton={{ text: 'Extend', onClick: extend }}
  closable
/>
```

| Prop          | Type                                                                     | Default     |
| ------------- | ------------------------------------------------------------------------ | ----------- |
| **text**      | `ReactNode`                                                              |             |
| variant       | `'warning' \| 'primary' \| 'error' \| 'success' \| 'gray'`               | `'primary'` |
| size          | `'large' \| 'small'`                                                     | `'small'`   |
| title         | `string`                                                                 |             |
| primaryButton | `ButtonProps` (without variant/color/size/children) & `{ text: string }` |             |
| outlineButton | same as `primaryButton`                                                  |             |
| closable      | `boolean`                                                                |             |
| showTitleIcon | `boolean`                                                                | `true`      |
| className     | `string`                                                                 |             |

### Badge

```tsx
<Badge value="New" color="success" type="twoTone" />
<Badge valueType="number" value={12} />
```

| Prop                 | Type                                                                                                         | Default     |
| -------------------- | ------------------------------------------------------------------------------------------------------------ | ----------- |
| **value**            | `string \| number`                                                                                           |             |
| type                 | `'twoTone' \| 'solid'`                                                                                       | `'solid'`   |
| color                | `'primary' \| 'secondary' \| 'gray' \| 'success' \| 'error' \| 'warning' \| 'sky' \| 'violet' \| 'flamingo'` | `'primary'` |
| size                 | `'small' \| 'medium' \| 'large'`                                                                             | `'medium'`  |
| valueType            | `'text' \| 'number'`                                                                                         | `'text'`    |
| width                | `string \| number`                                                                                           |             |
| leftIcon / rightIcon | `ReactNode` — only when `valueType` is `'text'`                                                              |             |
| icon                 | `ReactNode` — **deprecated**, use `leftIcon`/`rightIcon`                                                     |             |
| className            | `string`                                                                                                     | `''`        |

### Breadcrumb

```tsx
<Breadcrumb
  pageTitle="Order #123"
  items={[
    { title: 'Home', link: '/' },
    { title: 'Orders', onClick: () => router.push('/orders') },
  ]}
/>
```

| Prop      | Type               |
| --------- | ------------------ |
| **items** | `BreadcrumbItem[]` |
| pageTitle | `string`           |
| className | `string`           |

`BreadcrumbItem = { title: string; icon?: ReactNode } & ({ link: string } | { onClick: () => void })` — provide exactly one of `link` / `onClick`.

### Button

Extends all native `<button>` attributes.

```tsx
<Button
  variant="outline"
  color="error"
  size="small"
  leftIcon={<TrashIcon />}
  isLoading={pending}
>
  Delete
</Button>
```

| Prop                 | Type                                                       | Default     |
| -------------------- | ---------------------------------------------------------- | ----------- |
| variant              | `'primary' \| 'secondary' \| 'outline' \| 'text'`          | `'primary'` |
| color                | `'primary' \| 'warning' \| 'error' \| 'success' \| 'gray'` | `'primary'` |
| size                 | `'small' \| 'medium' \| 'large'`                           |             |
| isFullWidth          | `boolean`                                                  |             |
| isLoading            | `boolean`                                                  |             |
| leftIcon / rightIcon | `JSX.Element`                                              |             |
| …native              | `ButtonHTMLAttributes<HTMLButtonElement>`                  |             |

### Card

```tsx
<Card
  color="primary"
  header={{ title: 'Summary', icon: <InfoIcon />, Element: <Button size="small">Edit</Button> }}
>
  …
</Card>
```

| Prop             | Type                                                                                                                                 | Default    |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **children**     | `ReactNode`                                                                                                                          |            |
| size             | `'small' \| 'medium'`                                                                                                                | `'medium'` |
| color            | `'primary' \| 'warning' \| 'error' \| 'success' \| 'gray' \| 'white'`                                                                | `'white'`  |
| header           | `{ title?: string; icon?: ReactNode; variant?: 'primary' \| 'default'; Element?: ReactNode; color?: CardColor; className?: string }` |            |
| className        | `string`                                                                                                                             |            |
| wrapperClassName | `string`                                                                                                                             |            |

### Chip

```tsx
<Chip
  label="Filter"
  clickable
  isActive={active}
  onClick={toggle}
/>
```

| Prop                 | Type                                                                                    | Default     |
| -------------------- | --------------------------------------------------------------------------------------- | ----------- |
| **label**            | `string \| ReactNode`                                                                   |             |
| size                 | `'xsmall' \| 'small' \| 'large'`                                                        | `'small'`   |
| color                | `'primary' \| 'gray'`                                                                   | `'primary'` |
| filled               | `boolean`                                                                               |             |
| isActive             | `boolean`                                                                               |             |
| disabled             | `boolean`                                                                               |             |
| badgeNumber          | `number`                                                                                |             |
| leftIcon / rightIcon | `ReactNode`                                                                             | `null`      |
| clickable            | `boolean` — `true` renders a `<button>` (button attrs); otherwise a `<div>` (div attrs) |             |

### Divider

| Prop      | Type                         | Default  |
| --------- | ---------------------------- | -------- |
| **type**  | `'horizontal' \| 'vertical'` |          |
| size      | `'thin' \| 'thick'`          | `'thin'` |
| color     | `'white' \| 'gray'`          | `'gray'` |
| className | `string`                     |          |

### Drawer

```tsx
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  position="right"
  header={{ title: 'Filters', haveCloseIcon: true }}
  footer={{ element: <Button isFullWidth>Apply</Button> }}
>
  …
</Drawer>
```

| Prop                                           | Type                                                                                                                        | Default    |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **open**                                       | `boolean`                                                                                                                   |            |
| **onClose**                                    | `() => void`                                                                                                                |            |
| position                                       | `'bottom' \| 'top' \| 'right' \| 'left' \| 'center'`                                                                        | `'bottom'` |
| persist                                        | `boolean` — clicking the mask does not close the drawer                                                                     |            |
| padding                                        | `number`                                                                                                                    | `8`        |
| width                                          | `CSSProperties['width']`                                                                                                    |            |
| header                                         | `{ title?: string; description?: string; haveCloseIcon?: boolean; actionElement?: ReactNode; containerClassName?: string }` |            |
| footer                                         | `{ element?: ReactNode; containerClassName?: string }`                                                                      |            |
| containerElement                               | `Element \| null` — portal target                                                                                           |            |
| havePopover                                    | `boolean`                                                                                                                   |            |
| className / maskClassName / containerClassName | `string`                                                                                                                    |            |
| children                                       | `ReactNode`                                                                                                                 |            |

---

### Form: shared field props

`Input`, `Textarea`, `OtpInput` (and `inputProps` of pickers/Select) share these **text-field props**:

| Prop                 | Type                                | Default | Notes                                               |
| -------------------- | ----------------------------------- | ------- | --------------------------------------------------- |
| labelContent         | `string`                            |         | Label text                                          |
| labelAddon           | `ReactNode`                         |         | Extra node next to label                            |
| link                 | `{ cnotent: string; href: string }` |         | Link next to label (note: key is spelled `cnotent`) |
| required             | `boolean`                           |         | Shows required marker                               |
| disabled             | `boolean`                           |         |                                                     |
| isError              | `boolean`                           |         | Error styling                                       |
| errorMessage         | `ReactNode`                         |         |                                                     |
| hintMessage          | `ReactNode`                         |         |                                                     |
| hintMessageClassName | `string`                            |         |                                                     |
| showMaxLength        | `boolean`                           |         | Shows `value.length / maxLength` counter            |
| rightIcon            | `JSX.Element`                       |         |                                                     |
| dir                  | `'rtl' \| 'ltr'`                    | `'rtl'` |                                                     |
| placeholderDir       | `'rtl' \| 'ltr'`                    | = `dir` |                                                     |
| containerClassName   | `string`                            |         | Field box                                           |
| wrapperClassName     | `string`                            |         | Outer wrapper (label + field + info)                |

`Checkbox` and `RadioButton` share **choice props**:

| Prop               | Type                                  | Default     | Notes                            |
| ------------------ | ------------------------------------- | ----------- | -------------------------------- |
| label              | `string \| ReactNode`                 |             |                                  |
| variant            | `'default' \| 'bordered'`             | `'default'` |                                  |
| icon               | `ReactNode`                           |             | Only with `variant="bordered"`   |
| isError            | `boolean`                             |             |                                  |
| errorMessage       | `string`                              |             |                                  |
| helperMessage      | `string`                              |             |                                  |
| containerClassName | `string`                              |             |                                  |
| …native            | `InputHTMLAttributes` (except `type`) |             | `checked`, `onChange`, `name`, … |

### Input

`forwardRef<HTMLInputElement>`. Extends native input attributes (except `dir`, `prefix`) + text-field props.

```tsx
<Input
  labelContent="Email"
  dir="ltr"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onClear={() => setEmail('')}
  errorMessage={errors.email}
/>
```

| Prop                               | Type                     | Notes                                       |
| ---------------------------------- | ------------------------ | ------------------------------------------- |
| leftIcon                           | `JSX.Element`            |                                             |
| prefix / postfix                   | `ReactNode`              | Inline adornments                           |
| prefixClassName / postfixClassName | `string`                 |                                             |
| onClear                            | `() => void`             | Shows a clear button when provided          |
| onInput                            | `(e) => void \| boolean` | Return `true` to stop the built-in handling |
| type="password"                    |                          | Adds a show/hide toggle                     |

### Textarea

`forwardRef<HTMLTextAreaElement>`. Native textarea attributes (except `dir`, `onClick`) + text-field props.

```tsx
<Textarea
  labelContent="Description"
  maxLength={300}
  showMaxLength
  value={v}
  onChange={(e) => setV(e.target.value)}
/>
```

### OtpInput

| Prop                     | Type                      | Default |
| ------------------------ | ------------------------- | ------- | -------------------------------- |
| **value**                | `string`                  |         |
| **onChange**             | `(value: string) => void` |         |
| onEnd                    | `(value: string) => void` |         | Fired when all digits are filled |
| inputsNumber             | `number`                  | `4`     |
| inputsContainerClassName | `string`                  |         |
| className                | `string`                  |         |
| …                        | other `InputProps`        |         |

### Checkbox

Choice props + `isIndeterminate?: boolean`.

```tsx
<Checkbox
  label="Accept terms"
  checked={ok}
  onChange={(e) => setOk(e.target.checked)}
/>
```

### RadioButton

Choice props.

```tsx
<RadioButton
  name="plan"
  value="pro"
  label="Pro"
  checked={plan === 'pro'}
  onChange={() => setPlan('pro')}
/>
```

### Switch

| Prop                           | Type                         | Default   |
| ------------------------------ | ---------------------------- | --------- |
| **checked**                    | `boolean`                    |           |
| **onChange**                   | `(checked: boolean) => void` |           |
| label                          | `string`                     |           |
| description                    | `string`                     |           |
| size                           | `'large' \| 'small'`         | `'large'` |
| disabled                       | `boolean`                    |           |
| isIntermediate                 | `boolean`                    |           |
| className / containerClassName | `string`                     |           |

### RangeInput

Generic: `number` for a single thumb, `number[]` for a range.

```tsx
<RangeInput
  min={0}
  max={100}
  value={[20, 80]}
  onChange={setRange}
  startTitle="Min"
  endTitle="Max"
/>
```

| Prop                  | Type                                         | Default     |
| --------------------- | -------------------------------------------- | ----------- |
| **value**             | `number \| number[]`                         |             |
| **onChange**          | `(value) => void` (same type as `value`)     |             |
| **min**               | `number`                                     |             |
| **max**               | `number`                                     |             |
| step                  | `number`                                     | `1`         |
| color                 | `'primary' \| 'secondary'`                   | `'primary'` |
| tooltip               | `boolean \| ReactNode`                       | `true`      |
| tooltipSize           | `'small' \| 'medium' \| 'large' \| 'xLarge'` | `'medium'`  |
| tooltipClassName      | `string`                                     |             |
| startTitle / endTitle | `string`                                     |             |
| disabled              | `boolean`                                    |             |
| wrapperClassName      | `string`                                     |             |

### Picker wrapper props (Select, Datepicker, Timepicker)

| Prop             | Type                                                                                                                   | Default     | Notes                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------- |
| dropdownType     | `'popover' \| 'drawer'`                                                                                                | `'popover'` |                                        |
| popoverPosition  | `'top' \| 'bottom' \| 'top-left' \| 'top-center' \| 'top-right' \| 'bottom-left' \| 'bottom-center' \| 'bottom-right'` |             | Popover only                           |
| popoverClassName | `string`                                                                                                               |             | Popover only                           |
| drawerProps      | `DrawerProps` without `children`/`open`/`onClose`                                                                      |             | Drawer only                            |
| inputProps       | `InputProps` without `leftIcon`                                                                                        |             | Props for the built-in trigger input   |
| customInput      | `(isOpen: boolean) => ReactNode`                                                                                       |             | Replace trigger; excludes `inputProps` |
| isLoading        | `boolean`                                                                                                              |             |                                        |
| disabled         | `boolean`                                                                                                              |             |                                        |
| wrapperClassName | `string`                                                                                                               |             |                                        |

### Select

Generic over option value `T`. Single or multiple mode.

```tsx
<Select
  options={[{ value: 1, label: 'Tehran' }, { value: 2, label: 'Shiraz' }]}
  value={city}
  onChange={setCity}
  searchable
  inputProps={{ labelContent: 'City', placeholder: 'Choose…' }}
/>

<Select mode="multiple" options={tags} value={selected} onChange={setSelected} optionsTitle="Tags" />
```

| Prop                         | Type                                                | Notes                  |
| ---------------------------- | --------------------------------------------------- | ---------------------- |
| **options**                  | `{ value: T; label: string; disabled?: boolean }[]` |                        |
| **value**                    | `T` (single) / `T[]` (multiple)                     |                        |
| **onChange**                 | `(value: T) => void` / `(value: T[]) => void`       |                        |
| mode                         | `'single' \| 'multiple'`                            | default single         |
| searchable                   | `boolean \| InputProps` (without `onChange`)        |                        |
| optionCell                   | `(option, isActive: boolean) => ReactNode`          | Custom option renderer |
| optionCellClassName          | `string`                                            |                        |
| beforeOptions / afterOptions | `ReactNode`                                         |                        |
| emptyContent                 | `ReactNode`                                         |                        |
| showClearButtonOnEmpty       | `boolean`                                           |                        |
| optionsTitle                 | `string`                                            | Multiple mode only     |
| separateSelectedOptions      | `boolean`                                           | Multiple mode only     |
| …                            | picker wrapper props                                |                        |

### Datepicker

Jalali (Persian) calendar. Values are native JS `Date` objects.

```tsx
<Datepicker value={date} onChange={setDate} inputProps={{ labelContent: 'Birth date' }} />

<Datepicker acceptRange value={{ start, end }} onChange={({ start, end }) => …} />
```

| Prop                 | Type                                                                                | Default | Notes                                       |
| -------------------- | ----------------------------------------------------------------------------------- | ------- | ------------------------------------------- |
| **value**            | `Date \| null` — or `{ start: Date \| null; end: Date \| null }` with `acceptRange` |         |                                             |
| **onChange**         | `(value: Date) => void` — or `(value: { start; end }) => void` with `acceptRange`   |         |                                             |
| acceptRange          | `boolean`                                                                           |         | Range selection                             |
| mode                 | `'input' \| 'calendar'`                                                             |         | `'calendar'` renders inline calendar        |
| startDate / endDate  | `Date`                                                                              |         | Selectable bounds                           |
| disableDates         | `Date[]`                                                                            |         |                                             |
| holidays             | `Date[]`                                                                            |         |                                             |
| highlightWeekends    | `boolean`                                                                           |         |                                             |
| showExtraDays        | `boolean`                                                                           |         | Show adjacent-month days                    |
| showTodayButton      | `boolean`                                                                           | `true`  |                                             |
| showSubmitButton     | `boolean`                                                                           | `true`  |                                             |
| onSubmit             | `() => void`                                                                        |         | Only when `showSubmitButton` is not `false` |
| onInternalDateChange | `(date: Date) => void`                                                              |         | Visible month/year changes                  |
| dayHoverAction       | `{ onClick: (day: DayItem) => void; element: (day: DayItem) => ReactNode }`         |         |                                             |
| …                    | picker wrapper props                                                                |         |                                             |

### Timepicker

Values are `Date` objects (hour/minute are read from them).

```tsx
<Timepicker
  value={time}
  onChange={setTime}
  minuteStep={15}
/>
```

| Prop                     | Type                                               | Default |
| ------------------------ | -------------------------------------------------- | ------- |
| **value** / **onChange** | same shape as Datepicker (single or `acceptRange`) |         |
| acceptRange              | `boolean`                                          |         |
| mode                     | `'input' \| 'time'`                                |         |
| minuteStep               | `number`                                           | `1`     |
| showNowButton            | `boolean`                                          | `true`  |
| showSubmitButton         | `boolean`                                          | `true`  |
| onSubmit                 | `() => void`                                       |         |
| …                        | picker wrapper props                               |         |

### FileUploader

```tsx
<FileUploader
  files={file ? { file } : undefined}
  onChange={(f) => setFile(f)}
  fileInputProps={{ title: 'Upload avatar', accept: 'image/*' }}
/>

<FileUploader
  mode="multiple"
  files={files.map((file) => ({ file }))}
  onChange={(_, list) => setFiles(Array.from(list ?? []))}
  previewProps={{ type: 'grid' }}
/>
```

| Prop           | Type                                                                                                                                                                              | Notes                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| **onChange**   | `(file: File \| undefined, files: FileList \| null) => void`                                                                                                                      |                         |
| mode           | `'single' \| 'multiple'`                                                                                                                                                          | default single          |
| files          | `FileType` (single) / `FileType[]` (multiple)                                                                                                                                     | Controlled preview list |
| previewProps   | `{ type?: 'default' \| 'compact' }` (single) / `{ type?: 'list' \| 'grid' }` (multiple), plus `leftButton`, `rightButton`, `exteraButton`, `wrapperClassName`, `previewClassName` |                         |
| hideFileInput  | `boolean`                                                                                                                                                                         | Multiple mode only      |
| fileInputProps | `{ title?; description?; hideIcon?; button?: boolean \| ButtonProps; helperProps?; …native file input attrs }`                                                                    |                         |
| isError        | `boolean`                                                                                                                                                                         |                         |
| disabled       | `boolean`                                                                                                                                                                         |                         |
| className      | `string`                                                                                                                                                                          |                         |

`FileType = { file: File } | { src: string }` plus optional `loading?: boolean | number` (number = upload %), `status?: 'warning' | 'error' | 'default'`, `title?`, `errorMessage?`, `hintMessage?`.

---

### Menu

```tsx
<Menu
  trigger={(toggle, ref) => (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={toggle}
    >
      Actions
    </button>
  )}
>
  <Menu.Item
    icon={<EditIcon />}
    onClick={edit}
  >
    Edit
  </Menu.Item>
  <Menu.Item disabled>Archive</Menu.Item>
</Menu>
```

`Menu`

| Prop             | Type                                                             | Default          |
| ---------------- | ---------------------------------------------------------------- | ---------------- |
| **trigger**      | `(toggle: () => void, ref: React.Ref<HTMLElement>) => ReactNode` |                  |
| **children**     | `ReactNode`                                                      |                  |
| position         | popper position (see picker wrapper)                             | `'bottom-right'` |
| className        | `string`                                                         | `''`             |
| popoverClassName | `string`                                                         | `''`             |

`Menu.Item`: **children** `ReactNode`, `onClick?`, `icon?`, `endElement?`, `disabled?`, `className?`. Clicking an item closes the menu.

### Pagination

```tsx
<Pagination
  totalCount={240}
  pageSize={20}
  onPageChange={setPage}
/>
```

| Prop                      | Type                     | Default |
| ------------------------- | ------------------------ | ------- |
| **totalCount**            | `number`                 |         |
| **pageSize**              | `number`                 |         |
| onPageChange              | `(page: number) => void` |         |
| defaultCurrent            | `number`                 | `1`     |
| siblingCount              | `number`                 | `1`     |
| navigationButtonsWithText | `boolean`                | `true`  |
| hideOnSinglePage          | `boolean`                |         |
| className                 | `string`                 |         |

### ProgressBar

| Prop            | Type                       | Default        |
| --------------- | -------------------------- | -------------- |
| **title**       | `string`                   |                |
| **current**     | `number`                   |                |
| total           | `number`                   | `100`          |
| color           | `'primary' \| 'secondary'` | `'primary'`    |
| currentShowType | `'percentage' \| 'value'`  | `'percentage'` |
| className       | `string`                   |                |

### ProgressDoughnut

| Prop          | Type                                              | Default     |
| ------------- | ------------------------------------------------- | ----------- |
| **current**   | `number`                                          |             |
| **total**     | `number`                                          |             |
| color         | `'primary' \| 'secondary' \| 'gray' \| 'warning'` | `'primary'` |
| size          | `number` (px)                                     | `48`        |
| strokeSize    | `number`                                          | `6`         |
| showText      | `boolean`                                         |             |
| textClassName | `string` — only with `showText`                   |             |
| svgProps      | `SVGProps<SVGSVGElement>`                         |             |

### ProgressStep

Subpath import only: `import ProgressStep from '@dgshahr/ui-kit/Progress/Step'`.

```tsx
<ProgressStep
  type="rtl"
  size="large"
  color="primary"
  title="Profile"
  currentStep={2}
  totalSteps={4}
  showStepsCount
/>
```

| Prop                           | Type                                     | Default     |
| ------------------------------ | ---------------------------------------- | ----------- |
| **type**                       | `'rtl' \| 'center'`                      | `'rtl'`     |
| **size**                       | `'small' \| 'large'`                     | `'large'`   |
| **color**                      | `'primary' \| 'secondary'`               | `'primary'` |
| **title**                      | `string`                                 |             |
| **currentStep**                | `number` (1-based)                       |             |
| **totalSteps**                 | `number`                                 | `5`         |
| progress                       | `number` 0–100, fill within current step | `100`       |
| subtitle                       | `string`                                 |             |
| showSubtitle                   | `boolean`                                |             |
| showStepsCount                 | `boolean`                                |             |
| className / containerClassName | `string`                                 |             |

### Rate

```tsx
<Rate
  value={4}
  total={5}
  showTotalStars
  onChange={setRating}
/>
```

| Prop            | Type                      | Default   | Notes                                    |
| --------------- | ------------------------- | --------- | ---------------------------------------- |
| **value**       | `number`                  |           |                                          |
| **total**       | `number`                  |           |                                          |
| onChange        | `(value: number) => void` |           | Makes it interactive                     |
| size            | `'small' \| 'large'`      | `'large'` |                                          |
| showTotalStars  | `boolean`                 |           | At least one of these two must be `true` |
| showRateNumber  | `boolean`                 | `true`    |                                          |
| showStarsNumber | `boolean`                 |           |                                          |
| className       | `string`                  |           |                                          |

### Sidebar

```tsx
<Sidebar
  isOpen={open}
  setIsOpen={setOpen}
  logo={{ open: '/logo.svg', close: '/logo-mini.svg', alt: 'Logo' }}
  items={[
    {
      title: 'Main',
      children: [{ title: 'Dashboard', icon: <HomeIcon />, link: '/', active: true }],
    },
  ]}
  userProfile={{ image: '/me.png', name: 'Jane' }}
  onLogout={logout}
/>
```

| Prop              | Type                                                                    | Notes                                 |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------- |
| **isOpen**        | `boolean`                                                               |                                       |
| **setIsOpen**     | `(isOpen: boolean) => void`                                             |                                       |
| items             | `FirstLevelSidebarItem[]`                                               | 3 levels, see below                   |
| logo              | `{ open: string; close: string } & img attrs (except src)`              |                                       |
| searchInput       | `boolean \| InputProps` (without value/onChange)                        |                                       |
| userProfile       | `{ image: string; name?: string; description?: string; link?: string }` |                                       |
| onLogout          | `() => void`                                                            |                                       |
| logOutButtonProps | `ButtonProps` without `onClick`                                         |                                       |
| extraComponent    | `ReactNode`                                                             |                                       |
| hideOnClose       | `boolean`                                                               | Fully hide when closed                |
| openOnHover       | `boolean`                                                               | Only when `hideOnClose` is not `true` |
| showMask          | `boolean`                                                               |                                       |
| className         | `string`                                                                |                                       |

Items: `FirstLevelSidebarItem { title; children?: SecondLevelSidebarItem[] }` → `SecondLevelSidebarItem { title; icon: ReactNode; link?; badgeCount?; disabled?; active?; children?: ThirdLevelSidebarItem[] }` → `ThirdLevelSidebarItem { title; link: string; badgeCount?; disabled?; active? }`.

### Slider / Slide

`Slider` is `forwardRef<SliderRef>`; `SliderRef = { navigate(index: number): void; element: HTMLDivElement | null }`. `Slide` accepts native div attributes.

```tsx
<Slider
  slidesPerView={1.2}
  spaceBetween={12}
  autoplay={{ delay: 4000 }}
  responsive={{ 768: { slidesPerView: 3 } }}
>
  {items.map((i) => (
    <Slide key={i.id}>…</Slide>
  ))}
</Slider>
```

| Prop                                                                          | Type                                                  | Default  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------- | -------- |
| slidesPerView                                                                 | `number`                                              | `1`      |
| spaceBetween                                                                  | `number` (px)                                         | `0`      |
| centerMode                                                                    | `boolean`                                             |          |
| autoplay                                                                      | `boolean \| { delay?: number \| null }`               |          |
| initialSlide                                                                  | `number`                                              |          |
| onSlideIndexChange                                                            | `(index: number) => void`                             |          |
| showNavigationDots                                                            | `boolean`                                             | `true`   |
| showPaginationText                                                            | `boolean`                                             |          |
| navigationVariant                                                             | `'inside' \| 'outside'`                               |          |
| navigationButtonsShowType                                                     | `'hide' \| 'hover' \| 'permanent' \| 'onSides'`       | `'hide'` |
| responsive                                                                    | `Record<minWidthPx, Omit<SliderProps, 'responsive'>>` |          |
| containerXPadding                                                             | `number`                                              | `0`      |
| className / containerClassName / dotsClassName / navigationContainerClassName | `string`                                              |          |

### HorizontalStepper / HorizontalStep

```tsx
<HorizontalStepper activeStep={1}>
  <HorizontalStep
    title="Cart"
    icon={<CartIcon />}
  />
  <HorizontalStep
    title="Shipping"
    icon={<TruckIcon />}
  />
  <HorizontalStep
    title="Pay"
    icon={<CardIcon />}
  />
</HorizontalStepper>
```

`HorizontalStepper`: `activeStep?: number` (0-based, default `0`), `size?: 'small' | 'medium'` (default `'medium'`), `stepOrientation?: 'horizontal' | 'vertical'` (default `'horizontal'`), `classname?: string` (lowercase `n`).

`HorizontalStep`: **title** `string`, **icon** `ReactNode`, `activeTitle?`, `completeTitle?`, `subTitle?`, `activeIcon?`, `completeIcon?`, `classname?`. `index` is injected by the stepper.

### Table

Generic over row type `T`. `dataIndex` accepts a key or a deep path (type-safe when `T` is known).

```tsx
type User = { id: string; name: string; address: { city: string } };

<Table<User>
  data={users}
  rowKey="id"
  columns={[
    { title: 'Name', dataIndex: 'name', sort: { active: sort, onSort: setSort } },
    { title: 'City', dataIndex: ['address', 'city'] },
    {
      key: 'actions',
      title: '',
      render: (u) => <Button size="small">Edit</Button>,
      sticky: 'left',
    },
  ]}
  pagination={{ totalCount, pageSize: 20, onPageChange: setPage }}
  loading={isFetching}
/>;
```

| Prop                                              | Type                                                                                                                                  | Default  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **data**                                          | `T[]`                                                                                                                                 |          |
| **columns**                                       | `ColumnsType<T>[]`                                                                                                                    |          |
| **rowKey**                                        | `keyof T`                                                                                                                             |          |
| header                                            | `{ title?; showTotal?; extraElement?; className?; pageCountSelector?: { options; defaultValue?; onPageCountChange?; selectProps? } }` |          |
| pagination                                        | `PaginationProps`                                                                                                                     |          |
| rowSelection                                      | `{ selectedRowKeys: string[]; onSelectRow: (e, key: string \| string[], record?) => void; align?; sticky?; className? }`              |          |
| loading                                           | `boolean \| { size: number }` (loader size in px)                                                                                     |          |
| emptyContent                                      | `ReactNode`                                                                                                                           |          |
| stickyTableHeader                                 | `boolean`                                                                                                                             |          |
| layout                                            | `'fixed' \| 'auto'`                                                                                                                   | `'auto'` |
| getRowClassName                                   | `(record: T) => string \| undefined`                                                                                                  |          |
| className / containerClassName / wrapperClassName | `string`                                                                                                                              |          |

`ColumnsType<T>`: one of `key` / `dataIndex` required; `title?`, `align?: 'start' | 'center' | 'end'`, `render?: (record, index) => ReactNode`, `sort?: { active?: 'ascend' | 'descend'; onSort(value) }`, `sticky?: 'left' | 'right'`, `ellipsis?: boolean | { hideTooltip?: boolean }`, `tooltip?: TooltipProps & { anchorIcon? }`, `className?`.

### Tabs

```tsx
<Tabs
  activeKey={tab}
  onChange={setTab}
  items={[
    { key: 'info', title: 'Info' },
    { key: 'orders', title: 'Orders', badgeNumber: 3 },
  ]}
/>
```

| Prop             | Type                                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| **activeKey**    | `string \| number`                                                                                       |
| **onChange**     | `(key: string \| number) => void`                                                                        |
| **items**        | `{ key: string \| number; title: string; icon?: ReactNode; badgeNumber?: number; disabled?: boolean }[]` |
| fullWidth        | `boolean`                                                                                                |
| fullWidthButtons | `boolean` — only when `fullWidth` is `true`                                                              |
| className        | `string`                                                                                                 |
| tabItemClassName | `string`                                                                                                 |

Tabs renders only the tab bar; render the active panel yourself.

### Tooltip

```tsx
<Tooltip
  title="VAT"
  content="9% value added tax is included."
  position="bottom-center"
>
  <InfoIcon />
</Tooltip>
```

| Prop             | Type                                  | Default        |
| ---------------- | ------------------------------------- | -------------- |
| **content**      | `ReactNode`                           |                |
| **children**     | `ReactNode` — the anchor              |                |
| position         | popper position (see picker wrapper)  | `'top-center'` |
| title            | `string`                              |                |
| icon             | `ReactNode`                           |                |
| footer           | `ReactNode`                           |                |
| disabled         | `boolean`                             |                |
| attachToBody     | `boolean` — portal to `document.body` |                |
| className        | `string`                              |                |
| wrapperClassName | `string`                              |                |

Position auto-flips when there is no room.

---

## Rules for AI agents

When writing code in a project that depends on `@dgshahr/ui-kit`:

1. **Prefer kit components.** Before building a button, input, select, date/time picker, modal/drawer, tabs, table, tooltip, badge, alert, pagination, etc., use the kit component from this guide.
2. **Use the documented props** for variants, sizes and colors (`variant`, `color`, `size`). Do not recreate these looks with custom CSS.
3. **Imports:** use `@dgshahr/ui-kit` or the subpaths listed in [Imports](#imports). Form components are under `Form/`. Never import from `@dgshahr/ui-kit/dist/...` or internal paths.
4. **No Tailwind setup for the kit.** Styles are bundled; do not add Tailwind, PostCSS or a CSS import for the kit.
5. **Do not use `dgsuikit:`-prefixed classes** in app code — they are internal to the kit and may not be generated.
6. **Theme via CSS variables** (`--dgs-color-{palette}-{shade}: r g b`), never by overriding internal class names.
7. **Customize via slot class props** (`className`, `wrapperClassName`, `containerClassName`, …).
8. **Controlled components:** `Switch`, `Tabs`, `Select`, `Datepicker`, `Timepicker`, `OtpInput`, `RangeInput`, `Drawer` require `value`/`checked`/`activeKey`/`open` + change handler.
9. **RTL:** text fields default to `dir="rtl"`; pass `dir="ltr"` for emails, URLs, numbers, codes.
10. **Dates:** Datepicker shows the Jalali calendar but reads/writes plain JS `Date`s — no conversion needed.
11. **Next.js App Router:** place interactive kit components inside a `'use client'` component.
12. **When unsure about a prop,** read `node_modules/@dgshahr/ui-kit/dist/<Component>/index.d.ts` — it is the source of truth; this guide may lag behind.

---

## Agent setup snippets

### Reference-by-path (shortest)

Add one line to your agent instructions file:

```md
This project uses @dgshahr/ui-kit. Before writing UI code, read node_modules/@dgshahr/ui-kit/INTEGRATION.md and follow its "Rules for AI agents".
```

### Generic block (AGENTS.md / CLAUDE.md / any agent)

```md
## UI components: @dgshahr/ui-kit

- Full reference: node_modules/@dgshahr/ui-kit/INTEGRATION.md (read it before building UI).
- Always use kit components (Button, Input, Select, Datepicker, Timepicker, Drawer, Tabs, Table, Tooltip, Badge, Alert, Pagination, …) instead of custom ones.
- Imports: `import { X } from '@dgshahr/ui-kit'` or subpath `@dgshahr/ui-kit/X`; form components are `@dgshahr/ui-kit/Form/X`. Never import from dist/ internals.
- Styles are bundled: do not configure Tailwind/PostCSS for the kit; never use `dgsuikit:` classes in app code.
- Use `variant`/`color`/`size` props for looks; use `className`/`*ClassName` props for layout tweaks.
- Theme colors only via CSS vars `--dgs-color-{palette}-{shade}: r g b` (space-separated RGB).
- Text fields default to RTL; pass `dir="ltr"` for emails/URLs/numbers.
- Datepicker is Jalali but uses plain JS Date values.
- Next.js App Router: interactive kit components go inside 'use client' files.
- Unsure about a prop? Check node_modules/@dgshahr/ui-kit/dist/<Component>/index.d.ts.
```

### Claude Code — `CLAUDE.md`

Paste the generic block into the project's `CLAUDE.md` (repo root). Alternatively import the full guide so it is always loaded:

```md
@node_modules/@dgshahr/ui-kit/INTEGRATION.md
```

### Cursor — `.cursor/rules/dgshahr-ui-kit.mdc`

```md
---
description: Use @dgshahr/ui-kit components for all UI
globs: ['**/*.tsx', '**/*.jsx']
alwaysApply: false
---

<paste the generic block here>
```

### GitHub Copilot — `.github/copilot-instructions.md`

Paste the generic block into `.github/copilot-instructions.md`. For path-scoped rules use `.github/instructions/ui-kit.instructions.md` with:

```md
---
applyTo: '**/*.tsx,**/*.jsx'
---

<paste the generic block here>
```

### Windsurf — `.windsurfrules`

Paste the generic block into `.windsurfrules` at the repo root (or `.windsurf/rules/ui-kit.md`).

### Other agents (Codex, Gemini CLI, Aider, …)

Paste the generic block into `AGENTS.md` (Codex and many others), `GEMINI.md` (Gemini CLI), or the tool's conventions file.
