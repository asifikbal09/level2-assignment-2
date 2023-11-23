import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRouter } from './app/module/users/user.route';
const app: Application = express();

//express parsers
app.use(express.json());
app.use(cors());

//application route
app.use('/api/users', UserRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
