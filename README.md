# Historical Dates

Компонент для отображения исторических дат с интерактивной временной шкалой.

## Установка

1. Клонируйте репозиторий 
```bash
git clone https://github.com/dev-tokumei/historical-dates
```
2. Перейдите в директорию проекта:
```bash
cd historical-dates
```

3. Установите зависимости:

```bash
npm install
```

## Запуск

Для разработки:

```bash
npm start
```

Приложение откроется на http://localhost:3000

## Сборка

Для продакшена:

```bash
npm build
```

## Структура папок

- src/ - исходный код

- components/ - компоненты

- hooks/ - кастомные хуки

- styles/ - стили
  
- public/ - статические файлы

- model/ - Массивы данных
  
- utils/ - Утилитарные функции

## Зависимости

- React 18
- TypeScript
- Swiper
- GSAP
- Webpack

## Как использовать компонент

```tsx
import { HistoricalDates } from './components/HistoricalDates';

const periods = [
  {
    startYear: 1990,
    endYear: 2000,
    category: 'Период 1',
    events: [
      { year: 1995, description: 'Событие' }
    ]
  }
];

export default function App() {
  return <HistoricalDates periods={periods} />;
}
```

## Разработка

Компонент работает на десктопе, планшете и мобильных устройствах.

На мобильных устройствах кольцо скрывается и показываются только года и события.
