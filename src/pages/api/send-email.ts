import type {NextApiRequest, NextApiResponse} from 'next';
import sendEmail from '../../utils/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if (req.method === 'POST'){
    const {email, name, message} = req.body;

    const messageWithEmail = `DE: ${email} - nome: ${name} - mensagem: ` + message;

    try {
      await sendEmail('diocontato.website@gmail.com', name, messageWithEmail);
      return res.status(200).json({message: 'email enviado', status: 200});
    } catch (error) {
      return res.status(500).json({message: 'email não enviado', status: 500});
    }
  } else {
    return res.status(405).json({message: 'método não permitido', status: 405});
  }
}
