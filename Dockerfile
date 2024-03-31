FROM node:16.20.0-alpine

# Задаём текущую рабочую директорию
WORKDIR /app

COPY package.json .

# Устанавливаем зависимости
RUN npm install

# Копируем код из локального контекста в рабочую директорию образа
COPY . .

# Открываем порты
EXPOSE 8080

CMD ["npm", "run", "dev"]