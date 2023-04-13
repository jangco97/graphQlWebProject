import { useMutation, useQuery } from '@apollo/client';
import { React, useState } from 'react';
import { gql } from '@apollo/client';
//타입을 정해야함
//변수 앞에는 달러를 붙인다.
const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
// const FETCH_BOARD = gql`
//   query {
//     fetchBoard(boardId: "6427d2871182750028ee88d8") {
//       title
//       contents
//     }
//   }
// `;

const GraphQlInput = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const asyncFunction = async () => {
    const result = await createProduct({
      variables: {
        seller: '나나',
        createProductInput: {
          name: '라인',
          detail: '암',
          price: 2500,
        },
      },
    });

    console.log(result.data);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={asyncFunction}>graphqk요청</button>
    </>
  );
};

export default GraphQlInput;
