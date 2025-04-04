import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import OpenAI from 'openai';

const app = express();
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/extract', async (req, res) => {
  const { emailText } = req.body;

  const functionDefinition = {
    name: 'extract_metrics',
    parameters: {
      type: 'object',
      properties: {
        date: { type: 'string' },
        cash: { type: 'number' },
        burn: { type: 'number' },
        mrr: { type: 'number' },
        status: { type: 'string' },
        draft: { type: 'boolean' },
        notes: { type: 'string' },
      },
      required: ['date', 'cash', 'burn', 'mrr', 'status', 'draft', 'notes'],
    },
  };

  try {
    const chat = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-1106',
        messages: [
          {
            role: 'system',
            content: 'Extract portfolio metrics from this founder update email and return structured data.',
          },
          {
            role: 'user',
            content: emailText,
          },
        ],
        functions: [functionDefinition],
        function_call: 'auto',
      });
      
      // log GPT's full response before parsing it
      console.log("🧠 GPT raw response:", JSON.stringify(chat, null, 2));
      

    const args = JSON.parse(chat.choices[0].message.function_call.arguments);
    res.json(args);
} catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: error?.response?.data?.error?.message || 'Failed to extract metrics',
    });
  }
});

app.listen(3001, () => {
  console.log('AI backend running at http://localhost:3001');
});
