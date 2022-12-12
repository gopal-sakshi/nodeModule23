const printInFrame = (size, header) => {
    console.log('*'.repeat(size));
    console.log(header);
    console.log('*'.repeat(size));
};
printInFrame(process.argv[2], process.argv[3]);
// HOW TO RUN ======> node index29.js 8 Hello