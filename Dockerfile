FROM node:24-slim
WORKDIR /app
RUN npm install -g openclaw@latest
COPY . .
RUN mkdir -p /root/.openclaw /app/workspace && cp openclaw.json /root/.openclaw/openclaw.json
ENV PORT=18789
EXPOSE 18789
CMD ["sh", "-c", "openclaw gateway --allow-unconfigured --port $PORT --bind lan"]
