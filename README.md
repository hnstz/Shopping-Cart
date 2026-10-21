# 🛒 Store App

[🇷🇺 Читать на русском](#-описание-на-русском) | [🇬🇧 Read in English](#-description-in-english)

---

<details open>
<summary id="-описание-на-русском"><h2>🇷🇺 Описание на русском</h2></summary>

**Store App** — это современный pet-проект интерактивного интернет-магазина, разработанный с использованием React и Vite. 

Проект демонстрирует навыки работы с глобальным состоянием (через `Context API`), маршрутизацией (`React Router`), а также работу с внешними API для получения данных о товарах. Дизайн выполнен в аккуратном минималистичном стиле с использованием CSS-переменных для легкой кастомизации.

### 🔗 Ссылки
*   **Live Demo:** [https://shop-5rmxmlw23-hnstzs-projects.vercel.app/](https://shop-5rmxmlw23-hnstzs-projects.vercel.app/)

### ✨ Ключевые особенности
*   **Динамический каталог:** Получение и отображение списка товаров с внешнего REST API (`https://fakestoreapi.noksha.dev/api/products`). Обработка состояний загрузки (скелетоны/спиннеры) и ошибок сети.
*   **Продвинутая корзина (Cart):**
    *   Добавление товаров в корзину напрямую из карточек каталога.
    *   Удобное управление количеством (`+` и `-`) как в самой корзине, так и **синхронно в карточках каталога**.
    *   Автоматический подсчет общего количества товаров и итоговой стоимости заказа (Total Price).
    *   Возможность полного удаления позиции из корзины.
*   **Глобальное состояние (State Management):** Управление данными корзины реализовано через встроенный `React Context` с использованием коллекции `Map` для обеспечения производительности и иммутабельности данных.
*   **Адаптивный дизайн (Responsive UI):** Интерфейс корректно подстраивается под мобильные устройства, планшеты и десктопы (CSS Grid & Flexbox).
*   **Маршрутизация (SPA):** Плавные переходы между страницами (Home, Catalog, Cart) без перезагрузки браузера благодаря `react-router-dom`.

### 🛠 Стек технологий
*   **Frontend:** React (Hooks: `useState`, `useEffect`, `useContext`)
*   **Инструмент сборки:** Vite
*   **Роутинг:** React Router v6
*   **Стилизация:** Чистый CSS (с использованием CSS Variables)
*   **Деплой:** Vercel

### 🚀 Запуск проекта локально
1. Клонируйте репозиторий:
   ```bash
   git clone [url-вашего-репозитория]
   ```
2. Перейдите в папку проекта:
   ```bash
   cd shopping-cart
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Запустите сервер для разработки:
   ```bash
   npm run dev
   ```

</details>

<br>

---

<details>
<summary id="-description-in-english"><h2>🇬🇧 Description in English</h2></summary>

**Store App** is a modern, interactive e-commerce pet project built with React and Vite.

This project showcases skills in global state management (`Context API`), routing (`React Router`), and handling asynchronous data fetching from an external API. The user interface features a clean, minimalistic design powered by CSS variables for easy customization.

### 🔗 Links
*   **Live Demo:** [https://shop-5rmxmlw23-hnstzs-projects.vercel.app/](https://shop-5rmxmlw23-hnstzs-projects.vercel.app/)

### ✨ Key Features
*   **Dynamic Catalog:** Fetches and displays a product list from an external REST API (`https://fakestoreapi.noksha.dev/api/products`). Includes comprehensive handling for loading states (spinners) and network errors.
*   **Advanced Shopping Cart:**
    *   Add items to the cart directly from the catalog cards.
    *   Intuitive quantity controls (`+` and `-`) available both in the cart and **synchronized within the catalog cards**.
    *   Automatic calculation of total items and total price.
    *   Option to completely remove an item from the cart.
*   **State Management:** Cart data is managed globally using `React Context` combined with a JavaScript `Map` collection, ensuring performance and data immutability.
*   **Responsive UI:** The layout seamlessly adapts to mobile phones, tablets, and desktops using CSS Grid and Flexbox.
*   **Single Page Application (SPA):** Smooth navigation between pages (Home, Catalog, Cart) without page reloads, powered by `react-router-dom`.

### 🛠 Tech Stack
*   **Frontend:** React (Hooks: `useState`, `useEffect`, `useContext`)
*   **Build Tool:** Vite
*   **Routing:** React Router v6
*   **Styling:** Pure CSS (CSS Variables)
*   **Deployment:** Vercel

### 🚀 Running the project locally
1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```
2. Navigate to the project directory:
   ```bash
   cd shopping-cart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

</details>