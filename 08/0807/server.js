import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from 'body-parser';
import route from './route/userRoutes.js';

//express 앱 만들기
const app = express();
//dotenv는 환경변수를 .env 파일에 저장하고 process.env로 로드하는 의존성 모듈
//현재 디렉토리의 .env파일 자동으로 인식해 환경변수 세팅
dotenv.config();
//클라이언트로부터 수신된 요청의 본문을 파싱하여 JavaScript 객체로 변환
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log('연결 잘 됐음');
    app.listen(PORT, () => {
        console.log(`연결 잘 됨. http://localhost:${PORT}`)
    });
})
.catch((error) => console.log(error))

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });
// const userModel = mongoose.model("users", userSchema);

// app.get("/users", async (req, res) => {
//     const userData = await userModel.find();
//     res.json(userData);
// })

app.use('/user', route);