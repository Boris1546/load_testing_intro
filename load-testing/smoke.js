import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '1m',
};

export default function () {
  let res = http.get('https://localhost:8080/');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}

