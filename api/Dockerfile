FROM python:3.8
ENV PYTHONUNBUFFERED 1

ARG DJANGO_SECRET_KEY
ARG DEBUG

ENV DJANGO_SECRET_KEY ${DJANGO_SECRET_KEY}
ENV DEBUG ${DEBUG}

WORKDIR /app
RUN python -m pip install --upgrade pip
COPY ./requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
RUN python manage.py makemigrations
RUN python manage.py migrate
EXPOSE 8000
CMD ["gunicorn", "api.wsgi", "--bind", "0.0.0.0:8000"]