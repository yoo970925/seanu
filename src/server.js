// node server.js
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

// 사용자 모델 정의
const userSchema = new mongoose.Schema({
  userid : { type: String, required: true, unique: true },
  username : String,
  useremail: String,
  userPw : String
});

const User = mongoose.model('User', userSchema);

// 회원가입
app.post('/singUp', async(req, res) => {
  const { username, email, password } = req.body;

  const user = new User({
    username,
    email,
    password
  });

  try {
    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
});

// 아이디 중복체크
app.get('/userIdChk', async(req, res) => {
  const { userid } = req.query;
  
  try {
    const user = await User.findOne({ userid });
    res.json({ exists: !!user });
  } catch (error) {
    console.error('아이디 중복 체크 오류:', error);
    res.status(500).json({ error: '서버 오류 발생' });
  }
});

// 로그인
app.post('/login', async (req, res) => {
  const { userId, userPw } = req.body;

  try {
    // 사용자 찾기
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: '사용자를 찾을 수 없습니다.' });
    }

    // 비밀번호 비교
    const isMatch = await bcrypt.compare(userPw, user.userPw);
    if (!isMatch) {
      return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // JWT 토큰 생성
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token, userId: user._id, username: user.username });
  } catch (err) {
    res.status(500).json({ message: '서버 오류' });
  }
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});