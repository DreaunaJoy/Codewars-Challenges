/* Create an identity matrix of the specified size ( >= 0 ).

Some examples:

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]   

         */

         //solution

         function getMatrix(number) {
            const matrix = [];
            for (let i = 0; i < number; i++) {
              matrix[i] = Array(number).fill(0)
              matrix[i][i] = 1;
            }
            return matrix;
          } 