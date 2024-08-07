import dotevn from "dotenv"
import {GoogleGenerativeAI} from "google-generative-ai";
dotevn.env.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);