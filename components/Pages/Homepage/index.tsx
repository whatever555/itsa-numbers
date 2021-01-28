import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export type CalculatorProps = {
  numA?: number;
  numB?: number;
};

export const Homepage = (props: CalculatorProps) => (
  <article>
    <PageHeader>
      Please input two numbers to determine how many numbers between each is
      divisible by 3
    </PageHeader>
    <section>
      <Calculator {...props} />
    </section>
    <section></section>
  </article>
);

export const performCalculation = (
  numA: number,
  numB: number,
  divisor: number
): number => {
  if (typeof numA === "undefined" || typeof numB === "undefined") return -1;
  const max = Math.max(numA, numB);
  const min = Math.min(numA, numB);

  const isMaxDivisibleByDivisor = Boolean(max % divisor === 0);
  const isMinDivisibleByDivisor = Boolean(min % divisor === 0);

  const maxModDiff = isMaxDivisibleByDivisor
    ? 0
    : -(max > 0 ? max % divisor : divisor - (Math.abs(max) % divisor));

  const minModDiff = isMinDivisibleByDivisor
    ? 0
    : min > 0
    ? divisor - (min % divisor)
    : Math.abs(min) % divisor;

  const formattedMin = min + minModDiff;
  const formattedMax = max + maxModDiff;

  const diff = formattedMax - formattedMin;
  let comp = 0;

  if (formattedMin < 1 && formattedMax > -divisor) comp = divisor;

  return (diff - comp) / 3 + 1;
};

export const Calculator = (props: CalculatorProps) => {
  const router = useRouter();
  const [numA, setNumA] = useState(props.numA || 0);
  const [numB, setNumB] = useState(props.numB || 0);
  const [result, setResult] = useState(0);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const updateUrl = (numA: number, numB: number) => {
    router.push({ pathname: "/", query: { numA, numB } });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      updateUrl(numA, numB);
    }, 250);

    return () => {
      clearTimeout(handler);
    };
  }, [numA, numB]);

  useEffect(() => {
    setResult(performCalculation(numA, numB, 3));
  }, [props]);

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <InputGroup>
        <Label htmlFor="numA">
          Input A:
          <Input
            type="number"
            data-testid="numA"
            name="numA"
            value={numA}
            placeholder="enter a number"
            onChange={(e) => setNumA(e.target.value)}
          />
        </Label>
        <Label htmlFor="numB">
          Input B:
          <Input
            type="number"
            data-testid="numB"
            name="numB"
            placeholder="enter a number"
            value={numB}
            onChange={(e) => setNumB(e.target.value)}
          />
        </Label>
      </InputGroup>
      <footer>
        <Result data-testid="result">RESULT: {result}</Result>
      </footer>
    </form>
  );
};

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
  margin-bottom: 33px;
`;
const Input = styled.input`
  border-radius: 7px;
  padding: 12px 20px;
  color: #717172;
  font-size: 32px;
  line-height: 40px;
  width: 100%;
  margin-top: 10px;
`;
const Label = styled.label`
  flex-basis: 48%;
  margin-bottom: 20px;
  font-size: 22px;
`;
const PageHeader = styled.header`
  font-size: 20px;
  margin-bottom: 33px;
`;

const Result = styled.div`
  color: #717172;
  font-weight: bold;
  word-wrap: break-word;
  max-width: 100%;
  border-bottom: 6px dotted rgba(70, 70, 70, 0.2);
  border-top: 6px dotted rgba(70, 70, 70, 0.2);

  font-size: 50px;
  @media (min-width: 800px) {
    font-size: 90px;
  }
`;
