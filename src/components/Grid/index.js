import styled from 'styled-components';

function getWidthString(span) {
  if (!span) return;

  const width = (1 / span) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

const Row = styled.div`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: wrap;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'center'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};
  width: ${({ width }) => width || '100%'};
`;

const Column = styled.div`
  display: ${({ display }) => display || 'flex'};
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  margin: ${({ margin }) => margin || null};
  padding: ${({ padding }) => padding || null};

  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 100%')};

  @media only screen and (min-width: 300px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 768px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 992px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;

export { Row, Column };
