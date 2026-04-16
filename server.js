const express = require('express');
const app = express();
const path = require('path');

// 정적 파일 설정
app.use(express.static(path.join(__dirname, 'public')));

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// 코딩 연습 페이지
app.get('/practice', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'practice.html'));
});

// 코딩용어 모음집 목록 페이지
app.get('/glossary', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'glossary.html'));
});

// 코딩용어 상세 페이지
app.get('/glossary/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'glossary-detail.html'));
});

// 기존 경로도 같이 열리게 유지
app.get('/practice/glossary', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'glossary.html'));
});

// 코딩 강의 페이지
app.get('/lecture', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'lecture.html'));
});

// 코딩 역사 페이지
app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'history.html'));
});

// 에이다 러브레이스 상세 페이지
app.get('/history/ada-lovelace', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'ada-lovelace.html'));
});

// 서버 실행
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`
🚀 서버가 성공적으로 실행되었습니다!
🏠 접속 주소: http://localhost:${port}

[파일 체크리스트]
- views/index.html
- views/practice.html
- views/glossary.html
- views/glossary-detail.html
- views/lecture.html
- views/history.html
- views/ada-lovelace.html
  `);
});