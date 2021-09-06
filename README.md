![react-date-painter](https://user-images.githubusercontent.com/29055358/132123157-053bc839-096e-4b37-a4a3-6264d3b1a4c3.png)

Date Paint Picker for React.

### [Demo - chromatic](https://www.chromatic.com/library?appId=613488cb7d9795003af9b433)

## Installation

```sh
yarn add react-date-painter
or
npm install react-date-painter
```

## Usage

```tsx
// When using DatePainter
import { DatePainter } from 'react-date-painter'
```

```tsx
<DatePainter selectedDates={[]} />
```

```tsx
// When using DatePainterPicker
import { DatePainter, DatePainterPicker } from 'react-date-painter'
```

```tsx
<DatePainterPicker>
  <DatePainter selectedDates={[]} />
</DatePainterPicker>
```

## Example

```tsx
import { useState, useCallback } from 'react'
import { DatePainter } from 'react-date-painter'

const App = () => {
  const [state, setState] = useState([])

  return (
    <DatePainter
      selectedDates={state}
      handleSelectDates={useCallback((dates: Date[]) => {
        setSelectedDates(dates)
      }, [])}
    />
  )
}
```

## Props

| Name              | Required | Type                   | Default   | Description                                                                                                           |
| ----------------- | -------- | ---------------------- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| format            | -        | Literal                | MMMM YYYY | Calendar Header format. You can select [day.js format](https://day.js.org/docs/en/display/format).                    |
| selectedDates     | Yes      | Array                  | -         | The day you choose. Type is a Date Array.                                                                             |
| uniqueHoliday     | -        | Array                  | []        | Your own holiday. Formats that can be added are 'YYYY-MM-DD'.                                                         |
| targetId          | -        | string                 | -         | Only when using DatePainterPicker. Position to display datepicker. If there is no targetId, start from document.body. |
| handleSelectDates | -        | (date: Date[]) => void | -         | This function fired when date is selected or reselected.                                                              |

## License

react-date-painter is available under the MIT License.
