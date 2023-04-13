import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import ProductDetailUI from './ProductDetail.presenter';
import { FETCH_USEDITEM } from './ProductDetail.queries';

import React from 'react';
const router = useRouter();

const { data } = useQuery(FETCH_USEDITEM, {
  variables: { page: 1 },
});
const ProductDetail = () => {
  return <ProductDetailUI data={data} />;
};

export default ProductDetail;
