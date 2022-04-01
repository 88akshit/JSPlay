const transactions = [
            {
                id: 01,
                sourceAccount: 'my_account',
                targetAccount: 'coffee_shop',
                amount: -100,
                category: 'groceries',
                time: '2019-07-01T00:00:01Z'
            },
            {
                id: 02,
                sourceAccount: 'my_account',
                targetAccount: 'restaurant',
                amount: -50,
                category: 'eating_out',
                time: '2019-07-03T10:27:00Z'
            },
            {
                id: 03,
                sourceAccount: 'klarna',
                targetAccount: 'my_account',
                amount: 25000,
                category: 'salary',
                time: '2019-07-01T10:27:00Z'
            },
            {
                id: 04,
                sourceAccount: 'mini_market',
                targetAccount: 'my_account',
                amount: 200,
                category: 'groceries',
                time: '2019-07-31T10:27:00Z'
            },
            {
                id: 05,
                sourceAccount: 'my_account',
                targetAccount: 'mini_market',
                amount: -75,
                category: 'groceries',
                time: '2019-06-30T10:27:00Z'
            }
        ];

const duplicateTransactions = [
            {
                id: 3,
                sourceAccount: 'A',
                targetAccount: 'B',
                amount: 100,
                category: 'eating_out',
                time: '2018-03-02T10:34:30.000Z'
            },
            {
                id: 1,
                sourceAccount: 'A',
                targetAccount: 'B',
                amount: 100,
                category: 'eating_out',
                time: '2018-03-02T10:33:00.000Z'
            },
            {
                id: 6,
                sourceAccount: 'A',
                targetAccount: 'C',
                amount: 250,
                category: 'other',
                time: '2018-03-02T10:33:05.000Z'
            },
            {
                id: 4,
                sourceAccount: 'A',
                targetAccount: 'B',
                amount: 100,
                category: 'eating_out',
                time: '2018-03-02T10:36:00.000Z'
            },
            {
                id: 2,
                sourceAccount: 'A',
                targetAccount: 'B',
                amount: 100,
                category: 'eating_out',
                time: '2018-03-02T10:33:50.000Z'
            },
            {
                id: 5,
                sourceAccount: 'A',
                targetAccount: 'C',
                amount: 250,
                category: 'other',
                time: '2018-03-02T10:33:00.000Z'
            }
        ];

function getBalanceByCategoryInPeriod(transactions = [], category, start, end) {
        return (transactions.length === 0) ? 0 : transactions.reduce((balance, transaction) => {
            return ((transaction.category === category)
                && (new Date(transaction.time) >= start)
                && (new Date(transaction.time) < end)) ? balance + transaction.amount : balance;
        }, 0);
}

let ans = getBalanceByCategoryInPeriod(transactions,"groceries",new Date("2019-07-01T00:00:00Z"),new Date("2019-07-31T23:59:59Z"))

console.log("Answer "+ans);


function isDuplicate(trA, trB){
        return ((trA.sourceAccount === trB.sourceAccount)
            && (trA.targetAccount === trB.targetAccount)
            && (trA.category === trB.category)
            && (trA.amount === trB.amount)
            && (diffMinutes(trA.time, trB.time) < 1));
}

const diffMinutes  = (dateTimeA, dateTimeB)=>{
       return Math.abs((new Date(dateTimeA) - new Date(dateTimeB)) / 60000);
}

const sortByTime = (trA, trB)=>{
        return (new Date(trA.time)) - (new Date(trB.time));
}

function findDuplicateTransactions(transactions = []){
        let duplicatedTransactions = [];
        if (transactions.length < 2) return duplicatedTransactions;
        transactions.sort(sortByTime);
        transactions.forEach(transaction => {
            let foundDuplicatedGroup = false;
            for (let duplicatedGroup of duplicatedTransactions) {
                if (isDuplicate(transaction, duplicatedGroup[duplicatedGroup.length - 1])) {
                    duplicatedGroup.push(transaction);
                    foundDuplicatedGroup = true;
                    break;
                }
            }
            if (!foundDuplicatedGroup) duplicatedTransactions.push([transaction]);
        });
        return duplicatedTransactions.filter(duplicatedGroup => duplicatedGroup.length > 1);
}


console.log(findDuplicateTransactions(duplicateTransactions));



let timeA  = '2019-07-01T00:00:01Z'
let timeB = '2019-07-01T10:27:00Z'
let diff =(new Date(timeB)-new Date(timeA))
console.log("Difference "+(new Date(diff).getHours()));
console.log("Difference "+(new Date(timeB)>new Date(timeA)));



const getTransactionKey = ({
  sourceAccount,
  targetAccount,
  category,
  amount
}) => `${sourceAccount}-${targetAccount}${category}${amount}`;

const findDuplicateTransactions2 = (transactions = []) => {
  transactions.sort((a, b) => new Date(a.time) - new Date(b.time));
  const transactionsByKey = {};
  for (const transaction of transactions) {
    const key = getTransactionKey(transaction);
    transactionsByKey[key] = transactionsByKey[key] || [];
    transactionsByKey[key].push(transaction);
  }

  console.log("dup "+JSON.stringify(transactionsByKey))
  // Separate each transactionsByKey[key] array into arrays of definite duplicates
  // and combine all such arrays of definite duplicates into a single array
  const allTransactionGroups = Object.values(transactionsByKey).flatMap(groupDuplicates);

   console.log("dup "+JSON.stringify(allTransactionGroups))
  const duplicateTransactionGroups = allTransactionGroups.filter(subarr => subarr.length >= 2);
  
  return duplicateTransactionGroups;
};

/**
 * Separate each transactionsByKey[key] array into arrays of definite duplicates, eg:
 * [{ source: 'A' ... }, { source: 'B' ... }, { source: 'B' ... }]
 * to
 * [[{ source: 'A' ... }], [{ source: 'B' ... }, { source: 'B' ... }]]
 */
const groupDuplicates = (similarTransactions) => {
  const duplicateGroups = [];
  console.log("sim "+JSON.stringify(similarTransactions))
  for (const transaction of similarTransactions) {
    // Find the first subarray in duplicateGroups whose time matches, and push to that subarray
    // If no match, create a new subarray
    const foundGroup = duplicateGroups.find(
      subarr => isDuplicateTime(subarr[subarr.length - 1], transaction)
    );
    console.log("found *** "+JSON.stringify(foundGroup))
    if (foundGroup) {
      foundGroup.push(transaction)
    } else {
      duplicateGroups.push([transaction]);
    }
  }
  return duplicateGroups;
};
  
const isDuplicateTime = (transaction1, transaction2) => (
  Math.abs(new Date(transaction1.time) - new Date(transaction2.time)) < 60_000
);

//console.log(findDuplicateTransactions2(duplicateTransactions));



let s1 = 350;
let s2 = -90;
console.log("Diff "+Math.abs(s1-s2));
console.log("Diff2 "+Math.abs(s2-s1));