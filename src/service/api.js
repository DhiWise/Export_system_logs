import { apis } from "service";

const COMMON_URL = `https://`;

const API_URLS = {
  POST_TASK: `${COMMON_URL}app.clickup.com/tasks/v1/subcategory/7593108/task`,
  GET: `${COMMON_URL}sentry.io/api/0/projects/dhiwise/dhiwise/events/`,
  GET1: `${COMMON_URL}sentry.io/api/0/projects/dhiwise/dhiwise/issues/`,
};

export const postTask = (payload) =>
  apis.post(API_URLS.POST_TASK, {
    ...payload,
    headers: {
      Authorization:
        "<Token>",
      "Content-Type": "application/json",
      ...payload?.headers,
      
    },
  });

export const get = (payload) =>
  apis.get(API_URLS.GET, {
    ...payload,
    headers: {
      Authorization:
        "<Token>",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });

export const get1 = (payload) =>
  apis.get(API_URLS.GET1, {
    ...payload,
    headers: {
      Authorization:
        "<Token>",
      "content-type": "application/json",
      ...payload?.headers,
    },
  });
