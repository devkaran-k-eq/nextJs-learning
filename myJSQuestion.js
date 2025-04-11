// const time1 = setTimeout(() => {
//     console.log("Time 1 return in 8 seconds !!!");
// }, 8000);

// const time2 = setTimeout(() => {
//     console.log("Time 1 return in 5 seconds !!!");
// }, 5000);

// console.log(time1);
// console.log(time2);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const makeAsynctoSync = async () => {
    await delay(8000); // Wait for 8 seconds
    console.log("Time 1 return in 8 seconds !!!");

    await delay(5000); // Wait for 5 seconds
    console.log("Time 2 return in 5 seconds !!!");
};

makeAsynctoSync();