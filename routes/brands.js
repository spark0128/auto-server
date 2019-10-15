import { BrandModel } from '../models/Brand';
import { ModelModel } from '../models/Model';
import { ModelDetailModel } from '../models/ModelDetail';

export default (app) => {
  /**
   * @api {get} /brands GetBrands
   * @apiName GetBrands
   * @apiGroup Brand
   */
  app.get('/v1/brands', async (req, res) => {
    const brands = await BrandModel.find()
      .populate('numCars')
      .populate('numModels')
      .exec() || [];
    // TODO: Add popular brands filtering logic
    res.send({ popularBrands: [], otherBrands: brands });
  });

  /**
   * @api {get} /brands/:brandId/models GetModels
   * @apiName GetModels
   * @apiGroup Brand
   */
  app.get('/v1/brands/:brandId/models', async (req, res) => {
    const models = await ModelModel.find({ brand: req.params.brandId })
      .populate('numCars')
      .populate('numModelDetails')
      .exec() || [];
    // TODO: Add popular models filtering logic
    res.send({ popularModels: [], otherModels: models });
  });

  /**
   * @api {get} /models/:modelId/model-details GetModelDetails
   * @apiName GetModelDetails
   * @apiGroup Brand
   */
  app.get('/v1/models/:modelId/model-details', async (req, res) => {
    const modelDetails = await ModelDetailModel.find({ model: req.params.modelId })
      .populate('numCars')
      .exec() || [];
    res.send({ modelDetails });
  });
}

