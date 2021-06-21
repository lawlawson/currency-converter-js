//The dropdown component will have all available currencies from the API.
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import Currencies from '../Currencies';

jest.mock('node-fetch', () => {
  return jest.fn();
});

beforeEach(() => {
  mocked(fetch).mockClear();
});

const setup = () => {
  const utils = render(<Currencies />);

  return {
    ...utils,
  };
};

describe('PokemonList', () => {
  it('should load list', async () => {
    mocked(fetch).mockImplementation(() => {
      return Promise.resolve({
        json() {
          return Promise.resolve({
            rates: [
              {
                name: 'GBP',
                url: 'https://api.exchangerate-api.com/v4/latest/GBP',
              },
              {
                name: 'AED',
                url: 'https://api.exchangerate-api.com/v4/latest/AED',
              },
            ],
          });
        },
      });
    });
    const { queryByText } = setup();
    await waitFor(() => {
      expect(queryByText('GBP')).toBeInTheDocument();
      expect(queryByText('AED')).toBeInTheDocument();
    });
  });
});
