import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Error from '../error/Error';

export interface ILUDecomposition {
  setMatrixData: Dispatch<SetStateAction<number[][]>>;
}

const LUDecomposition: React.FC<ILUDecomposition> = ({ setMatrixData }) => {
  const [rows, setRows] = useState<number>(3);
  const [cols, setCols] = useState<number>(3);
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [error, setError] = useState('');

  const handleCellChange = (xPos: number, yPos: number, newValue: string) => {
    let copy = [...matrix];
    copy[xPos][yPos] = newValue as unknown as number;
    setMatrix(copy);
  };

  const addRow = () => {
    if (matrix.length > -1) {
      setError('');
    }
    let newRow: number[] = new Array(matrix[0].length);
    newRow.fill(0);
    setMatrix([...matrix, newRow]);
  };

  const addCol = () => {
    if (matrix.length > -1) {
      setError('');
    }
    const newMatrix = matrix.map((row) => [...row, 0]);
    setMatrix(newMatrix);
  };

  const setScale = (rows: number, cols: number) => {
    if (rows < 2 || cols < 2)
      return setError('Matrix must be a mnimum of 2 x 2');
    let newMatrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
      newMatrix[i] = []; // create an empty array for each row
      for (let j = 0; j < cols; j++) {
        newMatrix[i][j] = 0; // fill each element with 0
      }
    }
    return setMatrix(newMatrix);
  };

  useEffect(() => {
    setScale(rows, cols);
  }, [rows, cols]);

  return (
    <div className="pb-60 sm:flex sm:flex-col sm:items-center sm:justify-center">
      <h1 className="font-bold text-3xl my-3 text-primary text-center">
        LU DECOMPOSITION
      </h1>
      <table className="overflow-x-auto mx-auto">
        {matrix.map((row, xPos) => {
          return (
            <tr key={xPos} className="">
              {row.map((dataPoint, yPos) => {
                return (
                  <td
                    key={yPos}
                    className="min-w-32 border-x-2 border-y-2 border-background"
                  >
                    <input
                      className="w-32 p-2 text-center text-2xl rounded-sm bg-secondary text-button font-bold"
                      type="text"
                      value={dataPoint}
                      onChange={(e) =>
                        handleCellChange(xPos, yPos, e.target.value)
                      }
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </table>
      <ToolBar
        addRow={addRow}
        addCol={addCol}
        setRows={setRows}
        setCols={setCols}
      />
      {error && <Error error={error} setError={setError} />}
    </div>
  );
};

interface IToolBar {
  addRow: any;
  addCol: any;
  setRows: any;
  setCols: any;
}
const ToolBar: React.FC<IToolBar> = ({ addRow, addCol, setRows, setCols }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-[70px] fixed bottom-0 flex justify-center items-center bg-accent px-2 py-3 text-primary text-lg font-bold text-center space-x-2">
        <button
          type="button"
          className="bg-button rounded-sm w-full h-full"
          onClick={() => addRow()}
        >
          ADD ROW
        </button>
        <button
          type="button"
          className="bg-button rounded-sm w-full h-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          SET SCALE
        </button>

        <button
          type="button"
          className="bg-button rounded-sm w-full h-full"
          onClick={() => addCol()}
        >
          ADD COL
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-20 text-lg font-bold flex space-x-2 mx-2 text-primary">
          <input
            className="w-full bg-button h-10 text-center text-2xl focus:outline-none rounded-sm"
            type="text"
            pattern="\d*"
            placeholder="row"
            onChange={(e) => setRows(e.target.value)}
          />
          <input
            className="w-full bg-button h-10 text-center text-2xl focus:outline-none rounded-sm"
            type="text"
            pattern="\d*"
            placeholder="col"
            onChange={(e) => setCols(e.target.value)}
          />
        </div>
      )}
    </>
  );
};

export default LUDecomposition;
