FROM node:10.24-slim

WORKDIR /app/src
USER root
RUN apt-get update && apt-get install -y  \
    curl software-properties-common \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY ./scripts/entrypoint.sh /app/scripts/entrypoint.sh
ENTRYPOINT ["/app/scripts/entrypoint.sh"]
CMD ["node", "plateaux.js"]