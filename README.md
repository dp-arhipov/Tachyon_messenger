# Tachyon мессенджер
Простой мессенджер, построенный на React, Redux, Firebase, Material UI

Данные для входа в тестовый аккаунт: test@gmail.com:test123

Демо: 
[t.arhipov.me](https://t.arhipov.me).

## Технологии
 
- Стартовый шаблон: [Create React App](https://github.com/facebook/create-react-app).
- Бекэнд: Firebase
- Фронтэнд: React, Redux-toolkit, MaterialUI, Intersection Observer, Yup, React-hook-form, Nanoid
- Оптимизация/Отладка: Webpack bundler analyzer, React dev tools


## Функционал
Сейчас мессенджер умеет:
 - Работать с разными размерами экранов
 - Отправлять/получать текстовые сообщения в режиме реального времени
 - Отслеживать поступление новых сообщений во всех созданных диалогах
 - Отображать под именем диалога его последнее сообщение
 - Изменять имя и ник пользователя, отслеживать подобные изменения у других пользователей
 - Искать собеседника по нику
 - Отображать большое количество сообщений без лагов
 - Отображать количество непрочитанных сообщений
 - Отображать, когда отправленное сообщение будет прочитано собеседником
 - Отображать дату и время отправки сообщений
 
## В разработке
 - Перенос бэкэнда с firebase на node.js
 - Покрытие тестами
 - Серверный рендеринг
 - Реализация возможности отправки файлов
 - Реализация возможности создания комнат
 - Реализация возможности удаления сообщений
 - Отображение онлайн статуса собеседника
 - Перенос дизайна с Material UI на ванильный css для уменьшения размеров приложения
 
 
## Процедура установки
1. Клонируем проект, устанавливаем npm пакеты
2. Регистрируемся на firebase, создаем там новый проект, настраиваем для него авторизацию по google и email, добавляем в список разрешенных хостов locallhost или ваш домен, на котором будет развернуто приложение
3. Вносим новые данные для подключения к проекту на firebase в файл services/firebase/config.js
4. Запускаем проект командой  `npm start`

## Поддерживаемые команды
`npm start` - запуск проекта в dev режиме

`npm run build` - запуск сборки для prod режима

`npm run analyze` - запуск webpack bundle analyzer




