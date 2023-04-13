import { useMutation, useQuery } from '@apollo/client';
import { React, useState } from 'react';
import { gql } from '@apollo/client';

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
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

const GraphQlMutatuon = () => {
  const [createBoard] = useMutation(CREATE_BOARD);

  const asyncFunction = async () => {
    const result = await createBoard({
      variables: {
        writer: '쟝코',
        title: 'chance',
        contents: 'the rapper',
      },
    });

    console.log(result.data);
    alert(result.data.createBoard.message);
  };
  return <button onClick={asyncFunction}>graphqk요청</button>;
};

export default GraphQlMutatuon;
