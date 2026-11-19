FROM node:24-slim
WORKDIR /app
RUN npm install -g openclaw@latest
COPY . .
ENV PORT=18789
EXPOSE 18789
CMD ["sh", "-c", "openclaw gateway --port $PORT --bind 0.0.0.0"]
