**README.md**

# Anry Full Stack Next Project

Этот проект представляет собой full-stack приложение, состоящее из фронтенда и бэкенда. 
Фронтенд построен с использованием Next.js, а бэкенд - с использованием Express.js и PostgreSQL.

## Требования

- Docker
- Docker Compose

## Установка и запуск

### Шаг 1: Клонирование репозитория

Сначала клонируйте репозиторий:

```bash
git clone https://github.com/anrysys/anry-full-stack-next.git
cd anry-full-stack-next
```

### Шаг 2: Построение и запуск контейнеров

Запустите Docker Compose для построения и запуска контейнеров:

```bash
docker compose up --build
```

### Шаг 3: Доступ к приложению

После успешного запуска контейнеров, вы можете получить доступ к приложению по следующим адресам:

- Фронтенд будет доступен по адресу: [http://localhost:3000](http://localhost:3000)
- Бэкенд будет доступен по адресу: [http://localhost:4000](http://localhost:4000)

## Применение миграций

### Создание файла миграции

Создайте файл `backend/migrations/create_users_table.sql` со следующим содержимым:

```sql
-- Создание таблицы users
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Применение миграций

Миграции будут автоматически применены при запуске контейнеров,
либо можете запустить вручную (!не делайте этого, если не понимаете что делаете!).

## Лицензия

Этот проект лицензирован под лицензией MIT.
