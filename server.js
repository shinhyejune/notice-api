// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS 허용 → Unity나 브라우저에서 호출 가능
app.use(cors());

// GET /notice 요청에 대한 응답
app.get('/notice', (req, res) => {
  res.json({
    notices: [
      {
        title: "업데이트 공지",
        body: "버전 1.1 업데이트가 진행됩니다.",
        date: "2025-08-08"
      },
      {
        title: "서버 점검",
        body: "2025년 8월 10일 10시부터 점검이 있습니다.",
        date: "2025-08-10"
      }
    ]
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(` 공지사항 API 서버 실행 중 → http://localhost:${port}/notice`);
});
