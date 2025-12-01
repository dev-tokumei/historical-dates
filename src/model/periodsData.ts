export interface Event {
  year: number;
  description: string;
}

export interface Period {
  category: string;
  startYear: number;
  endYear: number;
  events: Event[];
}

export const periodsData: Period[] = [
  {
    category: "Наука",
    startYear: 2015,
    endYear: 2022,
    events: [
      {
        year: 2015,
        description:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        year: 2016,
        description:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        year: 2017,
        description:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi",
      },
      {
        year: 2018,
        description: "Запуск космического телескопа TESS для поиска экзопланет",
      },
      {
        year: 2019,
        description:
          "Получено первое изображение черной дыры в центре галактики M87",
      },
      {
        year: 2020,
        description: "Обнаружение фосфина в атмосфере Венеры",
      },
    ],
  },
  {
    category: "Технологии",
    startYear: 2010,
    endYear: 2015,
    events: [
      {
        year: 2010,
        description: "Презентация первого iPad от Apple",
      },
      {
        year: 2011,
        description: "Запуск социальной сети Google+",
      },
      {
        year: 2012,
        description: "Запуск Instagram для Android",
      },
      {
        year: 2013,
        description: "Выход PlayStation 4 и Xbox One",
      },
      {
        year: 2014,
        description: "Приобретение WhatsApp компанией Facebook",
      },
    ],
  },
  {
    category: "Космос",
    startYear: 2018,
    endYear: 2024,
    events: [
      {
        year: 2018,
        description: "Первый запуск сверхтяжелой ракеты Falcon Heavy",
      },
      {
        year: 2019,
        description: "Первая фотография черной дыры",
      },
      {
        year: 2020,
        description: "Миссия Mars 2020 и посадка марсохода Perseverance",
      },
      {
        year: 2021,
        description: "Первый полет вертолета Ingenuity на Марсе",
      },
      {
        year: 2022,
        description: "Запуск космического телескопа James Webb",
      },
      {
        year: 2023,
        description: "Первые научные снимки с телескопа James Webb",
      },
    ],
  },
  {
    category: "Медицина",
    startYear: 2019,
    endYear: 2023,
    events: [
      {
        year: 2019,
        description: "Первая операция с использованием 5G технологий",
      },
      {
        year: 2020,
        description: "Разработка мРНК-вакцин против COVID-19",
      },
      {
        year: 2021,
        description:
          "Одобрение первой генной терапии для лечения возрастной слепоты",
      },
      {
        year: 2022,
        description: "Первая успешная трансплантация сердца свиньи человеку",
      },
    ],
  },
  {
    category: "Кино",
    startYear: 2008,
    endYear: 2019,
    events: [
      {
        year: 2008,
        description: 'Выход фильма "Темный рыцарь" Кристофера Нолана',
      },
      {
        year: 2012,
        description: 'Премьера "Мстителей" - начало киновселенной Marvel',
      },
      {
        year: 2015,
        description: 'Выход фильма "Звездные войны: Пробуждение силы"',
      },
      {
        year: 2019,
        description:
          'Фильм "Мстители: Финал" стал самым кассовым фильмом в истории',
      },
    ],
  },
  {
    category: "Спорт",
    startYear: 2012,
    endYear: 2022,
    events: [
      {
        year: 2012,
        description: "Летние Олимпийские игры в Лондоне",
      },
      {
        year: 2014,
        description: "Зимние Олимпийские игры в Сочи",
      },
      {
        year: 2016,
        description: "Летние Олимпийские игры в Рио-де-Жанейро",
      },
      {
        year: 2018,
        description: "Чемпионат мира по футболу в России",
      },
      {
        year: 2021,
        description: "Летние Олимпийские игры в Токио",
      },
      {
        year: 2022,
        description: "Зимние Олимпийские игры в Пекине",
      },
    ],
  },
];
