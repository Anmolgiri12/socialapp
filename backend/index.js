import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from "./src/routes/auth.js";
import userRoutes from "./src/routes/users.js";
import postRoutes from "./src/routes/post.js"
import { register } from './src/controller/auth.js';
import { verifytoken } from './src/midddleware/auth.js';
// import User from './src/models/user.js';
// import Post from './src/models/post.js';
import { createPost } from './src/controller/posts.js';
import { post,users } from './src/data/index.js';


// configuraion 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json({limit:'30mb', extented: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended:true})) 
app.use(cors())
app.use('/assets',express.static(path.join(__dirname,'public/assests')));

// file storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public/assets')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload = multer({
    storage
});

// routes with files
app.post('/auth/register', upload.single('picture'), register);
app.post('/posts', verifytoken, upload.single('picture'),createPost)    

// routes
app.post('/auth', authRoutes);
app.use('/users',userRoutes);
app.use('/posts', postRoutes);


// mongoose setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=> console.log(`server port : ${PORT}`));

 /* ADD DATA ONE TIME */
    User.insertMany(users);
    Post.insertMany(post);


}).catch((error)=> console.log(`${error} did not connect `));
x

