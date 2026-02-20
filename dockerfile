FROM nginxinc/nginx-unprivileged:1.27-alpine

WORKDIR /usr/share/nginx/html

# Copie ton site (index.html + css + js)
COPY --chown=nginx:nginx . .

# Remplace la config nginx
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1
