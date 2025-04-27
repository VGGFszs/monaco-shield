import request from 'supertest';
import express from 'express';

const app = express();
app.get('/ping', (req, res) => res.json({ message: 'pong' }));

describe('API Integration Test', () => {
  it('should return pong', async () => {
    const res = await request(app).get('/ping');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('pong');
  });
}); 