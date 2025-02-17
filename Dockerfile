FROM gdssingapore/airbase:python-3.13
ENV PYTHONUNBUFFERED=TRUE
COPY --chown=app:app . web/
USER app
WORKDIR /app/web
CMD ["./run.sh"]
