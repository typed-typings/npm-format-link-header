/// <reference path="../out/index.d.ts" />
import formatLinkHeader = require('format-link-header');

formatLinkHeader({
  next: {
    page: '3',
    per_page: '100',
    rel: 'next',
    url: 'https://api.github.com/user/9287/repos?page=3&per_page=100'
  },
  prev: {
    page: '1',
    per_page: '100',
    rel: 'prev',
    pet: 'cat',
    url: 'https://api.github.com/user/9287/repos?page=1&per_page=100'
  },
  last: {
    page: '5',
    per_page: '100',
    rel: 'last',
    url: 'https://api.github.com/user/9287/repos?page=5&per_page=100'
  }
});
