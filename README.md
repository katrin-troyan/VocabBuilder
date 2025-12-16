VocabBuilder — Enterprise Mobile Application
📌 Overview

VocabBuilder — масштабований мобільний застосунок для керування словниковим запасом та персоналізованого навчання англійської мови.
Застосунок дозволяє користувачам створювати власний словник, отримувати рекомендації нових слів, проходити тренування та відстежувати прогрес навчання.

Проєкт реалізований з урахуванням enterprise-підходів:

- модульна архітектура
- повторно використовувані компоненти
- централізоване керування станом
- серверна пагінація
- уніфікована обробка помилок
- розмежування зон авторизації

🎯 Business Goals

- Надати користувачу зручний інструмент для системного вивчення слів
- Забезпечити персоналізований навчальний досвід
- Підготувати кодову базу до масштабування
- Забезпечити повторне використання ключових компонентів
- Підвищити стабільність роботи за рахунок централізованої обробки стану та помилок

🔗 Design & UX

- Макет розроблений для iOS
- Для Android допускаються стилістичні відмінності через нативні компоненти
- Компонент Button використовується у нативному вигляді та не стилізується під макет

🛠 Technology Stack

### Core

- React Native
- Expo
- TypeScript (optional)
- Redux Toolkit

### Navigation

- React Navigation
  - createStackNavigator
  - createBottomTabNavigator

### UI & UX

- ActivityIndicator
- react-native-modal
- react-native-table-component

🔐 Authentication Flow
Unauthenticated User
↓
AuthNavigator
(Login / Registration)
↓
Successful Submit
↓
HomeNavigator
(Dictionary as default screen)

Authorization state is controlled via Redux:

isAuth ? <HomeNavigator /> : <AuthNavigator />

🔌 Backend Integration Status

⚠️ Important: На момент реалізації проєкту бекенд був тимчасово недоступний.

Для забезпечення безперервної розробки та тестування функціоналу застосунку було реалізовано mock API, який повністю імітує контракт бекенду згідно з офіційною API-документацією.

Mock Strategy

- Mock відповіді відповідають структурі реальних API-ендпоінтів
- Симулюються:
  авторизація та реєстрація
  отримання списків слів
  пагінація
  робота з категоріями
  тренування та прогрес
- Асинхронна поведінка імітується з використанням Promise та setTimeout
- Обробка помилок реалізована аналогічно до реального backend-flow

Backend Replacement

- API-шар побудований з чітким розмежуванням відповідальностей
- Перехід з mock API на реальний backend не потребує змін у UI або Redux logic
- Достатньо замінити джерело даних у service layer

📱 Функціональні можливості

- Authentication
  User Registration
  User Login
  Logout
  JWT-based session handling
  Secure navigation separation

- Home Layout
  Header with user information
  Logout action
  Bottom tab navigation:
  Dictionary
  Recommend
  Training

📘 Dictionary Module

- Dashboard (Reusable Component)
  Word search
  Category filtering
  Statistics
  Navigation to Add Word / Training

- Filters
  Keyword search
  Category select
  Conditional verb-type radio buttons
  Categories fetched from backend and cached in Redux

- WordsTable
  Displays user’s vocabulary
  Progress visualization
  Contextual actions:
  Edit word
  Delete word
  Built with react-native-table-component
  Fully reusable

- EditWordModal
  Implemented with react-native-modal
  Client-side validation:
  EN: /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)\*\b/
  UA: /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u
  Backend error handling with notifications
  Optimistic UI update on success

- Pagination
  Server-side pagination
  Lazy loading
  Shared pagination component across modules

➕ Add Word Module

- Category selection
- Conditional UI for verbs
- Input validation
- Backend integration
- Redirect on success / cancel

⭐ Recommendation Module

- Word discovery
- Reusable Dashboard
- Add word to personal dictionary
- No edit/delete actions
- Server-side pagination

🏋️ Training Module

- ProgressBar
  Dynamic progress calculation
  Visual feedback for training completion

- TrainingRoom
  Task-based learning
  Input-driven answers
  Skippable tasks
  Final submission to backend

- Completion Flow
  Error → notification + Dictionary redirect
  Success → WellDone screen with results

🚀 Performance & Scalability

- Lazy loading where applicable
- Server-side pagination
- Reusable UI components
- Clear separation of concerns
- Redux-based global state

🧪 Quality & Maintainability

- Modular structure
- Predictable state management
- Reusable UI and logic
- Easy extension for new features
- Backend-agnostic API layer

▶️ Getting Started

```bash
npm install
npx expo start

📈 Future Improvements

- Offline mode
- Push notifications
- Theming (dark / light mode)
- Accessibility enhancements
- Unit & E2E tests
  -CI/CD pipeline
```
