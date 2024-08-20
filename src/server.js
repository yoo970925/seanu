const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결 설정
const mongoURI = "mongodb+srv://admin:<password>@seanu.wqu82.mongodb.net/?retryWrites=true&w=majority&appName=seanu"; // 실제 MongoDB URI로 대체하세요

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB에 성공적으로 연결되었습니다.'))
.catch(err => console.error('MongoDB 연결 에러:', err));

// 기본 라우트 설정
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 실행 중입니다.');
});

// MongoDB 모델 정의
const Item = mongoose.model('Item', new mongoose.Schema({
  name: String,
  price: Number
}));
// API 엔드포인트 정의
app.get('/notice', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post('/notice', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});