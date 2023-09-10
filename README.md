# Голосовой помощник Алиса

# Содержание

1. [Тема и целевая аудитория](#theme)
1.1 [Основная аудитория](#auditory)
1.2 [MVP](#mvp)
2. [Метрики](#metrics)
2.1 [Продуктовые метрики](#metrics-prod)
2.2 [Технические метрики](#metrics-tech)

[Список использованной литературы](#usageList)



# 1. Тема и целевая аудитория {#theme}

Голосовой помощник Алиса - это программа, которая помогает пользователям выполнять различные задачи с помощью голоса. Она может отвечать на вопросы, искать информацию в интернете, переводить тексты на разные языки и многое другое.

## 1.1 Основная аудитория {#auditory}

Голосовой помощник Алиса расчитан на аудитория из России и странах СНГ.Поддерживается только русский язык. 
***MAU*** = 57 млн.[^1] 

## 1.2 MVP {#mvp}

Основными задачами голосового помощника являются[^2]:
* Поиск информации в интернете
* Прогноз погоды
* Управление музыкой
* Запуск фильмов
* Планирования дня
* Перевод текста

# 2 Расчет нагрузки {#metrics}

## 2.1 Продуктовые метрики {#metrics-prod}
### 2.1.1 Расчеты {#metrics-prod-calc}
***MAU*** = 57 млн.

Можно предположить из квартального отчёта Яндекс, что на рынке имеется около 7 млн. устройств, которые управляются Алисой. Управление такими устройствами происходит через голосовой помощник. Поэтому мы можем предположить, что минимальная дневная аудитория состовляет 7 млн. пользователей.

Яндекс раскрывал информацию о ежедневной аудитории в 2019 году[^5]. При месячной аудитории в 30 млн., дневная была 8 млн, то есть 26%. Из этого мы можем приблизительно подсчитать, что сейчай дневная аудитория Алисы составляет 57 * 26% ~= 15 млн. пользователей.

***DAU*** ~= 15 млн.

***Данные одного пользователя***

Алиса должна хранить диалоги с пользователем. Так как возможность общаться есть только в одном чате, то хранит она один чат. Пользователи задают в месяц 3.3 млрд. запросов в месяц, а значит один пользователь задаёт 3 300 млн. / 57 млн. = 58 запросов в месяц. 

Алиса хранит диалоги 14 дней, после чего, если пользователь не запросил, удаляет их. Так как Алиса переводит все запросы в текстовые, то можно рассчитать сколько потребуется памяти для хранения истории. В среднем ответ голосового помощника составляет 29 слов[^4]. 

Так как нет информации по средней длине запроса, то можем предположить около 10 слов. Большой процент всех запросов делается[^6] по категориям, которые содержат в запросе не больше 5 слов.

Средняя длина слова составляет 5.28 букв[^7]. Вес одного символа 2 байта. Значит нужно в среднем для одного пользователя хранить 58 * (29 + 10) * 14 * 5.28 * 2 = 334 414 байт или 326 КБ.

### 2.1.2 Финальные результаты {#metrics-prod-final}

| Метрика | Статистика |
|--|--|
| MAU | 57 млн. |
| DAU | 15 млн. |
| Средний размер хранилища для пользователя | 326 КБ |

## 2.2 Технические метрики {#metrics-tech}
### 2.2.1 Расчеты {#metrics-tech-calc}

***Хранение***

У самой Алисы хранятся только записи диалогов, поэтому размер хранения равен 326 * 57 млн. = 18 582 000 000 КБ или 17 721 ТБ.

***Сетевой трафик***

Суточный трафик равен 3 300 млн. / 30 = 110 млн. запросов в день.
Так как один запрос от пользователя и ответ составляет (29 + 10) * 5.28 * 2 = 411 байт, то в день трафик составляет 110 млн. * 411 = 45 302 400 байт или 43 ГБ.

Расчеты сделаны из предположения, что каждый человек как минимум 1 раз делает запрос из интересующей его отрасли, по общей статистике запросов[^8] и к Google Assistant[^6].

Размер ответа от поисковика составляет 500 КБ. Пусть прогноз погоды тоже осуществляется через поиск, как и включение музыки и фильмов. Тогда один запрос будет равен 500 КБ + 411 байт = 512 411 байт.

Предположим, что осуществляется перевод небольших текстов до 100 символов. Тогда размер отправления и перевода будет равен 100 * 2 * 2 = 400 байт на один перевод.

Пусть на планирования дня будет запрос состоять из 6 слов, тогда получаем размер одного запроса и ответа (6 + 29) * 2 * 5.28 = 369.6 байт.

Допустим, что каждый активный пользователь утром захотел узнать погоду, тогда пиковое потребление трафика составит 512 411 байт * 15 млн. * 8 / (1024^3^) = 57 266 Гбит.

Для остальных характеристик предположим, что, согласно таблице[^6], каждый человек использующий конкретную функцию будет использовать её одновременно.

***RPS***
Средний RPS можно взять из количества людей осуществляющих поиск в день, делённое на 24 часа в секундах.

Пиковый RPS будет браться из пиковой нагрузки, с предположением, что каждый человек с интересом в данной теме осуществил запрос.

### 2.2.2 Финальные результаты {#metrics-tech-final}

| Метрика | Статистика |
|--|--|
| Размер хранения диалогов | 17 721 ТБ |
| Размер хранения поисковой базы | 10 000 ТБ|
| Суммарный суточный трафик<br> между клиентами и сервером | 42 ГБ |
| Максимальный суточный трафик| 52 494 ГБ |
| Пиковое потребление | 57 266 Гбит/c |
| RPS дневной общий | 110 млн. |

***Суточное потребление***
| Тип | Трафик |
|--|--|
| Поиск информации | 6 442 ГБ | 
| Прогноз погоды | 5 368 ГБ | 
| Управление музыкой | 6 370 ГБ |
| Запуск фильмов | 4 438 ГБ | 
| Планирования дня | 3 ГБ |
| Перевод текста | 2 ГБ |

***Пиковое потребление***
| Тип | Трафик | 
|--|--|
| Максимальная пиковая нагрузка | 51 539 Гб |
| Поиск информации | 51 539 Гб | 
| Прогноз погоды | 42 942 Гб | 
| Управление музыкой | 50 967 Гб |
| Запуск фильмов | 35 505 Гб | 
| Планирования дня | 26 Гб |
| Перевод текста | 17 Гб |

***RPS***
Для сохраения истории нужно авторизоваться, поэтому предположим, что 

|Тип запроса| Средний| Пиковый|
|--|--|--|
| Поиск информации | 548 | 15 млн. |
| Планирование встерчи | 111 | 9.6 млн. |
| Узнать о запланированных встречах | 111 | 9.6 млн. |
| Перевод текста | 69 | 6 млн. |


---

# Список использованной литературы {#usageList}

[^1]: [Отчёт за квартал 2023 года Яндекс](https://yastatic.net/s3/ir-docs/events/2023/IR_2Q2023_RUS.pdf)
[^2]: [Навыки Алисы](https://dialogs.yandex.ru/store/essentials.)
[^3]:  [Яндекс радар](https://radar.yandex.ru/search?selected_rows=iHMJ0E&is_metric_ratio=0)
[^4]: [Voice Search Statistics: Smart Speakers, Voice Assistants, and Users in 2023](https://serpwatch.io/blog/voice-search-statistics/)
[^5]: ["Яндекс" назвал ежедневную аудиторию голосового помощника "Алиса"](https://www.dp.ru/a/2023/09/10/kapitalnoe-otstavanie-programme)
[^6]: [Больше денег – больше слов: как голосовые помощники завоевывают рынок](https://rocketdata.ru/blog/voice-search-market)
[^7]: [Статистика слов в русском языке](http://lingvisto.org/artikoloj/ru_stat.html)
[^8]: [Статистика](https://www.demandsage.com/voice-search-statistics/#:~:text=More%20than%2020%25%20of%20the,are%20supported%20by%20Google%20Assistant.)
[^9]: [Google](https://www.google.com/search/howsearchworks/how-search-works/organizing-information/)
