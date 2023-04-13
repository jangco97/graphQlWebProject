import { gql } from '@apollo/client';

export const FETCH_USEDITEMS = gql`
    query fetchUseditems($page: 1) {
        fetchUseditems(page: $page) {
            _id
            name
            remarks
            contentsprice
            images
            tags
            
        }
    }
`;
