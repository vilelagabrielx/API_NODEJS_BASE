import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/respositories/ProductsRepository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = productsRepository.find();
    return product;
  }
}
export default ListProductService;
