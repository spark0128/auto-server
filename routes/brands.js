import { BrandModel } from '../models/Brand';

export default (app) => {
  app.get('/v1/brands', async (req, res) => {
    const brands = await BrandModel.find() || [];
    res.send({ brands });
  });

  app.get('/v1/brands/:brandId/models', async (req, res) => {
    // TODO: Implementation
  });

  app.get('/v1/brands/:brandId/models/:modelId/model-details', async (req, res) => {
    // TODO: Implementation
  });
}

